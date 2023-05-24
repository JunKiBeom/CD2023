import pandas as pd
from rpa.models import ActualPrice

file_name = 'rpa/ActualPrice.csv'

df = pd.read_csv(file_name, encoding='UTF-8')

df = df[['시군구', '전월세구분', '월세(만원)', '보증금(만원)', '전용면적(㎡)', 'price_score', 'ppa']]

df = df.rename(columns={
    '시군구': 'address', '전월세구분': 'sales_type', '월세(만원)': 'rent_price', '보증금(만원)': 'deposit',
    '전용면적(㎡)': 'use_area'})

def df_to_db(df):
    print("Df to DB")
    model_objects = []
    for _, row in df.iterrows():
        model_obj = ActualPrice(
            address = row['address'],
            sales_type = row['sales_type'],
            rent_price = row['rent_price'],
            deposit = row['deposit'],
            use_area = row['use_area'],
            price_score = row['price_score'],
            ppa = row['ppa'],
        )
        model_objects.append(model_obj)

    # MySQL에 모델 객체 저장
    ActualPrice.objects.bulk_create(model_objects)