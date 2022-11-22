from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_cart/",get_cart),
         path("api/upload_cart/",update_cart),
]