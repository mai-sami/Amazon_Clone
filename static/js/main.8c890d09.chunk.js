(this.webpackJsonpamazon=this.webpackJsonpamazon||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},62:function(e,t,c){},63:function(e,t,c){},64:function(e,t,c){},65:function(e,t,c){},67:function(e,t,c){},68:function(e,t,c){},70:function(e,t,c){"use strict";c.r(t);var a=c(3),s=c.n(a),i=c(25),n=c.n(i),r=(c(48),c(39)),o=c(13),l=(c(49),c(50),c(40)),j=c.n(l),d=c(41),u=c.n(d),h=c(19),b=c(2),m=Object(a.createContext)(),O=function(e){var t=e.reducer,c=e.initialState,s=e.children;return Object(b.jsx)(m.Provider,{value:Object(a.useReducer)(t,c),children:s})},p=function(){return Object(a.useContext)(m)},_=c(32),g=(_.a.initializeApp({apiKey:"AIzaSyBYp4GwwdRNQfdMaGEsmcU8nRv2r_y5upw",authDomain:"fir-d0820.firebaseapp.com",projectId:"fir-d0820",storageBucket:"fir-d0820.appspot.com",messagingSenderId:"683513673993",appId:"1:683513673993:web:36e5e5928f558866c07bd8",measurementId:"G-WZMP1CDCXF"}).firestore(),_.a.auth());var x=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"header__logo",src:"http://pngimg.com/uploads/amazon/amazon_PNG11.png"})}),Object(b.jsxs)("div",{className:"header__search",children:[Object(b.jsx)("input",{className:"header__searchInput",type:"text"}),Object(b.jsx)(j.a,{className:"header__searchIcon"})]}),Object(b.jsxs)("div",{className:"header__nav",children:[Object(b.jsx)(h.b,{to:!s&&"/login",children:Object(b.jsxs)("div",{onClick:function(){s&&g.signOut()},className:"header__option",children:[Object(b.jsxs)("span",{className:"header__optionLineOne",children:["Hello ",s?s.email:"Guest"]}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:s?"Sign Out":"Sign In"})]})}),Object(b.jsx)(h.b,{to:"/orders",children:Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Returns"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"& Orders"})]})}),Object(b.jsxs)("div",{className:"header__option",children:[Object(b.jsx)("span",{className:"header__optionLineOne",children:"Your"}),Object(b.jsx)("span",{className:"header__optionLineTwo",children:"Prime"})]}),Object(b.jsx)(h.b,{to:"/checkout",children:Object(b.jsxs)("div",{className:"header__optionBasket",children:[Object(b.jsx)(u.a,{}),Object(b.jsx)("span",{className:"header__optionLineTwo header__basketCount",children:null===a||void 0===a?void 0:a.length})]})})]})]})};c(62),c(63);var v=function(e){var t=e.id,c=e.title,a=e.image,s=e.price,i=e.rating,n=p(),r=Object(o.a)(n,2),l=(r[0].basket,r[1]);return Object(b.jsxs)("div",{className:"product",children:[Object(b.jsxs)("div",{className:"product__info",children:[Object(b.jsx)("p",{children:c}),Object(b.jsxs)("p",{className:"product__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"product__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))})]}),Object(b.jsx)("img",{src:a,alt:""}),Object(b.jsx)("button",{onClick:function(){l({type:"ADD_TO_BASKET",item:{id:t,title:c,image:a,price:s,rating:i}})},children:"Add to Basket"})]})};var f=function(){return Object(b.jsx)("div",{className:"home",children:Object(b.jsxs)("div",{className:"home__container",children:[Object(b.jsx)("img",{className:"home__image",src:"https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg",alt:""}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(v,{id:"12321341",title:"The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",price:11.96,rating:5,image:"https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"}),Object(b.jsx)(v,{id:"49538094",title:"Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl",price:239,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"})]}),Object(b.jsxs)("div",{className:"home__row",children:[Object(b.jsx)(v,{id:"4903850",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor",price:199.99,rating:3,image:"https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"}),Object(b.jsx)(v,{id:"23445930",title:"Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric",price:98.99,rating:5,image:"https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"}),Object(b.jsx)(v,{id:"3254354345",title:"New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)",price:598.99,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"})]}),Object(b.jsx)("div",{className:"home__row",children:Object(b.jsx)(v,{id:"90829332",title:"Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440",price:1094.98,rating:4,image:"https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"})})]})})},N=(c(64),c(65),c(42)),k=c.n(N),S=c(33),C=c(21),A=function(e){return null===e||void 0===e?void 0:e.reduce((function(e,t){return t.price+e}),0)},E=function(e,t){switch(console.log(t),t.type){case"ADD_TO_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[].concat(Object(S.a)(e.basket),[t.item])});case"EMPTY_BASKET":return Object(C.a)(Object(C.a)({},e),{},{basket:[]});case"REMOVE_FROM_BASKET":var c=e.basket.findIndex((function(e){return e.id===t.id})),a=Object(S.a)(e.basket);return c>=0?a.splice(c,1):console.warn("Cant remove product (id: ".concat(t.id,") as its not in basket!")),Object(C.a)(Object(C.a)({},e),{},{basket:a});case"SET_USER":return Object(C.a)(Object(C.a)({},e),{},{user:t.user});default:return e}},w=c(10);var y=function(){Object(w.f)();var e=p(),t=Object(o.a)(e,2),c=t[0].basket;return t[1],Object(b.jsxs)("div",{className:"subtotal",children:[Object(b.jsx)(k.a,{renderText:function(e){return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("p",{children:["Subtotal (",c.length," items): ",Object(b.jsx)("strong",{children:e})]}),Object(b.jsxs)("small",{className:"subtotal__gift",children:[Object(b.jsx)("input",{type:"checkbox"})," This order contains a gift"]})]})},decimalScale:2,value:A(c),displayType:"text",thousandSeparator:!0,prefix:"$"}),Object(b.jsx)("button",{children:"Proceed to Checkout"})]})};c(67);var B=function(e){var t=e.id,c=e.image,a=e.title,s=e.price,i=e.rating,n=e.hideButton,r=p(),l=Object(o.a)(r,2),j=(l[0].basket,l[1]);return Object(b.jsxs)("div",{className:"checkoutProduct",children:[Object(b.jsx)("img",{className:"checkoutProduct__image",src:c}),Object(b.jsxs)("div",{className:"checkoutProduct__info",children:[Object(b.jsx)("p",{className:"checkoutProduct__title",children:a}),Object(b.jsxs)("p",{className:"checkoutProduct__price",children:[Object(b.jsx)("small",{children:"$"}),Object(b.jsx)("strong",{children:s})]}),Object(b.jsx)("div",{className:"checkoutProduct__rating",children:Array(i).fill().map((function(e,t){return Object(b.jsx)("p",{children:"\ud83c\udf1f"})}))}),!n&&Object(b.jsx)("button",{onClick:function(){j({type:"REMOVE_FROM_BASKET",id:t})},children:"Remove from Basket"})]})]})};var P=function(){var e=p(),t=Object(o.a)(e,2),c=t[0],a=c.basket,s=c.user;return t[1],Object(b.jsxs)("div",{className:"checkout",children:[Object(b.jsxs)("div",{className:"checkout__left",children:[Object(b.jsx)("img",{className:"checkout__ad",src:"https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg",alt:""}),Object(b.jsxs)("div",{children:[Object(b.jsxs)("h3",{children:["Hello, ",null===s||void 0===s?void 0:s.email]}),Object(b.jsx)("h2",{className:"checkout__title",children:"Your shopping Basket"}),a.map((function(e){return Object(b.jsx)(B,{id:e.id,title:e.title,image:e.image,price:e.price,rating:e.rating})}))]})]}),Object(b.jsx)("div",{className:"checkout__right",children:Object(b.jsx)(y,{})})]})};c(68);var T=function(){var e=Object(w.f)(),t=Object(a.useState)(""),c=Object(o.a)(t,2),s=c[0],i=c[1],n=Object(a.useState)(""),r=Object(o.a)(n,2),l=r[0],j=r[1];return Object(b.jsxs)("div",{className:"login",children:[Object(b.jsx)(h.b,{to:"/",children:Object(b.jsx)("img",{className:"login__logo",src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"})}),Object(b.jsxs)("div",{className:"login__container",children:[Object(b.jsx)("h1",{children:"Sign-in"}),Object(b.jsxs)("form",{children:[Object(b.jsx)("h5",{children:"E-mail"}),Object(b.jsx)("input",{type:"text",value:s,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("h5",{children:"Password"}),Object(b.jsx)("input",{type:"password",value:l,onChange:function(e){return j(e.target.value)}}),Object(b.jsx)("button",{type:"submit",onClick:function(t){t.preventDefault(),g.signInWithEmailAndPassword(s,l).then((function(t){e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__signInButton",children:"Sign In"})]}),Object(b.jsx)("p",{children:"By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice."}),Object(b.jsx)("button",{onClick:function(t){t.preventDefault(),g.createUserWithEmailAndPassword(s,l).then((function(t){t&&e.push("/")})).catch((function(e){return alert(e.message)}))},className:"login__registerButton",children:"Create your Amazon Account"})]})]})};var I=function(){var e=p(),t=Object(o.a)(e,2);Object(r.a)(t[0]);var c=t[1];return Object(a.useEffect)((function(){g.onAuthStateChanged((function(e){console.log("THE USER IS >>> ",e),c(e?{type:"SET_USER",user:e}:{type:"SET_USER",user:null})}))}),[]),Object(b.jsx)(h.a,{children:Object(b.jsx)("div",{className:"app",children:Object(b.jsxs)(w.c,{children:[Object(b.jsx)(w.a,{path:"/login",children:Object(b.jsx)(T,{})}),Object(b.jsxs)(w.a,{exact:!0,path:"/checkout",children:[Object(b.jsx)(x,{}),Object(b.jsx)(P,{})]}),Object(b.jsxs)(w.a,{path:"/",children:[Object(b.jsx)(x,{}),Object(b.jsx)(f,{})]})]})})})};n.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(O,{initialState:{basket:[],user:null},reducer:E,children:Object(b.jsx)(I,{})})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.8c890d09.chunk.js.map