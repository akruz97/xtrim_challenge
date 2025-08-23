from django.core.management.base import BaseCommand
from xtrim_api.models import Plan, Client, PlanClient, Consumption, ConsumptionType

class Command(BaseCommand):
    help = 'Llena las tablas de forma automática'

    def handle(self, *args, **kwargs):
        if not Client.objects.exists():
            Client.objects.create(identification="12345678", name="Juan", lastname="Pérez", address="Calle Falsa 123", city="Springfield", email="juan@example.com", plan=Plan.objects.get(id=1))
            Client.objects.create(identification="87654321", name="Ana", lastname="López", address="Avenida Siempre Viva 742", city="Springfield", email="ana@example.com", plan=Plan.objects.get(id=2))
            self.stdout.write(self.style.SUCCESS('Datos de cliente iniciales creados'))
        else:
            self.stdout.write(self.style.WARNING('Datos de clientes ya existentes'))