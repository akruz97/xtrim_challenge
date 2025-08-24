from rest_framework import serializers
from xtrim_api.models import Consumption

class ConsumptionSerializer(serializers.ModelSerializer):
    mb_balance = serializers.SerializerMethodField()
    minutes_balance = serializers.SerializerMethodField()

    class Meta:
        model = Consumption
        fields = [
            'id',
            'mb_used',
            'minutes_used',
            'client',
            'mb_balance',
            'minutes_balance',
        ]

    def get_mb_balance(self, obj):
        return obj.client.plan.mb_included - obj.mb_used

    def get_minutes_balance(self, obj):
        return obj.client.plan.minutes_included - obj.minutes_used