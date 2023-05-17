from django.db import models

class Product(models.Model):
    # name = models.CharField(max_length=100)
    # price = models.DecimalField(max_digits=8, decimal_places=2)
    # description = models.TextField()

    flag = models.CharField(max_length=20)
    item_id = models.IntegerField()
    address = models.CharField(max_length=20)
    service_type = models.CharField(max_length=10)
    sales_type = models.CharField(max_length=4)
    floor = models.CharField(max_length=6, null=True)
    rent_price = models.IntegerField(null=True)
    deposit = models.BigIntegerField(null=True)
    supply_area = models.IntegerField(null=True)
    use_area = models.IntegerField(null=True)
    content = models.TextField(null=True)
    url = models.TextField(null=True)
    date = models.CharField(max_length=8)
    # latitude = models.
    # longitude = models.

    class Meta:
        unique_together = (("flag", "item_id"),)