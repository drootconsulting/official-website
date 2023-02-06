(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 6479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: external "styled-jsx/style"
const style_namespaceObject = require("styled-jsx/style");
var style_default = /*#__PURE__*/__webpack_require__.n(style_namespaceObject);
;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./src/layout/Preloader.js

const Preloader = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "preloader",
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "centrize full-width",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "vertical-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "spinner-logo",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: "assets/images/drootlogoW.png",
                        alt: "logo"
                    })
                })
            })
        })
    });
};
/* harmony default export */ const layout_Preloader = (Preloader);

// EXTERNAL MODULE: ./styles/globals.css
var globals = __webpack_require__(6764);
;// CONCATENATED MODULE: ./pages/_app.jsx






const App = ({ Component , pageProps  })=>{
    const [loader, setLoader] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            setLoader(false);
        }, 1000);
    }, []);
    (0,external_react_.useEffect)(()=>{
        document.body.style.backgroundColor = "black";
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        className: "jsx-79c59525e3049115",
                        children: "Droot-Elevating Experiences"
                    }),
                    jsx_runtime_.jsx((style_default()), {
                        id: "79c59525e3049115",
                        children: "body{background-color:black}"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "Content-Type",
                        content: "text/html; charset=utf-8",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        httpEquiv: "X-UA-Compatible",
                        content: "IE=edge",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "HandheldFriendly",
                        content: "true",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "author",
                        content: "beshleyua",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "https://fonts.googleapis.com/css?family=Roboto%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CPlayfair+Display%3A100%2C100i%2C300%2C300i%2C400%2C400i%2C500%2C500i%2C700%2C700i%2C900%2C900i%7CMr+De+Haviland&display=swap",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "dns-prefetch",
                        href: "//fonts.googleapis.com",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/vendors/bootstrap.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/fonts/font-awesome/css/font-awesome.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/vendors/magnific-popup.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/vendors/splitting.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/vendors/swiper.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/vendors/animate.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "stylesheet",
                        href: "assets/css/main.css",
                        type: "text/css",
                        media: "all",
                        className: "jsx-79c59525e3049115"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("link", {
                        rel: "shortcut icon",
                        href: "assets/favicon_1.ico",
                        type: "image/x-icon",
                        className: "jsx-79c59525e3049115"
                    })
                ]
            }),
            loader ? /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(layout_Preloader, {})
            }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (App);


/***/ }),

/***/ 6764:
/***/ (() => {



/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6479));
module.exports = __webpack_exports__;

})();