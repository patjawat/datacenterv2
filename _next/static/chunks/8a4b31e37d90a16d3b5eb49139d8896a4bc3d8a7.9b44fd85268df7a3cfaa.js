(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[6],{"5cEx":function(e,a,t){"use strict";var n=t("vDqi"),s=t.n(n),c=t("p46w"),l=t.n(c).a.get("token");s.a.defaults.baseURL="http://43.229.149.13:81/gtwdatacenter-api/api/",s.a.defaults.headers.post["Content-Type"]="application/json",s.a.defaults.headers.common.Authorization=l,a.a=s.a},"HaE+":function(e,a,t){"use strict";function n(e,a,t,n,s,c,l){try{var r=e[c](l),o=r.value}catch(i){return void t(i)}r.done?a(o):Promise.resolve(o).then(n,s)}function s(e){return function(){var a=this,t=arguments;return new Promise((function(s,c){var l=e.apply(a,t);function r(e){n(l,s,c,r,o,"next",e)}function o(e){n(l,s,c,r,o,"throw",e)}r(void 0)}))}}t.d(a,"a",(function(){return s}))},JPaj:function(e,a,t){"use strict";t.d(a,"a",(function(){return f}));var n=t("nKUr"),s=t("o0o1"),c=t.n(s),l=t("HaE+"),r=t("q1tI"),o=t("20a2"),i=t("/MKj"),m=t("p46w"),d=t.n(m),j=t("5cEx"),b=t("YFqc"),h=t.n(b);function u(){var e=Object(i.c)((function(e){return e})),a=e.user?e.user.profile.name:null,t=Object(o.useRouter)();return Object(n.jsx)("nav",{className:"header-navbar navbar-expand-lg navbar navbar-with-menu navbar-without-dd-arrow fixed-top navbar-semi-dark navbar-shadow",children:Object(n.jsxs)("div",{className:"navbar-wrapper",children:[Object(n.jsx)("div",{className:"navbar-header expanded",children:Object(n.jsxs)("ul",{className:"nav navbar-nav flex-row",children:[Object(n.jsx)("li",{className:"nav-item mobile-menu d-lg-none mr-auto",children:Object(n.jsx)("a",{className:"nav-link nav-menu-main menu-toggle hidden-xs is-active",href:"#",children:Object(n.jsx)("i",{className:"ft-menu font-large-1"})})}),Object(n.jsx)("li",{className:"nav-item mr-auto",children:Object(n.jsxs)("a",{className:"navbar-brand",href:"index.html",children:[Object(n.jsx)("img",{className:"brand-logo",alt:"modern admin logo",src:"../../../app-assets/images/logo/logo.png"}),Object(n.jsx)("h3",{className:"brand-text",children:"GTWDatacenter"})]})}),Object(n.jsx)("li",{className:"nav-item d-none d-lg-block nav-toggle",children:Object(n.jsx)("a",{className:"nav-link modern-nav-toggle pr-0","data-toggle":"collapse",children:Object(n.jsx)("i",{className:"toggle-icon ft-toggle-right font-medium-3 white","data-ticon":"ft-toggle-right"})})}),Object(n.jsx)("li",{className:"nav-item d-lg-none",children:Object(n.jsx)("a",{className:"nav-link open-navbar-container","data-toggle":"collapse","data-target":"#navbar-mobile",children:Object(n.jsx)("i",{className:"la la-ellipsis-v"})})})]})}),Object(n.jsx)("div",{className:"navbar-container content",children:Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbar-mobile",children:[Object(n.jsxs)("ul",{className:"nav navbar-nav mr-auto float-left",children:[Object(n.jsx)("li",{className:"nav-item d-none d-lg-block",children:Object(n.jsx)("a",{className:"nav-link nav-link-expand",href:"#",children:Object(n.jsx)("i",{className:"ficon ft-maximize"})})}),Object(n.jsxs)("li",{className:"dropdown nav-item mega-dropdown d-none d-lg-block",children:[Object(n.jsx)("a",{className:"dropdown-toggle nav-link",href:"#","data-toggle":"dropdown",children:"Mega"}),Object(n.jsxs)("ul",{className:"mega-dropdown-menu dropdown-menu row p-1",children:[Object(n.jsxs)("li",{className:"col-md-4 bg-mega p-2",children:[Object(n.jsx)("h3",{className:"text-white mb-1 font-weight-bold",children:"Mega Menu Sidebar"}),Object(n.jsx)("p",{className:"text-white line-height-2",children:"Candy canes bonbon toffee. Cheesecake drag\xe9e gummi bears chupa chups powder bonbon. Apple pie cookie sweet."}),Object(n.jsx)("button",{className:"btn btn-outline-white",children:"Learn More"})]}),Object(n.jsxs)("li",{className:"col-md-5 px-2",children:[Object(n.jsx)("h6",{className:"font-weight-bold font-medium-2 ml-1",children:"Admin Panel"}),Object(n.jsxs)("ul",{className:"row mt-2",children:[Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mb-xl-3",href:"../ecommerce-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-shopping-cart font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-0",children:"eCommerce"})]})}),Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mb-xl-3",href:"../travel-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-plane font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-0",children:"Travel"})]})}),Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mb-xl-3 mt-75 mt-xl-0",href:"../hospital-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-stethoscope font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-0",children:"Hospital"})]})}),Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mt-75 mt-xl-0",href:"../crypto-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-bitcoin font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-50",children:"Crypto"})]})}),Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mt-75 mt-xl-0",href:"../support-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-tag font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-50",children:"Support"})]})}),Object(n.jsx)("li",{className:"col-6 col-xl-4",children:Object(n.jsxs)("a",{className:"text-center mb-2 mt-75 mt-xl-0",href:"../bank-menu-template",target:"_blank",children:[Object(n.jsx)("i",{className:"la la-bank font-large-1 mr-0"}),Object(n.jsx)("p",{className:"font-medium-2 mt-25 mb-50",children:"Bank"})]})})]})]}),Object(n.jsxs)("li",{className:"col-md-3",children:[Object(n.jsx)("h6",{className:"font-weight-bold font-medium-2",children:"Components"}),Object(n.jsxs)("ul",{className:"row mt-1 mt-xl-2",children:[Object(n.jsx)("li",{className:"col-12 col-xl-6 pl-0",children:Object(n.jsxs)("ul",{className:"mega-component-list",children:[Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-alerts.html",target:"_blank",children:"Alert"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-callout.html",target:"_blank",children:"Callout"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-buttons-basic.html",target:"_blank",children:"Buttons"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-carousel.html",target:"_blank",children:"Carousel"})})]})}),Object(n.jsx)("li",{className:"col-12 col-xl-6 pl-0",children:Object(n.jsxs)("ul",{className:"mega-component-list",children:[Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-dropdowns.html",target:"_blank",children:"Drop Down"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-list-group.html",target:"_blank",children:"List Group"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-modals.html",target:"_blank",children:"Modals"})}),Object(n.jsx)("li",{className:"mega-component-item",children:Object(n.jsx)("a",{className:"mb-1 mb-xl-2",href:"component-pagination.html",target:"_blank",children:"Pagination"})})]})})]})]})]})]}),Object(n.jsxs)("li",{className:"nav-item nav-search",children:[Object(n.jsx)("a",{className:"nav-link nav-link-search",href:"#",children:Object(n.jsx)("i",{className:"ficon ft-search"})}),Object(n.jsxs)("div",{className:"search-input",children:[Object(n.jsx)("input",{className:"input",type:"text",placeholder:"Explore Modern...",tabIndex:0,"data-search":"template-list"}),Object(n.jsx)("div",{className:"search-input-close",children:Object(n.jsx)("i",{className:"ft-x"})}),Object(n.jsx)("ul",{className:"search-list"})]})]})]}),Object(n.jsx)("ul",{className:"nav navbar-nav float-right",children:Object(n.jsxs)("li",{className:"dropdown dropdown-user nav-item",children:[Object(n.jsxs)("a",{className:"dropdown-toggle nav-link dropdown-user-link",href:"#","data-toggle":"dropdown",children:[Object(n.jsx)("span",{className:"mr-1 user-name text-bold-700",children:a}),Object(n.jsxs)("span",{className:"avatar avatar-online",children:[Object(n.jsx)("img",{src:"../../../app-assets/images/portrait/small/avatar-s-19.png",alt:"avatar"}),Object(n.jsx)("i",{})]})]}),Object(n.jsxs)("div",{className:"dropdown-menu dropdown-menu-right",children:[Object(n.jsxs)("a",{className:"dropdown-item",href:"user-profile.html",children:[Object(n.jsx)("i",{className:"ft-user"})," Edit Profile"]}),Object(n.jsxs)("a",{className:"dropdown-item",href:"app-kanban.html",children:[Object(n.jsx)("i",{className:"ft-clipboard"})," Todo"]}),Object(n.jsxs)("a",{className:"dropdown-item",href:"user-cards.html",children:[Object(n.jsx)("i",{className:"ft-check-square"})," Task"]}),Object(n.jsx)("div",{className:"dropdown-divider"}),Object(n.jsxs)("a",{className:"dropdown-item",href:"#",onClick:function(){d.a.remove("token",{expires:1}),t.push("/login")},children:[Object(n.jsx)("i",{className:"ft-power"})," Logout"]})]})]})})]})})]})})}function p(){return Object(n.jsx)("div",{className:"main-menu menu-fixed menu-dark menu-accordion menu-shadow expanded","data-scroll-to-active":"true",style:{touchAction:"none",userSelect:"none",WebkitUserDrag:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"},children:Object(n.jsxs)("div",{className:"main-menu-content ps ps--active-y",children:[Object(n.jsx)("ul",{className:"navigation navigation-main",id:"main-menu-navigation","data-menu":"menu-navigation",children:Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(h.a,{href:"/",children:Object(n.jsxs)("a",{children:[Object(n.jsx)("i",{className:"la la-home"}),Object(n.jsx)("span",{className:"menu-title",children:"Dashboard"})]})})})}),Object(n.jsx)("div",{className:"ps__rail-x",style:{left:0,bottom:0},children:Object(n.jsx)("div",{className:"ps__thumb-x",tabIndex:0,style:{left:0,width:0}})}),Object(n.jsx)("div",{className:"ps__rail-y",style:{top:0,height:299,right:0},children:Object(n.jsx)("div",{className:"ps__thumb-y",tabIndex:0,style:{top:0,height:21}})})]})})}t("glKL");function x(){return Object(n.jsx)("footer",{className:"footer footer-static footer-light navbar-border navbar-shadow",children:Object(n.jsxs)("p",{className:"clearfix blue-grey lighten-2 text-sm-center mb-0 px-2",children:[Object(n.jsxs)("span",{className:"float-md-left d-block d-md-inline-block",children:["Copyright \xa9 2019 ",Object(n.jsx)("a",{className:"text-bold-800 grey darken-2",href:"https://1.envato.market/modern_admin",target:"_blank",children:"PIXINVENT"})]}),Object(n.jsxs)("span",{className:"float-md-right d-none d-lg-block",children:["Hand-crafted & Made with",Object(n.jsx)("i",{className:"ft-heart pink"}),Object(n.jsx)("span",{id:"scroll-top"})]})]})})}function f(e){var a=e.children,t=Object(o.useRouter)(),s=Object(i.b)(),m=Object(i.c)((function(e){return e})),b=d.a.get("token");return Object(r.useEffect)((function(){Object(l.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(b||t.push("/login"),m.user){e.next=14;break}return e.prev=2,e.next=5,j.a.get("user");case 5:a=e.sent,n=a.data,s({type:"GET_USER",payload:n}),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),console.log("error",e.t0),t.push("/login");case 14:case"end":return e.stop()}}),e,null,[[2,10]])})))()}),[]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(u,{}),Object(n.jsx)(p,{}),Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{className:"sidenav-overlay",style:{touchAction:"pan-y",userSelect:"none",WebkitUserDrag:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"}}),Object(n.jsx)("div",{className:"drag-target",style:{touchAction:"pan-y",userSelect:"none",WebkitUserDrag:"none",WebkitTapHighlightColor:"rgba(0, 0, 0, 0)"}})]}),Object(n.jsxs)("div",{className:"app-content content",children:[Object(n.jsx)("div",{className:"content-overlay"}),Object(n.jsxs)("div",{className:"content-wrapper",children:[Object(n.jsx)("div",{className:"content-header row"}),Object(n.jsx)("div",{className:"content-body",children:a})]})]}),Object(n.jsx)(x,{})]})}},YFqc:function(e,a,t){e.exports=t("cTJO")},cTJO:function(e,a,t){"use strict";var n=t("J4zp"),s=t("284h");a.__esModule=!0,a.default=void 0;var c=s(t("q1tI")),l=t("elyg"),r=t("nOHt"),o=t("vNVm"),i={};function m(e,a,t,n){if(e&&(0,l.isLocalURL)(a)){e.prefetch(a,t,n).catch((function(e){0}));var s=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;i[a+"%"+t+(s?"%"+s:"")]=!0}}var d=function(e){var a=!1!==e.prefetch,t=(0,r.useRouter)(),s=t&&t.pathname||"/",d=c.default.useMemo((function(){var a=(0,l.resolveHref)(s,e.href,!0),t=n(a,2),c=t[0],r=t[1];return{href:c,as:e.as?(0,l.resolveHref)(s,e.as):r||c}}),[s,e.href,e.as]),j=d.href,b=d.as,h=e.children,u=e.replace,p=e.shallow,x=e.scroll,f=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var g=c.Children.only(h),O=g&&"object"===typeof g&&g.ref,v=(0,o.useIntersection)({rootMargin:"200px"}),N=n(v,2),k=N[0],w=N[1],y=c.default.useCallback((function(e){k(e),O&&("function"===typeof O?O(e):"object"===typeof O&&(O.current=e))}),[O,k]);(0,c.useEffect)((function(){var e=w&&a&&(0,l.isLocalURL)(j),n="undefined"!==typeof f?f:t&&t.locale,s=i[j+"%"+b+(n?"%"+n:"")];e&&!s&&m(t,j,b,{locale:n})}),[b,j,w,f,a,t]);var _={ref:y,onClick:function(e){g.props&&"function"===typeof g.props.onClick&&g.props.onClick(e),e.defaultPrevented||function(e,a,t,n,s,c,r,o){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,l.isLocalURL)(t))&&(e.preventDefault(),null==r&&(r=n.indexOf("#")<0),a[s?"replace":"push"](t,n,{shallow:c,locale:o,scroll:r}).then((function(e){e&&r&&document.body.focus()})))}(e,t,j,b,u,p,x,f)},onMouseEnter:function(e){(0,l.isLocalURL)(j)&&(g.props&&"function"===typeof g.props.onMouseEnter&&g.props.onMouseEnter(e),m(t,j,b,{priority:!0}))}};if(e.passHref||"a"===g.type&&!("href"in g.props)){var E="undefined"!==typeof f?f:t&&t.locale,M=(0,l.getDomainLocale)(b,E,t&&t.locales,t&&t.domainLocales);_.href=M||(0,l.addBasePath)((0,l.addLocale)(b,E,t&&t.defaultLocale))}return c.default.cloneElement(g,_)};a.default=d},vNVm:function(e,a,t){"use strict";var n=t("J4zp"),s=t("TqRt");a.__esModule=!0,a.useIntersection=function(e){var a=e.rootMargin,t=e.disabled||!r,s=(0,c.useRef)(),i=(0,c.useState)(!1),m=n(i,2),d=m[0],j=m[1],b=(0,c.useCallback)((function(e){s.current&&(s.current(),s.current=void 0),t||d||e&&e.tagName&&(s.current=function(e,a,t){var n=function(e){var a=e.rootMargin||"",t=o.get(a);if(t)return t;var n=new Map,s=new IntersectionObserver((function(e){e.forEach((function(e){var a=n.get(e.target),t=e.isIntersecting||e.intersectionRatio>0;a&&t&&a(t)}))}),e);return o.set(a,t={id:a,observer:s,elements:n}),t}(t),s=n.id,c=n.observer,l=n.elements;return l.set(e,a),c.observe(e),function(){l.delete(e),c.unobserve(e),0===l.size&&(c.disconnect(),o.delete(s))}}(e,(function(e){return e&&j(e)}),{rootMargin:a}))}),[t,a,d]);return(0,c.useEffect)((function(){r||d||(0,l.default)((function(){return j(!0)}))}),[d]),[b,d]};var c=t("q1tI"),l=s(t("0G5g")),r="undefined"!==typeof IntersectionObserver;var o=new Map}}]);