import stripe
from django.conf import settings
import json
from tkinter.tix import Tree
from urllib import request
from django.core import serializers
from django.shortcuts import render
from .models import *
from django.http import *
from django.http import *
from rest_framework.decorators import api_view

stripe.api_key = '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'

@api_view(['POST'])
def test_payment(request):
    test_payment_intent = stripe.PaymentIntent.create(
        amount=1000, currency='pln', 
        payment_method_types=['card'],
        receipt_email='test@example.com')

    return JsonResponse(data=test_payment_intent)