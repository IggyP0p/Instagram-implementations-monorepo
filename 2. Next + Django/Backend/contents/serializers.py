from rest_framework import serializers
from .models import *


class ContentCreateSerializer(serializers.ModelSerializer):
    type = serializers.ChoiceField(
        choices=['post', 'reels', 'stories'],
        write_only=True
    )

    class Meta:
        model = Content
        fields = ['id', 'content', 'likes', 'created_at', 'type', 'owner']
        read_only_fields = ['id', 'likes', 'created_at', 'owner']

    def create(self, validated_data):
        content_type = validated_data.pop('type')

        models_map = {
            'post': Post,
            'reels': Reels,
            'stories': Stories,
        }

        target_model = models_map[content_type]

        return target_model.objects.create(**validated_data)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'source_user', 'source_content_type', 'text', 'likes', 'created_at']
        read_only_fields = ['id', 'source_user', 'likes', 'created_at']
