from rest_framework import serializers
from xtrim_api.models import Client
from .plan_serializer import PlanSerializer

class ClientSerializer(serializers.ModelSerializer):
    plan = PlanSerializer(read_only=True)  # Serializador anidado

    class Meta:
        model = Client
        fields = '__all__'