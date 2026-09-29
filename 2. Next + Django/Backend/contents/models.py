from django.contrib.contenttypes.models import ContentType
from django.contrib.contenttypes.fields import GenericForeignKey
from users.models import User
from django.db import models

class Content(models.Model):

   owner = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="%(class)s",
   )

   content = models.FileField(
      blank=False,
   )
   likes = models.IntegerField(default=0)
   created_at = models.DateTimeField(auto_now_add=True)

   class Meta:
      abstract = True


class Post(Content):

   content = models.FileField(
      upload_to="posts/",
   )


class Reels(Content):

   content = models.FileField(
      upload_to="reels/",
   )


class Stories(Content):

   content = models.FileField(
      upload_to="stories/",
   )


class Comments(models.Model):

   source_user = models.ForeignKey(
      User,
      on_delete=models.CASCADE,
      related_name="comment",
   )

   source_content_type = models.ForeignKey(
      ContentType,
      on_delete=models.CASCADE,
   )

   source_content_id = models.PositiveBigIntegerField()

   source_content = GenericForeignKey(
      "source_content_type",
      "source_content_id",
   )

   likes = models.IntegerField(default=0)
   content = models.CharField(max_length=500)
   created_at = models.DateTimeField(auto_now_add=True)
