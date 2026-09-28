from django.urls import path
from . import views

urlpatterns = [

   # registration, login and logout routes
   path('login', views.login, name="login"),
   path('register', views.register, name="register"),

   # Possible future feature
   # path('recover-password/' views.logout, name="recover-password")
]
