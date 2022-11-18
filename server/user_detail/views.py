import json
from tkinter.tix import Tree
from urllib import request
from django.core import serializers
from django.shortcuts import render
from .models import *
from django.http import *
from django.http import *
from .serializers import *
from rest_framework.decorators import api_view

# Create your views here.


@api_view(["GET"])
def getUser(request):
    email = request.GET.get("email_id", "NULL")
    password = request.GET.get("password", "NULL")
    user = person.objects.all()
    isPresent = False
    for u in user:
        if (u.email == email) and (u.password == password):
            user_id = u.user_id
            first_name = u.first_name
            last_name = u.last_name
            isPresent = True
        else:
            first_name = "NULL"
            last_name = "NULL"

    return JsonResponse({'user_id': user_id, 'first_name': first_name, 'last_name': last_name, 'email': email,
                         'isPresent': isPresent})


@api_view(["GET"])
def getAllUser(request):
    user = list(person.objects.all().values())
    return JsonResponse(200, safe=False)
