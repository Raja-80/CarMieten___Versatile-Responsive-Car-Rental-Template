(window.webpackJsonp=window.webpackJsonp||[]).push([[30,11,17],{462:function(t,e,r){var content=r(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(32).default)("35c6c0f6",content,!0,{sourceMap:!1})},463:function(t,e,r){"use strict";r(462)},464:function(t,e,r){var n=r(31)((function(i){return i[1]}));n.push([t.i,'.lds-roller{display:inline-block;height:70px;position:relative;width:70px}.lds-roller div{animation:lds-roller 1.2s cubic-bezier(.5,0,.5,1) infinite;transform-origin:40px 40px}.lds-roller div:after{background:#817e7e;border-radius:50%;content:" ";display:block;height:6px;margin:-4px 0 0 -4px;position:absolute;width:6px}.lds-roller div:first-child{animation-delay:-36ms}.lds-roller div:first-child:after{left:63px;top:63px}.lds-roller div:nth-child(2){animation-delay:-72ms}.lds-roller div:nth-child(2):after{left:56px;top:68px}.lds-roller div:nth-child(3){animation-delay:-.108s}.lds-roller div:nth-child(3):after{left:48px;top:71px}.lds-roller div:nth-child(4){animation-delay:-.144s}.lds-roller div:nth-child(4):after{left:40px;top:72px}.lds-roller div:nth-child(5){animation-delay:-.18s}.lds-roller div:nth-child(5):after{left:32px;top:71px}.lds-roller div:nth-child(6){animation-delay:-.216s}.lds-roller div:nth-child(6):after{left:24px;top:68px}.lds-roller div:nth-child(7){animation-delay:-.252s}.lds-roller div:nth-child(7):after{left:17px;top:63px}.lds-roller div:nth-child(8){animation-delay:-.288s}.lds-roller div:nth-child(8):after{left:12px;top:56px}@keyframes lds-roller{0%{transform:rotate(0deg)}to{transform:rotate(1turn)}}',""]),n.locals={},t.exports=n},466:function(t,e,r){"use strict";r.r(e);r(463);var n=r(17),component=Object(n.a)({},(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"lds-roller"},[t("div"),t("div"),t("div"),t("div"),t("div")])}],!1,null,null,null);e.default=component.exports},471:function(t,e,r){"use strict";r.r(e);r(27),r(19),r(45),r(23),r(46);var n=r(10),l=r(8);r(50),r(22),r(11),r(55),r(189),r(33),r(78),r(280),r(54);function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var d={props:{placement:String},data:function(){return{loading:!1}},mounted:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function e(){var r,element,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.state.apps){if(r=t.$store.state.apps.filter((function(e){return e.placement.split("|").indexOf(t.placement)>-1})),r.length>0)for(t.loading=!0,element=document.querySelector("#".concat(t.placement)),n=0;n<r.length;n++)l=r[n],t.loadApp(l,element);t.loading=!1}case 1:case"end":return e.stop()}}),e)})))()},methods:{loadApp:function(t,element){var e=this;return Object(l.a)(regeneratorRuntime.mark((function r(){var n,l,o,d,f,m,h,html,style;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(element){r.next=2;break}return r.abrupt("return");case 2:if(n="".concat(t.route,"_").concat(e.placement),!t["loaded_".concat(n)])try{l=e.$store.state.apps.find((function(a){return a.route===t.route})),o=e.$tools.copy(l.loaded),d=o.manifest,f=o.html,m=o.css,h=(h=o.js).replace("__DATA__",JSON.stringify(c({placement:e.placement},t.config)).replace(/\"/g,'"')),f=f.replace(new RegExp("app_".concat(t.route),"g"),"app_".concat(t.route,"_").concat(n)),m=m.replace(new RegExp("#app_".concat(t.route),"g"),"#app_".concat(t.route,"_").concat(n)),h=h.replace(new RegExp("app_".concat(t.route),"g"),"app_".concat(t.route,"_").concat(n)),t["loaded_".concat(n)]={manifest:d,html:f,css:m,js:h}}catch(t){console.log({err:t})}html=document.createElement("div"),style=document.createElement("style"),element.append(html),html.innerHTML=t["loaded_".concat(n)].html,element.append(style),style.innerHTML=t["loaded_".concat(n)].css,window.eval(t["loaded_".concat(n)].js);case 11:case"end":return r.stop()}}),r)})))()}}},f=r(17),component=Object(f.a)(d,(function(){return(0,this._self._c)("div",{attrs:{id:this.placement}})}),[],!1,null,null,null);e.default=component.exports},532:function(t,e,r){"use strict";r.r(e);r(34),r(66),r(11),r(54),r(60),r(37),r(61),r(38);var n=r(8);r(50),r(19),r(44),r(55),r(33),r(78);function l(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return o(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return c=t.done,t},e:function(t){d=!0,l=t},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw l}}}}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var c={data:function(){return{loading:!0,item:null,socialMedia:[{name:"whatsapp",url:"https://api.whatsapp.com/send?text={title}%20{url}",image:"https://storeno.b-cdn.net/themes/palest/whatsapp.png"},{name:"facebook",image:"https://storeno.b-cdn.net/themes/palest/facebook.png",url:"https://www.facebook.com/sharer.php?u={url}"},{name:"twitter",url:"https://twitter.com/intent/tweet?url={url}&text={title}",image:"https://storeno.b-cdn.net/themes/palest/twitter.png"},{name:"linkedin",url:"https://www.linkedin.com/sharing/share-offsite/?url={url}",image:"https://storeno.b-cdn.net/themes/palest/linkedin.png"}]}},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,data,o,c,d,button;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=t.$route.params.slug,e.next=4,t.$storeino.pages.get({slug:r,type:"PAGE"});case 4:n=e.sent,data=n.data,t.item=data,t.$store.state.seo.title=t.item.title+" - "+t.$settings.store_name,t.$store.state.seo.description=t.item.excerpt||t.$settings.store_description,t.item.image&&(t.$store.state.seo.image=t.item.image.url),o="https://".concat(t.$store.state.domain,"/pages/").concat(r),c=l(t.socialMedia);try{for(c.s();!(d=c.n()).done;)(button=d.value).url=button.url.replace(/\{title\}/gi,t.item.title).replace(/\{url\}/gi,o)}catch(t){c.e(t)}finally{c.f()}t.loading=!1,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log({e:e.t0}),t.$nuxt.error({statusCode:404,message:"post_not_found"});case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))()},mounted:function(){this.$storeino.fbpx("PageView")}},d=r(17),component=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:""},[e("div",{staticClass:"container my-2"},[t.loading?e("div",{staticClass:"flex items-center justify-center my-5"},[e("si-loader")],1):t._e(),t._v(" "),t.item?e("div",{staticClass:"my-6 flex flex-col justify-start items-center"},[t.item.image?e("nuxt-img",{staticClass:"h-96",attrs:{src:t.item.image?t.item.image.url:t.$store.state.defaults.logo,alt:"company logo"}}):t._e(),t._v(" "),e("h1",{staticClass:"m-10 font-semibold"},[t._v(t._s(t.item.title))]),t._v(" "),e("hr",{staticClass:"m-0"}),t._v(" "),e("div",{staticClass:"flex flex-col justify-center items-start"},[t.item.excerpt?e("div",{staticClass:"m-3"},[e("small",[t._v(t._s(t.item.excerpt))])]):t._e(),t._v(" "),e("hr"),t._v(" "),t.item?e("div",{staticClass:"p-2 mx-2 my-3 description",attrs:{id:"description"},domProps:{innerHTML:t._s(t.item.content)}}):t._e()]),t._v(" "),e("div",{staticClass:"mt-14 mb-12"},[e("si-app-loader",{staticClass:"text-black mx-10 pl-32",attrs:{placement:"AFTER_CONTACT_PAGE"}})],1),t._v(" "),e("div",{staticClass:"flex items-center"},[e("div",{staticClass:"flex w-full border-b border-gray-200"}),t._v(" "),e("h3",{staticClass:"p-2 whitespace-nowrap"},[t._v(t._s(t.$settings.sections.post.share_buttons.title))])]),t._v(" "),e("div",{staticClass:"flex justify-center"},t._l(t.socialMedia,(function(t){return e("div",{key:t.name,staticClass:"flex items-center justify-center h-12 m-2"},[e("a",{staticClass:"flex h-full",attrs:{href:t.url,target:"_blank",rel:"noopener noreferrer"}},[e("si-image",{staticClass:"w-10 h-10",attrs:{width:"40",height:"40",src:t.image,alt:t.name}})],1)])})),0)],1):t._e()])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiLoader:r(466).default,SiAppLoader:r(471).default})}}]);