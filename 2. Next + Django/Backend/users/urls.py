from django.urls import path
from . import views

urlpatterns = [

   # registration, login, create follow, create message routes.
   path('login/', views.login, name="login"),
   path('register/', views.register, name="register"),
   path('following/', views.follow_user, name="following"),
   path('messages/', views.send_message, name="messages"),

   # getters
   path('<int:user_id>/', views.get_user, name="get_user"),
   path('following/<int:user_id>/', views.get_follow_numbers, name="get_follows"),
   path('messages/<int:user_id>/', views.get_chats, name="get_chats"),
   path('messages/<int:user_id>/<int:partner_id>/chat/', views.get_chat_by_id, name="get_messages"),

   # patch user info
   path('', views.patch_user_info, name="update_user"),

   # unfollow, delete chat
   path('following/<int:following_user>/<int:followed_id>/', views.unfollow, name="unfollow"),
   path('messages/<int:user_id>/<int:partner_id>/chat/', views.delete_chat, name="erase_chat"),
]
