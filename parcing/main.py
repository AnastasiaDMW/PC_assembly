import os
import time
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.keys import Keys
import urllib.request


current_dir = os.getcwd()
folder_name = "chromedriver"
folder_path = os.path.join(current_dir, folder_name)+"\\chromedriver.exe"

service = Service(executable_path=folder_path)
options = webdriver.ChromeOptions()
driver = webdriver.Chrome(service=service, options=options)
component_number = 0
item_number = 1
driver.get('https://www.regard.ru/catalog/1013/videokarty?search=видеокарта')
components_file = open("components.txt", "w", encoding="utf-8")
component_data = ""

hardwares = {
    5:'Видеокарта',
    1:'Материнская плата',
    2:'Процессор',
    3:'Охлаждение',
    4:'Память',
    6:'Корпус',
    7:'Блок питания'
}

for key in hardwares.keys():
    if hardwares[key] != "Видеокарта":
        driver.implicitly_wait(5)
        search = driver.find_element(By.XPATH, "//div[1]/div/div/div/div/div/input[2][@id='searchInput']")
        search.send_keys(hardwares[key])
        driver.implicitly_wait(20)
        element = WebDriverWait(driver, 5).until(
            EC.presence_of_element_located((By.XPATH, f"//div/div/div[1]/div[1]/div/div/div/div[1]/div/div/div[1]/*[name()='svg' and @class='Icons_search__Eydlv Search_searchIcon__ipNH0 Search_activeSearchIcon__HxnXX']"))
        )
        element.click()
        element.click()
        driver.implicitly_wait(20)
        
    item_number = 1
    component_number = 0
    while item_number != 16:
        driver.implicitly_wait(20)
        while True:
            try:
                element = WebDriverWait(driver, 5).until(
                    EC.presence_of_element_located((By.XPATH, f"//div[{item_number}]/div/a/div/div/div[1]/div[1]/img[@class='CardImageSlider_image__W65ZP']"))
                )
                element.click()
                break
            except:
                driver.execute_script("window.scrollBy(0,110)","")

        driver.implicitly_wait(15)
        title = driver.find_element(By.XPATH, "//div/div[1]/main/div/div[1]/div[1]/span/h1[@class='Product_title__42hYI']").text
        driver.implicitly_wait(5)
        price = driver.find_element(By.XPATH, "//div[2]/div[1]/div/div/span/span[@class='Price_price__m2aSe notranslate']").text
        driver.implicitly_wait(5)
        characteristics = driver.find_element(By.XPATH, "//main/div/div[2]/div[1]/div[2]/div/div/div[1][@class='Grid_col__4bXWJ Grid_col-12__JMZP1']").text
        driver.implicitly_wait(15)
        number = 1
        src_list = list()
        while (number != 4):
            try: 
                image = driver.find_element(By.XPATH, f"//main/div/div[1]/div[2]/div/div/div[2]/div/div/div[{number}]/img[@class='ThumbnailSlider_slide__image__7QbEB']")
                # print(f"Image: {image}, number: {number}")
                src_list.append(image.get_attribute('src'))
                driver.implicitly_wait(5)
                number+=1
            except:
                if len(src_list) == 0:
                    number = 1
                else:
                    number = 4
                # print(f"Exception: {src_list}")
        # print(src_list)

        component_number += 1
        component_data += f"\nНомер товара: {component_number}\n"
        driver.implicitly_wait(5)

        filename = hardwares[key]
        count = 0
        filenames_list = []
        print(f"Src list: {src_list}")
        for i in range(len(src_list)):
            try:
                print(src_list[i])
                urllib.request.urlretrieve(src_list[i], f"components_image/{filename}_{component_number}-{i}.png")
                filenames_list.append(f"{filename}_{component_number}-{i}.png")
                count += 1
            except:
                print("Я не скачал(((")
            
        component_data += f"Тип комплектующего: {key}\n"
        component_data += f"Название: {title}\n"
        component_data += f"Цена: {price}\n"
        component_data += "Изображения:\n"
        for filename in filenames_list:
            component_data += f"{filename}\n"
            
        data = characteristics.split("\n")
        
        component_data += "Характеристики:\n"
        component_data += f"---{data[0].strip()}---\n"
        
        count = 0
        
        for i in range(1, len(data)-1):
            if count > 0:
                count -= 1
                continue
            if (len(data)-1 < i+1):
                if ".." not in data[i-1] and ".." not in data[i+1]:
                    component_data += f"---{data[i].strip()}---\n"
            if ".." in data[i+1]:
                component_data += data[i].strip()+" - "+data[i+2].strip()+"\n"
                count = 2
            
        driver.implicitly_wait(10)
        driver.execute_script("window.history.go(-1)")
        driver.implicitly_wait(10)
        driver.execute_script("window.scrollBy(0,110)","")
        item_number += 1
components_file.write(component_data)
components_file.close()

os.system("python createCSV.py")
time.sleep(5)
os.system("python CsvDownloader.py")