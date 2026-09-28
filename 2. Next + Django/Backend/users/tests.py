from .models import *
from rest_framework import status
from rest_framework.test import APITestCase
from django.contrib.auth import get_user_model


User = get_user_model()

class UserAuthTest(APITestCase):

   def setUp(self):
      self.user = User.objects.create_user(
         username="NewDjangoUser",
         password="123NewUser",
         email="DjangoNewUser@gmail.com",
         phone="676767676767",
         first_name="Django",
         last_name="New User",
         birthday="2000-01-22"
      )


   def test_username_login_user_success(self):
      payload = {
         "login_data": "NewDjangoUser",
         "password":"123NewUser",
      }
      response = self.client.post('/user/login', payload, format='json')
      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertIn('tokens', response.data)


   def test_email_login_user_success(self):
      payload = {
         "login_data": "DjangoNewUser@gmail.com",
         "password": "123NewUser",
      }
      response = self.client.post('/user/login', payload, format='json')
      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertIn('tokens', response.data)


   def test_phone_login_user_success(self):
      payload = {
         "login_data": "676767676767",
         "password":"123NewUser",
      }
      response = self.client.post('/user/login', payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertIn('tokens', response.data)


   def test_email_register_user_success(self):
      payload = {
         "username":"DjangoUser",
         "password":"123DjangoUser",
         "first_name":"Django",
         "last_name":"User",

         "email":"Djangouser@gmail.com",
         "phone":"",
         "birthday":"2000-01-22",
      }
      response = self.client.post('/user/register', payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_201_CREATED)
      self.assertIn('tokens', response.data)
      self.assertTrue(User.objects.filter(username="DjangoUser").exists())


   def test_phone_register_user_success(self):
      payload = {
         "username":"DjangoUser",
         "password":"123DjangoUser",
         "first_name":"Django",
         "last_name":"User",

         "email":"",
         "phone":"6767667676767",
         "birthday":"2000-01-22",
      }
      response = self.client.post('/user/register', payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_201_CREATED)
      self.assertIn('tokens', response.data)
      self.assertTrue(User.objects.filter(username="DjangoUser").exists())


class UserFollowTest(APITestCase):

   def setUp(self):
      self.user = User.objects.create_user(
         username="NewDjangoUser",
         password="123NewUser",
         email="DjangoNewUser@gmail.com",
         phone="676767676767",
         first_name="Django",
         last_name="New User",
         birthday="2000-01-22"
      )

      self.user2 = User.objects.create_user(
         username="PrimeDjangoUser",
         password="123PrimeUser",
         email="DjangoPrimeUser@gmail.com",
         phone="776767676767",
         first_name="Django",
         last_name="Prime User",
         birthday="2000-01-22"
      )

   def test_follow_user_success(self):
      payload = {
         "following_user" : self.user.id,
         "followed_user"  : self.user2.id,
      }
      response = self.client.post('/user/following', payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_201_CREATED)
      self.assertTrue(Follow.objects.filter(following_user=self.user.id).exists())
      self.assertTrue(Follow.objects.filter(followed_user=self.user2.id).exists())


class UserMessagesTest(APITestCase):

   def setUp(self):
      self.user = User.objects.create_user(
         username="NewDjangoUser",
         password="123NewUser",
         email="DjangoNewUser@gmail.com",
         phone="676767676767",
         first_name="Django",
         last_name="New User",
         birthday="2000-01-22"
      )

      self.user2 = User.objects.create_user(
         username="PrimeDjangoUser",
         password="123PrimeUser",
         email="DjangoPrimeUser@gmail.com",
         phone="776767676767",
         first_name="Django",
         last_name="Prime User",
         birthday="2000-01-22"
      )

   def test_send_message_user_success(self):
      payload = {
         "user_sender" : self.user.id,
         "user_receiver"  : self.user2.id,
         "content" : "Hello, world!",
      }
      response = self.client.post('/user/messages', payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_201_CREATED)
      self.assertTrue(Messages.objects.filter(user_sender=self.user.id).exists())
      self.assertTrue(Messages.objects.filter(user_receiver=self.user2.id).exists())
      self.assertTrue(Messages.objects.filter(content="Hello, world!").exists())


class UserInteractionTest(APITestCase):

   def setUp(self):
      self.user = User.objects.create_user(
         username="NewDjangoUser",
         password="123NewUser",
         email="DjangoNewUser@gmail.com",
         phone="676767676767",
         first_name="Django",
         last_name="New User",
         birthday="2000-01-22"
      )

      self.user2 = User.objects.create_user(
         username="PrimeDjangoUser",
         password="123PrimeUser",
         email="DjangoPrimeUser@gmail.com",
         phone="776767676767",
         first_name="Django",
         last_name="Prime User",
         birthday="2000-01-22"
      )

      self.follow = Follow.objects.create(
         following_user=self.user,
         followed_user=self.user2,
      )

      self.messages = Messages.objects.create(
         user_sender=self.user,
         user_receiver=self.user2,
         content="Hello my friend!",
      )

      self.messages = Messages.objects.create(
         user_sender=self.user2,
         user_receiver=self.user,
         content="Hello, how r u?",
      )


   def test_get_user_success(self):
      response = self.client.get(f"/user/{self.user.id}", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)

      self.assertEqual(response.data["id"], self.user.id)
      self.assertEqual(response.data["username"], self.user.username)
      self.assertEqual(response.data["email"], self.user.email)
      self.assertEqual(response.data["first_name"], self.user.first_name)
      self.assertEqual(response.data["last_name"], self.user.last_name)
      self.assertEqual(response.data["phone"], self.user.phone)
      self.assertEqual(response.data["birthday"], self.user.birthday)


   def test_get_user_follows(self):
      response = self.client.get(f"/user/following/{self.user.id}", format='json')
      response2 = self.client.get(f"/user/following/{self.user2.id}", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertEqual(response2.status_code, status.HTTP_200_OK)

      self.assertEqual(response.data['followers_count'], 0)
      self.assertEqual(response.data['following_count'], 1)
      self.assertEqual(response2.data['followers_count'], 1)
      self.assertEqual(response2.data['following_count'], 0)


   def test_get_users_chats(self):
      response = self.client.get(f"/user/messages/{self.user.id}", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)

      self.assertEqual(response.data[0]['id'], self.user2.id)
      self.assertEqual(response.data[0]['username'], self.user2.username)
      self.assertEqual(response.data[0]['first_name'], self.user2.first_name)
      self.assertEqual(response.data[0]['last_name'], self.user2.last_name)


   def test_get_users_chats_messages(self):
      response = self.client.get(f"/user/messages/{self.user.id}/{self.user2.id}/chat", format='json')
      response2 = self.client.get(f"/user/messages/{self.user2.id}/{self.user.id}/chat", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)
      self.assertEqual(response2.status_code, status.HTTP_200_OK)

      self.assertEqual(response.data[0]['user_sender'], self.user.id)
      self.assertEqual(response.data[0]['content'], "Hello my friend!")

      self.assertEqual(response2.data[1]['user_sender'], self.user2.id)
      self.assertEqual(response2.data[1]['content'], "Hello, how r u?")


   def test_patch_users_info(self):
      payload = {
         "first_name": "Barry Allen",
         "password": "123Barry123Allen",
         "email": "123BarryA@gmail.com",
      }

      self.client.force_authenticate(user=self.user)

      response = self.client.patch("/user/", payload, format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)

      self.assertEqual(response.data['first_name'], "Barry Allen")
      self.assertEqual(response.data['email'], "123BarryA@gmail.com")


   def test_unfollow(self):
      response = self.client.delete(f"/user/following/{self.user.id}/{self.user2.id}", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)


   def test_delete_user_chat(self):
      response = self.client.delete(f"/user/messages/{self.user.id}/{self.user2.id}/chat/", format='json')

      self.assertEqual(response.status_code, status.HTTP_200_OK)
