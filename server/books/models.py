from django.db import models as m
class books(m.Model):
# Create your models here.
    book_name=m.CharField(max_length=110)
    author_name= m.CharField(max_length=110)
    language=m.CharField(max_length=110)
    desc=m.CharField(350)