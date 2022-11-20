from django.urls import *
from django.conf import settings
from django.conf.urls.static import static
from .views import *

urlpatterns = [

         path("api/get_books/",books),
         path("api/upload_books/",upload_books),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)