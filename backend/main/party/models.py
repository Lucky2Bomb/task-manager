from django.db import models
from django.conf import settings

class Party(models.Model):
    name = models.CharField(max_length=30, unique=True)
    author_id = models.IntegerField(blank=True, null=True)
    
    user = models.ManyToManyField(settings.AUTH_USER_MODEL)

    def __str__(self) -> str:
        return self.name

    