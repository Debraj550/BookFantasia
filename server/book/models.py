from django.db import models as m
import user_detail.models as p

# Create your models here.
class book(m.Model):

    book_id=m.IntegerField(primary_key = True)
    user_id = m.ForeignKey(p.person,on_delete=m.CASCADE)
    book_name=m.CharField(max_length=110)
    author_name= m.CharField(max_length=110)
    language=m.CharField(max_length=110)
    desc=m.CharField(max_length=110)
    price=m.IntegerField()
    category=m.CharField(max_length=110)
    quantity=m.IntegerField()
    no_of_hit=m.IntegerField()

    def __str__(self):
        return self.book_name
