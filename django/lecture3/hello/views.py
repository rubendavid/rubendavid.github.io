from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def index(request):
    return HttpResponse("Hello!")

def ruben(request):
    return HttpResponse("Hello, Ruben!")

def wilma(request):
    return HttpResponse("Hello, Wilma, how are you today?")
