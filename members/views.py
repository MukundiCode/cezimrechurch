from django.shortcuts import render
from rest_framework.views import APIView  
from django.http import JsonResponse  
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Member
from .serializers import MemberSerializer, OfferingSerializer
from .repository import Repository
import requests
import json
from django.http import HttpResponse

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
    serializer = OfferingSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
    else:
        print("Error",serializer.errors)
    return Response(serializer.data)

@api_view(['GET'])
def getOfferings(request):
    offerings = repository.getOfferings()
    serializer = OfferingSerializer(offerings, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getOfferingsByMemberId(request, memberId):
    offerings = repository.getOfferingsByMemberId(memberId)
    serializer = OfferingSerializer(offerings, many=True)
    return Response(serializer.data)

