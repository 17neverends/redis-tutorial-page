from pydantic import BaseModel
from typing import Optional

class InsertData(BaseModel):
    key: str
    value: str
    ex: Optional[int] = None  
    px: Optional[int] = None 
