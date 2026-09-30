from rest_framework import serializers
from .models import *


class ContentSerializer(serializers.Serializer):
   class Meta:
      model = Content
      fields = ['owner', 'content']


class CommentSerializer(serializers.Serializer):
   class Meta:
      model = Comments
      fields = ['id', 'source_user', 'source_content_type', 'source_content', 'content']
