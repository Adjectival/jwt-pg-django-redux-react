# jwt-pg-django-redux-react

## by [Adjectival](https://alexander-jacks.firebaseapp.com/#/)

### :key: JSON Web Tokens (JWT)
### :floppy_disk: PostgreSQL database
### :pager: Django backend
### :computer: React/Redux frontend + API & middleware

## Setup Backend
### Build
- ```cd backend/ ```
- ```source env/bin/activate ```
- ```pip install coreapi django djangorestframework djangorestframework-simplejwt ```
- ```pip freeze > requirements.txt ```

### Configure, Make Superuser, Run server
- ```django-admin startproject config . ```
- ```./manage.py migrate ```
- ```./manage.py createsuperuser ```
- ```./manage.py runserver ```

### API endpoints
- http://127.0.0.1:8000/api/

## Setup Frontend & Middleware
- ```cd frontend/ ```
- ```npm i ```
- ```npm start ```


## WIP

## :globe_with_meridians: MIT License