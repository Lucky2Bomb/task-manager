from django.urls import path
from knox import views as knox_views

from .views import LoginView, RegisterView, UserView

urlpatterns = [
     path(r'login', LoginView.as_view(), name='login'),
     path(r'register', RegisterView.as_view(), name='register'),
     path(r'user', UserView.as_view(), name="user"),
     path(r'logout', knox_views.LogoutView.as_view(), name='logout'),
     path(r'logout-all', knox_views.LogoutAllView.as_view(), name='logoutall'),
]
