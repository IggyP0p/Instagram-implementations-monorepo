from django.contrib.contenttypes.models import ContentType
from polymorphic.models import PolymorphicModel
from users.models import User
from django.db import models


def upload_content_path(instance, filename):
   folder = instance.__class__.__name__.lower()
   user_id = instance.owner.id
   return f"{user_id}/{folder}/{filename}"


class Content(PolymorphicModel):

   owner = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="%(class)s",
   )

   content = models.FileField(
      upload_to=upload_content_path,
      blank=False,
   )
   likes = models.IntegerField(default=0)
   created_at = models.DateTimeField(auto_now_add=True)


class Post(Content):
   pass


class Reels(Content):
   pass


class Stories(Content):
   pass


class Comments(models.Model):

   source_user = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="comment",
   )

   source_content_type = models.ForeignKey(
      Content,
      on_delete=models.CASCADE,
      related_name="comment",
   )

   likes = models.IntegerField(default=0)
   text = models.CharField(max_length=500)
   created_at = models.DateTimeField(auto_now_add=True)
