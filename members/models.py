from django.db import models

class Member(models.Model):
    name = models.CharField(max_length = 200)
    surname = models.CharField(max_length = 200)
    email = models.EmailField(max_length = 254)
    address = models.CharField(max_length = 500)
    phoneNumber = models.CharField(max_length = 12)
    birthday = models.DateField()

class Offering(models.Model):
    member = models.ForeignKey(Member, on_delete=models.PROTECT)
    offeringType = [
        ("USD", "UNITED STATES DOLLAR"),
        ("ZWL", "ZIMBAWEAN DOLLAR"),
        ("ZAR", "SOUTH AFRICAN RAND")
    ]
    date = models.DateField
    amount = models.DecimalField(max_digits=6, decimal_places=2)
    currency = models.CharField(max_length=3)