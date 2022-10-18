from django.urls import *

from .views import *

urlpatterns = [
    # path("sign_in/",sign_in_load),
    path("api/getUser/", getUser),
    path("api/getAllUser/", getAllUser)

]
