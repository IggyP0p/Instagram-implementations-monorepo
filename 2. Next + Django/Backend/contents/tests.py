from .models import *
from users.models import *
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase
from django.core.files.uploadedfile import SimpleUploadedFile


class ContentUploadTest(APITestCase):

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
        self.client.force_authenticate(user=self.user)

        self.url = reverse('Publish')


    def _get_dummy_file(self, filename="test_image.png"):
        small_gif = (
            b'\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x80\x00\x00\xff\xff\xff'
            b'\x00\x00\x00\x21\xf9\x04\x01\x00\x00\x00\x00\x2c\x00\x00\x00\x00'
            b'\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b'
        )
        return SimpleUploadedFile(
            name=filename,
            content=small_gif,
            content_type="image/gif"
        )


    def test_post_upload(self):
        payload = {
            "type": "post",
            "content": self._get_dummy_file("post_test.png")
        }

        response = self.client.post(self.url, payload, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Post.objects.count(), 1)

        post = Post.objects.first()
        self.assertEqual(post.owner, self.user)
        self.assertIn(f"{self.user.id}", post.content.name)


    def test_reels_upload(self):
        payload = {
            "type": "reels",
            "content": self._get_dummy_file("reels_test.mp4")
        }

        response = self.client.post(self.url, payload, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Reels.objects.count(), 1)


    def test_story_upload(self):
        payload = {
            "type": "stories",
            "content": self._get_dummy_file("story_test.png")
        }

        response = self.client.post(self.url, payload, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Stories.objects.count(), 1)


    def test_upload_unauthenticated(self):
        self.client.force_authenticate(user=None)

        payload = {
            "type": "post",
            "content": self._get_dummy_file()
        }

        response = self.client.post(self.url, payload, format='multipart')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class ComentariesUploadTest(APITestCase):

    def setUp(self):
        self.user = User.objects.create_user(
            username="CommenterUser",
            password="123NewUser",
            email="commenter@gmail.com",
            phone="676767676767",
            first_name="Commenter",
            last_name="User",
            birthday="2000-01-22"
        )

        self.post = Post.objects.create(
            owner=self.user,
            content=f"{self.user.id}/posts/exemplo.png"
        )

        self.client.force_authenticate(user=self.user)

        self.url = reverse('comment')


    def test_create_comment_success(self):
        payload = {
            "source_content_type": self.post.id,
            "text": "Excelente postagem!"
        }

        response = self.client.post(self.url, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

        self.assertEqual(Comments.objects.count(), 1)

        new_comment = Comments.objects.first()
        self.assertEqual(new_comment.text, "Excelente postagem!")
        self.assertEqual(new_comment.source_user, self.user)
        self.assertEqual(new_comment.source_content_type.id, self.post.id)


    def test_create_comment_invalid_content(self):
        invalid_content_id = 99999
        payload = {
            "source_content_type": invalid_content_id,
            "text": "Tentando comentar no nada..."
        }

        response = self.client.post(self.url, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("source_content_type", response.data)
        self.assertEqual(Comments.objects.count(), 0)


    def test_create_comment_unauthenticated(self):
        self.client.force_authenticate(user=None)

        payload = {
            "source_content_type": self.post.id,
            "text": "Comentário anônimo"
        }

        response = self.client.post(self.url, payload, format='json')

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)


class ContentGettersTest(APITestCase):

    def setUp(self):
        self.user_main = User.objects.create_user(
            username="main_user",
            password="123password",
            email="main@test.com",
            phone="111111111",
            first_name="Main",
            last_name="User",
            birthday="2000-01-01"
        )
        self.user_followed = User.objects.create_user(
            username="followed_user",
            password="123password",
            email="followed@test.com",
            phone="222222222",
            first_name="Followed",
            last_name="User",
            birthday="2000-01-01"
        )
        self.user_ignored = User.objects.create_user(
            username="ignored_user",
            password="123password",
            email="ignored@test.com",
            phone="333333333",
            first_name="Ignored",
            last_name="User",
            birthday="2000-01-01"
        )

        Follow.objects.create(
            followed_user=self.user_main,
            following_user=self.user_followed
        )

        self.post = Post.objects.create(
            owner=self.user_followed,
            content=f"{self.user_followed.id}/posts/post.png",
            likes=10
        )
        self.reels = Reels.objects.create(
            owner=self.user_followed,
            content=f"{self.user_followed.id}/reels/video.mp4",
            likes=25
        )

        self.ignored_post = Post.objects.create(
            owner=self.user_ignored,
            content=f"{self.user_ignored.id}/posts/post.png"
        )

        self.comment_few_likes = Comments.objects.create(
            source_content_type=self.post,
            source_user=self.user_main,
            text="Comentário com poucos likes",
            likes=2
        )
        self.comment_many_likes = Comments.objects.create(
            source_content_type=self.post,
            source_user=self.user_main,
            text="Comentário muito curtido!",
            likes=50
        )

        self.client.force_authenticate(user=self.user_main)


    def test_get_content_all_types_success(self):
        url = reverse('get_publishs', kwargs={'user_id': self.user_main.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

        self.assertEqual(response.data[0]['user']['username'], "followed_user")


    def test_get_content_filter_by_type(self):
        url = reverse('get_publishs', kwargs={'user_id': self.user_main.id})

        response = self.client.get(url, {'type': 'post'})

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 1)
        self.assertEqual(response.data[0]['id'], self.post.id)


    def test_get_content_no_followed_users(self):
        url = reverse('get_publishs', kwargs={'user_id': self.user_ignored.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(response.data['error'], "No followed users found")


    def test_get_comments_success_and_ordering(self):
        url = reverse('get_comments', kwargs={'content_id': self.post.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

        self.assertEqual(response.data[0]['id'], self.comment_many_likes.id)
        self.assertEqual(response.data[0]['likes'], 50)


    def test_get_comments_empty(self):
        url = reverse('get_comments', kwargs={'content_id': self.reels.id})
        response = self.client.get(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data, [])


class ContentDeleteTest(APITestCase):

    def setUp(self):
        self.owner = User.objects.create_user(
            username="owner_user",
            password="123password",
            email="owner@test.com",
            phone="111111111",
            first_name="Owner",
            last_name="User",
            birthday="2000-01-01"
        )

        self.other_user = User.objects.create_user(
            username="other_user",
            password="123password",
            email="other@test.com",
            phone="222222222",
            first_name="Other",
            last_name="User",
            birthday="2000-01-01"
        )

        self.post = Post.objects.create(
            owner=self.owner,
            content=f"{self.owner.id}/posts/para_deletar.png"
        )

        self.client.force_authenticate(user=self.owner)


    def test_delete_content_success(self):
        url = reverse('delete_content', kwargs={'content_id': self.post.id})

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data['message'], "content erased with success!")

        self.assertFalse(Content.objects.filter(id=self.post.id).exists())


    def test_delete_content_forbidden_for_other_user(self):
        self.client.force_authenticate(user=self.other_user)

        url = reverse('delete_content', kwargs={'content_id': self.post.id})
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_403_FORBIDDEN)

        self.assertTrue(Content.objects.filter(id=self.post.id).exists())


    def test_delete_content_not_found(self):
        invalid_id = 99999
        url = reverse('delete_content', kwargs={'content_id': invalid_id})

        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


    def test_delete_content_unauthenticated(self):
        self.client.force_authenticate(user=None)

        url = reverse('delete_content', kwargs={'content_id': self.post.id})
        response = self.client.delete(url)

        self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertTrue(Content.objects.filter(id=self.post.id).exists())
