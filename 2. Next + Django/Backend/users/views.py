from .models import User
from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['POST'])
def login(request):

   data = request.data
   login_data = data.get("login_data")
   password = data.get("password")

   user = User.objects.filter(
      Q(username=login_data) | Q(email=login_data) | Q(phone=login_data)
   ).first()

   if user is None or not user.check_password(password):
      return Response(
         {"detail": "Wrong user or password"},
         status=status.HTTP_401_UNAUTHORIZED
      )

   refresh = RefreshToken.for_user(user)

   return Response({
      "message": "Succesful Login",
      "user": {
         "id" : user.id,
         "username" : user.username
      },
      "tokens": {
         "refresh": str(refresh),
         "access": str(refresh.access_token),
      }
   }, status=status.HTTP_200_OK)


@api_view(['POST'])
def register(request):

   data = request.data

   username = data.get("username")
   password = data.get("password")
   first_name = data.get("first_name")
   last_name = data.get("last_name")

   email = data.get("email")
   phone = data.get("phone")
   birthday = data.get("birthday")

   filters = Q(username=username)
   if email:
      filters |= Q(email=email)
   if phone:
      filters |= Q(phone=phone)

   if User.objects.filter(filters).exists():
      return Response(
         {"erro": "An user with these credentials already exists"},
         status=status.HTTP_400_BAD_REQUEST
      )

   user = User.objects.create_user(
           username=username,
           first_name=first_name,
           last_name=last_name,
           phone=phone if phone else "",
           email=email if email else "",
           password=password,
           birthday=birthday,
       )

   user.save()

   refresh = RefreshToken.for_user(user)

   return Response({
      "message": "Register completed!",
      "user": {
         "id" :user.id,
         "username": user.username,
      },
      "tokens": {
         "refresh": str(refresh),
         "access": str(refresh.access_token),
      }
   }, status=status.HTTP_201_CREATED)
