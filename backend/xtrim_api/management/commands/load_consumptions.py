from django.core.management.base import BaseCommand
from xtrim_api.models import Plan, Client, PlanClient, Consumption

class Command(BaseCommand):
    help = 'Llena las tablas de forma automática'

    def handle(self, *args, **kwargs):
        if not Consumption.objects.exists():
            Consumption.objects.create(client=Client.objects.get(id=1), date="2025-02-01", mb_used=500, minutes_used=30)
            Consumption.objects.create(client=Client.objects.get(id=2), date="2025-03-03", mb_used=700, minutes_used=45)
           
            self.stdout.write(self.style.SUCCESS('Datos de consumo iniciales creados'))
        else:
            self.stdout.write(self.style.WARNING('Datos ya existentes'))