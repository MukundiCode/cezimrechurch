from rest_framework import serializers
from .models import Member, Offering

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
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