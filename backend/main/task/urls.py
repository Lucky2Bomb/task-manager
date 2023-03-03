from django.urls import path

from task.views import TaskAPIView
 
urlpatterns = [
    path(r'task', TaskAPIView.as_view(), name='party-list'),
]