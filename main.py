import requests
import json
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.webdriver import WebDriver
from webdriver_manager.chrome import ChromeDriverManager
import time

options = webdriver.ChromeOptions()
# options.add_argument('headless')
# driver: WebDriver = webdriver.Chrome('./chromedriver',chrome_options=options)
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

url1 = 'https://new.land.naver.com/houses?ms=37.329227,127.242315,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'
url2 = 'https://new.land.naver.com/houses?ms=37.482968,127.0634,16&a=VL:DDDGG:JWJT:SGJT:HOJT&b=B2:B1:B3&e=RETAIL'

driver.get(url1)
time.sleep(0.5)

html1 = driver.page_source
parse1 = BeautifulSoup(html1, 'html.parser')
parse_type1 = parse1.find_all("span", {"class": "type"})
parse_spec1 = parse1.find_all("span", {"class": "spec"})
parse_price1 = parse1.find_all("span", {"class": "price"})

t = []
s = []
p = []
for tt in parse_type1:
    t.append(tt.text)

for ss in parse_spec1:
    s.append(ss.text)

for pp in parse_price1:
    p.append(pp.text)
print(t, "\n", s, "\n", p)
print(len(t),len(s),len(p))

driver.get(url2)
time.sleep(1)

html2 = driver.page_source
parse2 = BeautifulSoup(html2, 'html.parser')
parse_type2 = parse2.find_all("span", {"class": "type"})
parse_spec2 = parse2.find_all("span", {"class": "spec"})
parse_price2 = parse2.find_all("span", {"class": "price"})

t = []
s = []
p = []
for tt in parse_type2:
    t.append(tt.text)

for ss in parse_spec2:
    s.append(ss.text)

for pp in parse_price2:
    p.append(pp.text)
print(t, "\n", s, "\n", p)
print(len(t),len(s),len(p))

# print(html2)
