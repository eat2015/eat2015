from django.contrib import admin
from mysite.models import *

class TagsAdmin(admin.ModelAdmin):
    list_display = ('name','description')
    search_fields = ('name',)

class StoresAdmin(admin.ModelAdmin):
    list_display = ('name','description','good','bad')
    search_fields = ('name',)

class StoreCommentAdmin(admin.ModelAdmin):
    list_display = ('store','user','description','good','bad')
    list_filter = ('store__name',)
    search_fields = ('store__name',)

class StoreLikeAdmin(admin.ModelAdmin):
    list_display = ('store','user')
    list_filter = ('store__name',)
    search_fields = ('store__name',)

class StoreDislikeAdmin(admin.ModelAdmin):
    list_display = ('store','user')
    list_filter = ('store__name',)
    search_fields = ('store__name',)

class ListsAdmin(admin.ModelAdmin):
    list_display = ( 'user','name','description','like','dislike')
    list_filter = ('user__username',)
    search_fields = ('user__username',)

class ListsStoreCommentAdmin(admin.ModelAdmin):
    list_display = ( 'list','store','dish','description')
    list_filter = ('list__name',)
    search_fields = ('list__name',)

class ListLikeAdmin(admin.ModelAdmin):
    list_display = ('list','user')
    list_filter = ('list__name',)
    search_fields = ('list__name',)

class ListDislikeAdmin(admin.ModelAdmin):
    list_display = ('list','user')
    list_filter = ('list__name',)
    search_fields = ('list__name',)

# Register your models here.
admin.site.register(Users)
admin.site.register(Tags, TagsAdmin)
admin.site.register(Stores, StoresAdmin)
admin.site.register(StoreComment, StoreCommentAdmin)
admin.site.register(StoreLike, StoreLikeAdmin)
admin.site.register(StoreDislike, StoreDislikeAdmin)

admin.site.register(Lists, ListsAdmin)
admin.site.register(ListComment)
admin.site.register(ListsStoreComment, ListsStoreCommentAdmin)
admin.site.register(ListLike, ListLikeAdmin)
admin.site.register(ListDislike, ListDislikeAdmin)


