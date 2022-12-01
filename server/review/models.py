from django.db import models as m


# Create your models here.
class review(m.Model):

    book_id=m.IntegerField()
    user_id = m.IntegerField()
    book_rating = m.IntegerField()
    review_description = m.TextField(max_length=1000)

    def __str__(self):
        return ("book  " + str(self.book_id) + " reviewed by user " + str(self.user_id))