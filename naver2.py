import pandas as pd
import requests
import SearchMap
import pandas

'''
loop문에서 page+=1 하면 url이 바뀌지 않아 url을 재생성 해야하는 문제 발생.
코드 반복 줄이기 위해 함수로 처리
'''
page = 1  # URL 페이지 컨트롤을 위한 숫자
def mkurl():
    url2 = f'https://new.land.naver.com/api/articles?cortarNo={response.json()["cortarNo"]}&order=rank&realEstateType=VL:DDDGG:JWJT:SGJT:HOJT&tradeType=B2:B1:B3&tag=::::::::&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page={page}&articleState'
    return url2

params = {
    "Accept-Encoding": "gzip",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2ODI3OTMxMDYsImV4cCI6MTY4MjgwMzkwNn0.jKi_MV08WeGUsR3RFjIbPAw3oZSoRCdwBDV_ikafqhA",
    "Host": "new.land.naver.com",
    "Referer": "https://new.land.naver.com/houses?ms=37.329227,127.242315,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
}  # 필수 Request header. 없으면 캡챠 에러 발생, authorization은 주기적으로 바뀐다고 함

try:
    address = SearchMap.find_addr(input("주소압력 : "))
    url = f'https://new.land.naver.com/api/cortars?zoom=16&centerLat={address[0][0]}&centerLon={address[0][1]}'
except TypeError:
    print("정확한 주소를 입력해주세요!")
    exit()

response = requests.get(url, headers=params)  # 주소 입력 -> 위도&경도 반환하여 json 수집. 고유 ID인 cortarNo 활용
# print(response.json()["cortarNo"])

response2 = requests.get(mkurl(), headers=params)  # 매물정보를 가져오기. 진짜 크롤링을 하는 부분
# print(response2.text)
items = response2.json()["articleList"]

columns = ["articleNo", "realEstateTypeName", "tradeTypeName", "floorInfo", "rentPrc", "dealOrWarrantPrc", "area1", "area2",
          "direction", "tagList", "sameAddrMaxPrc", "cpName", "cpPcArticleUrl", "latitude", "longitude", "realtorName"]
df = pd.DataFrame(items)[columns]
df = df.rename(columns={"articleNo": "매물번호", "realEstateTypeName": "주거타입", "tradeTypeName": "타입", "floorInfo":  "해당층/총층",
                        "rentPrc": "월세", "dealOrWarrantPrc": "보증금", "area1": "공급", "area2": "전용면적",
                        "direction": "방향", "tagList": "특징", "sameAddrMaxPrc": "가격", "cpName": "제공",
                        "cpPcArticleUrl": "URL", "latitude": "위도", "longitude": "경도", "realtorName": "중개사"})

# print(df)
while True:
    if response2.json()["isMoreData"] == True:
        page += 1
        response2 = requests.get(mkurl(), headers=params)
        print(response2.json()["articleList"])
        # df.concat(response2.json()["articleList"], ignore_index=True)
    else:
        break

print(df)