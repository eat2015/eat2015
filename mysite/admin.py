from django.contrib import admin
from mysite.models import *

class StoresAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    search_fields = ('name',)

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name','description')


# Register your models here.
admin.site.register(Stores,StoresAdmin)
admin.site.register(Tags,TagsAdmin)
admin.site.register(Users)
