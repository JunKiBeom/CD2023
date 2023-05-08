import requests
import pandas as pd
import geohash2

import SearchMap

def oneroom(addr):

    '''
    동이름 넣으면 위도 경도 정보 반환하도록 1차 req
    '''
    # url = f"https://apis.zigbang.com/v2/search?leaseYn=N&q={addr}&serviceType=원룸"
    # response = requests.get(url)
    # data = response.json()["items"][0]
    # lat, lng = data["lat"], data["lng"]
    # geohash = geohash2.encode(lat, lng, precision=5)

    ''' Geohash 길이 (셀 폭 * 셀 높이)
    1 = 5,000km * 5000km
    2 = 1250km * 625km
    3 = 156km * 156km
    4 = 39.1km * 19.5km
    5 = 4.89km * 4.89km     <- 직방이 해당 수준으로 지도에 보여줌.
    6 = 1.22km * 0.61km
    7 = 153m * 153
    8 = 38.2m * 19.1
    9 = 4.77m * 4.77m
    10 = 1.19m * 0.596m
    11 = 149mm * 149mm
    12 = 37.2mm * 18.6mm
    '''

    '''
    기존에 만들어둔 지도 검색 함수 이용 이러면 request 횟수 1회 절약 가능
    서울시, 광주시, 대구시, 제주도 등 문제 해결해야 df정상 사용 가능
    '''
    address = SearchMap.find_addr(addr)
    # print(address)
    lat, lng = address[0][0], address[0][1]
    geohash = geohash2.encode(lat, lng, precision=5)

    # print("requests1:", response.status_code)

    '''
    geohash를 이용한 2차 req
    '''
    url = f"https://apis.zigbang.com/v2/items?deposit_gteq=0&domain=zigbang\
&geohash={geohash}&needHasNoFiltered=true&rent_gteq=0&sales_type_in=전세|월세&service_type_eq=원룸"
    response = requests.get(url)
    items = response.json()["items"]
    ids = [item["item_id"] for item in items]

    # print("requests2:", response.status_code)

    '''
    실제 데이터를 가져오기 위한 3차 req
    '''
    url = "https://apis.zigbang.com/v2/items/list"
    params = {
        "domain": "zigbang",
        "needHasNoFiltered": "true",
        "item_ids": ids[:900]
    }
    response = requests.post(url, params)
    # print("requests3:", response.status_code)

    try:
        items = response.json()['items']
        # print(items)
    except KeyError:
        print("해당 지역에 등록된 매물이 없습니다!")
        exit()

    '''
    DataFrame 생성 및 출력
    '''
    columns = ["item_id", "sales_type", "deposit", "rent", "address1", "manage_cost", "공급면적", "전용면적", "floor", "building_floor", "title", "random_location", "reg_date"]
    df = pd.DataFrame(items)[columns]
    df['lat'] = df['random_location'].apply(lambda x: x['lat'])
    df['lng'] = df['random_location'].apply(lambda x: x['lng'])
    df = df.drop('random_location', axis=1)
    df['URL'] = "https://www.zigbang.com/home/oneroom/items/" + df['item_id'].astype(str)

    df = df[df["address1"].str.contains(addr)].reset_index(drop=True)
    df = df.rename(columns={"address1": "주소", "item_id": "관리번호", "sales_type": "유형", "deposit": "보증금", "rent": "월세", "manage_cost": "관리비",
                            "floor": "층", "building_floor": "총 층", "title": "제목", "lat": "위도", "lng": "경도", "reg_date": "등록날짜"})
    # df.to_csv("csv/직방_"+addr+".csv", encoding="UTF-8", index = None)
    return df

print(oneroom(input("Input : ")))
# print(oneroom("서울특별시 관악구 신림동"))