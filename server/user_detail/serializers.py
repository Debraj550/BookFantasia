from rest_framework.serializers import ModelSerializer

from .models import *

class personSerializer(ModelSerializer):
    class Meta:
        model = person
        fields = '__all__'