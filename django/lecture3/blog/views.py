from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.

def greet(request, name):
    return render(request, "blog/index.html")