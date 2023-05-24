import numpy as np
import pandas as pd
import os
import re

### csv파일 열기
path = 'C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/국토부 실거래가/csv_전월세/'
file_list = os.listdir(path)
file_list_py = [file for file in file_list if file.endswith('.csv')]

#
def extract_tradeType(text):
    start_index = text.rfind('/') + 1
    end_index = text.find('(')

    if start_index >= end_index or start_index == 0 or end_index == -1:
        return None

    extracted_string = text[start_index:end_index].strip()
    return extracted_string

df = pd.DataFrame()
for i in file_list_py:
    print(i)
    data = pd.read_csv(path + i, skiprows = 15, sep = ',', encoding='cp949', low_memory=False)
    df['주거타입'] = extract_tradeType(str(path + i))
    df = pd.concat([df,data])
# df = pd.read_csv('/content/단독다가구(전월세)_실거래가_20230517155405.csv', sep = ',', encoding='cp949')
# df2 = pd.read_csv('/content/연립다세대(전월세)_실거래가_20230517155219.csv', sep = ',', encoding='cp949')

# print(df[['계약면적(㎡)','전용면적(㎡)']])
# df.rename(columns={'계약면적(㎡)':'전용면적(㎡)'}, inplace = True)
df['전용면적(㎡)'] = pd.concat([df['계약면적(㎡)'], df['전용면적(㎡)']]).reset_index(drop=True)
df = df[['시군구','전용면적(㎡)','전월세구분','보증금(만원)','월세(만원)']]


print(df)
print(df.isnull().sum())

# # ppa, 가격점수
# ## 전세, 월세 가격 통일(가격 점수)
# df["price_score"] = 0
# df["보증금(만원)"] = df["보증금(만원)"].str.replace(',','')
# df["월세(만원)"] = df["월세(만원)"].str.replace(',','')
# deposit = df["보증금(만원)"].apply(float)
# month = df["월세(만원)"].apply(float)
# df.loc[df["전월세구분"] == "월세", "price_score"] = deposit + month*100
# df.loc[df["전월세구분"] == "전세", "price_score"] = deposit
#
# ## 면적 당 가격(price per area)
# df["ppa"] = 0
# df["전용면적(㎡)"] = df["전용면적(㎡)"].apply(float)
# df["ppa"] = round(df["price_score"] / df["전용면적(㎡)"], 2)
#
# print(df)
# print(df.isnull().sum())

# 시군구 도 이름 입력 값과 획일화(실행 시간을 최소화하기 위해 리스트 컴프리헨션을 사용하여 데이터를 한 번에 처리하는 방식)
df['시군구'] = [
    '서울시' + value.split('서울특별시', 1)[1] if '서울특별시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '광주시' + value.split('광주광역시', 1)[1] if '광주광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '대구시' + value.split('대구광역시', 1)[1] if '대구광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '대전시' + value.split('대전광역시', 1)[1] if '대전광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '부산시' + value.split('부산광역시', 1)[1] if '부산광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '세종시 세종시' + value.split('세종특별자치시', 1)[1] if '세종특별자치시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '울산시' + value.split('울산광역시', 1)[1] if '울산광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '인천시' + value.split('인천광역시', 1)[1] if '인천광역시' in value else value for value in df['시군구']
]
df['시군구'] = [
    '제주도' + value.split('제주특별자치도', 1)[1] if '제주특별자치도' in value else value for value in df['시군구']
]


# for i in range(len(df['시군구'])):
#     if '서울특별시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('서울특별시', '서울시')
#     elif '광주광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('광주광역시', '광주시')
#     elif '대구광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('대구광역시', '대구시')
#     elif '대전광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('대전광역시', '대전시')
#     elif '부산광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('부산광역시', '부산시')
#     elif '세종특별자치시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('세종특별자치시', '세종시 세종시')
#     elif '울산광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('울산광역시', '울산시')
#     elif '인천광역시' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('인천광역시', '인천시')
#     elif '제주특별자치도' in df['시군구'][i]:
#         df['시군구'][i] = df['시군구'][i].replace('제주특별자치도', '제주도')

df.to_csv(f'C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/실거래가_데이터프레임_최종/전체_실거래가.csv', encoding='euc-kr', index=False)


### 도 별로 파일 나누기
# ## 공백을 기준으로 문자열 나누기
# df['시'] = 0
# df['구'] = 0
# df['동'] = 0
# df['시'] = df['시군구'].str.split(expand=True)[0]
# df['구'] = df['시군구'].str.split(expand=True)[1]
# df['동'] = df['시군구'].str.split(expand=True)[2]
# # df[['시', '구', '동']] = df['시군구'].str.split(expand=True)
#
# print(df)
# print(df.isnull().sum())
#
# ## 도를 기준으로 따로 CSV 파일로 저장
# cities = df['시'].unique()
# print(cities)
#
# for city in cities:
#     city_df = df[df['시'] == city]
#     print(city_df)
#     city_df.to_csv(f'C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/실거래가_데이터프레임_최종/{city}_실거래가.csv', encoding='euc-kr', index=False)



# df.to_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/실거래가_데이터프레임.csv', encoding='euc-kr', index = None)