/**********Script for the header carousel starts*/

//////This is the JS for the automatic carousels slide change every 5 secs.
let slideIndex2 = 0;
showSlides2();
function showSlides2() {
let i;
let slides2 = document.getElementsByClassName("mySlides");
let dots = document.getElementsByClassName("dot");
for (i = 0; i < slides2.length; i++) {
    slides2[i].style.display = "none";
}
for (i = 0; i < dots.length; i++) {
dots[i].className = dots[i].className.replace("dot-active", "");
}
slideIndex2++;
if (slideIndex2 > slides2.length) {slideIndex2 = 1}
slides2[slideIndex2 - 1].style.display = "flex";
dots[slideIndex2-1].className += " dot-active";
}
setInterval(showSlides2, 5000); // Change image every 5 seconds

/*The previous and next controls for the slide carousel*/
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
showSlides(slideIndex = n);
}

//This is the base function for the slide controls
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("dot-active", "");
    }
    slides[slideIndex-1].style.display = "flex";
    dots[slideIndex-1].className += " dot-active";
}

//this controls the carousel with the left and right arrow keys 
window.addEventListener("keydown", (e) => {
if( e.key === "ArrowLeft" ) {
    plusSlides(-1)
}
else if( e.key === "ArrowRight" ) {
    plusSlides(1)
}
})

/**********Script for the header carousel ends*/



/********* Script for the  Daily Review starts*/
const dayReviews = document.getElementsByClassName("day-review")
const colorShowcases = document.getElementsByClassName("color-showcase")
const dailyReviewTitles = document.getElementsByClassName("daily-review-title")
const connectingLines = document.getElementsByClassName("connecting-line")

///This does the automatic alternate colors of the review color showcase and heading
for (let i = 0; i < colorShowcases.length; i++) {
    if(i % 2 == 0){
        colorShowcases[i].style.backgroundColor = "#FCAE1E"
        dailyReviewTitles[i].style.backgroundColor = "#0F1729"
    }else{
        colorShowcases[i].style.backgroundColor = "#0F1729"
        dailyReviewTitles[i].style.backgroundColor = "#FCAE1E"
    }
}

///This does the automatic alternate colors of the review connecting lines except for the bottom divs
for (let i = 0; i < connectingLines.length - 1; i++) {
    if(i % 2 == 0){
        connectingLines[i].style.backgroundColor = "#FCAE1E"
    }else{
        connectingLines[i].style.backgroundColor = "#0F1729"
    }
}

//This makes only 3 reviews visible at first
for (let i = 0; i < dayReviews.length; i++) {
    if(i > 2){
        dayReviews[i].classList.add("hidden")
        dayReviews[i].classList.add("md:hidden")
    }    
}

const showMoreBtn = document.getElementById("show-more-btn")


//adding onclick event on the showmore btn
showMoreBtn.addEventListener("click" , () => {
    //check if show more button is meant to show more or not
    if(showMoreBtn.innerHTML == "Show More"){
        let k = 0;
        
        //checks number of k displayed
        for (let i = 0; i < dayReviews.length; i++) {
            if(!dayReviews[i].classList.contains("hidden")){
                k += 1
            }    
        }
        
        //if k is not the whole number of day reviews, make 3 more displayed
        if(k != dayReviews.length){
            for (let a = 0; a < 3; a++) {
                dayReviews[k + a].classList.remove("hidden")       
                dayReviews[k + a].classList.remove("md:hidden")
            }
        //else if the day reviews have been shown, make the div
        //turn show less and change its function
        }else if(k == dayReviews.length){
            showMoreBtn.innerHTML = "Show Less"
            console.log("k is 7")
        }
    }else if(showMoreBtn.innerHTML == "Show Less"){
        for (let i = 3; i < dayReviews.length; i++) {
            dayReviews[i].classList.add("hidden")
            dayReviews[i].classList.add("md:hidden")
        }
        dayReviews[2].scrollIntoView()
        showMoreBtn.innerHTML = "Show More"
    }
})



/********* Script for the  Daily Review ends*/



/********** Script for Latest Contents start */



/********** Script for Latest Contents ends */