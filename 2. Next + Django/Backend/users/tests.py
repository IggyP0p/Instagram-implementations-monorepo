from django.contrib.auth import get_user_model
from rest_framework import status
from rest_framework.test import APITestCase

User = get_user_model()

class UserAuthTeste(APITestCase):

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
