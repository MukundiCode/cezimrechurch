from django.urls import path, include
from . import views
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

urlpatterns = [
    path('', views.getMembers),
    path('addMember', views.addMember),
    path('addOffering', views.addOffering),
]