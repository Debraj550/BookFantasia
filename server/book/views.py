from django.shortcuts import render
from .models import *
import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core import serializers


from .serializers import *
from rest_framework.decorators import api_view
from django.http import *
# Create your views here.
@api_view(["GET","POST"])
def books(request):

    cond=request.GET.get("book_id",'NULL')
    if(cond!="NULL"):
        data = book.objects.filter(book_id=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    cond=request.GET.get("user_id",'NULL')
    if(cond!="NULL"):
        data = book.objects.filter(user_id=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    cond = request.GET.get("book_name", 'NULL')
    if (cond != "NULL"):
        data = book.objects.filter(book_name=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    cond = request.GET.get("author_name", 'NULL')
    if (cond != "NULL"):
        data = book.objects.filter(author_name=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    cond = request.GET.get("language", 'NULL')
    if (cond != "NULL"):
        data = book.objects.filter(language=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    cond = request.GET.get("category", 'NULL')
    if (cond != "NULL"):
        data = book.objects.filter(category=cond)
        data = list(data.values())
        #data = serializers.serialize('json', queryed_book)
        return JsonResponse(data, safe=False)
    else:
        data = book.objects.all()
        data = list(data.values())
        #data = serializers.serialize('json',queryed_book )
        return JsonResponse(data,safe=False)





