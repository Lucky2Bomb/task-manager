from rest_framework import generics
from rest_framework.permissions import IsAuthenticated

from task.models import Task
from task.serializers import TaskSerializer

class TaskAPIView(generics.ListCreateAPIView):
    queryset = Task.objects.all()
    serializer_class = TaskSerializer
    permission_classes = (IsAuthenticated,)
