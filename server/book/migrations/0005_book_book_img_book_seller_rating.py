# Generated by Django 4.1.2 on 2022-11-11 17:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0004_alter_book_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='book_img',
            field=models.ImageField(default='', upload_to='image_folder'),
        ),
        migrations.AddField(
            model_name='book',
            name='seller_rating',
            field=models.CharField(default='', max_length=10),
        ),
    ]
