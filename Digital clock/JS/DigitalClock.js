function currentDate(){
    var date=new Date();
    var dd= date.getDate();
    var mo=date.getMonth();
    var yy= date.getFullYear();
    var dy=date.getDay();
    if(dd<=9){
        dd="0"+dd;
    }
    var month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
    mo=month[mo];
    var days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat","Sun"];
    dy=days[dy];
    var curDate= dd+"/"+mo+"/"+yy;
    document.getElementById("date").innerHTML=curDate;
    document.getElementById("day").innerHTML=dy;
}
setInterval(currentDate,1000);
function dateoutput(){
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    var am_pm="Am";
    if(hh>=12){
        am_pm="Pm";
        if(hh>=13){
            hh-=12;
        }
    }
    if(hh==0){
        hh=12;
    }
    if(hh<=9){
        hh="0"+hh;
    }
    if(mm<=9){
        mm="0"+mm
    }
    if(ss<=9){
        ss="0"+ss
    }
    var time=hh+":"+mm+" "+am_pm;
    document.getElementById("hours12").innerHTML=time;
    document.getElementById("sec").innerHTML=ss;
    setTimeout(dateoutput,1000);
}
dateoutput();
function dateoutput24(){
    var date= new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var currentHr=hh+":"+mm;
    document.getElementById("hours24").innerHTML=currentHr;
}
setInterval(dateoutput24,1000);
var num=0;
function toggleButton(){
    num++;
    if(num%2==0){
        document.getElementById("button").style.left="0px";
        document.getElementById("button").style.backgroundColor="black";
        document.getElementById("toggle").style.backgroundColor="white";
        document.getElementById("hours12").style.display="block";
        document.getElementById("hours24").style.display="none";
        document.getElementById("button").style.transition="all 0.5s";
        document.getElementById("toggle").style.transition="all 0.5s";
    }
    else{
        document.getElementById("button").style.left="3vw";
        document.getElementById("button").style.backgroundColor="white";
        document.getElementById("toggle").style.backgroundColor="black";
        document.getElementById("hours12").style.display="none";
        document.getElementById("hours24").style.display="block";
        document.getElementById("button").style.transition="all 0.5s";
        document.getElementById("toggle").style.transition="all 0.5s";
    }
}
function bgImg(){
    var date= new Date();
    var dy=date.getDay();
    var arrImg=["sun.jpg","mon.jpg","tue.jpg","wed.jpg","thu.jpg","fri.jpg","sat.jpg"];
    document.body.style.backgroundImage=`url(./Asset/${arrImg[dy]})`
}
bgImg();

var audio= new Audio("././Asset/glossy.mp3");
var allInp=document.querySelectorAll("input");
function userData(){
var currentDate= new Date;
var dd=currentDate.getDate();
var mo=currentDate.getMonth()+1;
var yy=currentDate.getFullYear();

var hh=currentDate.getHours();
var min=currentDate.getMinutes();

if(dd<=9){
    dd="0"+dd;
}
if(mo<=9){
    mo="0"+mo;
}
if(hh<=9){
    hh="0"+hh;
}
if(min<=9){
    min="0"+min;
}

var currentddmmyy=`${yy}-${mo}-${dd}`
var currentTime=`${hh}:${min}`
var userDate=allInp[1].value;
var userTime=allInp[2].value;
if(userDate==currentddmmyy && userTime==currentTime){
audio.play();
}
}
setInterval(userData,1000)
function closeAlaramWindow(){
    document.querySelector("#containerAlaram").style.display="none";
}
function openAlaramWindow(){
    document.querySelector("#containerAlaram").style.display="flex";
}