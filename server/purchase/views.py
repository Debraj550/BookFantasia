from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from book.models import book as b
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
        data = registration.objects.filter(user_id=cond)
        data = list(data.values())
    else :
        data = registration.objects.all()
        data = list(data.values())
    #print("data:",data)
    book=[]
    for d in data:
        cond=d['book_id']
        bookData = b.objects.filter(book_id=cond)
        bookData=list(bookData.values())
        temp = {}
        #temp["book_id"] = book
        #print(bookData["book_id"])
        temp["book_id"] = bookData[0]['book_id']
        temp["book_name"] = bookData[0]['book_name']
        temp["book_img"] = bookData[0]['book_img']
        temp["price"] = bookData[0]['price']
        temp["quantity"] = d['quantity']
        temp["date"] = d['date_time'].date()
        temp["time"] = d['date_time'].time()
        #print(temp)
        book.append(temp)
    
    return JsonResponse(book, safe=False)

    
@api_view(["POST"])
def update_purchase(request):
    book_id = request.POST.get('book_id')
    user_id = request.POST.get('user_id')
    quantity = request.POST.get('quantity')
    bookData = b.objects.get(book_id=book_id)
    print("Boookdata - ",bookData.quantity)
    bookData.quantity = bookData.quantity - int(quantity)
    print("Boookdata - ",bookData.quantity)
    bookData.save()
    record=registration.objects.create(book_id=book_id,user_id=user_id,quantity=quantity)
    return JsonResponse(200, safe=False)



