from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import *
import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core import serializers
from .models import *
@api_view(["GET","POST"])
def get_cart(request):
    cond = request.GET.get('user_id', 'NULL')
    cond1 = request.GET.get('book_id', 'NULL')
    if (cond != "NULL"):
        data = cart_data.objects.filter(user_id=cond)
        data = list(data.values())
    elif (cond1 != "NULL"):
        data = cart_data.objects.filter(book_id=cond1)
        data = list(data.values())
    else :
        data = cart_data.objects.all()
        data = list(data.values())
    return JsonResponse(data, safe=False)
@api_view(["POST"])
def update_cart(request):
    book_id = int(request.POST.get('book_id'))
    user_id = int(request.POST.get('user_id'))
    try:
        obj = cart_data.objects.filter(user_id=user_id).filter(book_id=book_id)
        id=obj.values()[0]['id']
        quantity=obj.values()[0]['quantity']
        quantity+=1
        cart_data.objects.filter(id=id).update(quantity=quantity)

    except :
        obj = cart_data.objects.create(user_id=user_id,book_id=book_id,quantity=0)
    return JsonResponse(200, safe=False)



