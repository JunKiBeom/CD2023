import datetime as dt

from django.db.models import Avg
from django.shortcuts import render

from . import naver2, zigbang, df
from .models import Product, ActualPrice

city = ""
district = ""
address = ""
result = ""  # 주소, 여러 메서드에서 사용 가능하게 전역 선언

def index(request):
    return render(request, 'index.html')


def home(request):
    return render(request, 'home.html')


def test_home(request):
    return render(request, 'test_home.html')

def djangotest(request):
    return render(request, 'djangotest.html')

def skyscanner(request):
    return render(request, 'skyscanner.html')


def showlist(request):
    return render(request, 'showlist.html')


def product_list(request):
    products = Product.objects.all()
    return render(request, 'product_list.html', {'product_list': products})


def product_detail(request, pk):
    product = Product.objects.get(pk=pk)
    return render(request, 'product_detail.html', {'product': product})


def addr_get(request):
    city = request.POST.get('city')
    district = request.POST.get('district')
    address = request.POST.get('address')
    # print(f'"{city}", "{district}", "{address}"')
    result = city + " " + district + " " + address

    earliest_product = Product.objects.filter(address__contains=address).order_by('gen_date').first()
    if (dt.date.today() - earliest_product.gen_date).days > 5:
        zigbang.zigbang(result)
        naver2.naver(result)
        df.df_run(result)
    else:
        print("Pass Df to DB")
        pass
    # return redirect(request.META.get('HTTP_REFERER', 'redirect_if_referer_not_found'))

    print('-' * 10, 'ppa 연산')
    dis = district.replace('시 ', '')
    sql = city + " " + dis

    # select avg(ppa) from rpa_product where address like '%경기도 고양시 덕양구%'
    act_average_ppa = ActualPrice.objects.filter(address__contains=sql).aggregate(avg_ppa=Avg('ppa'))
    get_average_ppa = Product.objects.filter(address__contains=result).aggregate(avg_ppa=Avg('ppa'))
    print(sql, act_average_ppa['avg_ppa'], get_average_ppa['avg_ppa'])
    print(f'"{city}", "{district}", "{address}"')

    products = Product.objects.all()

    data = {
        'act_average_ppa': float(act_average_ppa['avg_ppa']),
        'get_average_ppa': float(get_average_ppa['avg_ppa']),
        'addr': result,
        'product_list': products
    }

    return render(request, 'showlist.html', data)
    # return HttpResponseRedirect('/showlist')