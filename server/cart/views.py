from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from django.http import QueryDict
from .models import *
import json
from book.models import book as b
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
    else :
        data = cart_data.objects.all()
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
        print(temp)
        book.append(temp)
    
    return JsonResponse(book, safe=False)

@api_view(["POST"])
def update_cart(request):
    print(request.POST)
    book_id = request.POST.get('book_id')
    user_id = request.POST.get('user_id')
    quantity1 = request.POST.get('quantity')

    try:
        obj = cart_data.objects.filter(user_id=user_id).filter(book_id=book_id)
        id=obj.values()[0]['id']
        quantity=obj.values()[0]['quantity']
        quantity+=quantity1
        cart_data.objects.filter(id=id).update(quantity=quantity)

    except :
        obj = cart_data.objects.create(user_id=user_id,book_id=book_id,quantity=quantity1)
    return JsonResponse(200, safe=False)

@api_view(["DELETE"])
def delete_cart(request):
    user_id = request.GET.get('user_id')
    book_id = request.GET.get('book_id')
    record = cart_data.objects.filter(book_id = book_id).filter(user_id = user_id)
    record.delete()
    #user_id=request.DELETE.get('user_id')
    #book_id=request.DELETE.get('book_id')
    #cart_data.objects.filter(book_id=book_id).filter(user_id=user_id).delete()
    return JsonResponse("Deleted sucessfully", safe=False)


