# Generated by Django 4.1.2 on 2022-10-17 13:25

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='book',
            name='user_id',
        ),
    ]