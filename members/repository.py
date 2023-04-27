from .models import Member, Offering

class Repository:

    def addMember(self,member):
        member.save()
        return

    def getMember():
        return

    def deleteMember():
        return

    def addMembers(members):
        for member in members:
            addMember(member)

    def getMembers(self):
        return Member.objects.all()
    
    def getOfferings(self):
        return Offering.objects.all()

