import requests
from bs4 import BeautifulSoup

with open("sample.html", "r") as f:
    html_doc = f.read()

    soup = BeautifulSoup(html_doc, 'html.parser')

    # print(soup.prettify())
    # print(soup.title)
    # print(soup.head)
    # print(soup.div.prettify())

    # print(soup.find_all("div"))
    # print(soup.div.string)
    print(soup.find(id="ajay"))
    
for link in soup.find_all("a"):
    # print(link)
    print(link.get("href"))
    # print(link.get_text())
    
    
        
    

