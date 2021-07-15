

var a = false


function menu(){
a = true
    if(document.getElementById("menu").style.transform != "translateY(0%)"){

document.getElementById("menu").style.cssText ="transition: 1s transform ease-in-out; transform: translateY(0%); position: inherit; visibility: visible;";
document.getElementById("hiddenMenu").style.cssText =" transform: translateY(0%); position: inherit;";
document.getElementById("topRightLi").style.cssText ="flex-direction: column-reverse;";
}
else{
    document.getElementById("menu").style.cssText =" transition: 1s transform ease-in-out; transform: translateY(300%); position: absolute; visibility: hidden;";
document.getElementById("hiddenMenu").style.cssText =" transform: translateY(300%); position: absolute;";
document.getElementById("topRightLi").style.cssText ="flex-direction: column-reverse;";
}
}


window.onload = function () {
    
        setInterval(function(){
            if(window.innerWidth >1100){
            document.getElementById("menu").style.cssText ="transform: translateY(0%); position: inherit; visibility: visible;";
                a = false
                document.getElementById("hiddenMenu").style.cssText ="transition: 1s transform ease-in-out; transform: translateY(300%); position: absolute;";
            }else if(window.innerWidth <=1100 && !a ){
                document.getElementById("menu").style.cssText ="transform: translateY(300%); position: absolute; visibility: hidden;";
                a = true;
            }
        }, 1000)
            

             };
  


