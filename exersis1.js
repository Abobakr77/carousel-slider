var slideImages = Array.from(document.querySelectorAll(".Slide-control img"));
console.table(slideImages);

var slideCount = slideImages.length;

var curentSlide = 1;

var slideNumber = document.querySelector(".slide");

var nextButton = document.querySelector(".next"),
    prevButton = document.querySelector(".prev");

    nextButton.onclick = slideNext;
    prevButton.onclick = slidePrev;


var pagination = document.querySelector(".indicator");

var paginationUl = document.createElement("ul");

paginationUl.setAttribute("id", "pagination-ul");

for(var i = 1; i <= slideCount; i++){
    var paginationLi = document.createElement("li");
     paginationLi.setAttribute("data-index", i);
     paginationLi.appendChild(document.createTextNode(i));
     paginationUl.appendChild(paginationLi);
}

pagination.appendChild(paginationUl);

var getIdOfUL = document.getElementById("pagination-ul");

var paginationBullets = Array.from(document.querySelectorAll("#pagination-ul li"));



    for(var i = 0; i < paginationBullets.length; i++){
        paginationBullets[i].onclick = function(){
            curentSlide = parseInt(this.getAttribute("data-index"));
            theChecker();
        }
    }


theChecker();


function slideNext(){
    if(nextButton.classList.contains("disabled")){
        return false;
    }else {
        curentSlide ++;
        theChecker();
    }
}

function slidePrev(){
    if(prevButton.classList.contains("disabled")){
        return false;
    }else {
        curentSlide--;
        theChecker();
    }
}



function theChecker(){
    slideNumber.textContent = "Slide # " + (curentSlide) + " of " + (slideCount);

    removeAll();

    slideImages[curentSlide - 1].classList.add("active");

    getIdOfUL.children[curentSlide - 1].classList.add("active");

    if(curentSlide == 1){

        prevButton.classList.add("disabled");
    }else {
        prevButton.classList.remove("disabled");
    }

    if(curentSlide == slideCount){
        nextButton.classList.add("disabled");
    }else {
        nextButton.classList.remove("disabled");
    }

   

}




function removeAll(){
    slideImages.forEach(function(image){
        image.classList.remove("active");
    });

    paginationBullets.forEach(function(bullets) {
    
        bullets.classList.remove("active");
        
    });
}

