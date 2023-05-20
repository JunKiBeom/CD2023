import time, os

import pandas as pd
from rpa.models import Product

file_zig = ''
file_n1 = ''
file_n2 = ''

def wait_for_file(filepath, timeout=10):
    start_time = time.time()
    print("Loading...")
    while not os.path.exists(filepath):
        time.sleep(0.5)
        if time.time() - start_time > timeout:
            raise FileNotFoundError(f"File '{filepath}' does not exist")

def mk_fn():
    global file_zig, file_n1, file_n2

    file_zig = 'jsons/직방_' + addr + '.json'
    file_n1 = 'jsons/네이버_' + addr + '_빌라.주택.json'
    file_n2 = 'jsons/네이버_' + addr + '_원룸.투룸.json'

    wait_for_file(file_zig, timeout=3)

def df_zig():
    print("Run ZigBang")
    df_z = pd.read_json(file_zig)
    df_z = pd.json_normalize(df_z['items'])

    df_z['url'] = "https://www.zigbang.com/home/oneroom/items/" + df_z['item_id'].astype(str)
    df_z['floors'] = df_z['floor'] + "/" + df_z['building_floor']
    df_z['reg_date'] = pd.to_datetime(df_z['reg_date']).dt.date
    df_z['title'] = df_z['title'].str.replace(pat=r'[^\w\s]', repl=r'', regex=True)
    df_z['flag'] = "직방"

    deposit = df_z["deposit"].apply(float)
    month = df_z["rent"].apply(float)
    df_z.loc[df_z["sales_type"] == "월세", "price_score"] = deposit + month * 100
    df_z.loc[df_z["sales_type"] == "전세", "price_score"] = deposit

    df_z["전용면적.m2"] = df_z["전용면적.m2"].apply(float)
    df_z["ppa"] = round(df_z["price_score"] / df_z["전용면적.m2"], 2)

    df_z = df_z[df_z["address1"].str.contains(addr)].reset_index(drop=True)

    df_z = df_z[['flag', 'item_id', 'address1', 'service_type', 'sales_type', 'floors', 'rent', 'deposit',
                 '공급면적.m2', '전용면적.m2', 'title', 'url', 'reg_date', 'random_location.lat', 'random_location.lng', 'price_score', 'ppa']]

    df_z = df_z.rename(columns={"address1": "address", "rent": "rent_price", "floors": "floor", "공급면적.m2": "supply_area", "전용면적.m2": "use_area",
                                "title": "content", "random_location.lat": "latitude", "random_location.lng": "longitude", "reg_date": "date"})

    return df_z

def calculate_deposit(s):
    # s가 문자열인 경우
    if isinstance(s, str):
        # '억'과 '천'을 구분하여 숫자형으로 변환한 뒤, 10의 8승과 10의 4승의 곱으로 계산합니다.
        parts = s.split('억')
        if len(parts) > 1:
            deposit = int(parts[0]) * 10000
            parts = parts[1].split('천')
            if len(parts) > 1:
                deposit += int(parts[0]) * 1
            if len(parts) > 0 and parts[0]:
                deposit += int(parts[-1])
            return deposit
        else:
            parts = s.split('천')
            if len(parts) > 1:
                return int(parts[0]) * 1
            if len(parts) > 0 and parts[0]:
                return int(parts[0])
    # s가 문자열이 아닌 경우
    else:
        # 원래의 값을 반환합니다.
        return s

def df_naver():
    print("Run Naver")
    df_nav1 = pd.read_json(file_n1)
    df_nav1 = pd.json_normalize(df_nav1['articleList'])

    df_nav2 = pd.read_json(file_n2)
    df_nav2 = pd.json_normalize(df_nav2['articleList'])

    df_nav = pd.concat([df_nav1, df_nav2]).drop_duplicates('articleNo').reset_index(drop=True)

    df_nav['flag'] = '네이버 부동산'
    df_nav['address'] = addr
    # df_nav['content'] = df_nav['articleFeatureDesc'].astype(str) +" / " + df_n['tagList'].astype(str) +" / " + df_n['direction'].astype(str)

    df_nav['url'] = df_nav['cpPcArticleUrl']
    df_nav['floor'] = df_nav['floorInfo']
    df_nav['reg_date'] = pd.to_datetime(df_nav['articleConfirmYmd']).dt.date
    df_nav['rentPrc'] = df_nav['rentPrc'].fillna(0)

    # '보증금' 열에 계산 함수를 적용합니다.
    df_nav["dealOrWarrantPrc"] = df_nav["dealOrWarrantPrc"].apply(str)
    df_nav["dealOrWarrantPrc"] = df_nav["dealOrWarrantPrc"].str.replace(',', '').str.replace(' ', '')
    df_nav['dealOrWarrantPrc'] = df_nav['dealOrWarrantPrc'].apply(calculate_deposit)

    df_nav['content'] = df_nav['articleFeatureDesc'].str.replace(pat=r'[^\w\s]', repl=r', ', regex=True) + " / " + \
                        df_nav['tagList'].astype(str) + " / " + df_nav['direction']
    # df_nav['content'] = df_nav['content'].str.replace(pat=r'[', repl=r'', regex=True)
    df_nav['content'] = df_nav['content'].str.replace(r'\r\n', '', regex=True)

    deposit = df_nav["dealOrWarrantPrc"].apply(float)
    month = df_nav["rentPrc"].apply(float)
    df_nav.loc[df_nav["tradeTypeName"] == "월세", "price_score"] = deposit + month * 100
    df_nav.loc[df_nav["tradeTypeName"] == "전세", "price_score"] = deposit

    df_nav["area2"] = df_nav["area2"].apply(float)
    df_nav["ppa"] = round(df_nav["price_score"] / df_nav["area2"], 2)

    df_nav = df_nav[
        ['flag', 'articleNo', 'address', 'realEstateTypeName', 'tradeTypeName', 'floor', 'rentPrc', 'dealOrWarrantPrc',
         'area1', 'area2', 'content', 'url', 'reg_date', 'latitude', 'longitude', 'price_score', 'ppa']]

    df_nav = df_nav.rename(
        columns={"articleNo": "item_id", 'realEstateTypeName': 'service_type', 'tradeTypeName': 'sales_type',
                 "rentPrc": "rent_price", "dealOrWarrantPrc": "deposit",
                 "area1": "supply_area", "area2": "use_area", "reg_date": "date"})

    return df_nav

def df_to_db(df):
    model_objects = []
    for _, row in df.iterrows():
        model_obj = Product(
            flag=row['flag'],
            item_id=row['item_id'],
            address=row['address'],
            service_type=row['service_type'],
            sales_type=row['sales_type'],
            floor=row['floor'],
            rent_price=row['rent_price'],
            deposit=row['deposit'],
            supply_area=row['supply_area'],
            use_area=row['use_area'],
            content=row['content'],
            url=row['url'],
            date=row['date'],
            latitude=row['latitude'],
            longitude=row['longitude'],
            price_score=row['price_score'],
            ppa=row['ppa']
        )
        model_objects.append(model_obj)

    # MySQL에 모델 객체 저장
    Product.objects.bulk_create(model_objects)
    # Product.objects.all().delete()

def df_run(address):
    global addr
    addr = address
    mk_fn()
    df_z = df_zig()
    df_n = df_naver()
    df_to_db(df_z)
    df_to_db(df_n)