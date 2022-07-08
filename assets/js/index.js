/***************** 반응형 주소창height 미포함 코드 *****************/
$(document).ready( () => {
    $('body').css('height', $(window).height());

    $(window).resize( () => {
        var theHeight = $(window).height();
        $('body').css('height', theHeight);
    });

})
/***************** swiper2   *****************/
var swiper = new Swiper(".mySwiper2", {
    loop: true,
    allowTouchMove: true,
    // freeMode: true,
    effect: 'slide',
    speed: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
});
/***************** swiper   *****************/
var swiper = new Swiper(".mySwiper", {
    loop: true,
    allowTouchMove: false,
    freeMode: true,
    effect: 'fade',
    speed: 200,
});
// step-nav (button) 내용 컴포넌트
let navSlide = document.querySelectorAll(".component1");
for (var i = 0; i < navSlide.length; i++) {
    let htmlCodeFirst =
        `
        <a href="#" id="poi_reset" class="step_btn reset" data-current="1">Back</a>
        <a href="#" id="lpoi1" class="step_btn" data-current="2">1</a>
        <a href="#" id="rpoi2" class="step_btn" data-current="3">2</a>
        <a href="#" id="rpoi3" class="step_btn" data-current="4">3</a>
        `
    let htmlCode =
        `
        <a href="#" id="rpoi${navSlide[i].dataset.idvalue++}" class="step_btn" data-current="${navSlide[i].dataset.num1++}">${navSlide[i].dataset.num2++}</a>
        <a href="#" id="rpoi${navSlide[i].dataset.idvalue++}" class="step_btn" data-current="${navSlide[i].dataset.num1++}">${navSlide[i].dataset.num2++}</a>
        <a href="#" id="rpoi${navSlide[i].dataset.idvalue++}" class="step_btn" data-current="${navSlide[i].dataset.num1++}">${navSlide[i].dataset.num2++}</a>
        <a href="#" id="rpoi${navSlide[i].dataset.idvalue++}" class="step_btn" data-current="${navSlide[i].dataset.num1++}">${navSlide[i].dataset.num2++}</a>
        `
    navSlide[0].innerHTML = htmlCodeFirst;
    navSlide[i].innerHTML = htmlCode;
}

// 문자열 제거
const navSlideBtn = document.querySelectorAll(".step_btn");
navSlideBtn.forEach(function (e) {
    if (e.innerHTML < 10) {
        e.insertAdjacentHTML("afterbegin", "0");
    }
})

// 배열 마지막 요소 삭제
const btns = document.querySelectorAll(".component1 a");
btns[btns.length - 1].remove();
btns[btns.length - 2].remove();
btns[btns.length - 3].remove();

// slide(mySwiper) 내용 컴포넌트
const swiperSection = document.querySelectorAll(".component2");
for (var i = 0; i < swiperSection.length; i++) {
    let htmlCodeFirst =
        `
            <article class="art art01"></article>
            <article class="art art02">
                <!-- pc -->
                <div class="sec01-art02-wrap">
                    <div class="art-title">
                        <h1>MICKE</h1>
                        <span>204.922.85</span>
                    </div>
                    <div class="art-img">
                        <img src="./assets/img/desk.png" alt="material.png"> 
                    </div>
                    <a href="#" id="rpoi1" class="poi1" onclick="openModal(this); return false">How to assemble</a>
                </div>
                <!-- 모바일 -->
                <div class="sec01-art02-m">
                    <div class="art02-m-col">
                        <div class="art-title">
                            <h1>MICKE</h1>
                            <span>803.542.76</span>
                        </div>
                    </div>
                    <div class="col-art-img">
                        <img src="./assets/img/desk.png" alt="material.png">
                    </div>
                </div>
            </article>
            <article class="art art03"></article>
        `
    let htmlCode =
        `
            <article class="art art01"></article>
            <article class="art art02 step">
                <!-- pc -->
                <div class="art02-wrap">
                    <div class="art-title">
                        <h1>MICKE</h1>
                        <span>803.542.76</span>
                    </div>
                    <img class="img" src="./assets/img/step${swiperSection[i].dataset.component}.png" alt="product${i - 1}">
                    <p class="page_num">${swiperSection[i].dataset.component}</p>
                </div>
                <!-- mobile -->
                <div class="art02-wrap-m">
                    <div class="art02-col">
                        <div class="art-title">
                            <h1>MICKE</h1>
                            <span>803.542.76</span>
                        </div>
                        <p class="page_num">${swiperSection[i].dataset.component}</p>
                    </div>
                    <div class="col-art-img">
                        <img class="img" src="./assets/img/step${swiperSection[i].dataset.component}.png" alt="product${i - 1}">
                    </div>
                </div>
            </article>
            <article class="art art03"></article>
        `
    swiperSection[1].innerHTML = htmlCodeFirst;
    swiperSection[i].innerHTML = htmlCode;

}

// 문자열 제거
const pageNumber = document.querySelectorAll(".page_num");
pageNumber.forEach(function (e) {
    if (e.innerHTML < 10) {
        e.insertAdjacentHTML("afterbegin", "0");
    }
})

/***************** loading창 *****************/
const loading = document.querySelector(".loading");
const loadingLogo = document.querySelector(".loading-logo");
const container = document.querySelector(".container");
// Loading창 배경이미지 변경
setTimeout( () => {
    loading.style.background = "url('./assets/img/pc_cover_after.jpg') no-repeat center center / cover"
    loadingLogo.style.opacity = "1";
    loadingLogo.style.visibility = "visible";
}, 2000)
//Loading창 Logo 클릭시 container blcok
loadingLogo.addEventListener("click", () => {
    container.classList.add("active");
})

/***************** step 버튼 *****************/
const step01 = document.querySelector("#rpoi1");
const stepBox = document.querySelector(".slider_box");

step01.addEventListener("click", () => {
    setTimeout( () =>  {
        stepBox.style.display = "block";
        document.querySelector(".sub_page").style.display = "block";
    }, 500)
    swiper.slideTo(2);
    stepBtn[1].classList.add("active");

})

const reset = document.querySelector(".reset");
reset.addEventListener("click", function() {
    stepBox.style.display = "none";
    this.style.color = "#fff";
    this.style.background = "#3763AA";
    document.querySelector(".sub_page").style.display = "none";
})

const stepBtn = document.querySelectorAll(".step_btn");
stepBtn.forEach( e => {
    e.addEventListener("click", () => {
        swiper.slideTo(e.dataset.current);
        for (var i = 0; i < stepBtn.length; i++) {
            stepBtn[i].classList.remove("active");
        }
        e.classList.add("active");
    })
})
// 반응형 ~ 버튼 생성
const mobileArt = document.querySelector(".art02-m-col");
const pcArt = document.querySelector(".sec01-art02-wrap");

if (matchMedia("screen and (max-width: 820px)").matches) {
    mobileArt.appendChild(step01);
}
// resize
window.addEventListener("resize", () => {
    if (matchMedia("screen and (max-width: 820px)").matches) {
        mobileArt.appendChild(step01);
    } else {
        pcArt.appendChild(step01);
    }
})
// vanilla slide
const btnPre = document.querySelector(".prev_btn");
const btnNext = document.querySelector(".next_btn");
let current = 1;
//Next
function handleNextEvent() {
    let target = document.querySelector(`.slide${current}`);
    target.classList.remove("active");
    current = current + 1 < 11 ? current + 1 : 1;
    target = document.querySelector(`.slide${current}`);
    target.classList.add("active");
}
btnNext.addEventListener("click", handleNextEvent);
//Prev
function handlePreEvent() {
    let target = document.querySelector(`.slide${current}`);
    target.classList.remove("active");
    current = current - 1 > 0 ? current - 1 : 10;
    target = document.querySelector(`.slide${current}`);
    target.classList.add("active");
}
btnPre.addEventListener("click", handlePreEvent);

// modal open & off
const modal = document.querySelector(".modal");
const modalOverlay = document.querySelector(".modal-overlay");
function openModal(name) {
    if (name.className == "poi1") {
        setTimeout(() => {
            modal.classList.add("active");
            modalOverlay.classList.add("active");
        }, 1000);
    } else {
        modal.classList.add("active");
        modalOverlay.classList.add("active");
    }
}
function closeModal() {
    modal.classList.remove("active");
    modalOverlay.classList.remove("active");
}
// header nav
const navBtn = document.querySelector(".nav_btn");
const btnLine = document.querySelectorAll(".nav_btn span");
const nav = document.querySelector("nav");
const navLogo = document.querySelector(".nav_logo");

navBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
    navLogo.classList.toggle("active");
    btnLine.forEach(function (e) {
        e.classList.toggle("active");
    })
    if (nav.classList == "active") {
        stepBox.style.display = "none";
    } else {
        stepBox.style.display = "block";
    }
})





