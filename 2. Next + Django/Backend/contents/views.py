from users.models import *
from .serializers import *
from django.db.models import Q
from rest_framework import status
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from rest_framework.decorators import api_view


# -------- HTTP POSTS -------- #

@api_view(['POST'])
def create_content(request):
   serializer = ContentSerializer(data=request.data)

   if serializer.is_valid():
      content = serializer.save()

      return Response({
         "message": "Published with success!",
         "content": ContentSerializer(content).data,
      }, status=status.HTTP_200_OK)

   return Response({
      "error": "It was not possible to Publish",
   }, status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def comment(request):
   serializer = CommentSerializer(data=request.data)

   if serializer.is_valid():
      content = serializer.save()

      return Response({
         "message": f"success {CommentSerializer(content).data}",
      }, status=status.HTTP_200_OK)

   return Response({
      "error": "It was not possible to Publish",
   }, status=status.HTTP_400_BAD_REQUEST)


# -------- HTTP GETTERS -------- #

@api_view(['GET'])
def get_content(request, user_id):

   content_type = request.query_params.get('type')

   following_ids = Follow.objects.filter(
      followed_user=user_id
   ).values_list('following_user_id', flat=True)

   if not following_ids:
      return Response({"error": "No followed users found"}, status=status.HTTP_400_BAD_REQUEST)

   content_qs = Content.objects.filter(
      owner_id__in=following_ids
   ).select_related('owner')

   if content_type == 'post':
      content_qs = content_qs.instance_of(Post)
   elif content_type == 'reels':
      content_qs = content_qs.instance_of(Reels)
   elif content_type == 'stories':
      content_qs = content_qs.instance_of(Stories)

   contents = content_qs.order_by('-created_at')[:20]

   data = []
   if contents.exists():
      for item in contents:

         data.append({
            'id': item.id,
            'contentUrl': item.content.url,
            'likes': item.likes,
            'createdAt': item.created_at,
            'user': {
               'username': item.owner.username,
               'first_name': item.owner.first_name,
               'last_name': item.owner.last_name,
            }
         })
      return Response(data, status=status.HTTP_200_OK)

   return Response({
      "error": "Not found",
   }, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def get_comments(request, content_id):

   comments = Comments.objects.filter(
      content_id=content_id
   ).select_related('source_user').order_by('-likes', 'created_at')

   data = [
      {
         'id': comment.id,
         'text': comment.text,
         'likes': comment.likes,
         'user': {
               'username': comment.source_user.username,
               'first_name': comment.source_user.first_name,
               'last_name': comment.source_user.last_name,
         }
      }
      for comment in comments
   ]

   return Response(data, status=status.HTTP_200_OK)


# -------- HTTP DELETES -------- #

@api_view(['DELETE'])
def delete_content(request, content_id):

   content = get_object_or_404(Content, id=content_id)

   content.delete()

   return Response({
      "message": "content erased with success!"
   }, status=status.HTTP_200_OK)
