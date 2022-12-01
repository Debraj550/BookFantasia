from django.shortcuts import render
from .models import *
import json
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core import serializers
from .models import *
import user_detail.models as p
from .serializers import *
from rest_framework.decorators import api_view
from django.http import *

from soft_proj.settings import BASE_DIR
# Create your views here.
@api_view(["GET"])
def books(request):
    cond=request.GET.get("book_id",'NULL')
    if(cond!="NULL"):
        data = book.objects.filter(book_id=cond)
        data = list(data.values())
        user_id = data[0]['user_id']
        user_details = list(p.person.objects.filter(user_id=user_id).values())
        name = user_details[0]['first_name']+' '+user_details[0]['last_name']
        data = data[0]
        data["seller_name"] = name
        #data.append("seller_name", user_details[0]['first_name']+user_details[0]['last_name'])
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
        
    cond = request.GET.get("search", 'NULL')
    if (cond != "NULL"):
        cond=cond.lower()
        cond=str(cond)
        data = book.objects.all().values()
        #print(data)
        temp = []
        for books in data:
            #print("books['book_name'].lower()=>",type(books['book_name'].lower()),"  and " ,cond in books['book_name'].split(" "))
            if(books['author_name'].lower().find(cond) != -1 or books['book_name'].lower().find(cond) != -1 or books['desc'].lower().find(cond) != -1):
                bk_id=int(books['book_id'])
                searched_book=book.objects.filter(book_id=bk_id)
                searched_book=list(searched_book.values())
                temp.append(searched_book)  

        size = len(temp)
        if (size == 0):
            return JsonResponse([], safe =False)

        x = []
        for i in range(size):
            x.append(temp[i][0])
        print(x)
        return JsonResponse(x, safe=False)
        

        #data = serializers.serialize('json', queryed_book)

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
    
    data = book.objects.all()
    data = list(data.values())
        #print("base dir path",BASE_DIR)
        #data = serializers.serialize('json',queryed_book )
    return JsonResponse(data,safe=False)

@api_view(["POST"])
def upload_books(request):
    #book_id = request.POST.get("book_id")
    user_id = request.POST.get("user_id", 'NULL')
    book_name = request.POST.get("book_name", 'NULL')
    author_name = request.POST.get("author_name", 'NULL')
    language = request.POST.get("language", 'NULL')
    desc = request.POST.get("desc", 'NULL')
    price = request.POST.get("price", 'NULL')
    category = request.POST.get("category", 'NULL')
    quantity = request.POST.get("quantity", 'NULL')
    no_of_hit=0
    book_rating = 4.5
    book_img = request.FILES["book_img"]
    record=book(user_id=user_id,book_name=book_name,author_name=author_name,language=language,desc=desc,price=price,category=category,quantity=quantity,no_of_hit=no_of_hit,book_rating=book_rating,book_img=book_img)
    record.save()
    return JsonResponse("Post created successfully",status = 200,safe=False)

@api_view(["PUT"])
def update_book(request):
    book_id=request.PUT.get("book_id", 'NULL')
    cond = request.PUT.get("user_id", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.user_id = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(user_id=cond)

        return JsonResponse(200, safe=False)
    cond = request.PUT.get("book_name", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.book_name = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(book_name=cond)

        return JsonResponse(200, safe=False)

    cond = request.PUT.get("author_name", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.author_name = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(author_name=cond)

        return JsonResponse(200, safe=False)


    cond = request.PUT.get("language", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.language = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(language=cond)

        return JsonResponse(200, safe=False)
    cond = request.PUT.get("category", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.category = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(category=cond)
        return JsonResponse(200, safe=False)

    cond = request.PUT.get("category", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.category = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(category=cond)
        return JsonResponse(200, safe=False)

    cond = request.PUT.get("quantity", 'NULL')
    if (cond != "NULL"):
        try:
            obj = book.objects.get(book_id=book_id)
            obj.category = cond
            obj.save()
        except book.DoesNotExist:
            obj = book.objects.create(quantity=cond)
        return JsonResponse(200, safe=False)

@api_view(["DELETE"])
def delete_book(request):
    book_id=request.GET.get('book_id')
    book.objects.filter(book_id=book_id).delete()
    return JsonResponse(200, safe=False)
