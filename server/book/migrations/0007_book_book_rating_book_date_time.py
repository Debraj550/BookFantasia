# Generated by Django 4.1.2 on 2022-11-17 12:52

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0006_alter_book_seller_rating'),
    ]

    operations = [
        migrations.AddField(
            model_name='book',
            name='book_rating',
            field=models.IntegerField(null=True),
        ),
        migrations.AddField(
            model_name='book',
            name='date_time',
            field=models.DateTimeField(auto_now_add=True, null=True),
        ),
    ]
