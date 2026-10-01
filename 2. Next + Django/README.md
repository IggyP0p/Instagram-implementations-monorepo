To make it more simple to understand and organize the README, I will divide it into 3 parts: **Frontend**, **Backend** and **Database**

In the Frontend Folder you can find the code for Next, the apresentation layer of the app.
In the Backend Folder you can find the code for Django, the Server layer of the app.
In the Database Folder you can find the diagrams to understand the database.

# Objetivos

- [X] Create apresentation layer Next
- [X] Create server layer Django
- [X] Create Database layer
- [X] Connect all layers

At the moment the app can fetch data from frontend to backend, It has all pages, and render it well.
The app doesn't has a mobile interface, so responsivity doesn't work well.

# Frontend (Next)

The UI was based on figr.design:
[Instagram - Web UI (Recreated)](https://www.figma.com/community/file/1235135369163092252/instagram-web-ui-recreated?after-auth-duplicate-file-id=1235135369163092252&fuid=1468939785599770410)


# Backend (Django)

I used the django rest-framework package to create an API that conects the frontend with the database, at the same time it makes some processing, to create the server layer of the application. To learn better how to use Docker as well I used it, so the Database is included in the Dockerfile of the backend.

But I had a problem with Django cause, I didn't find so good to render Html, maybe because I lack experience. Also there's too much classes pre-made. I got a little lost when I was going to use the Framework cause the User for example extends AbstractUser because I was recommended to use it, There is a lot of things already made to use and I didn't know what to do or when I had a problem to solve I did'nt had the acknolegement of how that thing is implemented. So I got a little confused time to time.


# My Way on learning Next and DJango

The first time I used Next was a college app and that was painful, imagine an app full of problems... But I found Next really efficient, powerful, so it made me more anxious to create this project. Next is very good, and my way on learning was very easy, it is good to know some features of the directories, they make the app very organized, and React makes the code organized too, Also with tailwindcss, works perfectly.

Django was the first time I was using and I find it very pleasant as well. Just happens that this was my first time writing dockerfile, AND OH MY GOD, Docker is so FUCKING GOOD, it makes so easy to deploy and test. It was my first time using automatized tests too with tests.py, SO GOOD, when I was writing "1. React Instagram" I used Express and I tested with curl with CORS, that was annoying. But with automated tests is so easy to test and fix the code. I didn't used Django Templates, in my vision is not so interesting since I have a Next.js frontend. But I may be wrong Dunno. But for my first experience with Django it was very pleasant and good.
