"use strict";(self.webpackChunke_commerce_site=self.webpackChunke_commerce_site||[]).push([[539],{539:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var i=r(791),c=r(683),n="ProductItem_Items__0Wyjq",a="ProductItem_button__fNaHZ",s="ProductItem_price__yIyY4",o="ProductItem_img__SVLp6",l="ProductItem_link__Xcsh1",u=r(551),m=r(523),d=r(184),p=function(e){var t=(0,i.useContext)(u.Z);return(0,d.jsx)(i.Fragment,{children:(0,d.jsxs)("div",{className:n,children:[(0,d.jsx)("h3",{children:e.title}),(0,d.jsxs)(m.rU,{to:"/products/".concat(e.id),className:l,children:[(0,d.jsx)("img",{className:o,src:e.image,alt:"some images"}),(0,d.jsxs)("div",{className:s,children:["Rs. ",e.price]}),(0,d.jsx)("button",{className:a,onClick:function(r){r.preventDefault(),t.addItem((0,c.Z)((0,c.Z)({},e),{},{quantity:e.quantity}))},children:"Add To cart"})]})]})})},b="AvailableItems_content__6lp6g",f="AvailableItems_ul__vCMmf",h=r(378),g=function(e){var t=(0,i.useContext)(u.Z),r=localStorage.getItem("email").replace(".","").replace("@","");return(0,i.useEffect)((function(){h.Z.get("https://crudcrud.com/api/122f9303dab44fe2b3f93272cee944a0/cart".concat(r)).then((function(e){t.initilizeCart(e.data)}))}),[]),(0,d.jsx)("div",{className:b,children:(0,d.jsx)("ul",{className:f,children:[{id:"1",title:"Colors",price:100,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%201.png"},{id:"2",title:"Black and white Colors",price:50,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%202.png"},{id:"3",title:"Yellow and Black Colors",price:70,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%203.png"},{id:"4",title:"Blue Color",price:100,imageUrl:"https://prasadyash2411.github.io/ecom-website/img/Album%204.png"}].map((function(e){return(0,d.jsx)(p,{id:e.id,title:e.title,price:e.price,image:e.imageUrl,quantity:1,_id:e._id},Math.random())}))})})},_={music:"Store_music__Od4Fo"},j=function(e){return(0,d.jsxs)("div",{className:_.body,children:[(0,d.jsx)("h1",{className:_.music,children:"Music Albums"}),(0,d.jsx)(g,{})]})}},683:function(e,t,r){r.d(t,{Z:function(){return a}});var i=r(881);function c(e,t,r){return(t=(0,i.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=539.171af904.chunk.js.map