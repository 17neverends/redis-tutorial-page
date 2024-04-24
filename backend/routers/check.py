from typing import List
from fastapi import APIRouter, HTTPException, status, Query
from fastapi.responses import JSONResponse
from backend.redis import RedisClient
from backend.models.Key import Key


router = APIRouter(
    prefix="/check"
)

redis = RedisClient()


@router.get("/get/{key}", response_class=JSONResponse)
async def get_data(key: str) -> JSONResponse:
    try:
        result = redis.get(key=key)
        if result is None:
            print(123)
            return JSONResponse(status_code=404, content="Ключ не найден")
        elif isinstance(result, str):
            return result
        elif isinstance(result, bytes):
            return JSONResponse(content=result.decode("utf-8"), status_code=status.HTTP_200_OK)
        else:
            raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Неожиданный формат")
    except:
        raise HTTPException(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, detail="Ошибка")
    

@router.get("/exists/{key}", response_class=JSONResponse)
async def get_exists(key: str) -> JSONResponse:
    try:
        result = redis.exists(key=key)
        if result == 1:
            return JSONResponse(status_code=200, content="Ключ найден")
        else:
            return JSONResponse(status_code=404, content="Ключ не найден")
    except:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, data="Ошибка")
    

@router.get("/keys/{key}", response_model=List[Key])
async def get_exists(key: str) -> List[Key]:
    try:
        result = redis.keys(pattern=key)
        if result:
            keys = []
            for row in result:
                keys.append(Key(key=row))
            return keys
        else:
            return []
    except:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, data="Ошибка")
    

@router.get("/ttl/{key}", response_class=JSONResponse)
async def get_exists(key: str) -> JSONResponse:
    try:
        result = redis.ttl(key=key)
        print(result)
        if result == -1:
            return JSONResponse(status_code=200, content="Время жизни у ключа не было установлено")
        elif result == -2:
            return JSONResponse(status_code=200, content="Время жизни истекло или ключ не существует")
        else:
            return JSONResponse(status_code=200, content=f"Оставшееся время: {result}")
    except:
        return JSONResponse(status_code=status.HTTP_500_INTERNAL_SERVER_ERROR, data="Ошибка")