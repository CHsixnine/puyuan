from django.shortcuts import render
from django.template.loader import get_template
from django.http import HttpResponse
from user_profile.models import Profile,User
from django.contrib import auth
# from user_profile.models import Member
from django.views.decorators.csrf import csrf_exempt,csrf_protect
from dotenv import load_dotenv
import os
load_dotenv()
# Create your views here.
@csrf_protect
def userprofile(request):
    str = "XXX"
    return render(request,'userProfile.html',locals())

@csrf_protect
def index(request):
    str = "XXX"
    return render(request,'index.html',locals())

@csrf_protect
def terminal_svr(request):
    rep = ""
    if request.POST['mode'] == "email_check":
        print(request.POST['mode'])
        mode = "email_check"
        try:
            user = User.objects.filter(email=request.POST['email'])            
        except:
            rep = ""            
        else:
            rep = "這個Email已經註冊過了！"
    elif request.POST['mode'] == "save_profile":
        mode = request.POST['mode']
        _id = -1
        nickname = request.POST['nickname']
        birth = request.POST['birth']
        height = request.POST['height']
        weight = request.POST['weight']
        if request.POST['gender'] == "0":
            gender = 0
        else:
            gender = 1
        address = request.POST['address']
        email = request.POST['email']
        phone = request.POST['phone']

        try:
            user = Profile.objects.filter(user_id=request.POST['email'])            
        except:
            rep = ""            
        else:
            rep = "這個Email已經註冊過了！"

        try:
            Profile.objects.create(user_id=_id, user_nickname=nickname, user_birthday=birth, user_height=height, user_weight=weight, user_gender=gender, user_address=address, user_email=email, user_phone=phone)
        except:
            output = {"status":"1"}
        else:
            output = {"status":"0"}        
            s = "OK" 
    elif request.POST['mode'] == "sign_up":
        mode = request.POST['mode']
        account = request.POST['account']
        password = request.POST['password']
        email = request.POST['email']
        phone = request.POST['phone']
        try:
            User.objects.create(account=account, password=password, email=email, phone=phone)
        except:
            output = {"status":"1"}
        else:
            output = {"status":"0"}        
            s = "OK" 

    return render(request,'terminal_svr.html',locals())

def test(request):
    print(os.getenv('TEST'))
    return HttpResponse(True)