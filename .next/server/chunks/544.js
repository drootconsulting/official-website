"use strict";
exports.id = 544;
exports.ids = [544];
exports.modules = {

/***/ 8544:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Bd": () => (/* binding */ mGalleryCarousel),
/* harmony export */   "QK": () => (/* binding */ HomeGridSliderProps),
/* harmony export */   "Zx": () => (/* binding */ HomeGridFullySliderProps),
/* harmony export */   "nK": () => (/* binding */ jsTestimonials),
/* harmony export */   "ve": () => (/* binding */ home1SliderProps)
/* harmony export */ });
/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3877);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper__WEBPACK_IMPORTED_MODULE_0__]);
swiper__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

swiper__WEBPACK_IMPORTED_MODULE_0__["default"].use([
    swiper__WEBPACK_IMPORTED_MODULE_0__.Mousewheel,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Pagination,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Navigation,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectFade,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Autoplay,
    swiper__WEBPACK_IMPORTED_MODULE_0__.Grid,
    swiper__WEBPACK_IMPORTED_MODULE_0__.EffectCreative
]);
const home1SliderProps = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    autoplay: {
        delay: 1500
    },
    effect: "creative",
    creativeEffect: {
        prev: {
            shadow: true,
            translate: [
                "-20%",
                0,
                -1
            ]
        },
        next: {
            translate: [
                "100%",
                0,
                0
            ]
        }
    },
    speed: 500,
    mousewheel: true,
    watchSlidesProgress: true,
    pagination: {
        el: ".hero-main-slider .swiper-pagination"
    },
    navigation: {
        nextEl: ".hero-main-slider .swiper-button-next",
        prevEl: ".hero-main-slider .swiper-button-prev"
    },
    onSlideChange: (swiper)=>{
        const swiperSliders = document.querySelectorAll(".hero-main-slider .swiper-slide");
        for(let i = 0; i < swiperSliders.length; i++){
            const slide = swiperSliders[i];
            if (slide.getAttribute("data-swiper-slide-index") == swiper.realIndex) {
                const dataColor = slide.getAttribute("data-color");
                document.querySelector("body").className = dataColor == "dark" ? "home page nav-white nav-white-logo dark-first" : "home page nav-white nav-white-logo";
            }
        }
    }
};
const HomeGridSliderProps = {
    slidesPerView: 3,
    spaceBetween: 50,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    mousewheel: true,
    preventInteractionOnTransition: true,
    navigation: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    }
};
const HomeGridFullySliderProps = {
    slidesPerView: 3,
    spaceBetween: 0,
    centeredSlides: true,
    speed: 1000,
    loop: true,
    mousewheel: true,
    preventInteractionOnTransition: true,
    navigation: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    }
};
const jsTestimonials = {
    slidesPerView: 2,
    spaceBetween: 50,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 1
        },
        1024: {
            slidesPerView: 2
        },
        1280: {
            slidesPerView: 3
        }
    }
};
const mGalleryCarousel = {
    slidesPerView: "auto",
    spaceBetween: 100,
    speed: 700,
    loop: false,
    pagination: false,
    breakpoints: {
        0: {
            spaceBetween: 30
        },
        768: {
            spaceBetween: 50
        },
        1200: {
            spaceBetween: 100
        }
    }
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;