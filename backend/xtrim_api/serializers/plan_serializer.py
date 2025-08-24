from rest_framework import serializers
from xtrim_api.models import Plan

class PlanSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plan
        fields = '__all__'
    #     fields = ["id", "nombre", "nombre_mayus", "email"]
    #     read_only_fields = ["id", "nombre_mayus"]

    # def get_nombre_mayus(self, obj):
    #     return obj.nombre.upper()