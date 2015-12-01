from django.contrib import admin
from mysite.models import *

class StoresAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    search_fields = ('name',)

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    search_fields = ('name',)

class StoreCommentAdmin(admin.ModelAdmin):
    list_display = ('store','user','description','good','bad')
    search_fields = ('store',)

class ListsAdmin(admin.ModelAdmin):
    list_display = ( 'user','name','description')
    search_fields = ('user',)

class ListsStoreCommentAdmin(admin.ModelAdmin):
    list_display = ( 'dish','description')
    search_fields = ('list',)

# Register your models here.
admin.site.register(Users)
admin.site.register(Stores, StoresAdmin)
admin.site.register(Tags, TagsAdmin)
admin.site.register(StoreComment, StoreCommentAdmin)
admin.site.register(Lists, ListsAdmin)
admin.site.register(StoreLike)
admin.site.register(StoreDislike)
admin.site.register(ListLike)
admin.site.register(ListDislike)
admin.site.register(ListsStoreComment, ListsStoreCommentAdmin)
admin.site.register(ListComment)
