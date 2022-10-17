from django.db import models

# Create your models here.

class person(models.Model):
    user_id=models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length = 200)
    last_name = models.CharField(max_length = 200)
    email = models.EmailField(max_length=254)
    password=models.CharField(max_length = 200)
    def __str__(self):
        return self.first_name

