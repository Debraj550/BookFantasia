# Generated by Django 4.1.2 on 2022-11-29 18:36

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("cart", "0005_alter_cart_data_quantity"),
    ]

    operations = [
        migrations.RemoveField(model_name="cart_data", name="id",),
        migrations.AddField(
            model_name="cart_data",
            name="cart_id",
            field=models.IntegerField(default=-1, primary_key=True, serialize=False),
            preserve_default=False,
        ),
    ]
