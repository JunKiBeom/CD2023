from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager.chrome import ChromeDriverManager

import time, csv

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

url = "https://www.zigbang.com/home/oneroom/items/36431738"

driver.get(url)
time.sleep(1)

html = driver.page_source
parse = BeautifulSoup(html, 'html.parser')
print(parse)

driver.close()

# //*[@id="__next"]/div[2]/div/div[2]/div/div/div[2]