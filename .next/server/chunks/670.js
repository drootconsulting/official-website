"use strict";
exports.id = 670;
exports.ids = [670];
exports.modules = {

/***/ 4670:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layout_Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(6405);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);
;// CONCATENATED MODULE: ./src/useClickOutside.js

let useClickOutside = (handler)=>{
    let nodes = (0,external_react_.useRef)();
    (0,external_react_.useEffect)(()=>{
        let maybeHandler = (event)=>{
            if (!nodes.current.contains(event.target)) {
                handler();
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return ()=>{
            document.removeEventListener("mousedown", maybeHandler);
        };
    });
    return nodes;
};
/* harmony default export */ const src_useClickOutside = (useClickOutside);

;// CONCATENATED MODULE: ./src/components/ImageView.js




const ImgViews = ({ close , src  })=>{
    let nodes = src_useClickOutside(()=>{
        close(false);
    });
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-bg mfp-ready",
                onClick: ()=>close(false)
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mfp-wrap mfp-close-btn-in mfp-auto-cursor mfp-ready",
                tabIndex: -1,
                style: {
                    overflow: "hidden auto"
                },
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: `mfp-container mfp-s-ready mfp-iframe-holder mfp-img-container`,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-content",
                            ref: nodes,
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "mfp-iframe-scaler",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                    className: "mfp-img",
                                    src: src
                                })
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mfp-preloader",
                            children: "Loading..."
                        })
                    ]
                })
            })
        ]
    });
};
const ImageView = ()=>{
    const [img, setImg] = (0,external_react_.useState)(false);
    const [imgValue, setImgValue] = (0,external_react_.useState)(null);
    (0,external_react_.useEffect)(()=>{
        setTimeout(()=>{
            const a = document.querySelectorAll("a");
            a.forEach((a)=>{
                if (a.href.includes("assets/images/")) {
                    if (a.getAttribute("download") === null) {
                        external_react_dom_default().findDOMNode(a).addEventListener("click", (e)=>{
                            e.preventDefault();
                            setImgValue(a.href);
                            setImg(true);
                        });
                    }
                }
            });
        }, 1500);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx(external_react_.Fragment, {
        children: img && /*#__PURE__*/ jsx_runtime_.jsx(ImgViews, {
            close: ()=>setImg(false),
            src: imgValue
        })
    });
};
/* harmony default export */ const components_ImageView = (ImageView);

;// CONCATENATED MODULE: ./src/utils.js

function initCursor() {
    let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
    let cursor = {
        el: document.querySelector(".cursor"),
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        w: 30,
        h: 30,
        update: function() {
            let l = this.x - this.w / 2;
            let t = this.y - this.h / 2;
            this.el.style.transform = "translate3d(" + l + "px," + t + "px, 0)";
        }
    };
    window.addEventListener("mousemove", (e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    const link = document.querySelectorAll("a, .swiper-pagination, .swiper-button-prev, .swiper-button-next, button, .button, .btn, .lnk");
    link.forEach((link)=>{
        external_react_dom_default().findDOMNode(link).addEventListener("mouseenter", ()=>{
            cursor.el.classList.add("cursor-zoom");
        });
        external_react_dom_default().findDOMNode(link).addEventListener("mouseleave", ()=>{
            cursor.el.classList.remove("cursor-zoom");
        });
    });
    setInterval(move, 1000 / 60);
    function move() {
        cursor.x = lerp(cursor.x, mouseX, 0.1);
        cursor.y = lerp(cursor.y, mouseY, 0.1);
        cursor.update();
    }
    function lerp(start, end, amt) {
        return (1 - amt) * start + amt * end;
    }
}
const activeAnimation = ()=>{
    const progress_inner = document.querySelectorAll(".scroll-animate"), triggerBottom = window.innerHeight / 5 * 5 - 20;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.style.visibility = "visible";
            box.classList.add("animate__active");
        }
    });
};

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/layout/Header.js



const Header = ()=>{
    const [toggle, setToggle] = (0,external_react_.useState)(false);
    const [linkElements, setLinkElements] = (0,external_react_.useState)(null);
    const [height, setHeight] = (0,external_react_.useState)(null);
    const toggleFun = (e)=>{
        const menu = document.querySelector(".menu-btn.full"), overlay = document.querySelector(".menu-full-overlay");
        //e.preventDefault();
        setToggle(!toggle);
        if (toggle) {
            menu.classList.remove("active");
            menu.classList.add("no-touch");
            document.body.classList.remove("no-scroll");
            overlay.classList.remove("is-open");
            overlay.classList.remove("has-scroll");
            overlay.classList.remove("animate-active");
            setTimeout(function() {
                overlay.classList.remove("visible");
                menu.classList.remove("no-touch");
            }, 1000);
        } else {
            menu.classList.add("active");
            menu.classList.add("no-touch");
            document.body.classList.add("no-scroll");
            overlay.classList.add("is-open");
            overlay.classList.add("visible");
            setTimeout(function() {
                overlay.classList.add("has-scroll");
                overlay.classList.add("animate-active");
                menu.classList.remove("no-touch");
            }, 1000);
        }
        return false;
    };
    (0,external_react_.useEffect)(()=>{
        document.querySelector("body").classList.remove("no-scroll");
    }, []);
    function close(e) {
        debugger;
        console.log(e);
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "header ",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "header__builder",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "logo-image",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        legacyBehavior: true,
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: "assets/images/drootlogoW.png",
                                alt: "logo"
                            })
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                    href: "#",
                    className: "menu-btn full",
                    onClick: (e)=>toggleFun(e),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {})
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "menu-full-overlay",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "menu-full-container",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "container",
                                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "row",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col-xs-12 col-sm-12 col-md-12 col-lg-10 offset-1",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "menu-full",
                                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                                className: "menu-full",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "splitting-text-anim-2 words chars splitting",
                                                                "data-splitting": "chars",
                                                                href: "/home-portfolio",
                                                                onClick: (e)=>toggleFun(e),
                                                                children: "Home"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/about",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "splitting-text-anim-2",
                                                                "data-splitting": "chars",
                                                                href: "#",
                                                                onClick: (e)=>toggleFun(e),
                                                                children: "Our Story"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/works-2-column",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "splitting-text-anim-2 words chars splitting",
                                                                "data-splitting": "chars",
                                                                href: "#",
                                                                onClick: (e)=>toggleFun(e),
                                                                children: "Works"
                                                            })
                                                        })
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                        className: "menu-item",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                            legacyBehavior: true,
                                                            href: "/contacts",
                                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                                className: "splitting-text-anim-2",
                                                                "data-splitting": "chars",
                                                                onClick: (e)=>toggleFun(e),
                                                                children: "Contact"
                                                            })
                                                        })
                                                    })
                                                ]
                                            })
                                        })
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "menu-social-links",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://instagram.com/",
                                    target: "blank",
                                    className: "scrolla-element-anim-1",
                                    title: "Instagram",
                                    children: "Instagram"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://facebook.com/",
                                    target: "blank",
                                    className: "scrolla-element-anim-1",
                                    title: "Facebook",
                                    children: "Facebook"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/",
                                    target: "blank",
                                    className: "scrolla-element-anim-1",
                                    title: "Twitter",
                                    children: "Twitter"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://linkedin.com/",
                                    target: "blank",
                                    className: "scrolla-element-anim-1",
                                    title: "Linkedin",
                                    children: "Linkedin"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./src/layout/Layout.js





const Layout = ({ children  })=>{
    (0,external_react_.useEffect)(()=>{
        initCursor();
        activeAnimation();
        window.addEventListener("scroll", activeAnimation);
    }, []);
    (0,external_react_.useEffect)(()=>{
        if (false) {}
        Splitting();
    });
    (0,external_react_.useEffect)(()=>{
        let { jarallax , jarallaxVideo  } = __webpack_require__(409);
        jarallaxVideo();
        jarallax(document.querySelectorAll(".js-parallax"), {
            speed: 0.65,
            type: "scroll"
        });
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_ImageView, {}),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container-page",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
                    children
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "cursor"
            })
        ]
    });
};
/* harmony default export */ const layout_Layout = (Layout);


/***/ })

};
;