from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_books/",books),
         path("api/upload_books/",upload_books),
]