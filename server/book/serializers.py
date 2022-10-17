from rest_framework.serializers import ModelSerializer

from .models import *

class bookSerializer(ModelSerializer):
    class Meta:
        model = book
        fields = '__all__'