(function(){"use strict";var n={7429:function(n,e,a){var u=a(5130),r=a(6768),o=a(144),t=a(4232);const l={class:"Bar"},i=["onClick"],s=["src"],c={class:"error"};var v={__name:"GameBar",props:{showGameBar:Boolean,showBar:Function},setup(n){const e=(0,o.KR)(Array(9).fill(null)),a=(0,o.KR)("X"),v=(0,o.KR)(""),f=(0,o.KR)(""),h=()=>{a.value="X",v.value="",f.value="",e.value=Array(9).fill(null)},p=n=>{if(""!=f.value)return;if(e.value[n])return void(v.value="Ячейка уже занята");v.value="",e.value[n]="X"===a.value?"https://s.iimg.su/s/13/qIZuQn6BieovEbbFhP0gi3BaMMk5UJxEwvmuGJxX.png":"https://moocit.de/images/9/96/Kreis-Symbol-MOOCit.png",a.value="X"===a.value?"O":"X";const u=()=>{const n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[2,4,6],[0,4,8]];for(const[u,r,o]of n){if(e.value[u]==e.value[r]&&e.value[u]==e.value[o]&&null!=e.value[u])return void(f.value="X"==a.value?"Нолики победили":"Крестики победили");0==e.value.includes(null)&&""==f.value&&(f.value="Ничья")}};u()};return(o,d)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bo)((0,r.Lk)("div",l,[((0,r.uX)(!0),(0,r.CE)(r.FK,null,(0,r.pI)(e.value,((n,e)=>((0,r.uX)(),(0,r.CE)("div",{key:e,onClick:n=>p(e),class:"field"},[n?((0,r.uX)(),(0,r.CE)("img",{key:0,src:n},null,8,s)):(0,r.Q3)("",!0)],8,i)))),128))],512),[[u.aG,n.showGameBar]]),(0,r.bo)((0,r.Lk)("div",c,[(0,r.bo)((0,r.Lk)("h2",null,(0,t.v_)(v.value),513),[[u.aG,""!=v.value]]),(0,r.bo)((0,r.Lk)("h3",null,"Текущий ход: "+(0,t.v_)(a.value),513),[[u.aG,""==f.value]]),(0,r.Lk)("h1",null,(0,t.v_)(f.value),1),(0,r.bo)((0,r.Lk)("button",{onClick:d[0]||(d[0]=e=>{n.showBar(),h()})}," Играть заново ",512),[[u.aG,""!=f.value]])],512),[[u.aG,n.showGameBar]])],64))}},f=a(1241);const h=(0,f.A)(v,[["__scopeId","data-v-37d98f69"]]);var p=h;const d={class:"Header"};function b(n,e){return(0,r.uX)(),(0,r.CE)("div",d,e[0]||(e[0]=[(0,r.Lk)("h1",null,"Крестики Нолики",-1)]))}const w={},m=(0,f.A)(w,[["render",b]]);var B=m;const k={class:"PlayButton"};var G={__name:"PlayButton",props:{showBar:Function,showGameBar:Boolean},setup(n){return(e,a)=>(0,r.bo)(((0,r.uX)(),(0,r.CE)("div",k,[(0,r.Lk)("button",{class:"asd",onClick:a[0]||(a[0]=(...e)=>n.showBar&&n.showBar(...e))},"Играть")],512)),[[u.aG,!n.showGameBar]])}};const y=G;var g=y,C={__name:"App",setup(n){const e=(0,o.KR)(!1);function a(){e.value=!e.value}return(n,u)=>((0,r.uX)(),(0,r.CE)(r.FK,null,[(0,r.bF)(B),(0,r.bF)(g,{showGameBar:e.value,showBar:a},null,8,["showGameBar"]),(0,r.bF)(p,{showGameBar:e.value,showBar:a},null,8,["showGameBar"])],64))}};const O=C;var X=O;(0,u.Ef)(X).mount("#app")}},e={};function a(u){var r=e[u];if(void 0!==r)return r.exports;var o=e[u]={exports:{}};return n[u].call(o.exports,o,o.exports,a),o.exports}a.m=n,function(){var n=[];a.O=function(e,u,r,o){if(!u){var t=1/0;for(c=0;c<n.length;c++){u=n[c][0],r=n[c][1],o=n[c][2];for(var l=!0,i=0;i<u.length;i++)(!1&o||t>=o)&&Object.keys(a.O).every((function(n){return a.O[n](u[i])}))?u.splice(i--,1):(l=!1,o<t&&(t=o));if(l){n.splice(c--,1);var s=r();void 0!==s&&(e=s)}}return e}o=o||0;for(var c=n.length;c>0&&n[c-1][2]>o;c--)n[c]=n[c-1];n[c]=[u,r,o]}}(),function(){a.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return a.d(e,{a:e}),e}}(),function(){a.d=function(n,e){for(var u in e)a.o(e,u)&&!a.o(n,u)&&Object.defineProperty(n,u,{enumerable:!0,get:e[u]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){a.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){var n={524:0};a.O.j=function(e){return 0===n[e]};var e=function(e,u){var r,o,t=u[0],l=u[1],i=u[2],s=0;if(t.some((function(e){return 0!==n[e]}))){for(r in l)a.o(l,r)&&(a.m[r]=l[r]);if(i)var c=i(a)}for(e&&e(u);s<t.length;s++)o=t[s],a.o(n,o)&&n[o]&&n[o][0](),n[o]=0;return a.O(c)},u=self["webpackChunktictactoe"]=self["webpackChunktictactoe"]||[];u.forEach(e.bind(null,0)),u.push=e.bind(null,u.push.bind(u))}();var u=a.O(void 0,[504],(function(){return a(7429)}));u=a.O(u)})();
//# sourceMappingURL=app.e2001fef.js.map