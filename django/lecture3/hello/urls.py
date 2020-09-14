from django.urls import path

from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("ruben", views.ruben, name="Ruben"),
    path("wilma", views.wilma, name="wilma"),
]