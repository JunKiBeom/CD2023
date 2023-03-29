import time

from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import csv

options = webdriver.ChromeOptions()
# options.add_argument('headless')
# driver: WebDriver = webdriver.Chrome('./chromedriver',chrome_options=options)
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

url1 = 'https://new.land.naver.com/houses?ms=37.329227,127.242315,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'
url2 = 'https://new.land.naver.com/houses?ms=37.482968,127.0634,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'


def wcsv(parse):
    name = []
    for i in parse.find_all("span", {"class": "area is-selected"}):  # 파일명에 시-구-동 바로 넣기
        print(i)
        name.append(i.text)
    name = "_".join(name)
    print(name)  # 경기도_용인시 처인구_모현읍, 서울시_동대문구_이문동

    csvfile = open("./csv/" + name + ".csv", "w", encoding='UTF-8')  # 한글 인코딩 깨질경우 CP494로 바꿀 것
    csvwriter = csv.writer(csvfile, delimiter='\\')

    for i in range(len(type)):
        print('%3d번: %s %s %s %s %s'
              % (i + 1, type[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i*2+1]))  # 곡, 가수, 앨범 순으로 저장
        csvwriter.writerow([type[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i*2+1]])

    type.clear(), text.clear(), spec.clear(), price.clear(), agent.clear()
    csvfile.close()


def parsing():
    html = driver.page_source
    parse = BeautifulSoup(html, 'html.parser')
    parse_type = parse.find_all("span", {"class": "type"})
    parse_text = parse.find_all("span", {"class": "text"})
    parse_spec = parse.find_all("span", {"class": "spec"})
    parse_price = parse.find_all("span", {"class": "price"})
    parse_agent = parse.find_all("span", {"class": "agent_info"})

    for tt in parse_type:
        type.append(tt.text)

    for tt in parse_text:
        text.append(tt.text)

    for ss in parse_spec:
        spec.append(ss.text)

    for pp in parse_price:
        price.append(pp.text)

    for aa in parse_agent:
        agent.append(aa.text)

    print(type, "\n", text, "\n", spec, "\n", price, "\n", agent)
    print(len(type), len(text), len(spec), len(price), len(agent))

    return parse


type = []
text = []
spec = []
price = []
agent = []

agent_name = []

driver.get(input())
time.sleep(1)
wcsv(parsing())

driver.close()
