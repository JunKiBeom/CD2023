from django.contrib import admin

from .models import Product

# Register your models here.
class ProductAdmin(admin.ModelAdmin):
    search_fields = ['address', 'flag', 'item_id', 'service_type', 'sales_type']
    list_filter = ['address', 'flag', 'service_type', 'sales_type']

admin.site.register(Product, ProductAdmin)