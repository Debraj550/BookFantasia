from django.db import models as m

# Create your models here.
class purchase(m.Model):
    purchase_id=m.IntegerField(primary_key = True)
    books_and_quanty = m.TextField(max_length=10000)
    user_id = m.IntegerField(null=True)
    quantity=m.IntegerField(null=True)
    date_time = m.DateTimeField(auto_now_add=True, null=True)
    def __str__(self):
        return ("user " + str(self.user_id) + "purchase details")