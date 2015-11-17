from django.db import models
from django.db import migrations


class Users(models.Model):
    username = models.CharField(max_length=32)
    password = models.CharField(max_length=32)
    email = models.EmailField()

    updated = models.DateTimeField(auto_now=True)
    created = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['created']

    def __str__(self):
        return self.username


class Stores(models.Model):
    name = models.CharField(max_length=32)
    good = models.IntegerField(null=True, blank=True)
    bad = models.IntegerField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    location = models.TextField(null=True, blank=True)
    fan_page = models.URLField(null=True, blank=True)
    website = models.URLField(null=True, blank=True)

    class Meta:
        ordering = ['good']

    def __str__(self):
        return self.name


class StoreComment(models.Model):
    description = models.TextField()
    good = models.IntegerField(null=True, blank=True)
    bad = models.IntegerField(null=True, blank=True)
    create_time = models.DateTimeField(auto_now_add=True)

    store = models.ForeignKey(Stores)
    user = models.OneToOneField(Users)
    
    def __str__(self):
        return self.description



class Tag(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()

    stores = models.ManyToManyField(Stores)
    # lists = models.ManyToManyField(Lists)

    def __str__(self):
        return self.name



