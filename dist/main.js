(()=>{"use strict";var e={529:(e,r,t)=>{t.d(r,{Z:()=>o});var n=t(645),a=t.n(n)()((function(e){return e[1]}));a.push([e.id,"body {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    background-color: rgba(179, 111, 22, 0.658);\r\n}\r\n\r\n.keyboard-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n    height: fit-content;\r\n    background-color: rgb(131, 12, 12);\r\n    padding: 3px;\r\n    padding-bottom: 5px;\r\n    width: 800px;\r\n    cursor: none;\r\n    border-radius: 5px;\r\n}\r\n\r\n.textField {\r\n    background-color: antiquewhite;\r\n    border: 2px solid black;\r\n    align-self: center;\r\n    overflow:hidden;\r\n    resize: none;\r\n}\r\n\r\n.keyboard-row {\r\n    display: flex;\r\n    margin-bottom: 2px;\r\n    margin-top: 2px;\r\n    justify-content: space-between;\r\n}\r\n\r\n.keyboard-button1:hover, .keyboard-button2:hover, .keyboard-button5:hover {\r\n    cursor: pointer;\r\n}\r\n\r\n.keyboard-button1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 100%;\r\n    background-color: rgba(202, 199, 37, 0.863);\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    cursor: none;\r\n    caret-color: transparent;\r\n}\r\n\r\n.keyboard-button2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 250%;\r\n    height: 40px;\r\n    background-color: rgba(255, 251, 0, 0.863);\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    caret-color: transparent;\r\n}\r\n\r\n.keyboard-button5 {\r\n    display: flex;    \r\n    justify-content: center;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    border: 1px solid black;\r\n    border-radius: 5px;\r\n    width: 600%;\r\n    height: 40px;\r\n    background-color: rgba(255, 251, 0, 0.863);\r\n    margin-left: 2px;\r\n    margin-right: 2px;\r\n    caret-color: transparent;\r\n}\r\n\r\n.special {\r\n    background-color: rgba(255, 251, 0, 0.863);\r\n}\r\n\r\n.keypressed {\r\n    background-color: rgb(164, 175, 184);\r\n    cursor:none;\r\n    \r\n    animation-name: press;\r\n    animation-duration: 0.5s;\r\n    animation-direction: alternate;\r\n    animation-fill-mode: forwards;\r\n    \r\n}\r\n\r\n@keyframes press{\r\n    0%    {background-color: rgba(255, 251, 0, 0.863); }\r\n    20%   {color: rgb(164, 175, 184);}\r\n    100%  { background-color: rgb(164, 175, 184); border-radius: 135px; color: transparent;}\r\n}\r\n\r\n.label {\r\n    margin-left: 4px;\r\n    pointer-events: none;\r\n}\r\n\r\n.arrow {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    max-width: 50px\r\n}\r\n\r\n.info {\r\n    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\r\n    position: fixed;\r\n    bottom: 0px;\r\n    right: 0px;\r\n}\r\n",""]);const o=a},645:e=>{e.exports=function(e){var r=[];return r.toString=function(){return this.map((function(r){var t=e(r);return r[2]?"@media ".concat(r[2]," {").concat(t,"}"):t})).join("")},r.i=function(e,t,n){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(n)for(var o=0;o<this.length;o++){var i=this[o][0];null!=i&&(a[i]=!0)}for(var s=0;s<e.length;s++){var c=[].concat(e[s]);n&&a[c[0]]||(t&&(c[2]?c[2]="".concat(t," and ").concat(c[2]):c[2]=t),r.push(c))}},r}},695:e=>{var r={};e.exports=function(e){if(void 0===r[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}r[e]=t}return r[e]}},379:e=>{var r=[];function t(e){for(var t=-1,n=0;n<r.length;n++)if(r[n].identifier===e){t=n;break}return t}function n(e,n){for(var o={},i=[],s=0;s<e.length;s++){var c=e[s],l=n.base?c[0]+n.base:c[0],d=o[l]||0,y="".concat(l," ").concat(d);o[l]=d+1;var p=t(y),u={css:c[1],media:c[2],sourceMap:c[3]};-1!==p?(r[p].references++,r[p].updater(u)):r.push({identifier:y,updater:a(u,n),references:1}),i.push(y)}return i}function a(e,r){var t=r.domAPI(r);return t.update(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t.update(e=r)}else t.remove()}}e.exports=function(e,a){var o=n(e=e||[],a=a||{});return function(e){e=e||[];for(var i=0;i<o.length;i++){var s=t(o[i]);r[s].references--}for(var c=n(e,a),l=0;l<o.length;l++){var d=t(o[l]);0===r[d].references&&(r[d].updater(),r.splice(d,1))}o=c}}},216:e=>{e.exports=function(e){var r=document.createElement("style");return e.setAttributes(r,e.attributes),e.insert(r),r}},795:e=>{e.exports=function(e){var r=e.insertStyleElement(e);return{update:function(t){!function(e,r,t){var n=t.css,a=t.media,o=t.sourceMap;a?e.setAttribute("media",a):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),r.styleTagTransform(n,e)}(r,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(r)}}}}},r={};function t(n){var a=r[n];if(void 0!==a)return a.exports;var o=r[n]={id:n,exports:{}};return e[n](o,o.exports,t),o.exports}t.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return t.d(r,{a:r}),r},t.d=(e,r)=>{for(var n in r)t.o(r,n)&&!t.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:r[n]})},t.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),(()=>{const e={tilde:{lang:{default:{primary:"`",secondary:"~"},ukr:{primary:"'",secondary:"₴"}},code:"Backquote",size:1,type:"symbol"},one:{lang:{default:{primary:"1",secondary:"!"},ukr:{primary:"1",secondary:"!"}},code:"Digit1",size:1,type:"digit"},two:{lang:{default:{primary:"2",secondary:"@"},ukr:{primary:"2",secondary:"@"}},code:"Digit2",size:1,type:"digit"},three:{lang:{default:{primary:"3",secondary:"#"},ukr:{primary:"3",secondary:"#"}},code:"Digit3",size:1,type:"digit"},four:{lang:{default:{primary:"4",secondary:"$"},ukr:{primary:"4",secondary:"$"}},code:"Digit4",size:1,type:"digit"},five:{lang:{default:{primary:"5",secondary:"%"},ukr:{primary:"5",secondary:"%"}},code:"Digit5",size:1,type:"digit"},six:{lang:{default:{primary:"6",secondary:"^"},ukr:{primary:"6",secondary:"^"}},code:"Digit6",size:1,type:"digit"},seven:{lang:{default:{primary:"7",secondary:"&"},ukr:{primary:"7",secondary:"&"}},code:"Digit7",size:1,type:"digit"},eight:{lang:{default:{primary:"8",secondary:"*"},ukr:{primary:"8",secondary:"*"}},code:"Digit8",size:1,type:"digit"},nine:{lang:{default:{primary:"9",secondary:"("},ukr:{primary:"9",secondary:"("}},code:"Digit9",size:1,type:"digit"},zero:{lang:{default:{primary:"0",secondary:")"},ukr:{primary:"0",secondary:")"}},code:"Digit0",size:1,type:"digit"},minus:{lang:{default:{primary:"-",secondary:"_"},ukr:{primary:"-",secondary:"_"}},code:"Minus",size:1,type:"symbol"},equal:{lang:{default:{primary:"=",secondary:"+"},ukr:{primary:"=",secondary:"+"}},code:"Equal",size:1,type:"symbol"},Backspace:{code:"Backspace",size:2,type:"special",label:"Backspace"},Tab:{lang:{default:{primary:"\t",secondary:""}},code:"Tab",size:2,type:"special",label:"Tab"},Q:{lang:{default:{primary:"q",secondary:"Q"},ukr:{primary:"й",secondary:"Й"}},code:"KeyQ",size:1,type:"letter"},W:{lang:{default:{primary:"w",secondary:"W"},ukr:{primary:"ц",secondary:"Ц"}},code:"KeyW",size:1,type:"letter"},E:{lang:{default:{primary:"e",secondary:"E"},ukr:{primary:"у",secondary:"У"}},code:"KeyE",size:1,type:"letter"},R:{lang:{default:{primary:"r",secondary:"R"},ukr:{primary:"к",secondary:"К"}},code:"KeyR",size:1,type:"letter"},T:{lang:{default:{primary:"t",secondary:"T"},ukr:{primary:"н",secondary:"Н"}},code:"KeyT",size:1,type:"letter"},Y:{lang:{default:{primary:"y",secondary:"Y"},ukr:{primary:"н",secondary:"Н"}},code:"KeyY",size:1,type:"letter"},U:{lang:{default:{primary:"u",secondary:"U"},ukr:{primary:"г",secondary:"Г"}},code:"KeyU",size:1,type:"letter"},I:{lang:{default:{primary:"i",secondary:"I"},ukr:{primary:"ш",secondary:"Ш"}},code:"KeyI",size:1,type:"letter"},O:{lang:{default:{primary:"o",secondary:"O"},ukr:{primary:"щ",secondary:"Щ"}},code:"KeyO",size:1,type:"letter"},P:{lang:{default:{primary:"p",secondary:"P"},ukr:{primary:"з",secondary:"З"}},code:"KeyP",size:1,type:"letter"},bracketLeft:{lang:{default:{primary:"[",secondary:"{"},ukr:{primary:"х",secondary:"Х",type:"letter"}},code:"BracketLeft",size:1,type:"symbol"},bracketRight:{lang:{default:{primary:"]",secondary:"}"},ukr:{primary:"ї",secondary:"Ї",type:"letter"}},code:"BracketRight",size:1,type:"symbol"},slashes:{lang:{default:{primary:"\\",secondary:"|"},ukr:{primary:"\\",secondary:"/"}},code:"Backslash",size:1,type:"symbol"},Delete:{code:"Delete",size:1,type:"special",label:"Del"},Capslock:{code:"CapsLock",size:2,type:"special",label:"Caps Lock"},A:{lang:{default:{primary:"a",secondary:"A"},ukr:{primary:"ф",secondary:"Ф"}},code:"KeyA",size:1,type:"letter"},S:{lang:{default:{primary:"s",secondary:"S"},ukr:{primary:"і",secondary:"І"}},code:"KeyS",size:1,type:"letter"},D:{lang:{default:{primary:"d",secondary:"D"},ukr:{primary:"в",secondary:"В"}},code:"KeyD",size:1,type:"letter"},F:{lang:{default:{primary:"f",secondary:"F"},ukr:{primary:"а",secondary:"А"}},code:"KeyF",size:1,type:"letter"},G:{lang:{default:{primary:"g",secondary:"G"},ukr:{primary:"п",secondary:"П"}},code:"KeyG",size:1,type:"letter"},H:{lang:{default:{primary:"h",secondary:"H"},ukr:{primary:"р",secondary:"Р"}},code:"KeyH",size:1,type:"letter"},J:{lang:{default:{primary:"j",secondary:"J"},ukr:{primary:"о",secondary:"О"}},code:"KeyJ",size:1,type:"letter"},K:{lang:{default:{primary:"k",secondary:"K"},ukr:{primary:"л",secondary:"Л"}},code:"KeyK",size:1,type:"letter"},L:{lang:{default:{primary:"l",secondary:"L"},ukr:{primary:"д",secondary:"Д"}},code:"KeyL",size:1,type:"letter"},colon:{lang:{default:{primary:";",secondary:":"},ukr:{primary:"ж",secondary:"Ж",type:"letter"}},code:"Semicolon",size:1,type:"symbol"},quote:{lang:{default:{primary:"'",secondary:'"'},ukr:{primary:"є",secondary:"Є",type:"letter"}},code:"Quote",size:1,type:"symbol"},Enter:{lang:{default:{primary:"\n",secondary:"\n"}},code:"Enter",size:2,type:"special",label:"Enter"},ShiftLeft:{code:"ShiftLeft",size:2,type:"special",label:"Shift"},Z:{lang:{default:{primary:"z",secondary:"Z"},ukr:{primary:"я",secondary:"Я"}},code:"KeyZ",size:1,type:"letter"},X:{lang:{default:{primary:"x",secondary:"X"},ukr:{primary:"ч",secondary:"Ч"}},code:"KeyX",size:1,type:"letter"},C:{lang:{default:{primary:"c",secondary:"C"},ukr:{primary:"с",secondary:"С"}},code:"KeyC",size:1,type:"letter"},V:{lang:{default:{primary:"v",secondary:"V"},ukr:{primary:"м",secondary:"М"}},code:"KeyV",size:1,type:"letter"},B:{lang:{default:{primary:"b",secondary:"B"},ukr:{primary:"и",secondary:"И"}},code:"KeyB",size:1,type:"letter"},N:{lang:{default:{primary:"n",secondary:"N"},ukr:{primary:"т",secondary:"Т"}},code:"KeyN",size:1,type:"letter"},M:{lang:{default:{primary:"m",secondary:"M"},ukr:{primary:"ь",secondary:"Ь"}},code:"KeyM",size:1,type:"letter"},comma:{lang:{default:{primary:",",secondary:"<"},ukr:{primary:"б",secondary:"Б",type:"letter"}},code:"Comma",size:1,type:"symbol"},period:{lang:{default:{primary:".",secondary:">"},ukr:{primary:"ю",secondary:"Ю",type:"letter"}},code:"Period",size:1,type:"symbol"},slash:{lang:{default:{primary:"/",secondary:"?"},ukr:{primary:".",secondary:","}},code:"Slash",size:1,type:"symbol"},up:{icon:"↑",code:"ArrowUp",size:1,type:"arrow"},ShiftRight:{code:"ShiftRight",size:2,type:"special",label:"Shift"},CtrlLeft:{code:"ControlLeft",size:1,type:"special",label:"Ctrl"},Win:{code:"MetaLeft",size:1,type:"special",label:"Win"},AltLeft:{code:"AltLeft",size:1,type:"special",label:"Alt"},Space:{lang:{default:{primary:" ",secondary:" "}},code:"Space",size:5,type:"space",label:""},AltRight:{code:"AltRight",size:1,type:"special",label:"Alt"},CtrlRight:{code:"ControlRight",size:1,type:"special",label:"Ctrl"},left:{icon:"←",code:"ArrowLeft",size:1,type:"arrow"},down:{icon:"↓",code:"ArrowDown",size:1,type:"arrow"},right:{icon:"→",code:"ArrowRight",size:1,type:"arrow"}},r=[[e.tilde,e.one,e.two,e.three,e.four,e.five,e.six,e.seven,e.eight,e.nine,e.zero,e.minus,e.equal,e.Backspace],[e.Tab,e.Q,e.W,e.E,e.R,e.T,e.Y,e.U,e.I,e.O,e.P,e.bracketLeft,e.bracketRight,e.slashes,e.Delete],[e.Capslock,e.A,e.S,e.D,e.F,e.G,e.H,e.J,e.K,e.L,e.colon,e.quote,e.Enter],[e.ShiftLeft,e.Z,e.X,e.C,e.V,e.B,e.N,e.M,e.comma,e.period,e.slash,e.up,e.ShiftRight],[e.CtrlLeft,e.Win,e.AltLeft,e.Space,e.AltRight,e.left,e.down,e.right,e.CtrlRight]];class n{constructor(e,r,t,n){const a=document.createElement(r);return a.classList.add(t),e.appendChild(a),n&&n.forEach((e=>{const r=Object.getOwnPropertyNames(e)[0];a.setAttribute(`${r}`,e[r])})),a}}var a=t(379),o=t.n(a),i=t(795),s=t.n(i),c=t(695),l=t.n(c),d=t(216),y=t.n(d),p=t(529),u={styleTagTransform:function(e,r){if(r.styleSheet)r.styleSheet.cssText=e;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(e))}},setAttributes:function(e){var r=t.nc;r&&e.setAttribute("nonce",r)},insert:function(e){var r=l()("head");if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(e)}};u.domAPI=s(),u.insertStyleElement=y(),o()(p.Z,u),p.Z&&p.Z.locals&&p.Z.locals;var m=localStorage.getItem("language")||"eng";const f=new n(document.body,"textarea","textField",[{placeholder:"Press Ctrl + Alt to switch languages"},{rows:15},{cols:"100"}]),g=new n(document.body,"div","keyboard-container");r.forEach((e=>{const r=new n(g,"div","keyboard-row");e.forEach((e=>{const t=new n(r,"div",`keyboard-button${e.size}`,[{name:`${e.code}`}]);if("special"!==e.type&&"arrow"!==e.type||t.classList.add("special"),e.lang||"special"===e.type){const r=new n(t,"div","label"),a=(e=>{if("special"===e.type)return e.label;if("arrow"===e.type)return e.icon;var r=e.lang.default,t="eng"===m?e.lang.default:e.lang.ukr;if(!t)return r.primary;if("letter"===e.type||"letter"===t.type)return t.secondary;if("symbol"===e.type||"digit"===e.type){const e=document.createElement("div"),r=document.createElement("div");r.append(`${t.secondary}`);const n=document.createElement("div");return n.append(`${t.primary}`),e.append(r),e.append(n),e}return t.primary})(e);r.append(a)}else"arrow"===e.type&&(t.classList.add("arrow"),t.append(e.icon));const a=r=>{const n=document.getElementsByName("CapsLock")[0];r.code!==e.code&&r.toElement!==t||("CapsLock"===r.code||r.toElement===n?n.classList.toggle("keypressed"):t.classList.add("keypressed"))},o=r=>{const n=document.getElementsByName("CapsLock")[0];(r.code===e.code&&"CapsLock"!==r.code||r.toElement===t&&r.toElement!==n)&&t.classList.remove("keypressed")},i=r=>{var n=f.innerHTML,a=f.selectionStart,o=f.selectionEnd;const i=document.getElementsByName("Delete")[0],s=document.getElementsByName("Backspace")[0];if(r.code===e.code||r.toElement===t)if("Backspace"===r.code||r.toElement===s){if(a===o&&0!==a)return f.innerHTML=n.slice(0,a-1)+n.slice(o),f.setSelectionRange(a-1,o-1),f.innerHTML;if(a!==o)return f.innerHTML=n.slice(0,a)+n.slice(o),f.setSelectionRange(a,a),f.innerHTML;if(a===o)return f.innerHTML}else if("Delete"===r.code||r.toElement===i){if(a===o)return a===n.length?f.innerHTML:0!==a?(f.innerHTML=n.slice(0,a)+n.slice(o+1),f.setSelectionRange(a,o),f.innerHTML):(f.innerHTML=n.slice(1),f.innerHTML);if(a!=o)return f.innerHTML=n.slice(0,a)+n.slice(o),f.setSelectionRange(a,a),f.innerHTML}else{if("arrow"!==e.type){if(e.lang){let r,t="eng"===m?e.lang.default:e.lang.ukr;const i=[document.getElementsByClassName("keyboard-row")[3].firstChild].concat(document.getElementsByClassName("keyboard-row")[3].lastChild),s=document.getElementsByName("CapsLock")[0];return r=i.some((e=>e.classList.contains("keypressed")))||s.classList.contains("keypressed")?t.secondary:t?t.primary:e.lang.default.primary,f.innerHTML=n.slice(0,a)+r+n.slice(o),"arrow"!==e.type&&(a===o?f.setSelectionRange(a+1,o+1):f.setSelectionRange(a+1,a+1)),f.innerHTML}return f.innerHTML}switch(e.code){case"ArrowLeft":f.setSelectionRange(a-1,o-1);break;case"ArrowRight":f.setSelectionRange(a+1,o+1);break;case"ArrowUp":f.setSelectionRange(a-(f.cols+5),o-(f.cols+5));break;case"ArrowDown":f.setSelectionRange(a+(f.cols+5),o+(f.cols+5))}}};document.addEventListener("keydown",a),document.addEventListener("keydown",i),document.addEventListener("keyup",o),document.addEventListener("mousedown",i),document.addEventListener("mousedown",a),document.addEventListener("mouseup",o)}))})),document.addEventListener("keydown",(e=>{e.preventDefault(),e.ctrlKey&&e.altKey&&(m="eng"===m?"ukr":"eng",localStorage.setItem("language",`${m}`),localStorage.setItem("typedText",`${f.textContent}`),document.location.reload())})),f.addEventListener("blur",(()=>f.focus())),setTimeout((()=>{f.focus()}),0),new n(document.body,"div","info").innerHTML="Built by Marcin Woszczyna, 06.2021"})()})();