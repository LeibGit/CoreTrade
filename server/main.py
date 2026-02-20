from fastapi import FastAPI, WebSocket
from fastapi.middleware.cors import CORSMiddleware
from routers import options_pricing
import asyncio
import json
import os 

ALPACA_KEY = os.environ.get("ALPACA_KEY")
ALPACA_SECRET = os.environ.get("ALPACA_SECRET")

ALPACA_STREAM = "wss://stream.data.alpaca.markets/v2/iex"

app = FastAPI();

app.include_router(options_pricing.router)

origins = [
    "https://core-trade-two.vercel.app/",
    "https://coretrade.onrender.com/"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/websocket")
async def read_root():      
    return {"Root": "Welcome to CoreTrade"}