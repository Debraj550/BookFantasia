# Generated by Django 4.1.2 on 2022-11-17 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user_detail', '0003_remove_person_id_person_user_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='person',
            name='seller_rating',
            field=models.CharField(blank=True, default='', max_length=10, null=True),
        ),
    ]
