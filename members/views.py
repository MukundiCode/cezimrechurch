from django.shortcuts import render
from rest_framework.views import APIView  
from django.http import JsonResponse  
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.core.serializers import serialize
from .models import Church, Member
from .serializers import MemberSerializer, OfferingInputSerializer, OfferingOutputSerializer
from .repository import Repository
import requests
import json
from django.http import HttpResponse
from django.db import connection

repository = Repository()

@api_view(['POST'])
def addMember(request):
    serializer = MemberSerializer(data=request.data)
    if serializer.is_valid():
        print("Saving...",serializer)
        serializer.save()
    else:
        print("Error",serializer.errors)
    return Response(serializer.data)

@api_view(['GET'])
def getMembers(request):
    members = repository.getMembers()
    serializer = MemberSerializer(members, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getMember(request, memberId):
    member = repository.getMemberById(memberId)
    serializer = MemberSerializer(member)
    return Response(serializer.data)

@api_view(['POST'])
def addOffering(request):
    serializer = OfferingInputSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print("Error",serializer.errors)
    return Response(serializer.data)

@api_view(['POST'])
def addChurch(request):
    Church.objects.all().delete()
    church = Church(zone = request.data['zone'],
                    subgroup = request.data['subgroup'],
                    location = request.data['location'],
                    admin = request.user)
    church.save()
    return Response(request.data)

@api_view(['GET'])
def getOfferings(request):
    offerings = repository.getOfferings()
    serializer = OfferingOutputSerializer(offerings, many = True)
    return Response(serializer.data)

@api_view(['GET'])
def getOfferingsByMemberId(request, memberId):
    offerings = repository.getOfferingsByMemberId(memberId)
    serializer = OfferingOutputSerializer(offerings, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getCurrencies(request):
    return Response(repository.getCurrencies())

