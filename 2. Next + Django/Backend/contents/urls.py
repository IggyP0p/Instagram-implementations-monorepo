from django.urls import path
from . import views

urlpatterns = [
   # Post routes
   path('publish/', views.create_content, name="Publish"),
   path('comment/', views.comment, name="comment"),

   # Getters
   path('publish/', views.get_content, name="get_publishs"),
   path('comment/<int:content_id>/', views.get_comments, name="get_comments"),

   # Delete
   path('publish/<int:content_id>/', views.delete_content, name="delete_content")
]
