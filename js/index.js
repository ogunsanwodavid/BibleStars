/************** Script for the swiper js **********/
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    //cube effect
    /* effect: 'cube',
    cubeEffect: {
        shadow: false,
        shadowOffset : 0,
        slideShadows: false,
    }, */

    //swiper speed
    speed: 500,

    autoplay: {
        delay : 3000,
    }
});

for (let i = 0; i < swiper.pagination.bullets.length; i++) {
    swiper.pagination.bullets[i].style.borderRadius = "9999px"
}


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