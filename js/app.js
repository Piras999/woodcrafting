import '../CSS/style.scss';

document.addEventListener("DOMContentLoaded", function(event){
    console.log("ok")

    ready(); //burger menu Functionality

    headerCarousel(); //header automatic slideshow fuctionality

    imgSlider(); //imgsectionslider

    function headerCarousel(){
        var headerForCarousel = document.querySelector("header");
        console.log(headerForCarousel.classList);


        if (headerForCarousel.classList.value === ""){
            headerForCarousel.classList.add("backgroundChange")
            setTimeout(headerCarousel, 7000);
        }else if (headerForCarousel.className === "backgroundChange"){
            headerForCarousel.classList.remove("backgroundChange");
            headerForCarousel.classList.add("backgroundChange1")
            setTimeout(headerCarousel, 7000);
        }else if(headerForCarousel.className === "backgroundChange1"){
            headerForCarousel.classList.remove("backgroundChange1");
            headerForCarousel.classList.add("backgroundChange2")
            setTimeout(headerCarousel, 7000);
        }else if(headerForCarousel.className === "backgroundChange2"){
            headerForCarousel.classList.remove("backgroundChange2");
            headerForCarousel.classList.add("backgroundChange3")
            setTimeout(headerCarousel, 7000);
        }else if(headerForCarousel.className === "backgroundChange3"){
            headerForCarousel.classList.remove("backgroundChange3");
            headerForCarousel.classList.add("backgroundChange")
            setTimeout(headerCarousel, 7000);
        }
    }
    



    function ready(){
        const menuTab = document.querySelector(".menu-tab");
        const menuHide = document.querySelector(".menu-hide");
        const menuStrip = document.querySelector(".menuStrip");

        console.log(menuTab);
        console.log(menuHide);
        console.log(menuStrip);


        menuTab.addEventListener("click", function(){
            menuHide.classList.toggle("show")
            menuTab.classList.toggle("active")
        });

        menuStrip.addEventListener("click", function(){
            menuHide.removeClass("show");
            menuTab.removeClass("active");
        });
    }

    function imgSlider() {
        var nextPicture = document.querySelector(".nav");
        var prevPicture = document.querySelector(".nav1");
        var listLi = document.querySelectorAll(".imgList");

        var counter = 0;
        listLi[counter].classList.remove('hidden');

        nextPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if(counter >= listLi.length-1){
                counter = 0;
            }else{
                counter++;
            }
            listLi[counter].classList.remove('hidden');
        });

        prevPicture.addEventListener("click", function () {
            listLi[counter].classList.add('hidden');
            if(counter === 0){
                counter = listLi.length-1;
            }else{
                counter--;
            }
            listLi[counter].classList.remove('hidden');
        });
    }

});