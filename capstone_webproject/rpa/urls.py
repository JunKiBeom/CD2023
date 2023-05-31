"""
URL configuration for config project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

app_name = 'rpa'

urlpatterns = [
    # path('', views.index, name='index'),
    path('', views.home, name='home'),
    # path('addrget', views.addr_get, name='addrget'),
    path('showlist', views.showlist, name='showlist'),

    path('test_home/', views.test_home, name='test_home'),
    path('djangotest/', views.djangotest, name='djangotest'),
    path('skyscanner/', views.skyscanner, name='skyscanner'),
    path('products/', views.product_list, name='product_list'),
    path('products/<int:pk>/', views.product_detail, name='product_detail'),
]
