import json
import pandas
import requests
from . import SearchMap

'''
loop문에서 page+=1 하면 url이 바뀌지 않아 url을 재생성 해야하는 문제 발생.
코드 반복 줄이기 위해 함수로 처리
'''
page = 1  # URL 페이지 컨트롤을 위한 숫자

cortarNo = 0

def mkurl():
    url2 = f'https://new.land.naver.com/api/articles?cortarNo={cortarNo}&order=rank&realEstateType=VL:DDDGG:JWJT:SGJT:HOJT&tradeType=B1:B2&tag=::::::::&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page={page}&articleState'
    url3 = f'https://new.land.naver.com/api/articles?cortarNo={cortarNo}&order=rank&realEstateType=APT:OPST:ABYG:OBYG:GM:OR:VL:DDDGG:JWJT:SGJT:HOJT&tradeType=B1:B2&tag=:::::::SMALLSPCRENT:&rentPriceMin=0&rentPriceMax=900000000&priceMin=0&priceMax=900000000&areaMin=0&areaMax=900000000&oldBuildYears&recentlyBuildYears&minHouseHoldCount&maxHouseHoldCount&showArticle=false&sameAddressGroup=false&minMaintenanceCost&maxMaintenanceCost&priceType=RETAIL&directions=&page={page}&articleState'
    return url2, url3

def mkdf(url, flag):
    response2 = requests.get(url, headers=params)  # 매물정보를 가져오기. 진짜 크롤링을 하는 부분
    response2.encoding = "UTF-8"
    raw = response2.json()
    # print(raw)
    # print("mapExposedCount:", raw["mapExposedCount"])

    global page
    while page < 25:
        if response2.json()["isMoreData"] == True:
            page += 1
            new_url = mkurl()[flag]
            response2 = requests.get(new_url, headers=params)
            response2.encoding = "UTF-8"
            raw2 = response2.json()
            raw["articleList"] += raw2["articleList"]
        else:
            break

    page = 1  # 페이지 1로 안돌리면 다음 함수 동작시 에러 발샹
    if flag == 0:
        tag = "빌라.주택"
    elif flag == 1:
        tag = "원룸.투룸"
    df = pandas.json_normalize(raw["articleList경"])
    print(df)
    df.to_csv("csv/네이버_" + addr + "_" + tag + ".csv", sep=";", encoding="UTF-8", index=None)
    with open("jsons/네이버_" + addr + "_" + tag + ".json", 'w', encoding="UTF-8") as f:
        json.dump(raw, f, indent=4, ensure_ascii=False)


params = {
    "Accept-Encoding": "gzip",
    "authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IlJFQUxFU1RBVEUiLCJpYXQiOjE2ODM4NjUxNjIsImV4cCI6MTY4Mzg3NTk2Mn0.dWnrUgYUizqPngpW68dnZPDvfHt8atjOwHGOntXKt1A",
    "Host": "new.land.naver.com",
    "Referer": "https://new.land.naver.com/",
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/112.0.0.0 Safari/537.36"
}  # 필수 Request header. 없으면 캡챠 에러 발생, authorization은 주기적으로 바뀐다고 함

def get_addr(addr):
    try:
        # addr = input("주소입력 : ")
        address = SearchMap.find_addr(addr)
        url = f'https://new.land.naver.com/api/cortars?zoom=16&centerLat={address[0][0]}&centerLon={address[0][1]}'
    except TypeError:
        print("정확한 주소를 입력해주세요!")
        exit()

    response = requests.get(url, headers=params)  # 주소 입력 -> 위도&경도 반환하여 json 수집. 고유 ID인 cortarNo 활용
    response.encoding = "UTF-8"
    global cortarNo
    cortarNo = response.json()["cortarNo"]

'''
for loop으로 돌려도 되지만 2개 뿐이라 시간복잡도 이득을 위해 그냥 2번 호출
'''
# urls = mkurl()
# mkdf(urls[0], 0)
# mkdf(urls[1], 1)