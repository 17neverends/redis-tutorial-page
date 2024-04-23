from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from backend.routers.insert import router as insert_router
from backend.routers.check import router as check_router
from backend.routers.delete import router as delete_router

app = FastAPI()

app.include_router(insert_router)
app.include_router(check_router)
app.include_router(delete_router)

origins = [
    "http://localhost:5173",
    "http://127.0.0.1:5173",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)