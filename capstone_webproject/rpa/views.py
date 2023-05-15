from django.contrib import messages
from django.shortcuts import render, redirect
from . import naver2, zigbang


def index(request):
    return render(request, 'index.html')


def home(request):
    return render(request, 'homealldata.html')


def test_home(request):
    return render(request, 'test_home.html')


def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'products': products})


def product_detail(request, pk):
    product = Product.objects.get(pk=pk)
    return render(request, 'product_detail.html', {'product': product})


def chart(request):
    monthly_rental_data = Property.objects.filter(rent_type='월세')
    jeonse_data = Property.objects.filter(rent_type='전세')
    monthly_jeonse_data = Property.objects.filter(rent_type='월세+전세')

    # monthly_rental_data에 대한 월세 차트 표시
    # jeonse_data에 대한 전세 차트 표시
    # monthly_jeonse_data에 대한 월세+전세 차트 표시


def addr_get(request):
    city = request.POST.get('city')
    district = request.POST.get('district')
    address = request.POST.get('address')
    # print(f'"{city}", "{district}", "{address}"')
    result = city + " " + district + " " + address

    if city == "" or address == "":
        pass
    else:
        zigbang.zigbang(result)
        naver2.naver(result)
    return redirect('/home')
    # return render(request, 'homealldata.html')
