from fastapi import APIRouter
from fastapi.responses import JSONResponse
from backend.redis import RedisClient
from backend.models.InsertModel import InsertData


router = APIRouter(
    prefix="/insert"
)

redis = RedisClient()


@router.post("/set", response_class=JSONResponse)
async def set_data(data: InsertData) -> JSONResponse: 
    try: 
        redis.set(key=data.key,
                  value=data.value,
                  ex=data.ex if data.ex else None,
                  px=data.px if data.px else None)
        return JSONResponse(content={"data": "Успешно"}, status_code=200)
    except:
        return JSONResponse(content={"data": "Ошибка"}, status_code=500)



@router.post("/append", response_class=JSONResponse)
async def set_data(data: InsertData) -> JSONResponse: 
    try: 
        result = redis.append(key=data.key,
                              value=data.value)
    
        return JSONResponse(content={"data": result}, status_code=200)
    except:
        return JSONResponse(content={"data": "Ошибка"}, status_code=500)