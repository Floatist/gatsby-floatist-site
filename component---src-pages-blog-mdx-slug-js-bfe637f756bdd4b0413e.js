(self.webpackChunkfloatist_site=self.webpackChunkfloatist_site||[]).push([[853],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,o=new Array(t);r<t;r++)o[r]=e[r];return o},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var o=r(7228);e.exports=function(e){if(Array.isArray(e))return o(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var o=r(9489),n=r(7067);function a(t,r,l){return n()?(e.exports=a=Reflect.construct,e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=a=function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&o(a,r.prototype),a},e.exports.__esModule=!0,e.exports.default=e.exports),a.apply(null,arguments)}e.exports=a,e.exports.__esModule=!0,e.exports.default=e.exports},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var o=r(3646),n=r(6860),a=r(379),l=r(8206);e.exports=function(e){return o(e)||n(e)||a(e)||l()},e.exports.__esModule=!0,e.exports.default=e.exports},379:function(e,t,r){var o=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return o(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?o(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},2102:function(e,t,r){var o=r(2632);e.exports={MDXRenderer:o}},2632:function(e,t,r){var o=r(9100),n=r(319),a=r(9713),l=r(7316),u=["scope","children"];function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var p=r(7294),f=r(4983).mdx,i=r(6948).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,u),c=i(t),d=p.useMemo((function(){if(!r)return null;var e=s({React:p,mdx:f},c),t=Object.keys(e),a=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(n(t),[""+r])).apply(void 0,[{}].concat(n(a)))}),[r,t]);return p.createElement(d,s({},a))}},7143:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var o=r(7294),n=r(3639),a=r(7408),l=r(994),u=r(396),c=r(2102),s=r(7317),p=function(e){var t=e.data,r=(0,u.d)(t.mdx.frontmatter.hero_image);return o.createElement(s.Z,{pageTitle:t.mdx.frontmatter.title},o.createElement(n.Z,{fluid:!0,className:"slug-module--header--WLQj-",style:{backgroundColor:t.mdx.frontmatter.color}},o.createElement(l.Z,{className:"slug-module--row--Uf9tg"},o.createElement(a.Z,{md:6},o.createElement(u.G,{image:r,alt:t.mdx.frontmatter.hero_image_alt})),o.createElement(a.Z,{md:6,className:"slug-module--col--9gDMC"},o.createElement("h1",{className:"slug-module--title--Mht3j"},t.mdx.frontmatter.title),o.createElement("p",{className:"slug-module--abstract--LZOlu"},t.mdx.frontmatter.abstract),o.createElement("p",{className:"slug-module--author--JAzdB"},"By ",t.mdx.frontmatter.author),o.createElement("p",{className:"slug-module--date--g9yG7"},t.mdx.frontmatter.date)))),o.createElement(n.Z,{fluid:!0,className:"slug-module--body--TUCVk"},o.createElement("p",null,o.createElement("i",{className:"fa-regular fa-clock"})," ",t.mdx.timeToRead," min read"),o.createElement("hr",{style:{color:"#000000",backgroundColor:"#000000",height:2,borderColor:"#000000"}}),o.createElement(c.MDXRenderer,null,t.mdx.body)))}}}]);
//# sourceMappingURL=component---src-pages-blog-mdx-slug-js-bfe637f756bdd4b0413e.js.map