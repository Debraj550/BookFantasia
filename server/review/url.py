from django.urls import *

from .views import *

urlpatterns = [

         path("api/get_review/",get_registration),
         path("api/upload_review/",update_review),
]