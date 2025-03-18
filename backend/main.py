from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from ai_service import generate_vulnerable_contract
from dotenv import load_dotenv
import os

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/generate_contract")
async def generate_contract():
    contract = generate_vulnerable_contract()
    return {"contract": contract}
