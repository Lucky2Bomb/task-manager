from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from party.serializers import PartySerializer

class PartyAPIView(generics.ListCreateAPIView):
    serializer_class = PartySerializer
    permission_classes = (IsAuthenticated,)
    
