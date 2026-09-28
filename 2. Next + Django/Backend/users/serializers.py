from django.contrib.auth import get_user_model
from rest_framework import serializers
from django.db.models import Q
from .models import *


User = get_user_model()

class UserSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = ["id", "username", "email", "first_name", "last_name", "phone", "birthday"]


class UserPublicSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = ['id', 'username', 'first_name', 'last_name']


class UserRegisterSerializer(serializers.ModelSerializer):
   class Meta:
      model = User
      fields = [
         "username",
         "password",
         "first_name",
         "last_name",
         "email",
         "phone",
         "birthday",
      ]

   phone = serializers.CharField(required=False, allow_blank=True, default="")
   email = serializers.EmailField(required=False, allow_blank=True, default="")
   password = serializers.CharField(write_only=True, min_length=4)

   def validate(self, attrs):
      username = attrs.get("username")
      email = attrs.get("email")
      phone = attrs.get("phone")

      filters = Q(username=username)
      if email:
         filters |= Q(email=email)
      if phone:
         filters |= Q(phone=phone)

      if User.objects.filter(filters).exists():
         raise serializers.ValidationError(
               {"detail": "An user with these credentials already exists."}
         )

      return attrs

   def create(self, validated_data):
      return User.objects.create_user(**validated_data)


class UserPatchSerializer(serializers.ModelSerializer):
   password = serializers.CharField(write_only=True, required=False)

   class Meta:
      model = User
      fields =  [
         "email",
         "first_name",
         "last_name",
         "phone",
         "password",
         "birthday"
      ]


class LoginSerializer(serializers.Serializer):
   login_data = serializers.CharField(required=True)
   password = serializers.CharField(required=True, write_only=True)

   def validate(self, attrs):
      login_data = attrs.get("login_data")
      password = attrs.get("password")

      user = User.objects.filter(
         Q(username=login_data) | Q(email=login_data) | Q(phone=login_data)
      ).first()

      if user is None or not user.check_password(password):
         raise serializers.ValidationError(
               {"detail": "Wrong user or password."}
         )

      attrs["user"] = user
      return attrs


class FollowerSerializer(serializers.ModelSerializer):
   class Meta:
      model = Follow
      fields = ['id', 'following_user', 'followed_user', 'created_at']


class MessagesSerializer(serializers.ModelSerializer):
   class Meta:
      model = Messages
      fields = ['id', 'user_sender', 'user_receiver', 'content']
