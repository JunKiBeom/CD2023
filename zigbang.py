from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

import time, csv

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(ChromeDriverManager().install(), options=options)

url = "https://www.zigbang.com/home/oneroom/items/"

for i in range(36431730, 36431740):
    driver.get(url+str(i))
    # time.sleep(1)

    try:
        err = driver.find_element(By.XPATH, '/html/body/div[7]/div/div[2]/div/div/div/div[2]')
    except:
        tmp = driver.find_element(By.XPATH, '//*[@id="__next"]/div[2]/div/div[2]/div/div/div[2]')
        html = driver.page_source
        parse = BeautifulSoup(html, 'html.parser')
        print(tmp.text)
        print('-'*30)

driver.close()

# //*[@id="__next"]/div[2]/div/div[2]/div/div/div[2]