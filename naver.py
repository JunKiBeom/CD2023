import csv
import time

import selenium
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

from capstone_webproject.rpa import SearchMap

options = webdriver.ChromeOptions()
# options.add_argument('headless')
# options.add_argument('window-size=1920x1080')
options.add_argument("user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36")
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)


'''
크롤링한 데이터를 csv로 저장
'''
def wcsv(parse):
    name = []
    for i in parse.find_all("span", {"class": "area is-selected"}):  # 파일명에 시-구-동 바로 넣기
        name.append(i.text)
    name = "_".join(name)
    # print(name)  # 경기도_용인시 처인구_모현읍, 서울시_동대문구_이문동

    csvfile = open("./csv/" + name + ".csv", "w", encoding='UTF-8')  # 한글 인코딩 깨질 경우 CP494로 바꿀 것
    csvwriter = csv.writer(csvfile, delimiter='\\')  # csv 구분자를 \로 변경

    for i in range(len(itype)):
        print('%3d번: %s %s %s %s %s'
              % (i + 1, itype[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i * 2 + 1]))  # 콘솔에 정리된 데이터 보이기(테스트용)
        csvwriter.writerow([itype[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i * 2 + 1]])  # csv로 저장

    # itype.clear(), text.clear(), spec.clear(), price.clear(), agent.clear()
    csvfile.close()


'''
네이버 부동산 페이지 내부 리스트 스크롤
'''
def wscroll():
    element = driver.find_element(By.XPATH, '//*[@id="listContents1"]/div')  # 내부 스크롤바를 XPath로 찾기

    try:
        while True:
            driver.execute_script("arguments[0].scrollBy(0, 5000)", element)  # 아래로 스크롤 다운
            driver.find_element(By.CLASS_NAME, 'loader')  # loader의 존재로 로딩이 끝까지 진행된건지 확인

    except selenium.common.exceptions.NoSuchElementException:  # Exception 발생하면 끝까지 로딩이 된 것
        pass


'''
selenium을 이용한 스크롤이 너무 느려 도입했다가 문제를 해결해 폐기
'''
# def guiScroll():
#     pyautogui.moveTo(150, 500)
#     pyautogui.moveTo(151, 500) # 함수로 호출시 포인터 움직이지 않으면 스크롤이 진행이 안되어 한번 더 이동
#
#     for i in range(50):
#         pyautogui.scroll(-5000)
#         time.sleep(0.2)


'''
페이지를 파싱해오고 데이터를 정리
'''
def parsing():
    html = driver.page_source
    parse = BeautifulSoup(html, 'html.parser')
    parse_type = parse.find_all("span", {"class": "type"})
    parse_text = parse.find_all("span", {"class": "text"})
    parse_spec = parse.find_all("span", {"class": "spec"})
    parse_price = parse.find_all("span", {"class": "price"})
    parse_agent = parse.find_all("span", {"class": "agent_info"})

    for tt in parse_type:
        itype.append(tt.text)

    for tt in parse_text:
        text.append(tt.text)

    for ss in parse_spec:
        spec.append(ss.text)

    for pp in parse_price:
        price.append(pp.text)

    for aa in parse_agent:
        agent.append(aa.text)

    # 이중으로 for loop를 사용해도 되지만 시간 복잡도가 nO(n) vs O^2(n), 데이터가 얼마 안되어서 그냥 작업함

    # print(itype, "\n", text, "\n", spec, "\n", price, "\n", agent)
    # print(len(itype), len(text), len(spec), len(price), len(agent))

    return parse


itype = []  # 전세 / 월세
text = []   # 종류(빌라 연립 단독 다가구)
spec = []   # 스펙
price = []  # 가격
agent = []  # 공인중개사

try:
    address = SearchMap.find_addr(input("주소압력 : "))
    url = f"https://new.land.naver.com/houses?ms={address[0][0]},{address[0][1]},16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL"
    # url = "https://new.land.naver.com/houses?ms=37.5954602,127.0510811,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL"
except TypeError:
    print("정확한 주소를 입력해주세요!")
    exit()

driver.switch_to.window(driver.window_handles[0])  # 열려있는 창0번에 포커싱
driver.get(url)
time.sleep(1)

wscroll()
wcsv(parsing())

driver.close()