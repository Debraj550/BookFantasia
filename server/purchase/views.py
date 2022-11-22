from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view

from .models import *
import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core import serializers
from .models import purchase as registration

# Create your views here.
@api_view(["GET"])
def get_purchase(request):
    cond = request.GET.get('user_id', 'NULL')
    cond1 = request.GET.get('book_id', 'NULL')
    if (cond != "NULL"):
        data = registration.objects.filter(user_id=cond).order_by('date_time')
        data = list(data.values())
    elif (cond1 != "NULL"):
        data = registration.objects.all.order_by('date_time')
        data = list(data.values())

    else:
        data = registration.objects.all().order_by('date_time')
        data = list(data.values())

    return JsonResponse(data, safe=False)
@api_view(["POST"])
def update_purchase(request):
    book_id = request.POST.get('book_id')

    user_id = request.POST.get('user_id')
    record=registration(book_id=book_id,user_id=user_id)
    record.save()
    return JsonResponse(200, safe=False)



