exports.id = 474;
exports.ids = [474];
exports.modules = {

/***/ 1488:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Hero)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




function Hero() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pricePage = async ()=>{
        router.push("/price");
    };
    const contactPage = async ()=>{
        router.push("/contact");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
        maxW: {
            xl: "90rem",
            base: "100rem"
        },
        pb: 20,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
            alignItems: "center",
            justifyContent: "space-between",
            py: {
                base: 10,
                md: 10
            },
            direction: {
                base: "column",
                md: "row"
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                            textAlign: {
                                md: "left",
                                base: "center"
                            },
                            lineHeight: 1.1,
                            fontWeight: 600,
                            fontSize: {
                                base: "2xl",
                                sm: "3xl",
                                lg: "5xl"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    as: "span",
                                    position: "relative",
                                    _after: {
                                        content: "''",
                                        width: "full",
                                        height: "30%",
                                        position: "absolute",
                                        bottom: 1,
                                        left: 0,
                                        bg: "blue.400",
                                        zIndex: -1
                                    },
                                    children: "Modernise IT resources"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    as: "span",
                                    color: "#255DB1",
                                    children: "while working remotely"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.h1, {
                            margin: "auto",
                            mx: "auto",
                            color: "gray.500",
                            children: [
                                "Access",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.strong, {
                                    margin: "0 6px",
                                    color: "red.500",
                                    children: "enterprise applications on browser from"
                                }),
                                "anywhere, on any device and increase business agility while optimising cost.",
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("br", {}),
                                "Sign of for HQ Lite and try - it’s FREE !"
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            margin: "10px",
                            spacing: {
                                base: 4,
                                sm: 6
                            },
                            direction: {
                                base: "column",
                                sm: "row"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    size: "lg",
                                    fontWeight: "700",
                                    px: 12,
                                    colorScheme: "white",
                                    bg: "#255DB1",
                                    _hover: {
                                        bg: "#3D7DD6"
                                    },
                                    onClick: pricePage,
                                    children: "Get started"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                                    size: "lg",
                                    fontWeight: "700",
                                    px: 12,
                                    color: "#255DB1",
                                    onClick: contactPage,
                                    children: "Contact Us"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    alt: "Hero Image",
                    fit: "cover",
                    align: "center",
                    width: {
                        md: "70%",
                        base: "100%"
                    },
                    src: "https://cdn03.boxcdn.net/sites/default/files/styles/882xauto/public/2022-04/1-hero-fg-box-homepage_1764x1200.png?itok=XSOs9KJP"
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6989:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ListHeadingSlider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8278);
/* harmony import */ var slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1598);
/* harmony import */ var slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(slick_carousel_slick_slick_theme_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8096);
/* harmony import */ var react_slick__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_slick__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const Slide = ({ title , info , bgColor , image  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
        w: "350px",
        h: "400px",
        px: 4,
        margin: "auto",
        bg: bgColor,
        pt: "16",
        flexDirection: "column",
        border: "cyan.700",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                rounded: "full",
                mt: 0,
                mx: "auto",
                _groupHover: {
                    _after: {
                        filter: "blur(20px)"
                    }
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Image, {
                    alt: "",
                    src: image,
                    height: "120",
                    width: "100",
                    rounded: "xl"
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                pt: 10,
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        color: "gray.500",
                        fontSize: "sm",
                        textTransform: "uppercase",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        direction: "row",
                        align: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                            textAlign: "center",
                            fontWeight: 400,
                            fontSize: "xl",
                            children: info
                        })
                    })
                ]
            })
        ]
    });
};
function ListHeadingSlider() {
    const slickSettings = {
        dots: true,
        arrows: false,
        speed: 1000,
        autoplay: true,
        slidesToShow: 4,
        infinite: false,
        responsive: [
            {
                breakpoint: 1500,
                settings: {
                    slidesToShow: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    // @ts-ignore
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        py: 10,
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.50", "gray.900"),
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                margin: "auto",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                        py: 4,
                        color: "#255DB1",
                        spacing: 0,
                        align: "center",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            spacing: 0,
                            align: "center",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Heading, {
                                textAlign: "center",
                                children: [
                                    "Benefits of using",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                        as: "span",
                                        position: "relative",
                                        color: "black",
                                        mx: 2,
                                        children: "Connect2HQ"
                                    }),
                                    "cloud Desktops"
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.h1, {
                        margin: "auto",
                        width: "80%",
                        mx: "auto",
                        fontFamily: "Inter",
                        fontWeight: "bold",
                        fontSize: "lg",
                        textAlign: "center",
                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.500", "gray.600"),
                        children: [
                            "We build a platform At See why over",
                            " ",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.strong, {
                                color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.50"),
                                children: "Connect2HQ"
                            }),
                            " ",
                            "on top of cloud technologies to run native applications in a way largerly indistinguishable from running them locally."
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                mx: "auto",
                px: {
                    lg: 8,
                    base: 4
                },
                py: 20,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                    sx: {
                        ".slick-dots": {
                            transform: "translateY(2rem)"
                        },
                        ".slick-dots li button": {
                            _before: {
                                height: "10px",
                                transition: "0.3s",
                                content: "''",
                                background: "blue.500"
                            }
                        }
                    },
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((react_slick__WEBPACK_IMPORTED_MODULE_5___default()), {
                        ...slickSettings,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "No IT skills required",
                                info: "Setup as easily as 1-2-3",
                                bgColor: "#9fbfda",
                                image: "https://vdeskworks.com/content/images/webp/ease-use-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Optimise IT operating costs",
                                info: "Chose right plan as per usage and reduce cost",
                                bgColor: "#eadca8",
                                image: "https://vdeskworks.com/content/images/webp/security-icon-new.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Scalable and Flexible",
                                info: "Add unlimited users, departments, applications at will",
                                bgColor: "#84c3b3",
                                image: "https://vdeskworks.com/content/images/webp/mobility-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Manage and Control",
                                info: "Easily manage users, access and applications securely",
                                bgColor: "#f19e9b",
                                image: "https://vdeskworks.com/content/images/webp/cost-saving-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "No hardware investment",
                                info: "Use existing device and get fast desktop experience",
                                bgColor: "#a6d8cb",
                                image: "https://vdeskworks.com/content/images/webp/instant-scalability-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Increase productivity",
                                info: "No downtime for hardware or software upgrades",
                                bgColor: "#eeb66e",
                                image: "https://vdeskworks.com/content/images/webp/focus-strategy-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Cloud enabled",
                                info: "Backup all data securely on cloud",
                                bgColor: "#a9cf96",
                                image: "https://vdeskworks.com/content/images/webp/personalized-experience-icon.webp"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Slide, {
                                title: "Support remote working",
                                info: "Connect from anywhere, anytime - always ON!",
                                bgColor: "#f0c995",
                                image: "https://vdeskworks.com/content/images/webp/pay-only-icon.webp  "
                            })
                        ]
                    })
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Possibility)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contact_contact_us_popUp_ContactFormSend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2944);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _contact_contact_us_popUp_ContactFormSend__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__, _contact_contact_us_popUp_ContactFormSend__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Testimonial = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Box, {
        children: children
    });
};
const TestimonialContent = ({ children  })=>{
    const router = useRouter();
    const pricePage = async ()=>{
        router.push("/price");
    };
    return /*#__PURE__*/ _jsx(Stack, {
        bg: useColorModeValue("white", "gray.800"),
        boxShadow: "lg",
        p: 8,
        rounded: "xl",
        align: "center",
        pos: "relative",
        _after: {
            content: `""`,
            w: 0,
            h: 0,
            borderLeft: "solid transparent",
            borderLeftWidth: 16,
            borderRight: "solid transparent",
            borderRightWidth: 16,
            borderTop: "solid",
            borderTopWidth: 16,
            borderTopColor: useColorModeValue("white", "gray.800"),
            pos: "absolute",
            bottom: "-16px",
            left: "50%",
            transform: "translateX(-50%)"
        },
        children: children
    });
};
const TestimonialHeading = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Heading, {
        as: "h3",
        fontSize: "xl",
        children: children
    });
};
const TestimonialText = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Text, {
        textAlign: "center",
        color: useColorModeValue("gray.600", "gray.400"),
        fontSize: "sm",
        children: children
    });
};
const TestimonialAvatar = ({ src , name , title  })=>{
    // @ts-ignore
    return /*#__PURE__*/ _jsxs(Flex, {
        align: "center",
        mt: 8,
        direction: "column",
        children: [
            /*#__PURE__*/ _jsx(Avatar, {
                src: src,
                mb: 2
            }),
            /*#__PURE__*/ _jsxs(Stack, {
                spacing: -1,
                align: "center",
                children: [
                    /*#__PURE__*/ _jsx(Text, {
                        fontWeight: 600,
                        children: name
                    }),
                    /*#__PURE__*/ _jsx(Text, {
                        fontSize: "sm",
                        color: useColorModeValue("gray.600", "gray.400"),
                        children: title
                    })
                ]
            })
        ]
    });
};
function Possibility() {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const handlePricing = async ()=>{
        router.push("/price");
    };
    const reload = ()=>window.location.reload();
    const { isOpen , onOpen , onClose  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.useDisclosure)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Container, {
            maxW: "7xl",
            py: 20,
            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack,
            spacing: 12,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Stack, {
                    spacing: 0,
                    align: "center",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Heading, {
                        textAlign: "center",
                        children: [
                            "Ready to",
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Text, {
                                as: "span",
                                position: "relative",
                                color: "#255DB1",
                                mx: 2,
                                children: "modernise and optimise"
                            }),
                            "IT resources?"
                        ]
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Flex, {
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 8,
                    direction: {
                        base: "column",
                        sm: "row"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            size: "lg",
                            fontWeight: "700",
                            px: 12,
                            colorScheme: "white",
                            bg: "#255DB1",
                            _hover: {
                                bg: "#3D7DD6"
                            },
                            onClick: handlePricing,
                            children: "Get started"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Button, {
                            size: "lg",
                            fontWeight: "700",
                            px: 12,
                            color: "#255DB1",
                            onClick: ()=>onOpen(),
                            children: "Contact Us"
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Box, {
                    position: "relative",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
                        onEsc: reload,
                        isOpen: isOpen,
                        onClose: onClose,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalOverlay, {}),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalContent, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalHeader, {
                                        children: " Contact us here for a fast response "
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalCloseButton, {}),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_2__.ModalBody, {
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_contact_contact_us_popUp_ContactFormSend__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {})
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1598:
/***/ (() => {



/***/ }),

/***/ 8278:
/***/ (() => {



/***/ })

};
;