from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_register/",get_registration),
         path("api/upload_register/",update_registration),
]