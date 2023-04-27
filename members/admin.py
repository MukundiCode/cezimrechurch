from django.contrib import admin

from .models import Member, Money, Offering, OfferingType

admin.site.register(Member)
admin.site.register(OfferingType)
admin.site.register(Offering)