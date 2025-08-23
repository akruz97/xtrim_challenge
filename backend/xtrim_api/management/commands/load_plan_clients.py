from django.core.management.base import BaseCommand
from xtrim_api.models import Plan, Client, PlanClient

class Command(BaseCommand):
    help = 'Llena las tablas de forma automática'

    def handle(self, *args, **kwargs):
        if not PlanClient.objects.exists():
            PlanClient.objects.create(plan=Plan.objects.get(id=1), client=Client.objects.get(id=1), start_date="2025-02-01")
            PlanClient.objects.create(plan=Plan.objects.get(id=2), client=Client.objects.get(id=2), start_date="2025-03-06")
            self.stdout.write(self.style.SUCCESS('Datos de plan_cliente iniciales creados'))
        else:
            self.stdout.write(self.style.WARNING('Datos ya existentes'))