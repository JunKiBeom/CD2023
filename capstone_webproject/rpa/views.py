from django.shortcuts import render
from . import naver2, zigbang

def index(request):
    return render(request, 'index.html')
def home(request):
    return render(request, 'homealldata.html')

def addr_get(request):
    addr = request.POST.get('searchBtn')
    print(addr)
    # zigbang(addr)
    # naver2(addr)