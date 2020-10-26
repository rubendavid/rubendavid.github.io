from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='home'),
    path('yas/', views.yas, name='store'),
    path('cart/', views.cart, name='cart'),
    path('checkout/', views.checkout, name='checkout'),
    path('signup/', views.signup, name='signup'),
    path('register/', views.register, name='register'),
    path('account/', views.account, name='account'),
    path('signin/', views.signin, name='signin'),
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
