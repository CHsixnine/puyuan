$(document).ajaxSend(function(event, xhr, settings) {
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie != '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) == (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url == origin || url.slice(0, origin.length + 1) == origin + '/') ||
            (url == sr_origin || url.slice(0, sr_origin.length + 1) == sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }
 
    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});



$(".sign_in_show").click(
    function(){
        $("#sign_up_body").hide();
        $("#sign_in_body").show();
        $('#sign_in_window').modal('show');       
        
    }
);

$("#sign_up_show").click(
    function(){
        $("#sign_up_body").show();
        $("#sign_in_body").hide();
        $('#sign_in_window').modal('show');   
    }
);

$("#sign_up_submit").click(
    function(){ 
               
        if(empty_check()){
            return;
        }

        if(password_check()){
            return;
        }     

        if(phone_check()){
            return;
        } 
        
        if(email_check()){
            return;
        } 


        $.ajax({
            url: '/terminal_svr/',                        // url位置
            dataType: "html",
            type: 'post',                   // post/get
            data: {
                "mode":"sign_up",
                "account":$("#account").val(),
                "password":$("#Password1").val(),
                "email":$("#email").val(),
                "phone":$("#phone").val(),
            },       // 輸入的資料
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },      // 錯誤後執行的函數
            success: function (response) {
                window.location.reload(true);                
            }// 成功後要執行的函數
        });

        alert("OK");
    }
);

function empty_check(){
    str = "";
    if($("#phone").val()==""){
        str += "手機 ";
    }
    if($("#email").val()==""){
        str += "Email ";
    }
    if($("#Password1").val()==""){
        str += "密碼 ";
    }
    if(str != ""){
        $("#help_block").text("請輸入您的 "+str+"!");
        return true;
    }
    else{
        return false;
    }
}

function password_check(){
    if(($("#Password1").val()).length<8){
        $("#help_block").text("密碼少於8個字元！");
        return true;
    }
    else{
        if($("#Password1").val() != $("#Password2").val()){
            $("#help_block").text("兩次密碼輸入不一致！");
            return true;
        }
        else{
            return false;
        }        
        
    }
}

function phone_check(){
    if(($("#phone").val()).length<10){
        $("#help_block").text("請輸入正確的手機號碼！");
        return true;
    }
    else{
        return false;
    }
}

function email_check(){
    $.ajax({
        url: '/terminal_svr/',                        // url位置
        dataType: "html",
        type: 'post',                   // post/get
        data: {
            "mode":"email_check",
            "email":$("email").val()
        },       // 輸入的資料
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert(XMLHttpRequest.status);
            alert(XMLHttpRequest.readyState);
            alert(textStatus);
        },      // 錯誤後執行的函數
        success: function (response) {
            if(response == ""){
                return false;
            }
            else{
                $("#help_block").html(response);
                return true;
            }
            
        }// 成功後要執行的函數
    });
}

$(function () {
    $('#datetimepicker1').datetimepicker({
        format: 'L',
        locale: 'zh-tw'
    });
});


$("#user_profile_submit").click(
    function(){
        $.ajax({
            url: '/terminal_svr/',                        // url位置
            dataType: "html",
            type: 'post',                   // post/get
            data: {
                "mode":"save_profile",
                "nickname":$("#nickname").val(),
                "birth":$("#birth").val(),
                "height":$("#height").val(),
                "weight":$("#weight").val(),
                "gender":$("#gender").val(),
                "address":$("#address").val(),
                "email":$("#email").val(),
                "phone":$("#phone").val(),
            },       // 輸入的資料
            error: function(XMLHttpRequest, textStatus, errorThrown) {
                alert(XMLHttpRequest.status);
                alert(XMLHttpRequest.readyState);
                alert(textStatus);
            },      // 錯誤後執行的函數
            success: function (response) {
                
                
            }// 成功後要執行的函數
        });
    }
   
    
);


