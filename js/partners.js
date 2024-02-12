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



/******** Function to be completed by backend dev *****/

function submitSignUp() {
    showModal()
}

/********** Script that shows contribution amount itself ********/
var contribution = document.getElementById("contribution")
var amount = document.getElementById("amount")

// This JSON stores the item name and respective price
const contributionJSON = [
    { value: "item_1", amount: "price_1" },
    { value: "item_2", amount: "price_2" },
    { value: "item_3", amount: "price_3" },
    { value: "item_4", amount: "price_4" },
    { value: "item_5", amount: "price_5" },
    { value: "item_6", amount: "price_6" },
    { value: "item_7", amount: "price_7" },
    { value: "item_8", amount: "price_8" },
    { value: "item_9", amount: "price_9" },
    { value: "item_10", amount: "price_10" },
    { value: "item_11", amount: "price_11" },
    { value: "item_12", amount: "price_12" },
    { value: "item_13", amount: "price_13" },
    { value: "item_14", amount: "price_14" },
    { value: "item_15", amount: "price_15" },
    { value: "item_16", amount: "price_16" },
    { value: "item_17", amount: "price_17" },
    { value: "item_18", amount: "price_18" },
    { value: "item_19", amount: "price_19" },
    { value: "item_20", amount: "price_20" },
    { value: "item_21", amount: "price_21" },
    { value: "item_22", amount: "price_22" },
    { value: "item_23", amount: "price_23" },
    { value: "item_24", amount: "price_24" },
    { value: "item_25", amount: "price_25" },
    { value: "item_26", amount: "price_26" },
    { value: "item_27", amount: "price_27" },
    { value: "item_28", amount: "price_28" },
    { value: "item_29", amount: "price_29" },
    { value: "item_30", amount: "price_30" },
    { value: "item_31", amount: "price_31" },
    { value: "item_32", amount: "price_32" },
    { value: "item_33", amount: "price_33" },
    { value: "item_34", amount: "price_34" },
    { value: "item_35", amount: "price_35" },
    { value: "item_36", amount: "price_36" },
    { value: "item_37", amount: "price_37" },
    { value: "item_38", amount: "price_38" },
    { value: "item_39", amount: "price_39" },
    { value: "item_40", amount: "price_40" },
    { value: "item_41", amount: "price_41" },
    { value: "item_42", amount: "price_42" },
    { value: "item_43", amount: "price_43" },
    { value: "item_44", amount: "price_44" },
    { value: "item_45", amount: "price_45" },
    { value: "item_46", amount: "price_46" },
    { value: "item_47", amount: "price_47" },
    { value: "item_48", amount: "price_48" },
    { value: "item_49", amount: "price_49" },
    { value: "item_50", amount: "price_50" },
    { value: "item_51", amount: "price_51" },
    { value: "item_52", amount: "price_52" },
    { value: "item_53", amount: "price_53" },
    { value: "item_54", amount: "price_54" },
    { value: "item_55", amount: "price_55" },
    { value: "item_56", amount: "price_56" },
    { value: "item_57", amount: "price_57" },
    { value: "item_58", amount: "price_58" },
    { value: "item_59", amount: "price_59" },
    { value: "item_60", amount: "price_60" },
    { value: "item_61", amount: "price_61" },
    { value: "item_62", amount: "price_62" },
    { value: "item_63", amount: "price_63" },
    { value: "item_64", amount: "price_64" },
    { value: "item_65", amount: "price_65" },
    { value: "item_66", amount: "price_66" },
    { value: "item_67", amount: "price_67" },
    { value: "item_68", amount: "price_68" },
    { value: "item_69", amount: "price_69" },
    { value: "item_70", amount: "price_70" },
    { value: "item_71", amount: "price_71" },
    { value: "item_72", amount: "price_72" },
    { value: "item_73", amount: "price_73" },
    { value: "item_74", amount: "price_74" },
    { value: "item_75", amount: "price_75" },
    { value: "item_76", amount: "price_76" },
    { value: "item_77", amount: "price_77" },
    { value: "item_78", amount: "price_78" },
    { value: "item_79", amount: "price_79" },
    { value: "item_80", amount: "price_80" },
    { value: "item_81", amount: "price_81" },
    { value: "item_82", amount: "price_82" },
    { value: "item_83", amount: "price_83" },
    { value: "item_84", amount: "price_84" },
    { value: "item_85", amount: "price_85" },
    { value: "item_86", amount: "price_86" },
    { value: "item_87", amount: "price_87" },
    { value: "item_88", amount: "price_88" },
    { value: "item_89", amount: "price_89" },
    { value: "item_90", amount: "price_90" },
    { value: "item_91", amount: "price_91" },
    { value: "item_92", amount: "price_92" },
    { value: "item_93", amount: "price_93" },
    { value: "item_94", amount: "price_94" },
    { value: "item_95", amount: "price_95" },
    { value: "item_96", amount: "price_96" },
    { value: "item_97", amount: "price_97" },
    { value: "item_98", amount: "price_98" },
    { value: "item_99", amount: "price_99" },
    { value: "item_100", amount: "price_100" }
];

//This add this as the items as options to the contribution selection input
for (let i = 0; i < contributionJSON.length; i++) {
    contribution.innerHTML += `<option value="${contributionJSON[i].value}">${contributionJSON[i].value}</option>`
}


//Presets amount value to first item
amount.value = `₦${contributionJSON[0].amount.toString()}`

//changes price to respective item selected
contribution.addEventListener("change" , ()=> {
    for (let i = 0; i < contributionJSON.length; i++) {
        if(contribution.value == contributionJSON[i].value){
            amount.value = `₦${contributionJSON[i].amount.toString()}`
        }
    }
})


const receiptUpload = document.getElementById("receipt-upload")
const receiptUploadError = document.getElementById("receipt-upload-error")

///////// This validates the receipt upload
function validateReceiptUpload(input) {
    // Get the selected file
    var file = input.files[0];
    let k = 2

    // Check if file is selected
    if (file) {
        // Check file extension
        var fileName = file.name;
        var fileExtension = fileName.split('.').pop().toLowerCase();
        /*
        // Check file size
        var fileSize = file.size; // in bytes
        var maxSize = 3 * 1024 * 1024; // 3 MB in bytes*/

        if (fileExtension !== 'jpg' && fileExtension !== 'jpeg' && fileExtension !== 'png') {
            k -= 1
            receiptUploadError.innerHTML = "File not an image"
        }
        /*
        if (fileSize > maxSize) {
            k -= 1
            receiptUploadError.innerHTML = "File is too big (must not exceed 3MB)";
        }*/
        if(receiptUpload.files.length === 0){
            k -= 1
            receiptUploadError.innerHTML = "Attach your receipt please"
            input.files.pop()
        }
        if ((fileExtension == 'jpg' || fileExtension == 'jpeg' || fileExtension !== 'png') && (receiptUpload.files.length !== 0)){
            receiptUploadError.innerHTML = ""
        }
    }

    if (k != 2){
        receiptUploadError.classList.remove("hidden")
        receiptUpload.style.borderColor = "hsl(0, 100%, 66%)"
    }else {
        receiptUpload.style.borderColor = "#0f1729"
        receiptUploadError.innerHTML = ""
    }
}


const signUpName = document.getElementById("sign-up-name")
const nameError = document.getElementById("name-error")
const signUpEmail = document.getElementById('sign-up-email')
const emailError = document.getElementById('email-error')
const signUpPhoneNumber = document.getElementById("sign-up-phone-number")
const phoneNumberError = document.getElementById('phone-number-error')


/********* The function below validates the entire sign up form and submits if all conditions are met*/
function validateSignUp(event) {
    let k = 5;
    //Prevent default
    event.preventDefault()

    //Prevent empty sign up name
    if(signUpName.value.trim() === ""){
        nameError.classList.remove("hidden")
        signUpName.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpName.classList.contains("hidden")){
            nameError.classList.add("hidden")
        };
        signUpName.style.borderColor = "#0f1729"
    }

    //Prevent empty email and incorrect email format
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/

    if(signUpEmail.value.trim() === ""){
        emailError.classList.remove("hidden")
        signUpEmail.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpEmail.classList.contains("hidden")){
            emailError.classList.add("hidden")
        };
        signUpEmail.style.borderColor = "#0f1729"
    }

    if(!emailPattern.test(signUpEmail.value)){
        emailError.classList.remove("hidden")
        signUpEmail.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpEmail.classList.contains("hidden")){
            emailError.classList.add("hidden")
        };
        signUpEmail.style.borderColor = "#0f1729"
    }

    //Prevent empty phone number
    if(signUpPhoneNumber.value.trim() === ""){
        phoneNumberError.classList.remove("hidden")
        signUpPhoneNumber.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!signUpPhoneNumber.classList.contains("hidden")){
            phoneNumberError.classList.add("hidden")
        };
        signUpPhoneNumber.style.borderColor = "#0f1729"
    }

    //Prevent empty receipt image
    if(receiptUpload.files.length == 0){
        receiptUploadError.classList.remove("hidden")
        receiptUploadError.innerHTML = "Attach your receipt please"
        receiptUpload.style.borderColor = "hsl(0, 100%, 66%)"
        signUpName.scrollIntoView()
        k -= 1;
    }else{
        if(!receiptUpload.classList.contains("hidden")){
            receiptUploadError.classList.add("hidden")
        };
        receiptUpload.style.borderColor = "#0f1729"
    }

    if(k == 5){
        submitSignUp()
    }else{
        return
    }
}


/************* Script for the Thanks modal starts********/
const thanksModal = document.getElementById("thanks-modal")
var desktopWidth = window.matchMedia("(min-width:900px)")


function showModal() {
    if(desktopWidth.matches){
        //Display thanks Modal for desktop
        thanksModal.classList.remove("hidden")
        thanksModal.classList.add("flex")
    }else{
        //Display thanks Modal for mobile
        thanksModal.classList.remove("hidden")
        thanksModal.classList.add("block")
    }
}

 /////This script ensures a smooth responsiveness of the thanks modal
/////for min-width of 900px and below.
/////for min-width of 900px, it must be flex so it can be centered
/////but it can be block for 7rem margin-top
function thanksModalResp(e) {
    if(e.matches && thanksModal.classList.contains("block")){
        thanksModal.classList.remove("block")
        thanksModal.classList.add("flex")
    }else{
        thanksModal.classList.remove("flex")
        thanksModal.classList.add("block")
    }
}

desktopWidth.addListener(thanksModalResp)
thanksModalResp(desktopWidth)

/************* Script for the Thanks modal ends********/












/////////////////////// CODE ARCHIVES:::!!!!!!!!!!!!!!!!!!!!!!!!
///////////////////// DO NOT UNCOMMENT THIS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

/******** Script for easy selection of Partners category *************/


/******* This JSON array objects only store the different contribution values and amounts for each partners category */
/////// To add any new contribution to a partners category, simple add a value and amount object for it 
/**
const star_7_JSON = [
    {
        value: "7 material 1",
        amount : "7_1"
    },
    {
        value: "7 material 2",
        amount : "7_2"
    },
    {
        value: "7 material 3",
        amount : "7_3"
    },
    {
        value: "7 material 4",
        amount : "7_4"
    },
    {
        value: "7 material 5",
        amount : "7_5"
    }
]

const star_5_JSON = [
    {
        value: "5 material 1",
        amount : "5_1"
    },
    {
        value: "5 material 2",
        amount : "5_2"
    },
    {
        value: "5 material 3",
        amount : "5_3"
    },
    {
        value: "5 material 4",
        amount : "5_4"
    },
    {
        value: "5 material 5",
        amount : "5_5"
    }
]

const star_3_JSON = [
    {
        value: "3 material 1",
        amount : "3_1"
    },
    {
        value: "3 material 2",
        amount : "3_2"
    },
    {
        value: "3 material 3",
        amount : "3_3"
    },
    {
        value: "3 material 4",
        amount : "3_4"
    },
    {
        value: "3 material 5",
        amount : "3_5"
    }
]

const star_1_JSON = [
    {
        value: "1 material 1",
        amount : "1_1"
    },
    {
        value: "1 material 2",
        amount : "1_2"
    },
    {
        value: "1 material 3",
        amount : "1_3"
    },
    {
        value: "1 material 4",
        amount : "1_4"
    },
    {
        value: "1 material 5",
        amount : "1_5"
    }
]

const partnersCategory = document.getElementById("partners-category")
var contribution = document.getElementById("contribution")
var amount = document.getElementById("amount")

//Adds 7 star options on window load
if(partnersCategory.value == "7-stars-partner"){
    for (let i = 0; i < star_7_JSON.length; i++) {
        contribution.innerHTML += `<option value="${star_7_JSON[i].value}">${star_7_JSON[i].value}</option>`
    }
}


//This eventlistener listens to a change in the dropdown of partners category
//and then lists the respective contributions
partnersCategory.addEventListener("change" , () => {
    if(partnersCategory.value == "7-stars-partner"){
        contribution.innerHTML = "";
        for (let i = 0; i < star_7_JSON.length; i++) {
            contribution.innerHTML += `<option value="${star_7_JSON[i].value}">${star_7_JSON[i].value}</option>`
        }
    }

    if(partnersCategory.value == "5-stars-partner"){
        contribution.innerHTML = "";
        amount.value = `₦${star_5_JSON[0].amount.toString()}`;
        for (let i = 0; i < star_5_JSON.length; i++) {
            contribution.innerHTML += `<option value="${star_5_JSON[i].value}">${star_5_JSON[i].value}</option>`
        }
    }
    
    if(partnersCategory.value == "3-stars-partner"){
        contribution.innerHTML = "";
        amount.value = `₦${star_3_JSON[0].amount.toString()}`;
        for (let i = 0; i < star_3_JSON.length; i++) {
            contribution.innerHTML += `<option value="${star_3_JSON[i].value}">${star_3_JSON[i].value}</option>`
        }
    }
    
    if(partnersCategory.value == "1-star-partner"){
        contribution.innerHTML = "";
        amount.value = `₦${star_1_JSON[0].amount.toString()}`;
        for (let i = 0; i < star_1_JSON.length; i++) {
            contribution.innerHTML += `<option value="${star_1_JSON[i].value}">${star_1_JSON[i].value}</option>`
        }
    }
})


//////The below script assigns the right amount to each option selected
////// It is perfectly tuned for this function, so do not touch this code!!!
for (let i = 0; i < star_7_JSON.length; i++) {
    if(partnersCategory.value == "7-stars-partner" && contribution.value == star_7_JSON[i].value ){
        amount.value = `₦${star_7_JSON[i].amount.toString()}`
    }    
}

contribution.addEventListener("change" , () => {
    for (let i = 0; i < star_7_JSON.length; i++) {
        if(partnersCategory.value == "7-stars-partner" && contribution.value == star_7_JSON[i].value ){
            amount.value = `₦${star_7_JSON[i].amount.toString()}`
        }    
    }

    for (let i = 0; i < star_5_JSON.length; i++) {
        if(partnersCategory.value == "5-stars-partner" && contribution.value == star_5_JSON[i].value ){
            amount.value = `₦${star_5_JSON[i].amount.toString()}`
        }    
    }

    for (let i = 0; i < star_3_JSON.length; i++) {
        if(partnersCategory.value == "3-stars-partner" && contribution.value == star_3_JSON[i].value ){
            amount.value = `₦${star_3_JSON[i].amount.toString()}`
        }    
    }

    for (let i = 0; i < star_1_JSON.length; i++) {
        if(partnersCategory.value == "1-star-partner" && contribution.value == star_1_JSON[i].value ){
            amount.value = `₦${star_1_JSON[i].amount.toString()}`
        }    
    }
})
**/