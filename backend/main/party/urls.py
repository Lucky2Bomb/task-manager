from django.urls import path
from .views import PartyAPIView, PartyDestroyApiView


urlpatterns = [
    path(r'party', PartyAPIView.as_view(), name='party-list'),
    path(r'party/<int:pk>', PartyDestroyApiView.as_view(), name='party-destroy'),  
]