import datetime
from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model
from django.core.files.base import ContentFile
from users.models import Follow
from contents.models import Post, Reels, Stories, Comments

User = get_user_model()

class Command(BaseCommand):
    help = "Semeia o banco de dados com 5 usuários, posts, reels, stories e comentários."

    def handle(self, *args, **options):
        self.stdout.write("Iniciando o povoamento do banco de dados...")

        # 1. Lista com os dados dos 5 usuários
        users_data = [
            {
                "username": "Iggy",
                "email": "iggy@example.com",
                "first_name": "Iggy",
                "last_name": "Pop",
                "phone": "+5511999990001",
                "birthday": datetime.date(1995, 5, 20),
                "password": "123q",
            },
            {
                "username": "sarah_connor",
                "email": "sarah@example.com",
                "first_name": "Sarah",
                "last_name": "Connor",
                "phone": "+5511999990002",
                "birthday": datetime.date(1998, 8, 14),
                "password": "password123",
            },
            {
                "username": "dev_alex",
                "email": "alex@example.com",
                "first_name": "Alex",
                "last_name": "Dev",
                "phone": "+5511999990003",
                "birthday": datetime.date(2000, 2, 10),
                "password": "password123",
            },
            {
                "username": "lisa_vibe",
                "email": "lisa@example.com",
                "first_name": "Lisa",
                "last_name": "Vibe",
                "phone": "+5511999990004",
                "birthday": datetime.date(1997, 11, 30),
                "password": "password123",
            },
            {
                "username": "john_doe",
                "email": "john@example.com",
                "first_name": "John",
                "last_name": "Doe",
                "phone": "+5511999990005",
                "birthday": datetime.date(1993, 1, 15),
                "password": "password123",
            },
        ]

        created_users = []

        # 2. Criação dos Usuários com senha hashed
        for u_data in users_data:
            user, created = User.objects.get_or_create(
                username=u_data["username"],
                defaults={
                    "email": u_data["email"],
                    "first_name": u_data["first_name"],
                    "last_name": u_data["last_name"],
                    "phone": u_data["phone"],
                    "birthday": u_data["birthday"],
                }
            )

            # Atualiza a senha usando o algoritmo de hash do Django
            user.set_password(u_data["password"])
            user.save()
            created_users.append(user)

        iggy_user = created_users[0]

        # 3. Faz o usuário 'Iggy' seguir todos os outros usuários para poder ver o Feed
        for other_user in created_users[1:]:
            Follow.objects.get_or_create(
                followed_user=iggy_user,
                following_user=other_user
            )

        # 4. Criando 1 Post, 1 Reels e 1 Stories para CADA usuário
        for index, user in enumerate(created_users):
            # Imagem de demonstração de 1 pixel transparente (GIF) para alimentar o FileField sem quebrar o servidor
            dummy_file = ContentFile(
                b"\x47\x49\x46\x38\x39\x61\x01\x00\x01\x00\x80\x00\x00\xff\xff\xff\x00\x00\x00\x21\xf9\x04\x01\x00\x00\x00\x00\x2c\x00\x00\x00\x00\x01\x00\x01\x00\x00\x02\x02\x44\x01\x00\x3b",
                name=f"content_user_{user.id}.png"
            )

            # --- Cria o Post ---
            post = Post.objects.create(
                owner=user,
                likes=(index + 1) * 15,
            )
            post.content.save(f"post_{user.id}.png", dummy_file, save=True)

            # Comentário no Post
            Comments.objects.create(
                source_user=created_users[(index + 1) % len(created_users)],
                source_content_type=post,
                likes=3,
                text=f"Muito legal esse post, @{user.username}!"
            )

            # --- Cria o Reels ---
            reels = Reels.objects.create(
                owner=user,
                likes=(index + 1) * 42,
            )
            reels.content.save(f"reels_{user.id}.png", dummy_file, save=True)

            # Comentário no Reels
            Comments.objects.create(
                source_user=created_users[(index + 2) % len(created_users)],
                source_content_type=reels,
                likes=7,
                text="Vídeo sensacional! 🔥"
            )

            # --- Cria o Stories ---
            stories = Stories.objects.create(
                owner=user,
                likes=(index + 1) * 5,
            )
            stories.content.save(f"stories_{user.id}.png", dummy_file, save=True)

        self.stdout.write(
            self.style.SUCCESS("O banco de dados foi populado com sucesso!")
        )
