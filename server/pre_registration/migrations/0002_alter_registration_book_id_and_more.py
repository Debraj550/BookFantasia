# Generated by Django 4.1.2 on 2022-11-17 17:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pre_registration', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='book_id',
            field=models.IntegerField(),
        ),
        migrations.AlterField(
            model_name='registration',
            name='user_id',
            field=models.IntegerField(),
        ),
    ]
