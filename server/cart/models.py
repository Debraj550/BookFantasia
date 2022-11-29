from django.db import models as m

# Create your models here.
class cart_data(m.Model):
    cart_id= m.IntegerField(primary_key=True, null=False)
    book_id = m.IntegerField()
    user_id = m.IntegerField()
    quantity=m.IntegerField()
    def __str__(self):
        return ("user " + str(self.user_id) + " booked  " + str(self.book_id))