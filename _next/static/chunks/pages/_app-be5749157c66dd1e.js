(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{1118:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(5151)}])},1210:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8418:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;n(5753).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(2648).Z,o=n(7273).Z,a=i(n(7294)),c=n(6273),l=n(2725),s=n(3462),u=n(1018),f=n(7190),d=n(1210),p=n(8684),h={};function x(e,t,n,r){if(e&&c.isLocalURL(t)){Promise.resolve(e.prefetch(t,n,r)).catch((function(e){0}));var i=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;h[t+"%"+n+(i?"%"+i:"")]=!0}}var g=a.default.forwardRef((function(e,t){var n,i=e.href,g=e.as,m=e.children,v=e.prefetch,j=e.passHref,w=e.replace,y=e.shallow,b=e.scroll,C=e.locale,_=e.onClick,k=e.onMouseEnter,M=e.onTouchStart,P=e.legacyBehavior,L=void 0===P?!0!==Boolean(!1):P,O=o(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter","onTouchStart","legacyBehavior"]);n=m,!L||"string"!==typeof n&&"number"!==typeof n||(n=a.default.createElement("a",null,n));var N=!1!==v,E=a.default.useContext(s.RouterContext),S=a.default.useContext(u.AppRouterContext);S&&(E=S);var R,A=a.default.useMemo((function(){var e=r(c.resolveHref(E,i,!0),2),t=e[0],n=e[1];return{href:t,as:g?c.resolveHref(E,g):n||t}}),[E,i,g]),T=A.href,Z=A.as,z=a.default.useRef(T),B=a.default.useRef(Z);L&&(R=a.default.Children.only(n));var G=L?R&&"object"===typeof R&&R.ref:t,H=r(f.useIntersection({rootMargin:"200px"}),3),U=H[0],I=H[1],D=H[2],X=a.default.useCallback((function(e){B.current===Z&&z.current===T||(D(),B.current=Z,z.current=T),U(e),G&&("function"===typeof G?G(e):"object"===typeof G&&(G.current=e))}),[Z,G,T,D,U]);a.default.useEffect((function(){var e=I&&N&&c.isLocalURL(T),t="undefined"!==typeof C?C:E&&E.locale,n=h[T+"%"+Z+(t?"%"+t:"")];e&&!n&&x(E,T,Z,{locale:t})}),[Z,T,I,C,N,E]);var K={ref:X,onClick:function(e){L||"function"!==typeof _||_(e),L&&R.props&&"function"===typeof R.props.onClick&&R.props.onClick(e),e.defaultPrevented||function(e,t,n,r,i,o,l,s,u,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&c.isLocalURL(n)){e.preventDefault();var d=function(){"beforePopState"in t?t[i?"replace":"push"](n,r,{shallow:o,locale:s,scroll:l}):t[i?"replace":"push"](n,{forceOptimisticNavigation:!f})};u?a.default.startTransition(d):d()}}(e,E,T,Z,w,y,b,C,Boolean(S),N)},onMouseEnter:function(e){L||"function"!==typeof k||k(e),L&&R.props&&"function"===typeof R.props.onMouseEnter&&R.props.onMouseEnter(e),!N&&S||c.isLocalURL(T)&&x(E,T,Z,{priority:!0})},onTouchStart:function(e){L||"function"!==typeof M||M(e),L&&R.props&&"function"===typeof R.props.onTouchStart&&R.props.onTouchStart(e),!N&&S||c.isLocalURL(T)&&x(E,T,Z,{priority:!0})}};if(!L||j||"a"===R.type&&!("href"in R.props)){var V="undefined"!==typeof C?C:E&&E.locale,q=E&&E.isLocaleDomain&&d.getDomainLocale(Z,V,E.locales,E.domainLocales);K.href=q||p.addBasePath(l.addLocale(Z,V,E&&E.defaultLocale))}return L?a.default.cloneElement(R,K):a.default.createElement("a",Object.assign({},O,K),n)}));t.default=g,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},7190:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4941).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,u=r(i.useState(!1),2),f=u[0],d=u[1],p=r(i.useState(null),2),h=p[0],x=p[1];i.useEffect((function(){if(a){if(s||f)return;if(h&&h.tagName){var e=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=l.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=c.get(r)))return t;var i=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=i.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:o,elements:i},l.push(n),c.set(n,t),t}(n),i=r.id,o=r.observer,a=r.elements;return a.set(e,t),o.observe(e),function(){if(a.delete(e),o.unobserve(e),0===a.size){o.disconnect(),c.delete(i);var t=l.findIndex((function(e){return e.root===i.root&&e.margin===i.margin}));t>-1&&l.splice(t,1)}}}(h,(function(e){return e&&d(e)}),{root:null==t?void 0:t.current,rootMargin:n});return e}}else if(!f){var r=o.requestIdleCallback((function(){return d(!0)}));return function(){return o.cancelIdleCallback(r)}}}),[h,s,n,t,f]);var g=i.useCallback((function(){d(!1)}),[]);return[x,f,g]};var i=n(7294),o=n(9311),a="function"===typeof IntersectionObserver,c=new Map,l=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1018:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.TemplateContext=t.GlobalLayoutRouterContext=t.LayoutRouterContext=t.AppRouterContext=void 0;var r=(0,n(2648).Z)(n(7294)),i=r.default.createContext(null);t.AppRouterContext=i;var o=r.default.createContext(null);t.LayoutRouterContext=o;var a=r.default.createContext(null);t.GlobalLayoutRouterContext=a;var c=r.default.createContext(null);t.TemplateContext=c},7995:function(){},5093:function(){},5619:function(){},6653:function(){},1160:function(){},9008:function(e,t,n){e.exports=n(5443)},1664:function(e,t,n){e.exports=n(8418)},3406:function(e,t,n){"use strict";n.d(t,{_y:function(){return o},zt:function(){return i}});var r=(0,n(7294).createContext)([{},function(){}]),i=r.Provider,o=(r.Consumer,r)},2599:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var r=JSON.parse('{"author":{"name":"Marcos L\xf3pez","company":"Desarrollador Web Fullstack"},"title":"Curso de programaci\xf3n para principiantes","subtitle":"por Marcos L\xf3pez","frontendMastersLink":"","social":{"linkedin":"rippleytrigger","github":"rippleytrigger","twitter":"rippleytrigger97","instagram":"music.marcmel"},"description":"Curso de introductorio de programaci\xf3n","keywords":["Programming","Introduction","Computer Science","Javascript","HTML","CSS3"],"productionBaseUrl":"/intro-programming-course","csvPath":"./out/lessons.csv"}'),i={author:{name:"An Author",company:"An Author's Company"},title:"A Superb Course",subtitle:"That Teaches Nice Things",frontendMastersLink:"",description:"A nice course for nice people.",keywords:["a nice course","for people","to learn","nice things"],social:{linkedin:"btholt",github:"btholt",twitter:"holtbt"},productionBaseUrl:"/"};function o(){return Object.assign({},i,r)}},5151:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){r(e,t,n[t])}))}return e}n.r(t),n.d(t,{default:function(){return b}});var o=n(5893),a=n(9008),c=(n(7995),n(5093),n(1160),n(6653),n(5619),n(7294));function l(){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip-github-social",children:(0,o.jsx)("rect",{width:"32",height:"32"})})}),(0,o.jsx)("g",{id:"github-social",clipPath:"url(#clip-github-social)",children:(0,o.jsxs)("g",{id:"Group_272","data-name":"Group 272",transform:"translate(13522.5 -6994)",children:[(0,o.jsx)("path",{id:"Subtraction_33","data-name":"Subtraction 33",d:"M-24967.5,8041a15.9,15.9,0,0,1-11.312-4.688A15.893,15.893,0,0,1-24983.5,8025a15.893,15.893,0,0,1,4.689-11.315A15.894,15.894,0,0,1-24967.5,8009a15.894,15.894,0,0,1,11.313,4.686A15.893,15.893,0,0,1-24951.5,8025a15.893,15.893,0,0,1-4.689,11.313A15.9,15.9,0,0,1-24967.5,8041Zm-3.781-4.571h0v3.918h7.895v-6.665a1.836,1.836,0,0,0-1.2-1.718c5.1-.617,7.467-2.975,7.467-7.424a7.176,7.176,0,0,0-1.637-4.728,6.74,6.74,0,0,0,.275-1.812,4.34,4.34,0,0,0-.52-2.452.574.574,0,0,0-.359-.1c-1.061,0-3.465,1.411-3.936,1.694a16.644,16.644,0,0,0-4.2-.489,16.379,16.379,0,0,0-3.969.445c-.846-.5-2.91-1.649-3.859-1.649a.566.566,0,0,0-.354.095,4.3,4.3,0,0,0-.521,2.452,6.7,6.7,0,0,0,.244,1.718,7.346,7.346,0,0,0-1.6,4.822,7.263,7.263,0,0,0,1.533,4.985c1.193,1.359,3.115,2.165,5.871,2.464a1.826,1.826,0,0,0-1.129,1.693v.5h0l-.006,0a7.121,7.121,0,0,1-2.033.363,2.608,2.608,0,0,1-.965-.158,4.438,4.438,0,0,1-1.836-1.881,2.361,2.361,0,0,0-1.248-1.091,3.472,3.472,0,0,0-1.217-.3.584.584,0,0,0-.545.224.282.282,0,0,0,.027.367,1.875,1.875,0,0,0,.447.307,4.732,4.732,0,0,1,.561.355,10.726,10.726,0,0,1,1.682,2.755c.043.092.078.163.105.217a3.876,3.876,0,0,0,2.42,1.185,6.036,6.036,0,0,0,.607.025c.875,0,1.988-.124,2-.125Z",transform:"translate(11461 -1015)",fill:"var(--footer-icons)"}),(0,o.jsxs)("g",{id:"Ellipse_670","data-name":"Ellipse 670",transform:"translate(-13522.5 6994)",fill:"none",stroke:"var(--footer-icons)",strokeWidth:"1",children:[(0,o.jsx)("circle",{cx:"16",cy:"16",r:"16",stroke:"none"}),(0,o.jsx)("circle",{cx:"16",cy:"16",r:"15.5",fill:"none"})]})]})})]})}function s(){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"40",height:"32",viewBox:"0 0 40 32",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip-twitter-social",children:(0,o.jsx)("rect",{width:"40",height:"32"})})}),(0,o.jsx)("g",{id:"twitter-social",clipPath:"url(#clip-twitter-social)",children:(0,o.jsx)("g",{id:"Group_269","data-name":"Group 269",transform:"translate(-230.23 -1140.849)",children:(0,o.jsx)("path",{id:"Path_419","data-name":"Path 419",d:"M266.12,1148.861v1.035a23.092,23.092,0,0,1-1.507,8.1,24.08,24.08,0,0,1-4.475,7.381,22.175,22.175,0,0,1-7.306,5.4,24.129,24.129,0,0,1-10,2.07,23.7,23.7,0,0,1-6.667-.945,22.83,22.83,0,0,1-5.936-2.655q.959.091,1.963.09a16.518,16.518,0,0,0,5.434-.9,17.111,17.111,0,0,0,4.749-2.52,8.275,8.275,0,0,1-4.749-1.643,7.8,7.8,0,0,1-2.877-3.983,8.268,8.268,0,0,0,1.507.135,8.58,8.58,0,0,0,2.146-.27,8.16,8.16,0,0,1-5.685-4.344,8.326,8.326,0,0,1-.89-3.578v-.135a7.775,7.775,0,0,0,3.744,1.035,8.183,8.183,0,0,1-2.671-2.9,7.817,7.817,0,0,1-.982-3.848,7.948,7.948,0,0,1,1.1-4.05,23.53,23.53,0,0,0,16.895,8.46,9.221,9.221,0,0,1-.183-1.845,7.787,7.787,0,0,1,1.1-4.05,8.216,8.216,0,0,1,2.991-2.948,7.991,7.991,0,0,1,4.087-1.1,8.184,8.184,0,0,1,5.982,2.566,16.087,16.087,0,0,0,5.205-1.98,7.784,7.784,0,0,1-1.393,2.588,8.4,8.4,0,0,1-2.215,1.913,16.856,16.856,0,0,0,4.749-1.305A17.032,17.032,0,0,1,266.12,1148.861Z",fill:"var(--footer-icons)"})})})]})}function u(){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 32 32",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip-linkedin-social",children:(0,o.jsx)("rect",{width:"32",height:"32"})})}),(0,o.jsx)("g",{id:"linkedin-social",clipPath:"url(#clip-linkedin-social)",children:(0,o.jsx)("g",{id:"Group_270","data-name":"Group 270",transform:"translate(-86.349 -633.073)",children:(0,o.jsx)("path",{id:"Path_375","data-name":"Path 375",d:"M115.789,633.073a2.324,2.324,0,0,1,1.682.676,2.194,2.194,0,0,1,.695,1.627V662.8a2.131,2.131,0,0,1-.695,1.609,2.314,2.314,0,0,1-1.646.659H88.69a2.307,2.307,0,0,1-1.646-.659,2.128,2.128,0,0,1-.695-1.609V635.376a2.19,2.19,0,0,1,.695-1.627,2.322,2.322,0,0,1,1.682-.676h27.063Zm-20.224,9.672a2.561,2.561,0,0,0,0-3.584,2.658,2.658,0,0,0-1.938-.712,2.724,2.724,0,0,0-1.957.712,2.371,2.371,0,0,0-.75,1.792,2.4,2.4,0,0,0,.731,1.792,2.605,2.605,0,0,0,1.9.713h.037A2.7,2.7,0,0,0,95.565,642.745ZM96,645.434H91.213V659.88H96Zm17.3,6.144a7.007,7.007,0,0,0-1.573-4.9,5.68,5.68,0,0,0-6.839-.769,5.663,5.663,0,0,0-1.426,1.573v-2.048H98.674q.036.841,0,7.717v6.728h4.791V651.8a3.592,3.592,0,0,1,.146-1.17,2.913,2.913,0,0,1,.878-1.206,2.429,2.429,0,0,1,1.609-.549,2.108,2.108,0,0,1,1.865.914,4.265,4.265,0,0,1,.549,2.341v7.752H113.3Z",fill:"var(--footer-icons)"})})})]})}function f(){return(0,o.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",width:"32",height:"32",viewBox:"0 0 50 50",x:"0px",y:"0px",children:[(0,o.jsx)("defs",{children:(0,o.jsx)("clipPath",{id:"clip-instagram-social",children:(0,o.jsx)("rect",{width:"50",height:"50"})})}),(0,o.jsx)("g",{id:"instagram-social",clipPath:"url(#clip-instagram-social)",children:(0,o.jsx)("g",{id:"Group_271","data-name":"Group 271",children:(0,o.jsx)("path",{id:"Path_450","data-name":"Path 450",d:"M 16 3 C 8.83 3 3 8.83 3 16 L 3 34 C 3 41.17 8.83 47 16 47 L 34 47 C 41.17 47 47 41.17 47 34 L 47 16 C 47 8.83 41.17 3 34 3 L 16 3 z M 37 11 C 38.1 11 39 11.9 39 13 C 39 14.1 38.1 15 37 15 C 35.9 15 35 14.1 35 13 C 35 11.9 35.9 11 37 11 z M 25 14 C 31.07 14 36 18.93 36 25 C 36 31.07 31.07 36 25 36 C 18.93 36 14 31.07 14 25 C 14 18.93 18.93 14 25 14 z M 25 16 C 20.04 16 16 20.04 16 25 C 16 29.96 20.04 34 25 34 C 29.96 34 34 29.96 34 25 C 34 20.04 29.96 16 25 16 z",fill:"var(--footer-icons)"})})})]})}function d(e){var t=e.twitter,n=e.linkedin,r=e.github,i=e.instagram;return(0,o.jsx)("footer",{className:"footer",children:(0,o.jsxs)("ul",{className:"socials",children:[t?(0,o.jsx)("li",{className:"social",children:(0,o.jsx)("a",{href:"https://twitter.com/".concat(t),children:(0,o.jsx)(s,{})})}):null,r?(0,o.jsx)("li",{className:"social",children:(0,o.jsx)("a",{href:"https://github.com/".concat(r),children:(0,o.jsx)(l,{})})}):null,n?(0,o.jsx)("li",{className:"social",children:(0,o.jsx)("a",{href:"https://linkedin.com/in/".concat(n),children:(0,o.jsx)(u,{})})}):null,i?(0,o.jsx)("li",{className:"social",children:(0,o.jsx)("a",{href:"https://instagram.com/".concat(i),children:(0,o.jsx)(f,{})})}):null,(0,o.jsx)("li",{className:"social",children:(0,o.jsxs)("div",{className:"terms",children:[(0,o.jsx)("p",{children:"Content Licensed Under CC-BY-NC-4.0"}),(0,o.jsx)("p",{children:"Code Samples and Excercises Licensed Under Apache 2.0"}),(0,o.jsxs)("p",{children:["Sitio dise\xf1ado por"," ",(0,o.jsx)("a",{href:"",children:"Rippleytrigger"})]})]})})]})})}var p=n(1664),h=n(3406),x=(0,c.createContext)([{},function(){}]),g=x.Provider,m=(x.Consumer,x);function v(e){var t=(0,c.useContext)(h._y)[0],n=t.section,r=t.title,i=t.icon,a=(0,c.useContext)(m).frontendMastersLink;return(0,o.jsxs)("header",{className:"navbar",children:[(0,o.jsx)("h1",{className:"navbar-brand",children:(0,o.jsx)(p,{href:"/",children:e.title})}),(0,o.jsxs)("div",{className:"navbar-info",children:[a?(0,o.jsx)("a",{href:a,className:"cta-btn",children:"Watch on Frontend Masters"}):null,n?(0,o.jsxs)("h2",{children:[n," ",(0,o.jsx)("i",{className:"fas fa-".concat(i)})," ",r]}):null]})]})}var j=n(2599);function w(e){var t=e.children,n=(0,j.Z)(),r=(0,c.useState)({});return(0,o.jsx)(g,{value:n,children:(0,o.jsx)(h.zt,{value:r,children:(0,o.jsxs)("div",{className:"remix-app",children:[(0,o.jsx)(v,{title:n.title}),(0,o.jsx)("div",{className:"content-container",children:(0,o.jsx)("div",{className:"main",children:t})}),(0,o.jsx)(d,{twitter:n.social.twitter,github:n.social.github,linkedin:n.social.linkedin,instagram:n.social.instagram})]})})})}function y(e){var t=e.children;return(0,o.jsx)(w,{children:t})}function b(e){var t=e.Component,n=e.pageProps;return(0,o.jsxs)(y,{children:[(0,o.jsxs)(a,{children:[(0,o.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"".concat("/intro-programming-course","/images/apple-touch-icon.png")}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"".concat("/intro-programming-course","/images/favicon-32x32.png")}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/intro-programming-course","/images/favicon-16x16.png")}),(0,o.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"".concat("/intro-programming-course","/images/favicon-16x16.png")}),(0,o.jsx)("link",{rel:"icon",type:"image/x-icon",href:"".concat("/intro-programming-course","/images/favicon.ico")})]}),(0,o.jsx)(t,i({},n))]})}}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(1118),t(387)}));var n=e.O();_N_E=n}]);