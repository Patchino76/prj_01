from fastapi import FastAPI, APIRouter
from pydantic import BaseModel
from modeling.database import database



router = APIRouter()

class UserTask(BaseModel):
    name: str
    status: str
    tags: list[str]





@router.get("/list")
async def get_tasks():
    tasks = database.get_tasks()
    return tasks

@router.post("/create", response_model=UserTask)
async def post_task(task: UserTask):
    # last_rec = len(database.tasks_table)
    data = task.model_dump()
    print(data)

    # database.post_task(task)
    return task