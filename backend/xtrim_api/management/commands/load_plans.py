from django.core.management.base import BaseCommand
from xtrim_api.models import Plan, Client, PlanClient, Consumption, ConsumptionType

class Command(BaseCommand):
    help = 'Llena las tablas de forma automática'

    def handle(self, *args, **kwargs):
        if not Plan.objects.exists():
            Plan.objects.create(name="Plan Básico", base_price=10.00, mb_included=100, mb_price=0.10, minute_price=0.05, duration=30, minutes_included=30)
            Plan.objects.create(name="Plan Avanzado", base_price=20.00, mb_included=200, mb_price=0.08, minute_price=0.04, duration=30, minutes_included=50)
            self.stdout.write(self.style.SUCCESS('Datos de planes iniciales creados'))
        else:
            self.stdout.write(self.style.WARNING('Datos ya existentes'))