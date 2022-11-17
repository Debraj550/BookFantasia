from django.urls import *

from .views import *

urlpatterns = [

         path("api/books/",books),
         path("api/upload_books/",upload_books),
]