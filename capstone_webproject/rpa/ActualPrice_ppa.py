import numpy as np
import pandas as pd
import os
import re

df = pd.read_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/실거래가_데이터프레임_최종/전체_실거래가.csv', encoding='euc-kr')
print(df)

# ppa, 가격점수
## 전세, 월세 가격 통일(가격 점수)
df["price_score"] = 0
df["보증금(만원)"] = df["보증금(만원)"].str.replace(',','')
df["월세(만원)"] = df["월세(만원)"].astype(str).str.replace(',','')
deposit = df["보증금(만원)"].apply(float)
month = df["월세(만원)"].apply(float)
df.loc[df["전월세구분"] == "월세", "price_score"] = deposit + month*100
df.loc[df["전월세구분"] == "전세", "price_score"] = deposit

## 면적 당 가격(price per area)
df["ppa"] = 0
df["전용면적(㎡)"] = df["전용면적(㎡)"].apply(float)
df["ppa"] = round(df["price_score"] / df["전용면적(㎡)"], 2)

print(df)

df.to_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/실거래가_데이터프레임_최종/전체_실거래가(ppa).csv', encoding='utf-8', index = None)





