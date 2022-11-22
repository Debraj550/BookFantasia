from django.db import models as m

# Create your models here.
class registration(m.Model):
    book_id = m.IntegerField()
    user_id = m.IntegerField()
    date_time = m.DateTimeField(auto_now_add=True, null=True)
    def __str__(self):
        return ("book  " + str(self.book_id) + " pre_registed by user  " + str(self.user_id))