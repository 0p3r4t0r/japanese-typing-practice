from fastapi import Depends, FastAPI
from fastapi.security import OAuth2PasswordBearer
from auth.models import User

app = FastAPI()
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")


def fake_decode_token(token: str):
    return User(username=token + 'fakedecoded', email='john@example.com', full_name="John Doe")


async def get_current_user(token: str = Depends(oauth2_scheme)):
    user = fake_decode_token(token)
    return user


@app.get("/")
async def root():
    return {"message": "Hello World"}


@app.get("/items/")
async def read_items(token: str = Depends(oauth2_scheme)):
    return {"token": token}


@app.get("/users/me")
async def read_users_me(current_user: User = Depends(get_current_user)):
    return current_user
