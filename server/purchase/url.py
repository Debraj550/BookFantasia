from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_purchase/",get_purchase),
         path("api/upload_purchase/",update_purchase),
]