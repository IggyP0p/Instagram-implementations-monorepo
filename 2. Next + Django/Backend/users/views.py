from .models import User
from .serializers import *
from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.decorators import api_view, permission_classes


# -------- HTTP POSTS -------- #

@api_view(["POST"])
def register(request):
   serializer = UserRegisterSerializer(data=request.data)

   if serializer.is_valid():
      user = serializer.save()
      refresh = RefreshToken.for_user(user)

      return Response(
         {
               "message": "Register completed!",
               "user": UserSerializer(user).data,
               "tokens": {
                  "refresh": str(refresh),
                  "access": str(refresh.access_token),
               },
         },
         status=status.HTTP_201_CREATED,
      )

   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(["POST"])
def login(request):
   serializer = LoginSerializer(data=request.data)

   if serializer.is_valid():
      user = serializer.validated_data["user"]
      refresh = RefreshToken.for_user(user)

      return Response(
         {
               "message": "Successful Login",
               "user": UserSerializer(user).data,
               "tokens": {
                  "refresh": str(refresh),
                  "access": str(refresh.access_token),
               },
         },
         status=status.HTTP_200_OK,
      )

   return Response(serializer.errors, status=status.HTTP_401_UNAUTHORIZED)


@api_view(['POST'])
def follow_user(request):
   serializer = FollowerSerializer(data=request.data)

   if serializer.is_valid():

      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def send_message(request):
   serializer = MessagesSerializer(data=request.data)

   if serializer.is_valid():

      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)

   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------- HTTP GETTERS -------- #

@api_view(['GET'])
def get_user(request, user_id):

   if not user_id:
      return Response(
         {"detail": "missing parameters"},
         status=status.HTTP_400_BAD_REQUEST
      )

   user = User.objects.get(id=user_id)

   serializer = UserSerializer(user)
   return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_follow_numbers(request, user_id):

   followers_count = Follow.objects.filter(followed_user=user_id).count()

   following_count = Follow.objects.filter(following_user=user_id).count()

   return Response({
      "followers_count": followers_count,
      "following_count": following_count
   }, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_chats(request, user_id):

   receivers = Messages.objects.filter(user_sender=user_id).values_list('user_receiver', flat=True)
   senders = Messages.objects.filter(user_receiver=user_id).values_list('user_sender', flat=True)

   chat_partners = set(receivers).union(set(senders))
   chat_partners.discard(int(user_id))

   users = User.objects.filter(id__in=chat_partners)

   serializer = UserPublicSerializer(users, many=True)
   return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['GET'])
def get_chat_by_id(request, user_id, partner_id):

   messages = Messages.objects.filter(
      Q(user_sender=user_id, user_receiver=partner_id) |
      Q(user_sender=partner_id, user_receiver=user_id)
   ).values('user_sender','content').order_by('id')

   return Response(messages, status=status.HTTP_200_OK)


# -------- HTTP PATCH -------- #


@api_view(['PATCH'])
@permission_classes([IsAuthenticated])
def patch_user_info(request):

   user = request.user

   serializer = UserPatchSerializer(user, data=request.data, partial=True)

   if serializer.is_valid():
      serializer.save()

      return Response(serializer.data, status=status.HTTP_200_OK)

   return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# -------- HTTP DELETES -------- #


@api_view(['DELETE'])
def unfollow(request, following_user, followed_id):

   follow = Follow.objects.filter(
      Q(following_user=following_user, followed_user=followed_id)
   )

   follow.delete()

   return Response({
      "detail": "User unfollowed with success!",
   }, status=status.HTTP_200_OK)


@api_view(['DELETE'])
def delete_chat(request, user_id, partner_id):

   messages = Messages.objects.filter(
      Q(user_sender=user_id, user_receiver=partner_id) |
      Q(user_sender=partner_id, user_receiver=user_id)
   )

   deleted_count, _ = messages.delete()

   return Response({
      "detail": "Chat erased with success!",
      "deleted_count": deleted_count
   }, status=status.HTTP_200_OK)
