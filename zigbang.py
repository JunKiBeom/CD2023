from bs4 import BeautifulSoup
from selenium import webdriver
from webdriver_manager import ChromeDriverManager

import time, csv

options = webdriver.ChromeOptions()
driver = webdriver.Chrome(ChromeDriverManager.install(), options)

url = "https://www.zigbang.com/home/oneroom/items/36431738"

driver.get(url)
time.sleep(1)
driver.close()