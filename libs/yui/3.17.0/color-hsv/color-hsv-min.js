/*
YUI 3.17.0 (build ce55cc9)
Copyright 2014 Yahoo! Inc. All rights reserved.
Licensed under the BSD License.
http://yuilibrary.com/license/
*/

YUI.add("color-hsv",function(e,t){Color={REGEX_HSV:/hsva?\(([.\d]*), ?([.\d]*)%, ?([.\d]*)%,? ?([.\d]*)?\)/,STR_HSV:"hsv({*}, {*}%, {*}%)",STR_HSVA:"hsva({*}, {*}%, {*}%, {*})",toHSV:function(t){var n=e.Color._convertTo(t,"hsv");return n.toLowerCase()},toHSVA:function(t){var n=e.Color._convertTo(t,"hsva");return n.toLowerCase()},_rgbToHsv:function(t,n){var r,i,s,o=e.Color.REGEX_RGB.exec(t),u=o[1]/255,a=o[2]/255,f=o[3]/255,l=Math.max(u,a,f),c=Math.min(u,a,f),h=l-c;l===c?r=0:l===u?r=60*(a-f)/h:l===a?r=60*(f-u)/h+120:r=60*(u-a)/h+240,i=l===0?0:1-c/l;while(r<0)r+=360;return r%=360,r=Math.round(r),i=Math.round(i*100),s=Math.round(l*100),n?[r,i,s]:e.Color.fromArray([r,i,s],e.Color.TYPES.HSV)},_hsvToRgb:function(t,n){var r=e.Color.REGEX_HSV.exec(t),i=parseInt(r[1],10),s=parseInt(r[2],10)/100,o=parseInt(r[3],10)/100,u,a,f,l=Math.floor(i/60)%6,c=i/60-l,h=o*(1-s),p=o*(1-s*c),d=o*(1-s*(1-c));if(s===0)u=o,a=o,f=o;else switch(l){case 0:u=o,a=d,f=h;break;case 1:u=p,a=o,f=h;break;case 2:u=h,a=o,f=d;break;case 3:u=h,a=p,f=o;break;case 4:u=d,a=h,f=o;break;case 5:u=o,a=h,f=p}return u=Math.min(255,Math.round(u*256)),a=Math.min(255,Math.round(a*256)),f=Math.min(255,Math.round(f*256)),n?[u,a,f]:e.Color.fromArray([u,a,f],e.Color.TYPES.RGB)}},e.Color=e.mix(Color,e.Color),e.Color.TYPES=e.mix(e.Color.TYPES,{HSV:"hsv",HSVA:"hsva"}),e.Color.CONVERTS=e.mix(e.Color.CONVERTS,{hsv:"toHSV",hsva:"toHSVA"})},"3.17.0",{requires:["color-base"]});
