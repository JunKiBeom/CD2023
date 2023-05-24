import pandas as pd
from rpa.models import ActualPrice

def df_to_db(df):
    print("Df to DB")
    model_objects = []
    for _, row in df.iterrows():
        print("To DB: ", _)
        model_obj = ActualPrice(
            address = row['address'],
            sales_type = row['sales_type'],
            rent_price = row['rent_price'],
            deposit = row['deposit'],
            use_area = row['use_area'],
            price_score = row['price_score'],
            ppa = row['ppa'],
        )
        # model_objects.append(model_obj)
        model_obj.save()

    # MySQL에 모델 객체 저장
    # ActualPrice.objects.bulk_create(model_objects)

file_name = 'rpa/ActualPrice.csv'

# df = pd.read_csv(file_name, encoding='UTF-8')
chunksize = 100000  # 원하는 청크 크기로 조정
for chunk in pd.read_csv(file_name, encoding='UTF-8', chunksize=chunksize):
    chunk = chunk[['시군구', '전월세구분', '월세(만원)', '보증금(만원)', '전용면적(㎡)', 'price_score', 'ppa']]

    chunk = chunk.rename(columns={
        '시군구': 'address', '전월세구분': 'sales_type', '월세(만원)': 'rent_price', '보증금(만원)': 'deposit',
        '전용면적(㎡)': 'use_area'})

    df_to_db(chunk)
    # 청크 단위로 데이터 처리 작업 수행
    # 예: 필요한 작업 수행 또는 데이터베이스에 청크를 삽입하는 등