# Generated by Django 4.1.2 on 2022-11-17 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('cart', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='cart_data',
            name='user_id',
        ),
        migrations.AlterField(
            model_name='cart_data',
            name='book_id',
            field=models.IntegerField(),
        ),
    ]
