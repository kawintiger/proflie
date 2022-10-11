window.onload = pageLoad;
function pageLoad(){
    var face = document.getElementById("fb");
    var ins = document.getElementById("ig");
    face.onclick = linkfacebook;
    ins.onclick = linkinstagram;
   
    var click = document.getElementById("pj");
    var A4 = document.getElementById("a4");
    var A5 = document.getElementById("a5");
    var A6 = document.getElementById("a6");
    var A7 = document.getElementById("a7");

    A4.onclick = link4;
    A5.onclick = link5;
    A6.onclick = link6;
    A7.onclick = link7;

}
function linkfacebook(){
    location.href ="https://www.facebook.com/kawin.hongmala.5/";
}
function linkinstagram(){
    location.href ="https://www.instagram.com/?next=%2F";
}

function link4(){
    location.href ="https://kawintiger.github.io/as4/recipe.html";
}
function link5(){
    location.href ="https://kawintiger.github.io/a5/";
}
function link6(){
    location.href ="https://kawintiger.github.io/as6/register.html";
}
function link7(){
    location.href ="https://kawintiger.github.io/AS7/";
}
