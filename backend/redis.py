from backend.config import host, port, db
from typing import Union, List, Optional
import redis

class RedisClient:
    def __init__(self, host: str = host, port: int = port, db: int = db):
        self.client = redis.StrictRedis(host=host, port=port, db=db)

    def set(self, key: str, value: str, ex: Optional[int] = None, px: Optional[int] = None) -> None:
        self.client.set(key, value, ex=ex, px=px)

    def get(self, key: str) -> Union[str, None]:
        result = self.client.get(key)
        return result.decode() if result else None

    def delete(self, key: str) -> int:
        return self.client.delete(key)

    def exists(self, key: str) -> int:
        return self.client.exists(key)

    def append(self, key: str, value: str) -> int:
        return self.client.append(key, value)

    def keys(self, pattern: str) -> List[str]:
        return [key.decode() for key in self.client.keys(pattern)]

    def ttl(self, key: str) -> Optional[int]:
        return self.client.ttl(key)
