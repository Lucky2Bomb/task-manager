from rest_framework import generics
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework import status, viewsets
from rest_framework.response import Response
from django.utils.translation import gettext as _

from .models import Party
from .serializers import PartySerializer

class PartyAPIView(generics.ListCreateAPIView):
    serializer_class = PartySerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        author = self.request.user
        return Party.objects.filter(author=author)

    def post(self, request, *args, **kwargs):
        if (int(request.data["author"]) == int(request.user.id)):
            return super().post(request, *args, **kwargs)
        else:
            return Response(data=_("you don't owner of group"), status=status.HTTP_403_FORBIDDEN)
        
class PartyDestroyApiView(generics.RetrieveDestroyAPIView):
    serializer_class = PartySerializer
    permission_classes = (IsAuthenticated,)
    parser_classes = (MultiPartParser, FormParser)

    def get_queryset(self):
        author = self.request.user
        return Party.objects.filter(author=author)
    
    def get(self, request, *args, **kwargs):
        print(request.dat)
        return super().get(request, *args, **kwargs)
    
    def post(self, request, *args, **kwargs):
        if (int(request.data["author"]) == int(request.user.id)):
            return super().post(request, *args, **kwargs)
        else:
            return Response(data=_("you don't owner of group"), status=status.HTTP_403_FORBIDDEN)

