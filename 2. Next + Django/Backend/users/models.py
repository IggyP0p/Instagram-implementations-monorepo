from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
   phone = models.CharField(max_length=20)
   birthday = models.DateField()

   def __str__(self):
      return self.username


class Follow(models.Model):

   following_user = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="following_user",
   )

   followed_user = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="followed_user",
   )

   created_at = models.DateTimeField(auto_now_add=True)

   class Meta:
      unique_together = ("following_user", "followed_user")

   def __str__(self):
      return f"{self.user.username} segue {self.followed_user.username}"


class Messages(models.Model):

   user_sender = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="user_sender",
   )

   user_receiver = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="user_receiver",
   )

   content = models.CharField(max_length=500)

   class Meta:
      unique_together = ("user_sender", "user_receiver")
