from django.db import models
from django.conf import settings

from thing.models import Thing
from party.models import Party

class Status(models.Model):
    name = models.CharField(max_length=30, unique=True)
    def __str__(self) -> str:
        return self.name
    
def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Task(models.Model):
    name = models.CharField(max_length=64)
    description = models.TextField(blank=True, null=True)
    duration = models.IntegerField(default=0, blank=True, null=True)
    deadline = models.DateTimeField(auto_now_add=True, blank=True, null=True)
    photo_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, blank=True, null=True)
    party = models.ManyToManyField(Party)
    status = models.ForeignKey(Status, on_delete=models.DO_NOTHING, blank=True, null=True)
    def __str__(self) -> str:
        return self.name
