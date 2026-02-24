import requests
from fastapi import APIRouter
import os

router = APIRouter()

ALPACA_KEY = os.environ.get("ALPACA_KEY")
ALPACA_SECRET = os.environ.get("ALPACA_SECRET")

url = "https://data.alpaca.markets/v1beta1/options/quotes/latest?symbols=AAPL240119C00150000&feed=opra"

headers = {
    "accept": "application/json",
    "APCA-API-KEY-ID": ALPACA_KEY,
    "APCA-API-SECRET-KEY": ALPACA_SECRET,
}

@router.get("/get_current_price")
async def get_current_price():
    response = requests.get(url, headers=headers)
    #return response.json()
    return "I love you don't be sad"