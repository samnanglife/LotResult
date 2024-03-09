import requests
from bs4 import BeautifulSoup
import time

def get_lottery_results():
    url = "https://www.glo.or.th/home-page"  # GLO website URL
    response = requests.get(url)
    soup = BeautifulSoup(response.content, "html.parser")

    # Extract relevant data (e.g., lottery results, dates, etc.)
    # Modify this part based on the specific data you want to display

    return "Latest lottery results: 12345, 67890"  # Example data

while True:
    print(get_lottery_results())
    time.sleep(300)  # Fetch data every 5 minutes
