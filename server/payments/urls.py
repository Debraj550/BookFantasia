from django.conf.urls import *
from payments import views
from django.urls import *
from .views import *

urlpatterns = [
    path('api/payments/', test_payment),
]