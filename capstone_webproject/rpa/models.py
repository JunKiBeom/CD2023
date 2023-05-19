from django.db import models
from django.utils import timezone


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
    date = models.CharField(max_length=8, null=True)
    latitude = models.DecimalField(max_digits=9, decimal_places=6, null=True)
    longitude = models.DecimalField(max_digits=10, decimal_places=7, null=True)
    gen_date = models.DateField(default = timezone.now)

    class Meta:
        unique_together = ("flag", "item_id")

    def __str__(self):
        return str(self.flag) + str(self.item_id) + str(self.address)