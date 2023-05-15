from django.db import models
from datetime import date

class Member(models.Model):
    name = models.CharField(max_length = 200, null = False)
    surname = models.CharField(max_length = 200, null = False)
    email = models.EmailField(max_length = 254, null = True)
    address = models.CharField(max_length = 500, null = True)
    phoneNumber = models.CharField(max_length = 12, null = False)
    birthday = models.DateField(null = False)

class Offering(models.Model):
    member = models.ForeignKey(Member, on_delete=models.PROTECT, null = False)
    CURRENCIES = [
        ("USD", "UNITED STATES DOLLAR"),
        ("ZWL", "ZIMBAWEAN DOLLAR"),
        ("ZAR", "SOUTH AFRICAN RAND")
    ]
    currency = models.CharField(max_length=3, default="USD", null=False)
    date = models.DateField(null=False, default=date.today())
    amount = models.DecimalField(max_digits=6, decimal_places=2, null = False)
    offeringType = models.CharField(max_length=15, default="General", null = False)