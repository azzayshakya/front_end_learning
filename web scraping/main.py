import requests

url = "https://pypi.org/project/beautifulsoup4/"
r = requests.get(url)
print(r.text.encode('utf-8'))