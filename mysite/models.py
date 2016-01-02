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
    updated = models.DateTimeField(auto_now=True)

    store = models.ForeignKey(Stores)
    user = models.ForeignKey(Users)
    
    def __str__(self):
        return self.description


class Lists(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField(null=True, blank=True)
    store = models.ManyToManyField(Stores)
    user = models.ForeignKey(Users)
    
    # good or bad 
    like = models.IntegerField(null=True, blank=True)
    dislike = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.name


class ListComment(models.Model):
    description = models.TextField(null=True, blank=True)
    create_time = models.DateTimeField(auto_now_add=True)
    updated = models.DateTimeField(auto_now=True)

    list = models.ForeignKey(Lists)
    user = models.ForeignKey(Users)

    def __str__(self):
        return self.description


class ListsStoreComment(models.Model):
    list = models.ForeignKey(Lists)
    store = models.ForeignKey(Stores)
    dish = models.TextField(null=True, blank=True)
    description = models.TextField(null=True, blank=True)


class Tags(models.Model):
    name = models.CharField(max_length=32)
    description = models.TextField()
    
    store = models.ManyToManyField(Stores)
    list = models.ManyToManyField(Lists)

    def __str__(self):
        return self.name


class StoreLike(models.Model):
    store = models.ForeignKey(Stores)
    user = models.OneToOneField(Users)


class StoreDislike(models.Model):
    store = models.ForeignKey(Stores)
    user = models.OneToOneField(Users)


class StoreCommentLike(models.Model):
    storecomment = models.ForeignKey(StoreComment)
    user = models.OneToOneField(Users)

class StoreCommentDislike(models.Model):
    storecomment = models.ForeignKey(StoreComment)
    user = models.OneToOneField(Users)


class ListLike(models.Model):
    list = models.ForeignKey(Lists)
    user = models.OneToOneField(Users)


class ListDislike(models.Model):
    list = models.ForeignKey(Lists)
    user = models.OneToOneField(Users)

class ListStorePic(models.Model):
    pic = models.ImageField(upload_to='pic_folder/')
    description = models.TextField(null=True,blank=True)
    liststorecomment = models.ForeignKey(ListsStoreComment)
