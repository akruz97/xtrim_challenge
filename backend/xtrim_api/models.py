from django.db import models


class Plan(models.Model):
    name = models.CharField(max_length=100)
    base_price = models.DecimalField(max_digits=10, decimal_places=4)
    mb_included = models.IntegerField(help_text="Data limit in MB")
    minutes_included = models.IntegerField(help_text="Minutes limit", default=0)
    mb_price = models.DecimalField(max_digits=10, decimal_places=4, help_text="Price per MB over limit")
    minute_price = models.DecimalField(max_digits=10, decimal_places=4, help_text="Price per minute")
    duration = models.IntegerField(help_text="Duration in days")
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
            
    class Meta:
        db_table = "plans"   # 👈 nombre exacto de la tabla en la BD

# Create your models here.
class Client(models.Model):
    identification = models.CharField(max_length=20, unique=True)
    name = models.CharField(max_length=100)
    lastname = models.CharField(max_length=100)
    address = models.CharField(max_length=255)
    city = models.CharField(max_length=100)
    email = models.EmailField(unique=True)
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=10, decimal_places=2, default=0.0)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        db_table = "clients"   # 👈 nombre exacto de la tabla en la BD

class PlanClient(models.Model):
    plan = models.ForeignKey(Plan, on_delete=models.CASCADE)
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    start_date = models.DateField()

    class Meta:
        db_table = "plan_client"   # 👈 nombre exacto de la tabla en la BD


class Consumption(models.Model):
    client = models.ForeignKey(Client, on_delete=models.CASCADE)
    date = models.DateField()
    mb_used = models.IntegerField(default=0)
    minutes_used = models.IntegerField(default=0)

    class Meta:
        db_table = "consumptions"   # 👈 nombre exacto de la tabla en la BD

class ConsumptionType(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

    class Meta:
        db_table = "consumption_types"   # 👈 nombre exacto de la tabla en la BD