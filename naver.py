import csv
import time

import pyautogui
import selenium
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

import NaverSearchMap

options = webdriver.ChromeOptions()
# options.add_argument('headless')
# options.add_argument('window-size=1920x1080')
# options.add_argument("user-agent=Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/61.0.3163.100 Safari/537.36")
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

# url1 = 'https://new.land.naver.com/houses?ms=37.329227,127.242315,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'
# url2 = 'https://new.land.naver.com/houses?ms=37.482968,127.0634,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'


def wcsv(parse):
    name = []
    for i in parse.find_all("span", {"class": "area is-selected"}):  # 파일명에 시-구-동 바로 넣기
        print(i)
        name.append(i.text)
    name = "_".join(name)
    print(name)  # 경기도_용인시 처인구_모현읍, 서울시_동대문구_이문동

    csvfile = open("./csv/" + name + ".csv", "w", encoding='UTF-8')  # 한글 인코딩 깨질경우 CP494로 바꿀 것
    csvwriter = csv.writer(csvfile, delimiter='\\')

    for i in range(len(itype)):
        print('%3d번: %s %s %s %s %s'
              % (i + 1, itype[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i * 2 + 1]))  # 곡, 가수, 앨범 순으로 저장
        csvwriter.writerow([itype[i], text[i], spec[i * 2:i * 2 + 2], price[i], agent[i * 2 + 1]])

    itype.clear(), text.clear(), spec.clear(), price.clear(), agent.clear()
    csvfile.close()

def wscroll(driver):
    element = driver.find_element(By.XPATH, '//*[@id="listContents1"]/div')

    try:
        while True:
            driver.execute_script("arguments[0].scrollBy(0, 5000)", element)
            driver.find_element(By.CLASS_NAME, 'loader')

    except selenium.common.exceptions.NoSuchElementException:
        pass



def guiScroll():
    pyautogui.moveTo(150, 500)
    pyautogui.moveTo(151, 500) # 함수로 호출시 포인터 움직이지 않으면 스크롤이 진행이 안되어 한번 더 이동

    for i in range(50):
        pyautogui.scroll(-5000)
        time.sleep(0.2)


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

    print(itype, "\n", text, "\n", spec, "\n", price, "\n", agent)
    print(len(itype), len(text), len(spec), len(price), len(agent))

    return parse


itype = []
text = []
spec = []
price = []
agent = []

agent_name = []

address = NaverSearchMap.find_addr(input())
# print(type(address))
# print(address)
url = f"https://new.land.naver.com/houses?ms={address[0][0]},{address[0][1]},16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL"
# print(url)
driver.switch_to.window(driver.window_handles[0])
driver.get(url)
time.sleep(1)

wscroll(driver)
# guiScroll()
# time.sleep(1)

wcsv(parsing())

driver.close()