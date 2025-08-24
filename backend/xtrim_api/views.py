from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Consumption, Client
from .serializers.consumption_serializer import ConsumptionSerializer
from .serializers.client_serializer import ClientSerializer
from django.core.exceptions import ObjectDoesNotExist
from rest_framework import status
# Create your views here.

class UserCheckView(APIView):
    def post(self, request):
        try:
            identification = request.data.get('identification')
            if not identification:
                return Response(
                    {"message": "No se proporcionó la identificación"},
                    status=status.HTTP_400_BAD_REQUEST
                )
            user = Client.objects.get(identification=identification)
            serializer = ClientSerializer(user)
            return Response(serializer.data)

        except ObjectDoesNotExist:
            return Response(
                {"message": f"No se encontró el usuario con id {identification}"},
                status=status.HTTP_404_NOT_FOUND
            )

        except Exception as e:
            return Response(
                {"message": f"Ocurrió un error inesperado: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserConsumptionView(APIView):
    def get(self, request, user_id):
        try:
            consumption = Consumption.objects.get(client__id=user_id)  
            # serializer = ConsumptionSerializer(consumption)

            data = {
                "user_id": user_id,
                "date": consumption.date,
                "mb": {
                    "used": consumption.mb_used,
                    "limit_plan": consumption.client.plan.mb_included,
                    "balance": consumption.client.plan.mb_included - consumption.mb_used if consumption.mb_used < consumption.client.plan.mb_included else 0,
                    "additional":  consumption.mb_used - consumption.client.plan.mb_included if  consumption.mb_used > consumption.client.plan.mb_included else 0
                },
                "minutes": {
                    "used": consumption.minutes_used,
                    "limit_plan": consumption.client.plan.minutes_included,
                    "balance": consumption.client.plan.minutes_included - consumption.minutes_used if consumption.minutes_used < consumption.client.plan.minutes_included else 0,
                    "additional": consumption.minutes_used - consumption.client.plan.minutes_included if consumption.minutes_used > consumption.client.plan.minutes_included else 0
                }
            }
            return Response(data, status=status.HTTP_200_OK)

        except ObjectDoesNotExist:
            return Response(
                {"error": f"No se encontró consumo para el usuario con id {user_id}"},
                status=status.HTTP_404_NOT_FOUND
            )

        except Exception as e:
            return Response(
                {"error": f"Ocurrió un error inesperado: {str(e)}"},
                status=status.HTTP_500_INTERNAL_SERVER_ERROR
            )

class UserView(APIView):
    def get(self, request, user_id):
        user = Client.objects.get(id=user_id)
        serializer = ClientSerializer(user)
        return Response(serializer.data)

class UserPlanView(APIView):
    def get(self, request, user_id):
        user = Client.objects.get(id=user_id)
        serializer = ClientSerializer(user)
        plan = serializer.data.get('plan')
        return Response(plan)