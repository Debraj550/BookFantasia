# Generated by Django 4.1.2 on 2022-10-17 13:09

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('user_detail', '0002_rename_user_person'),
    ]

    operations = [
        migrations.CreateModel(
            name='book',
            fields=[
                ('book_id', models.IntegerField(primary_key=True, serialize=False)),
                ('book_name', models.CharField(max_length=110)),
                ('author_name', models.CharField(max_length=110)),
                ('language', models.CharField(max_length=110)),
                ('desc', models.CharField(max_length=110)),
                ('price', models.IntegerField()),
                ('category', models.CharField(max_length=110)),
                ('quantity', models.IntegerField()),
                ('no_of_hit', models.IntegerField()),
                ('user_id', models.ForeignKey(on_delete=django.db.models.deletion.PROTECT, to='user_detail.person')),
            ],
        ),
    ]
