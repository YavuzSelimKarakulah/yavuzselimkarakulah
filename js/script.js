let scorllContainer = document.querySelector('.gallery');
let backBtn = document.querySelector('#backBtn');
let nextBtn = document.querySelector('#nextBtn');
let scrollContainer2 = document.querySelector('.gallery-2'); 
let backBtn2 = document.querySelector('#backBtn2'); 
let nextBtn2 = document.querySelector('#nextBtn2');       
let scorllContainer3 = document.querySelector('.gallery-3');
let backBtn3 = document.querySelector('#backBtn3');                         
let nextBtn3 = document.querySelector('#nextBtn3');
let scorllContainer4 = document.querySelector('.gallery-4');
let backBtn4 = document.querySelector('#backBtn4');
let nextBtn4 = document.querySelector('#nextBtn4');
let scorllContainer5 = document.querySelector('.gallery-5');
let backBtn5 = document.querySelector('#backBtn5');
let nextBtn5 = document.querySelector('#nextBtn5');
let scorllContainer6 = document.querySelector('.gallery-6');
let backBtn6 = document.querySelector('#backBtn6');
let nextBtn6 = document.querySelector('#nextBtn6');
let scorllContainer7 = document.querySelector('.gallery-7');
let backBtn7 = document.querySelector('#backBtn7');
let nextBtn7 = document.querySelector('#nextBtn7');
let scorllContainer8 = document.querySelector('.gallery-8');
let backBtn8 = document.querySelector('#backBtn8');
let nextBtn8 = document.querySelector('#nextBtn8');
let scorllContainer9 = document.querySelector('.gallery-9');
let backBtn9 = document.querySelector('#backBtn9');
let nextBtn9 = document.querySelector('#nextBtn9');
let scorllContainer10 = document.querySelector('.gallery-10');
let backBtn10 = document.querySelector('#backBtn10');
let nextBtn10 = document.querySelector('#nextBtn10');
let scorllContainer11 = document.querySelector('.gallery-11');
let backBtn11 = document.querySelector('#backBtn11');
let nextBtn11 = document.querySelector('#nextBtn11');
let scorllContainer12 = document.querySelector('.gallery-12');
let backBtn12 = document.querySelector('#backBtn12');
let nextBtn12 = document.querySelector('#nextBtn12');
let scorllContainer13 = document.querySelector('.gallery-13');
let backBtn13 = document.querySelector('#backBtn13');
let nextBtn13 = document.querySelector('#nextBtn13');
let scorllContainer14 = document.querySelector('.gallery-14');
let backBtn14 = document.querySelector('#backBtn14');
let nextBtn14 = document.querySelector('#nextBtn14');
let scorllContainer15 = document.querySelector('.gallery-15');
let backBtn15 = document.querySelector('#backBtn15');
let nextBtn15 = document.querySelector('#nextBtn15');
let scorllContainer16 = document.querySelector('.gallery-16');
let backBtn16 = document.querySelector('#backBtn16');
let nextBtn16 = document.querySelector('#nextBtn16');
let scorllContainer17 = document.querySelector('.gallery-17');
let backBtn17 = document.querySelector('#backBtn17');
let nextBtn17 = document.querySelector('#nextBtn17');
let scorllContainer18 = document.querySelector('.gallery-18');
let backBtn18 = document.querySelector('#backBtn18');
let nextBtn18 = document.querySelector('#nextBtn18');
let scrollAmount = 15; 
let maxScrollAmount = 20;
let scrollDelay = 50;
let scrollInterval; 


scorllContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer.scrollLeft += evt.deltaY;
});
nextBtn.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});










scrollContainer2.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer2.scrollLeft += evt.deltaY;
});
nextBtn2.addEventListener("mousedown", () => {
    clearInterval(scrollInterval); 
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scrollContainer2.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn2.addEventListener("mouseup", () => {
    clearInterval(scrollInterval); 
});
backBtn2.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scrollContainer2.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn2.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});






scorllContainer3.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer3.scrollLeft += evt.deltaY;
});
nextBtn3.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer3.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn3.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn3.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer3.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn3.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});



scorllContainer4.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer4.scrollLeft += evt.deltaY;
});
nextBtn4.addEventListener("mousedown", () => {
    clearInterval(scrollInterval); 
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer4.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn4.addEventListener("mouseup", () => {
    clearInterval(scrollInterval); 
});
backBtn4.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer4.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn4.addEventListener("mouseup", () => {
    clearInterval(scrollInterval); 
});







scorllContainer5.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer5.scrollLeft += evt.deltaY;
});
nextBtn5.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer5.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn5.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn5.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer5.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn5.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});








scorllContainer6.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer6.scrollLeft += evt.deltaY;
});
nextBtn6.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer6.scrollLeft += scrollAmount;
    }, scrollDelay);
});

nextBtn6.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});

backBtn6.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer6.scrollLeft -= scrollAmount;
    }, scrollDelay);
});

backBtn6.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});






scorllContainer7.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer7.scrollLeft += evt.deltaY;
});
nextBtn7.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer7.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn7.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn7.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer7.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn7.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});







scorllContainer8.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer8.scrollLeft += evt.deltaY;
});
nextBtn8.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer8.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn8.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn8.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer8.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn8.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});





scorllContainer9.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer9.scrollLeft += evt.deltaY;
});
nextBtn9.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer9.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn9.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn9.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer9.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn9.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});






scorllContainer10.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer10.scrollLeft += evt.deltaY;
});
nextBtn10.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer10.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn10.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn10.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer10.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn10.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});







scorllContainer11.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer11.scrollLeft += evt.deltaY;
});
nextBtn11.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer11.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn11.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn11.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer11.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn11.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});







scorllContainer12.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer12.scrollLeft += evt.deltaY;
});
nextBtn12.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer12.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn12.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn12.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer12.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn12.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});




scorllContainer13.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer13.scrollLeft += evt.deltaY;
});
nextBtn13.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer13.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn13.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn13.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer13.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn13.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});




scorllContainer14.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer14.scrollLeft += evt.deltaY;
});
nextBtn14.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer14.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn14.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn14.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer14.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn14.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});











scorllContainer15.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer15.scrollLeft += evt.deltaY;
});
nextBtn15.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer15.scrollLeft += scrollAmount;
    }, scrollDelay);
});

nextBtn15.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn15.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer15.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn15.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});





scorllContainer16.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer16.scrollLeft += evt.deltaY;
});
nextBtn16.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer16.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn16.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn16.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer16.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn16.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});




scorllContainer17.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer17.scrollLeft += evt.deltaY;
});
nextBtn17.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer17.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn17.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn17.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer17.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn17.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});







scorllContainer18.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scorllContainer18.scrollLeft += evt.deltaY;
});
nextBtn18.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer18.scrollLeft += scrollAmount;
    }, scrollDelay);
});
nextBtn18.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});
backBtn18.addEventListener("mousedown", () => {
    clearInterval(scrollInterval);
    scrollInterval = setInterval(() => {
        scrollAmount = Math.min(scrollAmount + 1, maxScrollAmount);
        scorllContainer18.scrollLeft -= scrollAmount;
    }, scrollDelay);
});
backBtn18.addEventListener("mouseup", () => {
    clearInterval(scrollInterval);
});