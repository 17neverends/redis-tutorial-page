from fastapi import APIRouter
from fastapi.responses import JSONResponse
from backend.redis import RedisClient


router = APIRouter(
    prefix="/delete"
)

redis = RedisClient()


@router.delete("/{key}", response_class=JSONResponse)
async def get_key(key: str) -> JSONResponse: 
    try: 
        result = redis.delete(key=key)
        return JSONResponse(content={"data": result}, status_code=200)
    except:
        return JSONResponse(content={"data": "Ошибка"}, status_code=500)