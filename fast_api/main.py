from fastapi import FastAPI

import uvicorn
from routers.tasks import router as task_router
from contextlib import asynccontextmanager
from modeling.database import database

app = FastAPI()
app.include_router(task_router, prefix="/tasks")

@asynccontextmanager
async def lifespan(app: FastAPI):
    await database.connect()
    yield
    await database.disconnect()

@app.get("/")
async def root():
    return {"message": "Hello World"}

host = "localhost"
port = 8000
app = FastAPI(lifespan=lifespan)
app.include_router(task_router)


if __name__ == "__main__":
    uvicorn.run("__main__:app", host=host, port=port, reload=True)
