from django.shortcuts import render
from rest_framework.views import APIView  
from django.http import JsonResponse  
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.exceptions import ValidationError, ParseError, NotFound
from django.core.serializers import serialize
from .models import Church, Member
from .serializers import MemberSerializer, OfferingInputSerializer, OfferingOutputSerializer
from .repository import Repository
import requests
import json
from django.http import HttpResponse
from django.db import connection
from django.core.validators import validate_email
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated

repository = Repository()

@api_view(['POST'])
def addMember(request):
    try:
        validate_email(request.data['email'])
        member = Member(name = request.data['name'],
                        surname = request.data['surname'],
                        email = request.data['email'],
                        address = request.data['address'],
                        phoneNumber = request.data['phoneNumber'],
                        birthday = request.data['birthday'],
                        church = Church.objects.filter(admin_id = request.user.id).first())
        member.save()
    except :
        raise ValidationError
    return Response(request.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getMembers(request):
    try:
        members = repository.getMembers()
        serializer = MemberSerializer(members, many=True)
    except:
        raise NotFound
    return Response(serializer.data)

@api_view(['GET'])
def getMember(request, memberId):
    try:
        member = repository.getMemberById(memberId)
        serializer = MemberSerializer(member)
    except:
        raise NotFound
    return Response(serializer.data)

@api_view(['POST'])
def addOffering(request):
    try:
        serializer = OfferingInputSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
    except:
        raise ValidationError
    return Response(serializer.data)

@api_view(['POST'])
def addChurch(request):
    try:
        Church.objects.all().delete()
        church = Church(zone = request.data['zone'],
                        subgroup = request.data['subgroup'],
                        location = request.data['location'],
                        admin = request.user)
        church.save()
    except:
        raise ValidationError
    return Response(request.data)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def getOfferings(request):
    try:
        offerings = repository.getOfferings()
        serializer = OfferingOutputSerializer(offerings, many = True)
    except:
        raise NotFound
    return Response(serializer.data)

@api_view(['GET'])
def getOfferingsByMemberId(request, memberId):
    try:
        offerings = repository.getOfferingsByMemberId(memberId)
        serializer = OfferingOutputSerializer(offerings, many=True)
    except:
        raise NotFound
    return Response(serializer.data)

@api_view(['GET'])
def getCurrencies(request):
    return Response(repository.getCurrencies())

