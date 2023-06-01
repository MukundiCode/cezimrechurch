from rest_framework import serializers
from .models import Member, Offering, Church
from rest_framework.fields import CurrentUserDefault

class MemberSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Member
        fields = "__all__"

class ChurchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Church
        fields = "__all__"

class OfferingOutputSerializer(serializers.ModelSerializer):
    member = MemberSerializer()
    class Meta:
        model = Offering
        fields = "__all__"

class OfferingInputSerializer(serializers.ModelSerializer):
    class Meta:
        model = Offering
        fields = "__all__"