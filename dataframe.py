import numpy as np
import pandas as pd
import re

### csv파일 열기
df_zig = pd.read_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/Sample_zig1.csv', sep = '\\')
df_nav = pd.read_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/sample_naver1.csv', sep = '\\')


# 데이터프레임 열 분리
# columns_list1 = df_zig['관리번호,유형,보증금,월세,주소,관리비,공급면적,전용면적,층,총 층,제목,등록날짜,위도,경도,URL'].str.split(',')
# columns_list2 = df_nav['매물번호,주거타입,유형,해당 층/전체 층,월세,보증금,공급면적,전용면적,방향,특징,가격,제공,URL,위도,경도,중개사,등록날짜'].str.split(',')


### 칼럼 값 나눠서 데이터프레임 다시 만들기
# df_zig['유형'] = columns_list1.str.get(1)
# df_zig['월세'] = columns_list1.str.get(3)
# df_zig['보증금'] = columns_list1.str.get(2)
# df_zig['공급면적'] = columns_list1.str.get(6)
# df_zig['전용면적'] = columns_list1.str.get(7)
# df_zig['해당층/전체층'] = columns_list1.str.get(8) + "/" + columns_list1.str.get(9)
# df_zig['특징'] = columns_list1.str.get(10)
# df_zig['등록날짜'] = columns_list1.str.get(11)
# df_zig['URL'] = columns_list1.str.get(14)
#
# df_nav['유형'] = columns_list2.str.get(2)
# df_nav['월세'] = columns_list2.str.get(4)
# df_nav['보증금'] = columns_list2.str.get(5)
# df_nav['공급면적'] = columns_list2.str.get(6)
# df_nav['전용면적'] = columns_list2.str.get(7)
# df_nav['해당층/전체층'] = columns_list2.str.get(3)
# df_nav['특징'] = columns_list2.str.get(8) + ", " + columns_list2.str.get(9)
# df_nav['등록날짜'] = columns_list2.str.get(15)
# df_nav['URL'] = columns_list2.str.get(11)


# 필요한 열 추출
df_zig = df_zig[['주거타입','유형','보증금','월세','해당 층','전체 층','공급면적','전용면적','특징','등록날짜']]
df_nav = df_nav[['매물번호','주거타입','유형','보증금','월세','해당 층/전체 층','공급면적','전용면적','방향','특징','등록날짜']]
df_nav = df_nav.drop_duplicates(['매물번호'])   # 매물번호를 기준으로 중복매물 제거
df_nav = df_nav[['주거타입','유형','보증금','월세','해당 층/전체 층','공급면적','전용면적','방향','특징','등록날짜']]

# 데이터프레임 열 정리
df_zig['전체 층'] = df_zig['전체 층'].apply(str)
df_zig['해당 층/전체 층'] = df_zig['해당 층'] + '/' + df_zig['전체 층'] + '층'
df_nav['해당 층/전체 층'] = df_nav['해당 층/전체 층'] + '층'
df_nav['특징'] = df_nav['방향'] + ' ' + df_nav['특징']

# 특수문자(이모티콘) 제거
df_zig["특징"] = df_zig["특징"].str.replace(pat=r'[^\w\s]', repl=r'', regex=True)
df_nav["특징"] = df_nav["특징"].str.replace(pat=r'[^\w\s]', repl=r'', regex=True)

## 직방 전용면적 m2에 해당하는 값만 가져오기
df_zig["전용면적"] = df_zig["전용면적"].apply(str)
df_zig["전용면적"] = df_zig["전용면적"].str.replace("{","", regex=True)
df_zig["전용면적"] = df_zig["전용면적"].str.split(",", expand=True)[0].str.split(":", expand=True)[1]

## 네이버 가격 데이터 전처리
# df_nav["보증금"] = df_nav["보증금"].str.replace(',','').str.replace(' ','')
# a = df_nav["보증금"].str.split("억", expand=True)[0]
# b = df_nav["보증금"].str.split("억", expand=True)[1]



# 데이터프레임 합치기
df_total = pd.concat([df_zig, df_nav], ignore_index=True)
df_total = df_total[['주거타입','유형','보증금','월세','해당 층/전체 층','공급면적','전용면적','특징','등록날짜']]
print(df_total.dtypes)


# 합친 데이터프레임 데이터 전처리
df_total["보증금"] = df_total["보증금"].apply(str)   # 데이터프레임 type을 int에서 object로 변환
df_total["특징"] = df_total["특징"].apply(str)
df_total["등록날짜"] = df_total["등록날짜"].apply(str)

## 보증금 데이터 한글을 숫자화
df_total["보증금"] = df_total["보증금"].str.replace(',','').str.replace(' ','')
# a = df_total["보증금"].str.split("억", expand=True)[0]
# b = df_total["보증금"].str.split("억", expand=True)[1]
# a = a.fillna(0)
# b = b.fillna(0)
# # a = a.apply(float)
# # b = b.apply(float)
# print(a)
# print(b)
#
# df_total.loc[df_total['보증금'].str.contains('억')] = eval(str('10000 * ' + (a.apply(str)) + " + " + (b.apply(str))))

##### chatgpt 결과
# 계산 함수 정의
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

# '보증금' 열에 계산 함수를 적용합니다.
df_total['보증금'] = df_total['보증금'].apply(calculate_deposit)

# 결과 출력
# print(df_total['보증금'])


# 등록날짜(연월일) 추출
df_total["등록날짜"] = df_total["등록날짜"].str.replace('-','')
df_total["등록날짜"] = df_total["등록날짜"].str[:8]   # 연월일 출력

# 필요한 데이터 생성
## 전세, 월세 가격 통일(가격 점수)
df_total["price_score"] = 0
deposit = df_total["보증금"].apply(float)
month = df_total["월세"].apply(float)
df_total.loc[df_total["유형"] == "월세", "price_score"] = deposit + month*100
df_total.loc[df_total["유형"] == "전세", "price_score"] = deposit

# df_total.loc[df_total["유형"] == "월세", "price_score"] = (df_total["보증금"]) + (df_total["월세"])*100
# df_total.loc[df_total["유형"] == "전세", "price_score"] = (df_total["보증금"])

## 면적 당 가격(price per area)
df_total["ppa"] = 0
df_total["전용면적"] = df_total["전용면적"].apply(float)
df_total["ppa"] = round(df_total["price_score"] / df_total["전용면적"], 2)

print(df_total)

# 데이터프레임을 csv파일로 저장
df_total.to_csv('C:/Users/ksc/Desktop/캡스톤 데이터 수집 및 전처리/estate_dataframe1.csv', encoding='euc-kr', index = None)   # index = None 옵션은 앞에 인덱스(번호) 제거








