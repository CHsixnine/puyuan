from django.contrib import admin
from .models import Profile,User
# Register your models here.
class Profileadmin(admin.ModelAdmin):
    list_display = ("id", "user_id","user_nickname", "user_birthday", "user_height", "user_weight", "user_gender", "user_address", "user_email", "user_phone")

admin.site.register(Profile,Profileadmin)



class Useradmin(admin.ModelAdmin):
    list_display = ('id','account','password','email','phone')

admin.site.register(User,Useradmin)



