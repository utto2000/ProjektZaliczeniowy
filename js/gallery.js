
let galleryImages = document.querySelectorAll(".gallery-img");
let getLatestOpenedImg;
let windowWidth = window.innerWidth;
if(galleryImages){
    galleryImages.forEach(function(image , index){
        image.onclick = function(){
            let getElementCss = window.getComputedStyle(image);
            let getFullImgUrl = getElementCss.getPropertyValue("background-image");
            let getImgUrlPos = getFullImgUrl.split("img/");
            let setNewImgUrl = getImgUrlPos[1].replace('")','');
            
            getLatestOpenedImg = index + 1;
            let container = document.body;
            let newImgWindow = document.createElement("div")
            container.appendChild(newImgWindow);
            newImgWindow.setAttribute("class", "img-window")
            newImgWindow.setAttribute("onclick", "closeImg()")

            let newImg = document.createElement("img");
            console.log(newImg)
            newImgWindow.appendChild(newImg);
            console.log( setNewImgUrl)
            newImg.setAttribute("src","./img/" + setNewImgUrl)
            newImg.setAttribute("id","current-img" )



            newImg.onload = function(){

                let imgWidth = this.width;
                let calcImgToEdge = ((windowWidth - imgWidth) /2) -80;

                let newPrevBtn = document.createElement("a");
                let btnPrevText = document.createTextNode("Prev");
                newPrevBtn.appendChild(btnPrevText);
                container.appendChild(newPrevBtn);
                newPrevBtn.setAttribute("class", "img-btn-prev");
                newPrevBtn.setAttribute("onclick", "changeImg(1)");
                newPrevBtn.style.cssText = "left: "+ calcImgToEdge+"px";
                console.log()

                let newNextBtn = document.createElement("a");
                let btnNextText = document.createTextNode("Next");
                newNextBtn.appendChild(btnNextText);
                container.appendChild(newNextBtn);
                newNextBtn.setAttribute("class", "img-btn-next");
                newNextBtn.setAttribute("onclick", "changeImg(0)");
                newNextBtn.style.cssText = "right: "+ calcImgToEdge+"px";
        }
        }
    })

   

    
}
function closeImg(){
    document.querySelector(".img-window").remove();
    document.querySelector(".img-btn-next").remove();
    document.querySelector(".img-btn-prev").remove();
}

function changeImg(changeDir){
    document.querySelector("#current-img").remove();

    let getImgWindow = document.querySelector(".img-window");
    let newImg = document.createElement("img");
    getImgWindow.appendChild(newImg);


    let calcNewImg;
    if(changeDir === 1){
        calcNewImg = getLatestOpenedImg + 1;
        if(calcNewImg>galleryImages.length){
            calcNewImg = 1;
        }
    }else if(changeDir === 0){
        calcNewImg = getLatestOpenedImg -1;
        if(calcNewImg< 1){
            calcNewImg = galleryImages.length;
        }
    }
    newImg.setAttribute("src", "./img/" +calcNewImg+".jpg");

    newImg.setAttribute("id", "current-img")
    getLatestOpenedImg = calcNewImg;

    newImg.onload = function(){
        let imgWidth = this.width;
        let calcImgToEdge = ((windowWidth - imgWidth) /2) -80;

        let nextBtn = document.querySelector(".img-btn-next");
        nextBtn.style.cssText = "right: "+ calcImgToEdge+"px";

        let prevtBtn = document.querySelector(".img-btn-prev");
        prevtBtn.style.cssText = "left: "+ calcImgToEdge+"px";
    }
}


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}