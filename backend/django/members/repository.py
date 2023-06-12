from .models import Member, Offering

class Repository:

    def getMember():
        return

    def deleteMember():
        return

    def addMember(self,member):
        member.save()
        return

    def addMembers(members):
        for member in members:
            addMember(member)

    def getMembers(self):
        return Member.objects.all()
    
    def getMemberById(self, memberId):
        return Member.objects.get(pk = memberId)
    
    def deleteAllMembers(self):
        return Member.objects.all().delete()
    
    def deleteAllOfferings(self):
        return Offering.objects.all().delete()
    
    def getOfferings(self):
        return Offering.objects.all()
    
    def getOfferingsByMemberId(self, memberId):
        return Offering.objects.filter(member__pk = memberId)
    
    def getCurrencies(self):
        return Offering.CURRENCIES
    

