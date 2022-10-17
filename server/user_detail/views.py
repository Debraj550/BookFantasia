import json
from urllib import request

from django.shortcuts import render
from .models import *
from django.http import *
from django.http import *
from .serializers import *
from rest_framework.decorators import api_view

# Create your views here.
def sign_in_load(request):
    return render(request, "sign_in.html")

@api_view(["GET","POST"])
def sign_in(request):
    s=json.dumps(request.data)
    res = json.loads(s)
    email=res["email"]
    password=res["password"]
    user=person.objects.all()
    for u in user:
        if (u.email==email) and (u.password==password):
            first_name=u.first_name
            last_name=u.last_name
        else:
            first_name = "NULL"
            last_name = "NULL"

    return JsonResponse({'first_name':first_name,'last_name':last_name,'email': email,'password':password})


