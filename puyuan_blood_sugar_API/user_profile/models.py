from django.db import models

# Create your models here.
class Profile(models.Model):
    user_id = models.IntegerField(blank=True,default=-1)
    user_nickname = models.CharField(max_length=64,blank=True)
    user_birthday = models.CharField(max_length=64,blank=True)
    user_height = models.FloatField(blank=True)
    user_weight = models.FloatField(blank=True)
    user_gender = models.BooleanField(blank=True)
    user_address = models.CharField(max_length=64,blank=True)
    user_email = models.CharField(max_length=64,blank=True)
    user_phone= models.CharField(max_length=64,blank=True)

class User(models.Model):
    account = models.CharField(max_length=64,blank=True)
    password = models.CharField(max_length=64,blank=True)
    email = models.CharField(max_length=64,blank=True)
    phone= models.CharField(max_length=64,blank=True)

class Blood_pressure(models.Model):
    systolic = models.FloatField(blank=True)
    diastolic = models.FloatField(blank=True)
    pulse = models.IntegerField(blank=True)
    recorded_at= models.DateTimeField(auto_now=False, auto_now_add=False, blank=True)