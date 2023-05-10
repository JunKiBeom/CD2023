import pandas as pd
import requests
import SearchMap

'''
loop문에서 page+=1 하면 url이 바뀌지 않아 url을 재생성 해야하는 문제 발생.
코드 반복 줄이기 위해 함수로 처리
'''
page = 1  # URL 페이지 컨트롤을 위한 숫자
def mkurl():
    url2 = f'https://new.land.naver.com/api/articles?cortarNo={cortarNo}&order=rank&realEstateType=VL:DDDGG:JWJT:SGJT:HOJT&tradeType=B2:B1:B3&tag=::::::::&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page={page}&articleState'
    url3 = f'https://new.land.naver.com/api/articles?cortarNo={cortarNo}&order=rank&realEstateType=APT:OPST:ABYG:OBYG:GM:OR:VL:DDDGG:JWJT:SGJT:HOJT&tradeType=&tag=:::::::SMALLSPCRENT:&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page={page}&articleState'
    return url2, url3

def mkdf(url, flag):
    response2 = requests.get(url, headers=params)  # 매물정보를 가져오기. 진짜 크롤링을 하는 부분
    items = response2.json()["articleList"]

    columns = ["articleNo", "realEstateTypeName", "tradeTypeName", "floorInfo", "rentPrc", "dealOrWarrantPrc", "area1",
               "area2",
               "direction", "tagList", "sameAddrMaxPrc", "cpName", "cpPcArticleUrl", "latitude", "longitude",
               "realtorName", "articleConfirmYmd"]
    df = pd.DataFrame(items)[columns]

    global page
    while True:
        if response2.json()["isMoreData"] == True:
            page += 1
            response2 = requests.get(mkurl()[flag], headers=params)
            # print(response2.json()["articleList"])
            df = pd.concat([df, pd.DataFrame(response2.json()["articleList"])[columns]])
        else:
            break

    df = df.rename(
        columns={"articleNo": "매물번호", "realEstateTypeName": "주거타입", "tradeTypeName": "유형", "floorInfo": "해당 층/전체 층",
                 "rentPrc": "월세", "dealOrWarrantPrc": "보증금", "area1": "공급면적", "area2": "전용면적",
                 "direction": "방향", "tagList": "특징", "sameAddrMaxPrc": "가격", "cpName": "제공",
                 "cpPcArticleUrl": "URL", "latitude": "위도", "longitude": "경도", "realtorName": "중개사",
                 "articleConfirmYmd": "등록날짜"})
    df = df.reset_index(drop=True)  # 추가하면 인덱스가 틀어져서 리셋
    if flag == 0:
        tag = "빌라.주택"
    elif flag == 1:
        tag = "원룸.투룸"
    df.to_csv("csv/네이버_" + addr + "_" + tag + ".csv", sep="\\", encoding="UTF-8", index=None)
    print(df)

params = {
    "Accept-Encoding": "gzip",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2ODI3OTMxMDYsImV4cCI6MTY4MjgwMzkwNn0.jKi_MV08WeGUsR3RFjIbPAw3oZSoRCdwBDV_ikafqhA",
    "Host": "new.land.naver.com",
    "Referer": "https://new.land.naver.com/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
}  # 필수 Request header. 없으면 캡챠 에러 발생, authorization은 주기적으로 바뀐다고 함

try:
    addr = input("주소입력 : ")
    address = SearchMap.find_addr(addr)
    url = f'https://new.land.naver.com/api/cortars?zoom=16&centerLat={address[0][0]}&centerLon={address[0][1]}'
except TypeError:
    print("정확한 주소를 입력해주세요!")
    exit()

response = requests.get(url, headers=params)  # 주소 입력 -> 위도&경도 반환하여 json 수집. 고유 ID인 cortarNo 활용
# print(response.json()["cortarNo"])
cortarNo = response.json()["cortarNo"]

'''
for loop으로 돌려도 되지만 2개 뿐이라 시간복잡도 이득을 위해 그냥 2번 호출
'''
url = mkurl()
mkdf(url[0], 0)
mkdf(url[1], 1)