"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2057:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/Transparent.525a998c.png","height":1466,"width":4096,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAMAAACZFr56AAAAFVBMVEVMaXElV6E2abJBdsQmXrhKfMpbidEKwKZyAAAAB3RSTlMARyQNFVIy26WOWAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAB9JREFUeJxjYGZiZmFhYWFmYGNlYmRkZGRiYGZiAAMAA7QANPqKkZMAAAAASUVORK5CYII=","blurWidth":8,"blurHeight":3});

/***/ }),

/***/ 4567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _asset_images_Transparent_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2057);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6652);
/* harmony import */ var react_icons_bi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6290);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];








const ListHeader = ({ children  })=>{
    return /*#__PURE__*/ _jsx(Text, {
        fontWeight: "500",
        fontSize: "lg",
        mb: 2,
        children: children
    });
};
const SocialButton = ({ children , label , href  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.chakra.button, {
        rounded: "10px",
        color: "#255DB1",
        bg: "white",
        w: 10,
        h: 10,
        cursor: "pointer",
        as: "a",
        href: href,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "background 0.3s ease",
        _hover: {
            bg: "#3D7DD6",
            color: "white"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VisuallyHidden, {
                children: label
            }),
            children
        ]
    });
};
const Footer = ()=>{
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_7__.useRouter)();
    const handlePricing = async ()=>{
        router.push("/price");
    };
    const handleContact = async ()=>{
        router.push("/contact");
    };
    const handleAbout = async ()=>{
        router.push("/");
    };
    const handleTerms = async ()=>{
        router.push("/terms");
    };
    const handlePrivacy = async ()=>{
        router.push("/privacy");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
        shadow: "md",
        bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.50", "gray.900"),
        borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blue.500", "gray.500"),
        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.700", "gray.200"),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                maxW: "6xl",
                py: 10,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.SimpleGrid, {
                    columns: {
                        base: 1,
                        sm: 2,
                        md: 4
                    },
                    spacing: 8,
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            align: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "gray.600",
                                    fontWeight: 600,
                                    fontSize: "lg",
                                    children: "Company"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    onClick: handleAbout,
                                    children: "About"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    direction: "row",
                                    onClick: handlePricing,
                                    align: "center",
                                    spacing: 2,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            children: "Pricing"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Tag, {
                                            size: "sm",
                                            bg: "#255DB1",
                                            ml: 2,
                                            color: "white",
                                            children: "New"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                    onClick: handleContact,
                                    children: "Contact Us"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            align: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "gray.600",
                                    fontWeight: 600,
                                    fontSize: "lg",
                                    children: "Legal"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                                    width: "full",
                                    flexDirection: "column",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            onClick: handleTerms,
                                            children: "T&C"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                                            onClick: handlePrivacy,
                                            children: "Privacy Policy"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                            align: "flex-start",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    color: "gray.600",
                                    fontWeight: 600,
                                    fontSize: "lg",
                                    children: "Stay up to date"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    direction: "row",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Input, {
                                            placeholder: "Your email address",
                                            border: "2px solid",
                                            borderColor: "#255DB1",
                                            rounded: "lg",
                                            _focus: {
                                                bg: "whiteAlpha.300"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.IconButton, {
                                            bg: "#255DB1",
                                            _hover: {
                                                bg: "#3D7DD6"
                                            },
                                            color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "#255DB1"),
                                            "aria-label": "Subscribe",
                                            icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_bi__WEBPACK_IMPORTED_MODULE_5__.BiMailSend, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                py: 10,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                        align: "center",
                        _before: {
                            content: '""',
                            borderBottom: "1px solid",
                            borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blue.200", "blue.700"),
                            flexGrow: 1,
                            mr: 8
                        },
                        _after: {
                            content: '""',
                            borderBottom: "1px solid",
                            borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blue.200", "blue.700"),
                            flexGrow: 1,
                            ml: 8
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Button, {
                            as: "a",
                            href: "/",
                            variant: "link",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                width: 300,
                                src: _asset_images_Transparent_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                alt: "Picture of the author"
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
                            as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack,
                            maxW: "6xl",
                            py: 4,
                            direction: {
                                base: "column",
                                md: "row"
                            },
                            spacing: 4,
                            justify: {
                                base: "center",
                                md: "space-between"
                            },
                            align: {
                                base: "center",
                                md: "center"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                    textAlign: {
                                        md: "left",
                                        base: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                            py: 1,
                                            px: 2,
                                            bg: "#255DB1",
                                            _hover: {
                                                bg: "#3D7DD6"
                                            },
                                            as: "span",
                                            position: "relative",
                                            color: "white",
                                            mx: 2,
                                            fontSize: "18px",
                                            fontWeight: 700,
                                            rounded: "10px",
                                            children: "\xa9"
                                        }),
                                        new Date().getFullYear(),
                                        " Connect2HQ Templates. All rights reserved"
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                                    direction: "row",
                                    spacing: 6,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                            label: "Facebook",
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaFacebook, {})
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SocialButton, {
                                            label: "Linkedin",
                                            href: "#",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__.FaLinkedin, {})
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 887:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Navbar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2210);
/* harmony import */ var _asset_images_Transparent_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2057);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _user_info_MobileNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9210);
/* harmony import */ var _header_menu_Menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5132);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6134);
/* harmony import */ var _header_menu_MobileNavItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(4014);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _user_info_MobileNav__WEBPACK_IMPORTED_MODULE_6__, _header_menu_Menu__WEBPACK_IMPORTED_MODULE_7__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__, _header_menu_MobileNavItem__WEBPACK_IMPORTED_MODULE_9__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__, _user_info_MobileNav__WEBPACK_IMPORTED_MODULE_6__, _header_menu_Menu__WEBPACK_IMPORTED_MODULE_7__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__, _header_menu_MobileNavItem__WEBPACK_IMPORTED_MODULE_9__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function Navbar() {
    const routerState = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const { isOpen , onToggle , onOpen  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.useDisclosure)();
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let user = localStorage.getItem("user_name");
        setUsername(user);
    }, [
        routerState
    ]);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const signInPage = ()=>{
        router.push("/signin");
    };
    const signUpPage = ()=>{
        router.push("/signup");
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Box, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                shadow: "md",
                bg: "gray.50",
                color: "purple.900",
                minH: "60px",
                px: {
                    base: 4,
                    md: 20,
                    lg: 16
                },
                borderBottom: 1,
                borderStyle: "solid",
                borderColor: "blue.100",
                align: "center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                        flex: {
                            base: 1,
                            md: "auto"
                        },
                        ml: {
                            base: -2
                        },
                        display: {
                            base: "flex",
                            md: "none"
                        },
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.IconButton, {
                            onClick: onToggle,
                            icon: isOpen ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.CloseIcon, {
                                w: 3,
                                h: 3
                            }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_8__.HamburgerIcon, {
                                w: 5,
                                h: 5
                            }),
                            variant: "ghost",
                            "aria-label": "Toggle Navigation"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                        flex: {
                            base: 1
                        },
                        justify: {
                            base: "center",
                            md: "start"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                as: "a",
                                href: "/",
                                variant: "link",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_5___default()), {
                                    width: 350,
                                    src: _asset_images_Transparent_png__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z,
                                    alt: "Picture of the author"
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Flex, {
                                display: {
                                    base: "none",
                                    md: "flex"
                                },
                                alignItems: "center",
                                ml: 10,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_menu_Menu__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z, {})
                            })
                        ]
                    }),
                    username ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        mr: 4,
                        flex: {
                            base: 1,
                            md: 0
                        },
                        justify: "flex-end",
                        direction: "row",
                        spacing: 6,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_user_info_MobileNav__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {
                            onOpen: onOpen,
                            userInfo: username
                        })
                    }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                        mr: 4,
                        flex: {
                            base: 1,
                            md: 0
                        },
                        justify: "flex-end",
                        direction: "row",
                        spacing: 6,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                as: "a",
                                color: "gray.600",
                                fontWeight: 600,
                                fontSize: "lg",
                                variant: "link",
                                cursor: "pointer",
                                onClick: signInPage,
                                children: "Sign In"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Button, {
                                as: "a",
                                display: {
                                    base: "none",
                                    md: "inline-flex"
                                },
                                fontSize: "sm",
                                cursor: "pointer",
                                fontWeight: 600,
                                color: "white",
                                onClick: signUpPage,
                                bg: "#255DB1",
                                _hover: {
                                    bg: "#3D7DD6"
                                },
                                children: "Sign Up"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_3__.Stack, {
                    bg: "white",
                    p: 4,
                    display: {
                        md: "none"
                    },
                    children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_menu_MobileNavItem__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .Z, {
                            ...navItem
                        }, navItem.label))
                })
            })
        ]
    });
}
const NAV_ITEMS = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Pricing",
        href: "/price"
    },
    {
        label: "Contact us",
        href: "/contact"
    }
];

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5132:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var _MobileNavItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4014);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _MobileNavItem__WEBPACK_IMPORTED_MODULE_2__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _MobileNavItem__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const DesktopNav = ()=>{
    const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "blue.800");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        direction: "row",
        spacing: 4,
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Popover, {
                    trigger: "hover",
                    placement: "bottom-start",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.PopoverTrigger, {
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                            passHref: true,
                            href: navItem.href,
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                fontSize: "lg",
                                fontFamily: "Serif",
                                fontWeight: 700,
                                color: "gray.600",
                                textDecoration: "none",
                                _hover: {
                                    borderBottom: "2px solid #3D7DD6",
                                    textDecoration: "none",
                                    color: "#3D7DD6"
                                },
                                children: navItem.label
                            })
                        })
                    })
                })
            }, navItem.label))
    });
};
const MobileNav = ()=>{
    return /*#__PURE__*/ _jsx(Stack, {
        bg: useColorModeValue("white", "blue.800"),
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ _jsx(MobileNavItem, {
                ...navItem
            }, navItem.label))
    });
};
const NAV_ITEMS = [
    {
        label: "About",
        href: "about"
    },
    {
        label: "Pricing",
        href: "price"
    },
    {
        label: "Contact us",
        href: "contact"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DesktopNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4014:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6134);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const MobileNav = ()=>{
    return /*#__PURE__*/ _jsx(Stack, {
        bg: useColorModeValue("white", "blue.800"),
        p: 4,
        display: {
            md: "none"
        },
        children: NAV_ITEMS.map((navItem)=>/*#__PURE__*/ _jsx(MobileNavItem, {
                ...navItem
            }, navItem.label))
    });
};
const MobileNavItem = ({ label , children , href  })=>{
    const { isOpen , onToggle  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useDisclosure)();
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const clickHref = async (href)=>{
        route.push(href);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
        spacing: 4,
        onClick: children && onToggle,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                py: 2,
                as: _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link,
                href: href ?? "#",
                justify: "space-between",
                align: "center",
                _hover: {
                    textDecoration: "none"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                        fontWeight: 600,
                        color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blue.600", "blue.200"),
                        children: label
                    }),
                    children && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                        as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon,
                        transition: "all .25s ease-in-out",
                        transform: isOpen ? "rotate(180deg)" : "",
                        w: 6,
                        h: 6
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Collapse, {
                in: isOpen,
                animateOpacity: true,
                style: {
                    marginTop: "0!important"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Stack, {
                    mt: 2,
                    pl: 4,
                    borderLeft: 1,
                    borderStyle: "solid",
                    borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("blue.200", "blue.700"),
                    align: "start",
                    children: children && children.map((child)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Link, {
                            onClick: ()=>clickHref(child.href),
                            py: 2,
                            children: child.label
                        }, child.label))
                })
            })
        ]
    });
};
const NAV_ITEMS = [
    {
        label: "About",
        href: "/about"
    },
    {
        label: "Pricing",
        href: "/price"
    },
    {
        label: "Contact us",
        href: "/contact"
    }
];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNavItem);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 838:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4567);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _header_Navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(887);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_footer_Footer__WEBPACK_IMPORTED_MODULE_1__, _header_Navbar__WEBPACK_IMPORTED_MODULE_3__]);
([_footer_Footer__WEBPACK_IMPORTED_MODULE_1__, _header_Navbar__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




function Layout({ children  }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_header_Navbar__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                children: [
                    " ",
                    children,
                    " "
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {})
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9210:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2750);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__]);
_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const MobileNav = ({ onOpen , userInfo , ...rest })=>{
    const route = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const signOut = ()=>{
        localStorage.clear();
        route.push("/");
    };
    const signProfile = ()=>{
        route.push("/user-profile");
    };
    const signInPage = async ()=>{
        route.push("/signin");
    };
    const signUpPage = async ()=>{
        route.push("/signup");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
        ml: {
            base: 0,
            md: 60
        },
        px: {
            base: 4,
            md: 4
        },
        height: "20",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
            spacing: {
                base: "0",
                md: "6"
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Flex, {
                alignItems: "center",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuButton, {
                            py: 2,
                            transition: "all 0.3s",
                            _focus: {
                                boxShadow: "none"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.HStack, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Avatar, {
                                        name: userInfo,
                                        color: "white",
                                        fontWeight: 700,
                                        bg: "#3D7DD6",
                                        src: "https://bit.ly/broken-link",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.AvatarBadge, {
                                            boxSize: "1.25em",
                                            bg: "green.500"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.VStack, {
                                        display: {
                                            base: "none",
                                            md: "flex"
                                        },
                                        alignItems: "flex-start",
                                        spacing: "1px",
                                        ml: "2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                textAlign: "left",
                                                fontSize: "sm",
                                                children: userInfo
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Text, {
                                                fontSize: "xs",
                                                color: "#255DB1",
                                                children: "User"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
                                        display: {
                                            base: "none",
                                            md: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_icons_fi__WEBPACK_IMPORTED_MODULE_3__.FiChevronDown, {})
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuList, {
                            bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("white", "gray.900"),
                            borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.useColorModeValue)("gray.200", "gray.700"),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                    onClick: signProfile,
                                    children: "Profile"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuDivider, {}),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.MenuItem, {
                                    onClick: signOut,
                                    children: " Sign out"
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileNav);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6195:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ amplify_config)
});

;// CONCATENATED MODULE: ./deployment/config/config-development.ts
/**
 * Add your hosted dev URL here
 */ const HOSTED_URL = "https://deletesections.d3nfmasq1fmivd.amplifyapp.com";
const configDevelopment = {
    HOSTED_URL,
    MODE: "DEVELOPMENT",
    REGION: "ap-southeast-1",
    REDIRECT_SIGN_IN: `${HOSTED_URL}/`,
    REDIRECT_SIGN_OUT: `${HOSTED_URL}/signout/`,
    AUTHENTICATION_TYPE: "AWS_IAM",
    /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */ USER_POOL_CLIENT_ID: "7ol9ebq8p4h7bbiio9ikj8vrv2",
    USER_POOL_ID: "ap-southeast-1_FanDr2tGU",
    IDENTITY_POOL_ID: "ap-southeast-1:1e576ccc-c940-4fce-a310-1c11c1ed467a",
    GRAPHQL_ENDPOINT: "https://s5gnodzinfhn3nn3yadfxoufky.appsync-api.ap-southeast-1.amazonaws.com/graphql",
    GRAPHQL_ENDPOINT1: "https://hev36nxj4rhenfgkm5dzebwmxe.appsync-api.ap-southeast-1.amazonaws.com/graphql"
};
/* harmony default export */ const config_development = (configDevelopment);

;// CONCATENATED MODULE: ./deployment/config/config-local.ts

const config_local_HOSTED_URL = "http://localhost:3000";
const configLocal = {
    ...config_development,
    HOSTED_URL: config_local_HOSTED_URL,
    MODE: "LOCAL",
    REDIRECT_SIGN_IN: `${config_local_HOSTED_URL}/`,
    REDIRECT_SIGN_OUT: `${config_local_HOSTED_URL}/signout/`
};
/* harmony default export */ const config_local = (configLocal);

;// CONCATENATED MODULE: ./deployment/config/config-production.ts
/**
 * Add your live production URL here
 */ const config_production_HOSTED_URL = "https://public.domain.com";
const configProduction = {
    HOSTED_URL: config_production_HOSTED_URL,
    MODE: "PRODUCTION",
    REGION: "ap-southeast-1",
    REDIRECT_SIGN_IN: `${config_production_HOSTED_URL}/`,
    REDIRECT_SIGN_OUT: `${config_production_HOSTED_URL}/signout/`,
    AUTHENTICATION_TYPE: "AWS_IAM",
    /**
   * Add the details from the Pulumi output here, after running 'pulumi up'
   */ USER_POOL_CLIENT_ID: "7ol9ebq8p4h7bbiio9ikj8vrv2",
    USER_POOL_ID: "ap-southeast-1_FanDr2tGU",
    IDENTITY_POOL_ID: "ap-southeast-1:1e576ccc-c940-4fce-a310-1c11c1ed467a",
    GRAPHQL_ENDPOINT: "",
    GRAPHQL_ENDPOINT1: "https://s5gnodzinfhn3nn3yadfxoufky.appsync-api.ap-southeast-1.amazonaws.com/graphql"
};
/* harmony default export */ const config_production = (configProduction);

;// CONCATENATED MODULE: ./deployment/config.ts



const setCloudEnv = ()=>{
    if (process.env.NEXT_PUBLIC_CLOUD_ENV !== "prod") {
         false && 0;
    }
};
const isdev = (/* unused pure expression or super */ null && (!!( false && 0)));
let config = config_local;
if (process.env.NEXT_PUBLIC_CLOUD_ENV === "prod") {
    config = config_production;
}
if (process.env.NEXT_PUBLIC_CLOUD_ENV === "dev") {
    config = config_development;
}


;// CONCATENATED MODULE: ./deployment/amplify-config.ts

/**
 * This is the configuration you should consume through 'Amplify.configure'
 */ const amplifyConfig = {
    Auth: {
        mandatorySignIn: true,
        region: config.REGION,
        userPoolId: config.USER_POOL_ID,
        identityPoolId: config.IDENTITY_POOL_ID,
        userPoolWebClientId: config.USER_POOL_CLIENT_ID,
        oauth: {
            redirectSignIn: config.REDIRECT_SIGN_IN,
            redirectSignOut: config.REDIRECT_SIGN_OUT,
            scope: [
                "email",
                "openid",
                "aws.cognito.signin.user.admin"
            ],
            responseType: "code"
        }
    },
    aws_appsync_graphqlEndpoint: config.GRAPHQL_ENDPOINT,
    aws_appsync_region: config.REGION,
    aws_appsync_authenticationType: config.AUTHENTICATION_TYPE,
    federationTarget: "COGNITO_USER_POOLS"
};
/* harmony default export */ const amplify_config = (amplifyConfig);


/***/ }),

/***/ 5656:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2210);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5581);
/* harmony import */ var aws_amplify__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(aws_amplify__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _deployment_amplify_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6195);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(838);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__]);
([_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__, _components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





aws_amplify__WEBPACK_IMPORTED_MODULE_2___default().configure(_deployment_amplify_config__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z);
function App({ Component , pageProps  }) {
    const validateUserSession = async ()=>{
        try {
            await aws_amplify__WEBPACK_IMPORTED_MODULE_2__.Auth.currentSession();
        } catch (error) {
            console.error(error);
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.ChakraProvider, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {
                ...pageProps
            })
        })
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5581:
/***/ ((module) => {

module.exports = require("aws-amplify");

/***/ }),

/***/ 3918:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-context.js");

/***/ }),

/***/ 5732:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/amp-mode.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4486:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-blur-svg.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 9552:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-loader");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 2470:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/side-effect.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 618:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils/warn-once.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6652:
/***/ ((module) => {

module.exports = require("react-icons/bi");

/***/ }),

/***/ 6290:
/***/ ((module) => {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 2750:
/***/ ((module) => {

module.exports = require("react-icons/fi");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6134:
/***/ ((module) => {

module.exports = import("@chakra-ui/icons");;

/***/ }),

/***/ 2210:
/***/ ((module) => {

module.exports = import("@chakra-ui/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [664,443,675], () => (__webpack_exec__(5656)));
module.exports = __webpack_exports__;

})();