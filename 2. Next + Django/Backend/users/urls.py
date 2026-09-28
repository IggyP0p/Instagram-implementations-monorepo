from django.urls import path
from . import views

urlpatterns = [

   # registration, login and logout routes
   path('login', views.login, name="login"),
   path('register', views.register, name="register"),
   # Possible future feature
   # path('recover-password/' views.logout, name="recover-password")

   path('following', views.follow_user, name="following"),
   path('messages', views.send_message, name="messages"),

   path('<int:user_id>', views.get_user, name="get_user"),
   path('following/<int:user_id>', views.get_follow_numbers, name="get_follows"),
   path('messages/<int:user_id>', views.get_chats, name="get_chats"),
   path('messages/<int:user_id>/<int:partner_id>/chat', views.get_chat_by_id, name="get_messages"),
]
