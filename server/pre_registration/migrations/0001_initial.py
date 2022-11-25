# Generated by Django 4.1.2 on 2022-11-17 16:27

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_detail', '0004_person_seller_rating'),
        ('book', '0008_remove_book_seller_rating'),
    ]

    operations = [
        migrations.CreateModel(
            name='registration',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('date_time', models.DateTimeField(auto_now_add=True, null=True)),
                ('book_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='book.book')),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='user_detail.person')),
            ],
        ),
    ]