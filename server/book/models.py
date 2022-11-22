from django.db import models as m
import user_detail.models as p

# Create your models here.
class book(m.Model):

    book_id=m.IntegerField(primary_key = True)
    user_id = m.IntegerField()
    book_name=m.CharField(max_length=110)
    author_name= m.CharField(max_length=110)
    language=m.CharField(max_length=110)
    desc=m.CharField(max_length=110)
    price=m.IntegerField()
    category=m.CharField(max_length=110)
    quantity=m.IntegerField()
    no_of_hit=m.IntegerField()
    book_rating = m.IntegerField(null=True)
    date_time = m.DateTimeField(auto_now_add=True, null=True)

    book_img=m.ImageField(default="",upload_to="image_folder")
    def __str__(self):
        return self.book_name
