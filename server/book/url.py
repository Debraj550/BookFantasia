from django.urls import *
from django.conf import settings
from django.conf.urls.static import static

from .views import *

urlpatterns = [

         path("api/get_books/",books),
         path("api/upload_books/",upload_books),
         path("api/update_books/", update_book),
         path("api/delete_books/",delete_book),
]
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)