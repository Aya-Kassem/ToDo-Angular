"use strict";(self.webpackChunkToDo=self.webpackChunkToDo||[]).push([[355],{8355:(gt,w,g)=>{g.r(w),g.d(w,{AppSettingModule:()=>ot});var A=g(6814),k=g(2253),c=g(95);function h(e,r){(function N(e){return"string"==typeof e&&-1!==e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var t=function U(e){return"string"==typeof e&&-1!==e.indexOf("%")}(e);return e=360===r?e:Math.min(r,Math.max(0,parseFloat(e))),t&&(e=parseInt(String(e*r),10)/100),Math.abs(e-r)<1e-6?1:e=360===r?(e<0?e%r+r:e%r)/parseFloat(String(r)):e%r/parseFloat(String(r))}function m(e){return Math.min(1,Math.max(0,e))}function T(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function y(e){return e<=1?"".concat(100*Number(e),"%"):e}function b(e){return 1===e.length?"0"+e:String(e)}function F(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var n=Math.max(e,r,t),i=Math.min(e,r,t),a=0,s=0,f=(n+i)/2;if(n===i)s=0,a=0;else{var l=n-i;switch(s=f>.5?l/(2-n-i):l/(n+i),n){case e:a=(r-t)/l+(r<t?6:0);break;case r:a=(t-e)/l+2;break;case t:a=(e-r)/l+4}a/=6}return{h:a,s,l:f}}function x(e,r,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?e+6*t*(r-e):t<.5?r:t<2/3?e+(r-e)*(2/3-t)*6:e}function O(e,r,t){e=h(e,255),r=h(r,255),t=h(t,255);var n=Math.max(e,r,t),i=Math.min(e,r,t),a=0,s=n,f=n-i,l=0===n?0:f/n;if(n===i)a=0;else{switch(n){case e:a=(r-t)/f+(r<t?6:0);break;case r:a=(t-e)/f+2;break;case t:a=(e-r)/f+4}a/=6}return{h:a,s:l,v:s}}function R(e,r,t,n){var i=[b(Math.round(e).toString(16)),b(Math.round(r).toString(16)),b(Math.round(t).toString(16))];return n&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join("")}function H(e){return Math.round(255*parseFloat(e)).toString(16)}function P(e){return u(e)/255}function u(e){return parseInt(e,16)}var M={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",goldenrod:"#daa520",gold:"#ffd700",gray:"#808080",green:"#008000",greenyellow:"#adff2f",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavenderblush:"#fff0f5",lavender:"#e6e6fa",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightgrey:"#d3d3d3",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",rebeccapurple:"#663399",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",slategrey:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"};var v="(?:".concat("[-\\+]?\\d*\\.\\d+%?",")|(?:").concat("[-\\+]?\\d+%?",")"),S="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),C="[\\s|\\(]+(".concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")[,|\\s]+(").concat(v,")\\s*\\)?"),d={CSS_UNIT:new RegExp(v),rgb:new RegExp("rgb"+S),rgba:new RegExp("rgba"+C),hsl:new RegExp("hsl"+S),hsla:new RegExp("hsla"+C),hsv:new RegExp("hsv"+S),hsva:new RegExp("hsva"+C),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function p(e){return!!d.CSS_UNIT.exec(String(e))}var I=function(){function e(r,t){var n;if(void 0===r&&(r=""),void 0===t&&(t={}),r instanceof e)return r;"number"==typeof r&&(r=function J(e){return{r:e>>16,g:(65280&e)>>8,b:255&e}}(r)),this.originalInput=r;var i=function j(e){var r={r:0,g:0,b:0},t=1,n=null,i=null,a=null,s=!1,f=!1;return"string"==typeof e&&(e=function q(e){if(0===(e=e.trim().toLowerCase()).length)return!1;var r=!1;if(M[e])e=M[e],r=!0;else if("transparent"===e)return{r:0,g:0,b:0,a:0,format:"name"};var t=d.rgb.exec(e);return t?{r:t[1],g:t[2],b:t[3]}:(t=d.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=d.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=d.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=d.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=d.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=d.hex8.exec(e))?{r:u(t[1]),g:u(t[2]),b:u(t[3]),a:P(t[4]),format:r?"name":"hex8"}:(t=d.hex6.exec(e))?{r:u(t[1]),g:u(t[2]),b:u(t[3]),format:r?"name":"hex"}:(t=d.hex4.exec(e))?{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),a:P(t[4]+t[4]),format:r?"name":"hex8"}:!!(t=d.hex3.exec(e))&&{r:u(t[1]+t[1]),g:u(t[2]+t[2]),b:u(t[3]+t[3]),format:r?"name":"hex"}}(e)),"object"==typeof e&&(p(e.r)&&p(e.g)&&p(e.b)?(r=function Z(e,r,t){return{r:255*h(e,255),g:255*h(r,255),b:255*h(t,255)}}(e.r,e.g,e.b),s=!0,f="%"===String(e.r).substr(-1)?"prgb":"rgb"):p(e.h)&&p(e.s)&&p(e.v)?(n=y(e.s),i=y(e.v),r=function B(e,r,t){e=6*h(e,360),r=h(r,100),t=h(t,100);var n=Math.floor(e),i=e-n,a=t*(1-r),s=t*(1-i*r),f=t*(1-(1-i)*r),l=n%6;return{r:255*[t,s,a,a,f,t][l],g:255*[f,t,t,s,a,a][l],b:255*[a,a,f,t,t,s][l]}}(e.h,n,i),s=!0,f="hsv"):p(e.h)&&p(e.s)&&p(e.l)&&(n=y(e.s),a=y(e.l),r=function E(e,r,t){var n,i,a;if(e=h(e,360),r=h(r,100),t=h(t,100),0===r)i=t,a=t,n=t;else{var s=t<.5?t*(1+r):t+r-t*r,f=2*t-s;n=x(f,s,e+1/3),i=x(f,s,e),a=x(f,s,e-1/3)}return{r:255*n,g:255*i,b:255*a}}(e.h,n,a),s=!0,f="hsl"),Object.prototype.hasOwnProperty.call(e,"a")&&(t=e.a)),t=T(t),{ok:s,format:e.format||f,r:Math.min(255,Math.max(r.r,0)),g:Math.min(255,Math.max(r.g,0)),b:Math.min(255,Math.max(r.b,0)),a:t}}(r);this.originalInput=r,this.r=i.r,this.g=i.g,this.b=i.b,this.a=i.a,this.roundA=Math.round(100*this.a)/100,this.format=null!==(n=t.format)&&void 0!==n?n:i.format,this.gradientType=t.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=i.ok}return e.prototype.isDark=function(){return this.getBrightness()<128},e.prototype.isLight=function(){return!this.isDark()},e.prototype.getBrightness=function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},e.prototype.getLuminance=function(){var r=this.toRgb(),a=r.r/255,s=r.g/255,f=r.b/255;return.2126*(a<=.03928?a/12.92:Math.pow((a+.055)/1.055,2.4))+.7152*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))+.0722*(f<=.03928?f/12.92:Math.pow((f+.055)/1.055,2.4))},e.prototype.getAlpha=function(){return this.a},e.prototype.setAlpha=function(r){return this.a=T(r),this.roundA=Math.round(100*this.a)/100,this},e.prototype.isMonochrome=function(){return 0===this.toHsl().s},e.prototype.toHsv=function(){var r=O(this.r,this.g,this.b);return{h:360*r.h,s:r.s,v:r.v,a:this.a}},e.prototype.toHsvString=function(){var r=O(this.r,this.g,this.b),t=Math.round(360*r.h),n=Math.round(100*r.s),i=Math.round(100*r.v);return 1===this.a?"hsv(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsva(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHsl=function(){var r=F(this.r,this.g,this.b);return{h:360*r.h,s:r.s,l:r.l,a:this.a}},e.prototype.toHslString=function(){var r=F(this.r,this.g,this.b),t=Math.round(360*r.h),n=Math.round(100*r.s),i=Math.round(100*r.l);return 1===this.a?"hsl(".concat(t,", ").concat(n,"%, ").concat(i,"%)"):"hsla(".concat(t,", ").concat(n,"%, ").concat(i,"%, ").concat(this.roundA,")")},e.prototype.toHex=function(r){return void 0===r&&(r=!1),R(this.r,this.g,this.b,r)},e.prototype.toHexString=function(r){return void 0===r&&(r=!1),"#"+this.toHex(r)},e.prototype.toHex8=function(r){return void 0===r&&(r=!1),function V(e,r,t,n,i){var a=[b(Math.round(e).toString(16)),b(Math.round(r).toString(16)),b(Math.round(t).toString(16)),b(H(n))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join("")}(this.r,this.g,this.b,this.a,r)},e.prototype.toHex8String=function(r){return void 0===r&&(r=!1),"#"+this.toHex8(r)},e.prototype.toHexShortString=function(r){return void 0===r&&(r=!1),1===this.a?this.toHexString(r):this.toHex8String(r)},e.prototype.toRgb=function(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}},e.prototype.toRgbString=function(){var r=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return 1===this.a?"rgb(".concat(r,", ").concat(t,", ").concat(n,")"):"rgba(".concat(r,", ").concat(t,", ").concat(n,", ").concat(this.roundA,")")},e.prototype.toPercentageRgb=function(){var r=function(t){return"".concat(Math.round(100*h(t,255)),"%")};return{r:r(this.r),g:r(this.g),b:r(this.b),a:this.a}},e.prototype.toPercentageRgbString=function(){var r=function(t){return Math.round(100*h(t,255))};return 1===this.a?"rgb(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%)"):"rgba(".concat(r(this.r),"%, ").concat(r(this.g),"%, ").concat(r(this.b),"%, ").concat(this.roundA,")")},e.prototype.toName=function(){if(0===this.a)return"transparent";if(this.a<1)return!1;for(var r="#"+R(this.r,this.g,this.b,!1),t=0,n=Object.entries(M);t<n.length;t++){var i=n[t];if(r===i[1])return i[0]}return!1},e.prototype.toString=function(r){var t=!!r;r=r??this.format;var n=!1;return!t&&this.a<1&&this.a>=0&&(r.startsWith("hex")||"name"===r)?"name"===r&&0===this.a?this.toName():this.toRgbString():("rgb"===r&&(n=this.toRgbString()),"prgb"===r&&(n=this.toPercentageRgbString()),("hex"===r||"hex6"===r)&&(n=this.toHexString()),"hex3"===r&&(n=this.toHexString(!0)),"hex4"===r&&(n=this.toHex8String(!0)),"hex8"===r&&(n=this.toHex8String()),"name"===r&&(n=this.toName()),"hsl"===r&&(n=this.toHslString()),"hsv"===r&&(n=this.toHsvString()),n||this.toHexString())},e.prototype.toNumber=function(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)},e.prototype.clone=function(){return new e(this.toString())},e.prototype.lighten=function(r){void 0===r&&(r=10);var t=this.toHsl();return t.l+=r/100,t.l=m(t.l),new e(t)},e.prototype.brighten=function(r){void 0===r&&(r=10);var t=this.toRgb();return t.r=Math.max(0,Math.min(255,t.r-Math.round(-r/100*255))),t.g=Math.max(0,Math.min(255,t.g-Math.round(-r/100*255))),t.b=Math.max(0,Math.min(255,t.b-Math.round(-r/100*255))),new e(t)},e.prototype.darken=function(r){void 0===r&&(r=10);var t=this.toHsl();return t.l-=r/100,t.l=m(t.l),new e(t)},e.prototype.tint=function(r){return void 0===r&&(r=10),this.mix("white",r)},e.prototype.shade=function(r){return void 0===r&&(r=10),this.mix("black",r)},e.prototype.desaturate=function(r){void 0===r&&(r=10);var t=this.toHsl();return t.s-=r/100,t.s=m(t.s),new e(t)},e.prototype.saturate=function(r){void 0===r&&(r=10);var t=this.toHsl();return t.s+=r/100,t.s=m(t.s),new e(t)},e.prototype.greyscale=function(){return this.desaturate(100)},e.prototype.spin=function(r){var t=this.toHsl(),n=(t.h+r)%360;return t.h=n<0?360+n:n,new e(t)},e.prototype.mix=function(r,t){void 0===t&&(t=50);var n=this.toRgb(),i=new e(r).toRgb(),a=t/100;return new e({r:(i.r-n.r)*a+n.r,g:(i.g-n.g)*a+n.g,b:(i.b-n.b)*a+n.b,a:(i.a-n.a)*a+n.a})},e.prototype.analogous=function(r,t){void 0===r&&(r=6),void 0===t&&(t=30);var n=this.toHsl(),i=360/t,a=[this];for(n.h=(n.h-(i*r>>1)+720)%360;--r;)n.h=(n.h+i)%360,a.push(new e(n));return a},e.prototype.complement=function(){var r=this.toHsl();return r.h=(r.h+180)%360,new e(r)},e.prototype.monochromatic=function(r){void 0===r&&(r=6);for(var t=this.toHsv(),n=t.h,i=t.s,a=t.v,s=[],f=1/r;r--;)s.push(new e({h:n,s:i,v:a})),a=(a+f)%1;return s},e.prototype.splitcomplement=function(){var r=this.toHsl(),t=r.h;return[this,new e({h:(t+72)%360,s:r.s,l:r.l}),new e({h:(t+216)%360,s:r.s,l:r.l})]},e.prototype.onBackground=function(r){var t=this.toRgb(),n=new e(r).toRgb(),i=t.a+n.a*(1-t.a);return new e({r:(t.r*t.a+n.r*n.a*(1-t.a))/i,g:(t.g*t.a+n.g*n.a*(1-t.a))/i,b:(t.b*t.a+n.b*n.a*(1-t.a))/i,a:i})},e.prototype.triad=function(){return this.polyad(3)},e.prototype.tetrad=function(){return this.polyad(4)},e.prototype.polyad=function(r){for(var t=this.toHsl(),n=t.h,i=[this],a=360/r,s=1;s<r;s++)i.push(new e({h:(n+s*a)%360,s:t.s,l:t.l}));return i},e.prototype.equals=function(r){return this.toRgbString()===new e(r).toRgbString()},e}(),z=g(5619),o=g(4946),D=g(9318),Q=g(3985),_=g(4408),$=g(4248);function Y(e,r){if(1&e&&(o.TgZ(0,"div",9)(1,"label",20),o._uU(2,"Remove Category: "),o.qZA(),o._UZ(3,"p-dropdown",21),o.qZA()),2&e){const t=o.oxw();o.xp6(3),o.Q6J("showClear",!0)("options",t.userCategories)}}function L(e,r){if(1&e&&(o.TgZ(0,"p",22),o._uU(1),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.Oqu(t.colorErrMsg)}}function X(e,r){if(1&e&&o._UZ(0,"app-toast",23),2&e){const t=o.oxw();o.Q6J("msg",t.success)("fire",t.settingApplied)("type",t.notification)}}const et=[{path:"",component:(()=>{class e{constructor(t,n){this._UserSettingService=t,this._SharedService=n,this.categoriesExist=!1,this.calendarViews=["dayGridMonth","dayGrid","dayGridWeek","listWeek"],this.settingApplied=new z.X(!1),this.settingForm=new c.cw({category:new c.NI(""),calendarView:new c.NI(""),color:new c.NI(""),removeCategory:new c.NI("")})}ngOnInit(){this.getAllTasks(),this._UserSettingService.categories.subscribe(n=>{n.length&&(this.userCategories=n,this.categoriesExist=!0)});let t=JSON.parse(localStorage.getItem("settings"));t&&t.view&&(this.currentView=t.view)}getAllTasks(){this._SharedService.allTasks.subscribe(t=>{t&&(this.allTasks=t)})}setSetting(){let t;if(this.confirmCategoryRemove(this.settingForm.controls.removeCategory.value)){for(let[a,s]of Object.entries(this.settingForm.value))if("category"===a&&s){let f=s.split(",").filter(l=>""!=l);t=this.setCategories(f)}else"calendarView"===a&&s?t=this.setView(s):"color"===a&&s?t=this.setMainColor(s):"removeCategory"===a&&s&&(t=this.removeCategoy(s));t&&this.applySetting()}else this.noSettingApplied()}applySetting(){this.notification="notification",this.success="Changes Applied Successfully!",this.settingApplied.next(!0),this.settingForm.reset()}noSettingApplied(){this.notification="error",this.success="Can`t Remove Category With Related Tasks!",this.settingApplied.next(!0)}setCategories(t){let n=this.userCategories?[...this.userCategories,...t]:[...t],i=new Set(n);return this.categoriesExist=!0,this._UserSettingService.setUserSettings("categories",[...i])}confirmCategoryRemove(t){return!(this.allTasks.filter(i=>i.taskCategory===t).length>0)}removeCategoy(t){let n;return this.categoryIndex=this.userCategories.indexOf(t),this.userCategories.splice(this.categoryIndex,1),this.categoriesExist=!!this.userCategories.length,n=this._UserSettingService.setUserSettings("categories",this.userCategories),n}setView(t){return this.currentView=t,this._UserSettingService.setUserSettings("view",t)}setMainColor(t){var n;return-1!=t.indexOf(",")?(this.colorErrMsg="Error: Please Enter Color Name or Hex Code!",n=!1):-1===t.indexOf(",")&&(n=this.colorNameOrHexCode(t)),n}colorNameOrHexCode(t){this.colorErrMsg="";let n=new I(t);return n.toRgb(),this._UserSettingService.setUserSettings("color",`rgba(${n.r},${n.g},${n.b},1)`)}resetSettings(){var t=this._UserSettingService.defaultColor(),n=this.setView("dayGridMonth");t&&n&&(this.settingApplied.next(!0),this.success="Changes Applied Successfully!"),this.settingForm.reset()}static#t=this.\u0275fac=function(n){return new(n||e)(o.Y36(D.f),o.Y36(Q.F))};static#e=this.\u0275cmp=o.Xpm({type:e,selectors:[["app-app-setting"]],decls:27,vars:6,consts:[[1,"container","setting","h-100"],[1,"row","h-100"],[1,"main-header"],[1,"col-md-8","m-auto",2,"height","90%"],[1,"settingForm","h-100","d-flex","flex-column",3,"formGroup","ngSubmit"],[1,"form-group","my-3","d-flex","flex-column","flex-md-row","align-items-md-center"],["for","category",1,"label","mb-2","mb-md-0"],["type","text","name","category","formControlName","category","placeholder","Separate with Comma",1,"px-2"],["class","my-3 form-group d-flex flex-column flex-md-row align-items-md-center ",4,"ngIf"],[1,"my-3","form-group","d-flex","flex-column","flex-md-row","align-items-md-center"],["for","calendarView",1,"label","mb-2","mb-md-0"],["placeholder","Select View","formControlName","calendarView","id","calendarView",1,"form-control",3,"ngModel","options","ngModelChange"],["for","color",1,"label","mb-2","mb-md-0"],["type","text","name","color","formControlName","color","placeholder","Enter Color Name or Code ",1,"px-2"],["class","errMsg",4,"ngIf"],[1,"my-4","form-group"],[1,"buttons","d-flex","align-items-md-center"],["type","button",1,"btn","defaultBtn","me-2","text-center",3,"click"],["type","submit",1,"btn","submit","ms-2"],[3,"msg","fire","type",4,"ngIf"],[1,"label","mb-2","mb-md-0"],["placeholder","Select Category","formControlName","removeCategory",1,"dropDown",3,"showClear","options"],[1,"errMsg"],[3,"msg","fire","type"]],template:function(n,i){1&n&&(o.TgZ(0,"div",0)(1,"div",1)(2,"h3",2),o._uU(3,"Settings"),o.qZA(),o.TgZ(4,"div",3)(5,"form",4),o.NdJ("ngSubmit",function(){return i.setSetting()}),o.TgZ(6,"div",5)(7,"label",6),o._uU(8,"Add New Category: "),o.qZA(),o._UZ(9,"input",7),o.qZA(),o.YNc(10,Y,4,2,"div",8),o.TgZ(11,"div",9)(12,"label",10),o._uU(13,"Change Calendar View: "),o.qZA(),o.TgZ(14,"p-dropdown",11),o.NdJ("ngModelChange",function(s){return i.currentView=s}),o.qZA()(),o.TgZ(15,"div",9)(16,"label",12),o._uU(17,"Change Main Color: "),o.qZA(),o._UZ(18,"input",13),o.qZA(),o.YNc(19,L,2,1,"p",14),o.TgZ(20,"div",15)(21,"div",16)(22,"button",17),o.NdJ("click",function(){return i.resetSettings()}),o._uU(23,"Reset"),o.qZA(),o.TgZ(24,"button",18),o._uU(25,"Submit"),o.qZA()()(),o.YNc(26,X,1,3,"app-toast",19),o.qZA()()()()),2&n&&(o.xp6(5),o.Q6J("formGroup",i.settingForm),o.xp6(5),o.Q6J("ngIf",i.categoriesExist),o.xp6(4),o.Q6J("ngModel",i.currentView)("options",i.calendarViews),o.xp6(5),o.Q6J("ngIf",i.colorErrMsg),o.xp6(7),o.Q6J("ngIf",i.settingApplied.value))},dependencies:[A.O5,c._Y,c.Fj,c.JJ,c.JL,c.sg,c.u,_.Lt,$.q],styles:[".settingForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{border:1px solid;border-color:var(--IconsColor);border-radius:5px;height:35px;width:50%}.settingForm[_ngcontent-%COMP%]   .defaultBtn[_ngcontent-%COMP%]{font-weight:500;background-color:var(--IconsColor);color:#fff;width:50%}.settingForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder, .settingForm[_ngcontent-%COMP%]   .p-inputtext[_ngcontent-%COMP%]{color:#212529b3;font-weight:500}.settingForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder{font-size:16px}.settingForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus-visible{outline:none}.settingForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{width:50%;font-weight:500}.settingForm[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{font-weight:500;background-color:var(--IconsColor);color:#fff}.settingForm[_ngcontent-%COMP%]   .submit[_ngcontent-%COMP%]{width:50%}.settingForm[_ngcontent-%COMP%]   .errMsg[_ngcontent-%COMP%]{font-size:20px;font-weight:600;color:var(--IconsColor)}.settingForm[_ngcontent-%COMP%]   .defaultBtn[_ngcontent-%COMP%]{text-align:left}@media screen and (max-width: 766px){.settingForm[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .settingForm[_ngcontent-%COMP%]   label[_ngcontent-%COMP%], .settingForm[_ngcontent-%COMP%]   p-dropdown[_ngcontent-%COMP%], .settingForm[_ngcontent-%COMP%]   .buttons[_ngcontent-%COMP%]{width:80%;margin:auto}}"]})}return e})(),canActivate:[g(6194).p]}];let rt=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=o.oAB({type:e});static#r=this.\u0275inj=o.cJS({imports:[k.Bz.forChild(et),k.Bz]})}return e})();var nt=g(9972),it=g(2078),at=g(5895);let ot=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=o.oAB({type:e});static#r=this.\u0275inj=o.cJS({providers:[nt.ez],imports:[A.ez,rt,c.u5,c.UX,_.kW,it.R,at.R]})}return e})()}}]);