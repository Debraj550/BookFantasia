from django.shortcuts import render

# Create your views here.
from django.shortcuts import render
from django.shortcuts import render
from rest_framework.decorators import api_view
from .models import *
import json
import sys
from book.models import book as b
from user_detail.models import person as p
from django.http import JsonResponse
from django.forms.models import model_to_dict
from django.core import serializers
from .models import *


@api_view(["GET"])
def get_registration(request):
    cond = request.GET.get('user_id', 'NULL')
    cond1 = request.GET.get('book_id', 'NULL')
    if (cond != "NULL"):
        data = review.objects.filter(user_id=cond)
        data = list(data.values())
    elif (cond1 != "NULL"):
        data = review.objects.filter(book_id=cond1)
        data = list(data.values())
    else:
        data = review.objects.all()
        data = list(data.values())
    temp = []
    for d in data: 
        x = {}
        user_id = d['user_id']
        user = p.objects.get(user_id=user_id)
        user_name = user.first_name + " " + user.last_name
        x['id'] = d['id']
        x['book_rating'] = d['book_rating']
        x['review_description'] = d['review_description']
        x['user_name'] = user_name
        temp.append(x)
    print(temp)
    return JsonResponse(temp, safe=False)

@api_view(["POST"])
def update_review(request):
    book_id = request.POST.get('book_id',"NULL")
    user_id = request.POST.get('user_id',"NULL")
    review_description=request.POST.get('review_description',"NULL")
    book_rating=request.POST.get('book_rating',"NULL")
    book_rec=b.objects.get(book_id=book_id)
    seller_id=book_rec.user_id
    book_rec1 = p.objects.get(user_id=seller_id)
    seller_rating=book_rec1.seller_rating
    if(seller_rating==""):
        seller_rating=0
    print(seller_rating," afsnasnl ",type(seller_rating))
    book_rec_of_seller=b.objects.filter(user_id=seller_id)
    new_rating=float(seller_rating)+((float(book_rating)-float(seller_rating))/float(book_rec_of_seller.count()))
    print(seller_id,new_rating)
    p.objects.filter(user_id=seller_id).update(seller_rating=new_rating)
    record=review(book_id=book_id,user_id=user_id,review_description=review_description,book_rating=float(book_rating))

    record.save()
    return JsonResponse(200, safe=False)