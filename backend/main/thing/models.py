from django.db import models
from django.conf import settings


class Type(models.Model):
    name = models.CharField(max_length=30, unique=True)
    def __str__(self) -> str:
        return self.name

def upload_to(instance, filename):
    return 'images/{filename}'.format(filename=filename)

class Thing(models.Model):
    name = models.CharField(max_length=30, unique=True)
    description = models.TextField(blank=True, null=True)
    photo_url = models.ImageField(upload_to=upload_to, blank=True, null=True)
    duration = models.IntegerField(default=0)
    
    user = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, blank=True, null=True)
    type = models.ForeignKey(Type, on_delete=models.DO_NOTHING, blank=True, null=True)
    
    def __str__(self) -> str:
        return self.name
    