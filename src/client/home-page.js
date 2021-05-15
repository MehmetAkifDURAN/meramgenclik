var slideIndex = 1;
var duration = "5000";
var interval;

(function (i) {
    showSlides(i);
}(slideIndex));

autoSlide(duration);

document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener("mouseenter", function () {
        clearInterval(interval);
    });
});

document.querySelectorAll(".arrow").forEach(function (item) {
    item.addEventListener("mouseleave", function () {
        autoSlide(duration);
    });
});

function autoSlide(duration) {
    interval = setInterval(function () {
        plusSlides(1);
    }, duration)
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    var slides = document.getElementsByClassName("slide");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}




function size() {
    var width = document.body.clientWidth;
    if (width > 1275) {
        return 1276;
    }
    else if ((width <= 1275) && (width > 992)) {
        return 993;
    }
    else if ((width <= 992) && (width > 768)) {
        return 769;
    }
    else {
        return 576;
    }
}

var boyut = size();
console.log(boyut);

var n_left = document.querySelector(".n-left");
var n_right = document.querySelector(".n-right");
var newsBoxes = document.querySelectorAll(".n-col");
var x = 0;

var a_left = document.querySelector(".a-left");
var a_right = document.querySelector(".a-right");
var activityBoxes = document.querySelectorAll(".a-col");
var y = 0;

if (size() > 1275) {
    /*news*/  /* 380 ve katı artır */
    n_right.onclick = () => {
        x++;
        for (let i of newsBoxes) {
            if (x == 0) { i.style.left = "0px"; }
            if (x == 1) { i.style.left = "-38rem"; }
            if (x == 2) { i.style.left = "-76rem"; }
            if (x == 3) { i.style.left = "-114rem"; }
            if (x == 4) { i.style.left = "-152rem"; }
            if (x > 4) { x = 4; }
        }
    }
    n_left.onclick = () => {
        x--;
        for (let i of newsBoxes) {
            if (x == 0) { i.style.left = "0px"; }
            if (x == 1) { i.style.left = "-38rem"; }
            if (x == 2) { i.style.left = "-76rem"; }
            if (x == 3) { i.style.left = "-114rem"; }
            if (x < 0) { x = 0; }
        }
    }

    /*activities*/
    a_right.addEventListener("click", function () {
        y++;
        for (let i of activityBoxes) {
            if (y == 0) { i.style.left = "0px"; }
            if (y == 1) { i.style.left = "-38rem"; }
            if (y == 2) { i.style.left = "-76rem"; }
            if (y == 3) { i.style.left = "-114rem"; }
            if (y == 4) { i.style.left = "-152rem"; }
            if (y > 4) { y = 4; }
        }
    });
    a_left.addEventListener("click", function () {
        y--;
        for (let i of activityBoxes) {
            if (y == 0) { i.style.left = "0px"; }
            if (y == 1) { i.style.left = "-38rem"; }
            if (y == 2) { i.style.left = "-76rem"; }
            if (y == 3) { i.style.left = "-114rem"; }
            if (y > 4) { y = 4; }
        }
    });
}
else if ((size() <= 1275) && (size() > 992)) {
    /*news*/  /*  ve katı artır */
    n_right.onclick = () => {
        x++;
        for (let i of newsBoxes) {
            if (x == 0) { i.style.left = "0px"; }
            if (x == 1) { i.style.left = "-296px"; }
            if (x == 2) { i.style.left = "-592px"; }
            if (x == 3) { i.style.left = "-888px"; }
            if (x == 4) { i.style.left = "-1184px"; }
            if (x > 4) { x = 4; }
        }
    }
    n_left.onclick = () => {
        x--;
        for (let i of newsBoxes) {
            if (x == 0) { i.style.left = "0px"; }
            if (x == 1) { i.style.left = "-296px"; }
            if (x == 2) { i.style.left = "-592px"; }
            if (x == 3) { i.style.left = "-888px"; }
            if (x < 0) { x = 0; }
        }
    }

    /*activities*/
    a_right.addEventListener("click", function () {
        y++;
        for (let i of activityBoxes) {
            if (y == 0) { i.style.left = "0px"; }
            if (y == 1) { i.style.left = "-296px"; }
            if (y == 2) { i.style.left = "-592px"; }
            if (y == 3) { i.style.left = "-888px"; }
            if (y == 4) { i.style.left = "-1184px"; }
            if (y > 4) { y = 4; }
        }
    });
    a_left.addEventListener("click", function () {
        y--;
        for (let i of activityBoxes) {
            if (y == 0) { i.style.left = "0px"; }
            if (y == 1) { i.style.left = "-296px"; }
            if (y == 2) { i.style.left = "-592px"; }
            if (y == 3) { i.style.left = "-888px"; }
            if (y > 4) { y = 4; }
        }
    });
}

// a_right.onclick = () =>{
//     y++;
//     for (let i of activityBoxes) {
//         if (y == 0) { i.style.left = "0px"; }
//         if (y == 1) { i.style.left = "-38rem"; }
//         if (y == 2) { i.style.left = "-76rem"; }
//         if (y == 3) { i.style.left = "-114rem"; }
//         if (y == 4) { i.style.left = "-152rem"; }
//         if (y > 4) { y = 4; }
//     }
// }
// a_left.onclick = () =>{
//     y--;
//     for (let i of activityBoxes) {
//         if (y == 0) { i.style.left = "0px"; }
//         if (y == 1) { i.style.left = "-38rem"; }
//         if (y == 2) { i.style.left = "-76rem"; }
//         if (y == 3) { i.style.left = "-114rem"; }
//         if (y > 4) { y = 4; }
//     }
// }

/*Fonksiyon*/
// var newsIndex = 0
// function plusNews(n) {
//     showNews(newsIndex += n)
// }
// function showNews(n) {
//     let x = n;
//     var newsBoxes = document.querySelectorAll(".n-col");
//     if (x < 0) {
//         x = newsBoxes.length - 3;
//     }
//     if (x > newsBoxes.length - 3) {
//         x = 0;
//     }

//     for (let i of newsBoxes) {
//         if (x == 0) { i.style.left = "0px"; }
//         if (x == 1) { i.style.left = "-38rem"; }
//         if (x == 2) { i.style.left = "-76rem"; }
//         if (x == 3) { i.style.left = "-114rem"; }
//         if (x == 4) { i.style.left = "-152rem"; }
//         // if (x > 4) { x = 4; }
//     }

//     for (let i of newsBoxes) {
//         if (x == 0) { i.style.left = "0px"; }
//         if (x == 1) { i.style.left = "-38rem"; }
//         if (x == 2) { i.style.left = "-76rem"; }
//         if (x == 3) { i.style.left = "-114rem"; }
//         // if (x < 0) { x = 0; }
//     }
// }