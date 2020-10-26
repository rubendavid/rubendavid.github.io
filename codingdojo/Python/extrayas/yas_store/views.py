from django.shortcuts import render, HttpResponse, redirect
from django.contrib import messages
import bcrypt
from . models import *
import datetime

def index(request):
	context = {}
	return render(request, 'yas_store/index.html', context)

def signin(request):
    context = {}
    return render(request, 'yas_store/signin.html', context)


def signup(request):
    context = {}
    return render(request, 'yas_store/signup.html', context)

def register(request):
    if request.method == "POST":
        errors = User.objects.reg_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/')

        user = User.objects.filter(email=request.POST['email'])
        if len(user) > 0:
            messages.error(request, "Email is already in use.",extra_tags="email")
            return redirect('/')
        pw = bcrypt.hashpw(
            request.POST['password'].encode(), bcrypt.gensalt()).decode()
        User.objects.create(fname=request.POST['fname'], lname=request.POST['lname'], email=request.POST['email'], password=pw)
        request.session['user_id'] = User.objects.last().id
        return redirect('/yas')
    else:
        return redirect("/")

def login(request):
    if request.method == "POST":
        errors = User.objects.login_validator(request.POST)
        if len(errors) > 0:
            for key, value in errors.items():
                messages.error(request, value, extra_tags=key)
            return redirect('/')

        user = User.objects.filter(email=request.POST['login_email'])
        if len(user) == 0:
            messages.error(request, "Invalid Email/Password", extra_tags="login")
            return redirect('/')

        if not bcrypt.checkpw(request.POST['login_password'].encode(), user[0].password.encode()):
            messages.error(request, "Invalid Email/Password", extra_tags="login")
            return redirect('/')

        request.session['user_id'] = user[0].id
        return redirect('/yas')
    else:
        return redirect('/')

def account(request):
    return render(request, 'yas_store/account.html')

def yas(request):
    products = Product.objects.all()
    
    context = {
        'products': Product.objects.all()
    }
    return render(request, 'yas_store/yas.html', context)


def cart(request):
	return render(request, 'yas_store/cart.html')


def checkout(request):
	return render(request, 'yas_store/checkout.html')


def logout(request):
    if 'user_id' in request.session:
        del request.session['user_id']
    return redirect('/')
