from django.urls import path, include
from . import views
from django.contrib.auth.models import User
from rest_framework import routers, serializers, viewsets

urlpatterns = [
    path('', views.getMembers),
    path('getMember/<memberId>', views.getMember, name = 'getMember'),
    path('addMember', views.addMember, name = 'addMember'),
    path('addOffering', views.addOffering, name = 'addOffering'),
    path('getOfferings', views.getOfferings, name = 'getOfferings'),
    path('getOfferingsByMemberId/<memberId>', views.getOfferingsByMemberId, name = 'getOfferingsByMemberId'),
    path('currencies', views.getCurrencies, name = 'getCurrencies'),
]