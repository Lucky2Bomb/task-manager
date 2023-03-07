from django.db import models
from django.conf import settings


class Member(models.Model):
    user = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE
    )

    def __str__(self) -> str:
        return self.user.username


class Party(models.Model):
    name = models.CharField(max_length=30, unique=True)

    member = models.ManyToManyField(Member)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.DO_NOTHING, null=True, blank=True)

    def __str__(self) -> str:
        return self.name
