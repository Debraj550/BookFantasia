from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_cart/",get_cart),
         path("api/upload_cart/",update_cart),
         path("api/delete_cart/",delete_cart),
         path("api/empty_cart/",empty_cart),
]