import '../CSS/style.scss';

document.addEventListener("DOMContentLoaded", function(event){
    console.log("ok")

    ready(); //burger menu Functionality

    headerCarousel(); //header automatic slideshow fuctionality

    function headerCarousel(){
        var headerForCarousel = document.querySelector("header")
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

});