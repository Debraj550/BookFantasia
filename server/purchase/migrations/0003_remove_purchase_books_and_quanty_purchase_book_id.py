# Generated by Django 4.1.2 on 2022-11-29 20:18

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("purchase", "0002_purchase_delete_cart_data"),
    ]

    operations = [
        migrations.RemoveField(model_name="purchase", name="books_and_quanty",),
        migrations.AddField(
            model_name="purchase", name="book_id", field=models.IntegerField(null=True),
        ),
    ]
