from rest_framework import serializers
from .models import *


class ContentCreateSerializer(serializers.ModelSerializer):
    # 'type' é um campo virtual para o input da API ('post', 'reels', 'stories')
    type = serializers.ChoiceField(
        choices=['post', 'reels', 'stories'],
        write_only=True
    )

    class Meta:
        model = Content
        # 'owner' é read_only para ser preenchido na view via request.user
        fields = ['id', 'content', 'likes', 'created_at', 'type', 'owner']
        read_only_fields = ['id', 'likes', 'created_at', 'owner']

    def create(self, validated_data):
        # Remove o 'type' dos dados validados antes de criar a instância
        content_type = validated_data.pop('type')

        # Mapeia a string para o model correspondente
        models_map = {
            'post': Post,
            'reels': Reels,
            'stories': Stories,
        }

        target_model = models_map[content_type]

        # Cria a instância da subclasse correta no banco
        return target_model.objects.create(**validated_data)


class CommentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Comments
        fields = ['id', 'source_user', 'source_content_type', 'text', 'likes', 'created_at']
        read_only_fields = ['id', 'source_user', 'likes', 'created_at']
