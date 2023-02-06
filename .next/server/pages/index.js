"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405,308];
exports.modules = {

/***/ 8618:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3015);
/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4670);
/* harmony import */ var _src_sliderProps__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8544);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _src_components_Partners__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(117);
/* harmony import */ var _src_layout_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(9911);
/* harmony import */ var _src_data__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2836);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _home_portfolio__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8796);
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5337);
/* harmony import */ var react_scroll_to_top__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_scroll_to_top__WEBPACK_IMPORTED_MODULE_11__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _src_sliderProps__WEBPACK_IMPORTED_MODULE_4__]);
([swiper_react__WEBPACK_IMPORTED_MODULE_2__, _src_sliderProps__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);











//import { useIsInViewport } from "./cutsomHook";


//import { useInViewport } from 'react-in-viewport';
// import Splitting from "splitting";
const PortfolioIsotope = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "index.jsx -> " + "../src/components/PortfolioIsotope"
        ]
    },
    ssr: false
});
const Index = ()=>{
    const isInViewport = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(false);
    const componentRef = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    const test = (0,react__WEBPACK_IMPORTED_MODULE_9__.useRef)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_9__.useEffect)(()=>{
        const el = document.getElementById("home");
        const observer = new IntersectionObserver((entries)=>{
            entries.forEach((entry)=>{
                if (entry.isIntersecting) {
                    isInViewport.current = true;
                } else {
                    isInViewport.current = false;
                }
            });
        });
        observer.observe(el);
        var lastScrollTop = 0;
        window.addEventListener("scroll", function() {
            var st = window.pageYOffset || document.documentElement.scrollTop;
            if (st > lastScrollTop) {
                if (window.pageYOffset > 100) test.current = false;
            } else if (st < lastScrollTop) {
                isInViewport.current && !test.current && scrollToTop();
            }
            lastScrollTop = st <= 0 ? 0 : st;
        }, false);
    }, []);
    function scrollToTop() {
        test.current = true;
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "wrapper",
                id: "swipper",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {
                    ..._src_sliderProps__WEBPACK_IMPORTED_MODULE_4__/* .home1SliderProps */ .ve,
                    onReachEnd: (e)=>{
                        document.getElementById("home").scrollIntoView({
                            behavior: "smooth",
                            inline: "start"
                        });
                    },
                    className: "section hero-main-slider",
                    autoplay: {
                        reverseDirection: false,
                        stopOnLastSlide: false
                    },
                    children: [
                        _src_data__WEBPACK_IMPORTED_MODULE_8__/* .data.map */ .a.map((item)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {
                                className: "swiper-slide",
                                "data-color": "dark",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "slide",
                                        style: {
                                            //backgroundImage: "url(assets/images/started-n26-1920x1080.jpg)",
                                            backgroundImage: `url(${item.backgroundImage})`
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "slide-titles",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "row",
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: "titles dark",
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "label scrolla-element-anim-1",
                                                                children: item.label
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "title",
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    className: "title-inner splitting-text-anim-2",
                                                                    "data-splitting": "",
                                                                    children: item.title
                                                                })
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: "subtitle scrolla-element-anim-1",
                                                                children: item.content
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "more-bts",
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                                                            legacyBehavior: true,
                                                            href: item.projectLink,
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                                "data-splitting": "",
                                                                className: "btn more-btn scrolla-element-anim-1",
                                                                children: "see details"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                ]
                            }, item.id)),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "swiper-pagination scrolla-element-anim-1 scroll-animate swiper-pagination-bullets swiper-pagination-horizontal animate__active animate__animated",
                            "data-animate": "active"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "swiper-buttons",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-prev"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "swiper-button-next"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                id: "home",
                ref: componentRef,
                onClick: (e)=>console.log(e),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "section section-inner started-heading",
                    onScroll: (e)=>console.log(e),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "container",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "row",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 align-center col-lg-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "m-titles large",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "m-title scrolla-element-anim-1 scroll-animate floating",
                                            "data-animate": "active",
                                            children: "Elevating Experiences"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "col-xs-12 col-sm-12 col-md-12 col-lg-12",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "description-text scrolla-element-anim-1 scroll-animate",
                                        "data-animate": "active",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                            children: [
                                                "At Droot, we believe in the power of design, technology, and innovation to transform the way people",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " interact with the world. We’re a team of creative thinkers, developers, and strategists  with a",
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                                " passion for helping businesses create engaging experiences that delight their customers."
                                            ]
                                        })
                                    })
                                })
                            ]
                        })
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(PortfolioIsotope, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_components_Partners__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_src_layout_Footer__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Index);
{}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ data)
/* harmony export */ });
const data = [
    {
        id: 1,
        label: "branding",
        backgroundImage: "assets/images/started-n26-1920x1080.jpg",
        content: "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
        title: "MelaLin Goddess",
        projectLink: "/work-single"
    },
    {
        id: 2,
        label: "branding",
        backgroundImage: "assets/images/started-n15-1920x1080.jpg",
        content: "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
        title: " Blue denim",
        projectLink: "/work-single"
    },
    {
        id: 3,
        label: "Art",
        backgroundImage: "assets/images/started-n2_4-1920x1080.jpg",
        content: "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
        title: "The Dance",
        projectLink: "/work-single"
    },
    {
        id: 4,
        label: "Art",
        backgroundImage: "assets/images/started-n14_1-1000x1080.jpg",
        content: "Creativity is to discover a question that has never been asked. If one brings up an idiosyncratic question, the answer he gives will necessarily be unique as well.",
        title: "Negative Space",
        projectLink: "/work-single"
    }
];


/***/ }),

/***/ 409:
/***/ ((module) => {

module.exports = require("jarallax");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 5337:
/***/ ((module) => {

module.exports = require("react-scroll-to-top");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 3877:
/***/ ((module) => {

module.exports = import("swiper");;

/***/ }),

/***/ 3015:
/***/ ((module) => {

module.exports = import("swiper/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [210,676,664,152,670,911,544,117,796], () => (__webpack_exec__(8618)));
module.exports = __webpack_exports__;

})();