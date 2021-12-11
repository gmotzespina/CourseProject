/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[1],{345:function(Ea,va,ba){(function(oa){function ka(){try{var ra=new Uint8Array(1);ra.__proto__={__proto__:Uint8Array.prototype,C$:function(){return 42}};return"function"===typeof ra.subarray&&0===ra.subarray(1,1).byteLength}catch(ta){return!1}}function ja(ra,ta){if((ea.Td?2147483647:1073741823)<ta)throw new RangeError("Invalid typed array length");ea.Td?(ra=new Uint8Array(ta),ra.__proto__=ea.prototype):(null===ra&&(ra=new ea(ta)),
ra.length=ta);return ra}function ea(ra,ta,sa){if(!(ea.Td||this instanceof ea))return new ea(ra,ta,sa);if("number"===typeof ra){if("string"===typeof ta)throw Error("If encoding is specified then the first argument must be a string");return r(this,ra)}return ca(this,ra,ta,sa)}function ca(ra,ta,sa,qa){if("number"===typeof ta)throw new TypeError('"value" argument must not be a number');if("undefined"!==typeof ArrayBuffer&&ta instanceof ArrayBuffer){ta.byteLength;if(0>sa||ta.byteLength<sa)throw new RangeError("'offset' is out of bounds");
if(ta.byteLength<sa+(qa||0))throw new RangeError("'length' is out of bounds");ta=void 0===sa&&void 0===qa?new Uint8Array(ta):void 0===qa?new Uint8Array(ta,sa):new Uint8Array(ta,sa,qa);ea.Td?(ra=ta,ra.__proto__=ea.prototype):ra=n(ra,ta);ta=ra}else if("string"===typeof ta){qa=ra;ra=sa;if("string"!==typeof ra||""===ra)ra="utf8";if(!ea.ZK(ra))throw new TypeError('"encoding" must be a valid string encoding');sa=e(ta,ra)|0;qa=ja(qa,sa);ta=qa.write(ta,ra);ta!==sa&&(qa=qa.slice(0,ta));ta=qa}else ta=b(ra,
ta);return ta}function y(ra){if("number"!==typeof ra)throw new TypeError('"size" argument must be a number');if(0>ra)throw new RangeError('"size" argument must not be negative');}function r(ra,ta){y(ta);ra=ja(ra,0>ta?0:f(ta)|0);if(!ea.Td)for(var sa=0;sa<ta;++sa)ra[sa]=0;return ra}function n(ra,ta){var sa=0>ta.length?0:f(ta.length)|0;ra=ja(ra,sa);for(var qa=0;qa<sa;qa+=1)ra[qa]=ta[qa]&255;return ra}function b(ra,ta){if(ea.isBuffer(ta)){var sa=f(ta.length)|0;ra=ja(ra,sa);if(0===ra.length)return ra;
ta.copy(ra,0,0,sa);return ra}if(ta){if("undefined"!==typeof ArrayBuffer&&ta.buffer instanceof ArrayBuffer||"length"in ta)return(sa="number"!==typeof ta.length)||(sa=ta.length,sa=sa!==sa),sa?ja(ra,0):n(ra,ta);if("Buffer"===ta.type&&ua(ta.data))return n(ra,ta.data)}throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");}function f(ra){if(ra>=(ea.Td?2147483647:1073741823))throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x"+
(ea.Td?2147483647:1073741823).toString(16)+" bytes");return ra|0}function e(ra,ta){if(ea.isBuffer(ra))return ra.length;if("undefined"!==typeof ArrayBuffer&&"function"===typeof ArrayBuffer.isView&&(ArrayBuffer.isView(ra)||ra instanceof ArrayBuffer))return ra.byteLength;"string"!==typeof ra&&(ra=""+ra);var sa=ra.length;if(0===sa)return 0;for(var qa=!1;;)switch(ta){case "ascii":case "latin1":case "binary":return sa;case "utf8":case "utf-8":case void 0:return ia(ra).length;case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return 2*
sa;case "hex":return sa>>>1;case "base64":return ha(ra).length;default:if(qa)return ia(ra).length;ta=(""+ta).toLowerCase();qa=!0}}function h(ra,ta,sa){var qa=!1;if(void 0===ta||0>ta)ta=0;if(ta>this.length)return"";if(void 0===sa||sa>this.length)sa=this.length;if(0>=sa)return"";sa>>>=0;ta>>>=0;if(sa<=ta)return"";for(ra||(ra="utf8");;)switch(ra){case "hex":ra=ta;ta=sa;sa=this.length;if(!ra||0>ra)ra=0;if(!ta||0>ta||ta>sa)ta=sa;qa="";for(sa=ra;sa<ta;++sa)ra=qa,qa=this[sa],qa=16>qa?"0"+qa.toString(16):
qa.toString(16),qa=ra+qa;return qa;case "utf8":case "utf-8":return a(this,ta,sa);case "ascii":ra="";for(sa=Math.min(this.length,sa);ta<sa;++ta)ra+=String.fromCharCode(this[ta]&127);return ra;case "latin1":case "binary":ra="";for(sa=Math.min(this.length,sa);ta<sa;++ta)ra+=String.fromCharCode(this[ta]);return ra;case "base64":return 0===ta&&sa===this.length?ma.uJ(this):ma.uJ(this.slice(ta,sa));case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":ta=this.slice(ta,sa);sa="";for(ra=0;ra<ta.length;ra+=
2)sa+=String.fromCharCode(ta[ra]+256*ta[ra+1]);return sa;default:if(qa)throw new TypeError("Unknown encoding: "+ra);ra=(ra+"").toLowerCase();qa=!0}}function z(ra,ta,sa,qa,ya){if(0===ra.length)return-1;"string"===typeof sa?(qa=sa,sa=0):2147483647<sa?sa=2147483647:-2147483648>sa&&(sa=-2147483648);sa=+sa;isNaN(sa)&&(sa=ya?0:ra.length-1);0>sa&&(sa=ra.length+sa);if(sa>=ra.length){if(ya)return-1;sa=ra.length-1}else if(0>sa)if(ya)sa=0;else return-1;"string"===typeof ta&&(ta=ea.from(ta,qa));if(ea.isBuffer(ta))return 0===
ta.length?-1:x(ra,ta,sa,qa,ya);if("number"===typeof ta)return ta&=255,ea.Td&&"function"===typeof Uint8Array.prototype.indexOf?ya?Uint8Array.prototype.indexOf.call(ra,ta,sa):Uint8Array.prototype.lastIndexOf.call(ra,ta,sa):x(ra,[ta],sa,qa,ya);throw new TypeError("val must be string, number or Buffer");}function x(ra,ta,sa,qa,ya){function Ba(Qa,Sa){return 1===Ja?Qa[Sa]:Qa.Js(Sa*Ja)}var Ja=1,La=ra.length,Ga=ta.length;if(void 0!==qa&&(qa=String(qa).toLowerCase(),"ucs2"===qa||"ucs-2"===qa||"utf16le"===
qa||"utf-16le"===qa)){if(2>ra.length||2>ta.length)return-1;Ja=2;La/=2;Ga/=2;sa/=2}if(ya)for(qa=-1;sa<La;sa++)if(Ba(ra,sa)===Ba(ta,-1===qa?0:sa-qa)){if(-1===qa&&(qa=sa),sa-qa+1===Ga)return qa*Ja}else-1!==qa&&(sa-=sa-qa),qa=-1;else for(sa+Ga>La&&(sa=La-Ga);0<=sa;sa--){La=!0;for(qa=0;qa<Ga;qa++)if(Ba(ra,sa+qa)!==Ba(ta,qa)){La=!1;break}if(La)return sa}return-1}function a(ra,ta,sa){sa=Math.min(ra.length,sa);for(var qa=[];ta<sa;){var ya=ra[ta],Ba=null,Ja=239<ya?4:223<ya?3:191<ya?2:1;if(ta+Ja<=sa)switch(Ja){case 1:128>
ya&&(Ba=ya);break;case 2:var La=ra[ta+1];128===(La&192)&&(ya=(ya&31)<<6|La&63,127<ya&&(Ba=ya));break;case 3:La=ra[ta+1];var Ga=ra[ta+2];128===(La&192)&&128===(Ga&192)&&(ya=(ya&15)<<12|(La&63)<<6|Ga&63,2047<ya&&(55296>ya||57343<ya)&&(Ba=ya));break;case 4:La=ra[ta+1];Ga=ra[ta+2];var Qa=ra[ta+3];128===(La&192)&&128===(Ga&192)&&128===(Qa&192)&&(ya=(ya&15)<<18|(La&63)<<12|(Ga&63)<<6|Qa&63,65535<ya&&1114112>ya&&(Ba=ya))}null===Ba?(Ba=65533,Ja=1):65535<Ba&&(Ba-=65536,qa.push(Ba>>>10&1023|55296),Ba=56320|
Ba&1023);qa.push(Ba);ta+=Ja}ra=qa.length;if(ra<=na)qa=String.fromCharCode.apply(String,qa);else{sa="";for(ta=0;ta<ra;)sa+=String.fromCharCode.apply(String,qa.slice(ta,ta+=na));qa=sa}return qa}function w(ra,ta,sa){if(0!==ra%1||0>ra)throw new RangeError("offset is not uint");if(ra+ta>sa)throw new RangeError("Trying to access beyond buffer length");}function aa(ra,ta,sa,qa,ya,Ba){if(!ea.isBuffer(ra))throw new TypeError('"buffer" argument must be a Buffer instance');if(ta>ya||ta<Ba)throw new RangeError('"value" argument is out of bounds');
if(sa+qa>ra.length)throw new RangeError("Index out of range");}function ia(ra,ta){ta=ta||Infinity;for(var sa,qa=ra.length,ya=null,Ba=[],Ja=0;Ja<qa;++Ja){sa=ra.charCodeAt(Ja);if(55295<sa&&57344>sa){if(!ya){if(56319<sa){-1<(ta-=3)&&Ba.push(239,191,189);continue}else if(Ja+1===qa){-1<(ta-=3)&&Ba.push(239,191,189);continue}ya=sa;continue}if(56320>sa){-1<(ta-=3)&&Ba.push(239,191,189);ya=sa;continue}sa=(ya-55296<<10|sa-56320)+65536}else ya&&-1<(ta-=3)&&Ba.push(239,191,189);ya=null;if(128>sa){if(0>--ta)break;
Ba.push(sa)}else if(2048>sa){if(0>(ta-=2))break;Ba.push(sa>>6|192,sa&63|128)}else if(65536>sa){if(0>(ta-=3))break;Ba.push(sa>>12|224,sa>>6&63|128,sa&63|128)}else if(1114112>sa){if(0>(ta-=4))break;Ba.push(sa>>18|240,sa>>12&63|128,sa>>6&63|128,sa&63|128)}else throw Error("Invalid code point");}return Ba}function fa(ra){for(var ta=[],sa=0;sa<ra.length;++sa)ta.push(ra.charCodeAt(sa)&255);return ta}function ha(ra){var ta=ma,sa=ta.I6;ra=(ra.trim?ra.trim():ra.replace(/^\s+|\s+$/g,"")).replace(Aa,"");if(2>
ra.length)ra="";else for(;0!==ra.length%4;)ra+="=";return sa.call(ta,ra)}function da(ra,ta,sa,qa){for(var ya=0;ya<qa&&!(ya+sa>=ta.length||ya>=ra.length);++ya)ta[ya+sa]=ra[ya];return ya}var ma=ba(357);ba(358);var ua=ba(359);va.Buffer=ea;va.V7=function(ra){+ra!=ra&&(ra=0);return ea.LH(+ra)};va.CQ=50;ea.Td=void 0!==oa.Td?oa.Td:ka();va.bba=ea.Td?2147483647:1073741823;ea.from=function(ra,ta,sa){return ca(null,ra,ta,sa)};ea.Td&&(ea.prototype.__proto__=Uint8Array.prototype,ea.__proto__=Uint8Array,"undefined"!==
typeof Symbol&&Symbol.species&&ea[Symbol.species]===ea&&Object.defineProperty(ea,Symbol.species,{value:null,configurable:!0}));ea.LH=function(ra){y(ra);return ja(null,ra)};ea.allocUnsafe=function(ra){return r(null,ra)};ea.isBuffer=function(ra){return!(null==ra||!ra.xS)};ea.compare=function(ra,ta){if(!ea.isBuffer(ra)||!ea.isBuffer(ta))throw new TypeError("Arguments must be Buffers");if(ra===ta)return 0;for(var sa=ra.length,qa=ta.length,ya=0,Ba=Math.min(sa,qa);ya<Ba;++ya)if(ra[ya]!==ta[ya]){sa=ra[ya];
qa=ta[ya];break}return sa<qa?-1:qa<sa?1:0};ea.ZK=function(ra){switch(String(ra).toLowerCase()){case "hex":case "utf8":case "utf-8":case "ascii":case "latin1":case "binary":case "base64":case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":return!0;default:return!1}};ea.concat=function(ra,ta){if(!ua(ra))throw new TypeError('"list" argument must be an Array of Buffers');if(0===ra.length)return ea.LH(0);var sa;if(void 0===ta)for(sa=ta=0;sa<ra.length;++sa)ta+=ra[sa].length;ta=ea.allocUnsafe(ta);var qa=
0;for(sa=0;sa<ra.length;++sa){var ya=ra[sa];if(!ea.isBuffer(ya))throw new TypeError('"list" argument must be an Array of Buffers');ya.copy(ta,qa);qa+=ya.length}return ta};ea.byteLength=e;ea.prototype.xS=!0;ea.prototype.toString=function(){var ra=this.length|0;return 0===ra?"":0===arguments.length?a(this,0,ra):h.apply(this,arguments)};ea.prototype.dr=function(ra){if(!ea.isBuffer(ra))throw new TypeError("Argument must be a Buffer");return this===ra?!0:0===ea.compare(this,ra)};ea.prototype.inspect=function(){var ra=
"",ta=va.CQ;0<this.length&&(ra=this.toString("hex",0,ta).match(/.{2}/g).join(" "),this.length>ta&&(ra+=" ... "));return"<Buffer "+ra+">"};ea.prototype.compare=function(ra,ta,sa,qa,ya){if(!ea.isBuffer(ra))throw new TypeError("Argument must be a Buffer");void 0===ta&&(ta=0);void 0===sa&&(sa=ra?ra.length:0);void 0===qa&&(qa=0);void 0===ya&&(ya=this.length);if(0>ta||sa>ra.length||0>qa||ya>this.length)throw new RangeError("out of range index");if(qa>=ya&&ta>=sa)return 0;if(qa>=ya)return-1;if(ta>=sa)return 1;
ta>>>=0;sa>>>=0;qa>>>=0;ya>>>=0;if(this===ra)return 0;var Ba=ya-qa,Ja=sa-ta,La=Math.min(Ba,Ja);qa=this.slice(qa,ya);ra=ra.slice(ta,sa);for(ta=0;ta<La;++ta)if(qa[ta]!==ra[ta]){Ba=qa[ta];Ja=ra[ta];break}return Ba<Ja?-1:Ja<Ba?1:0};ea.prototype.includes=function(ra,ta,sa){return-1!==this.indexOf(ra,ta,sa)};ea.prototype.indexOf=function(ra,ta,sa){return z(this,ra,ta,sa,!0)};ea.prototype.lastIndexOf=function(ra,ta,sa){return z(this,ra,ta,sa,!1)};ea.prototype.write=function(ra,ta,sa,qa){if(void 0===ta)qa=
"utf8",sa=this.length,ta=0;else if(void 0===sa&&"string"===typeof ta)qa=ta,sa=this.length,ta=0;else if(isFinite(ta))ta|=0,isFinite(sa)?(sa|=0,void 0===qa&&(qa="utf8")):(qa=sa,sa=void 0);else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");var ya=this.length-ta;if(void 0===sa||sa>ya)sa=ya;if(0<ra.length&&(0>sa||0>ta)||ta>this.length)throw new RangeError("Attempt to write outside buffer bounds");qa||(qa="utf8");for(ya=!1;;)switch(qa){case "hex":ta=Number(ta)||
0;qa=this.length-ta;sa?(sa=Number(sa),sa>qa&&(sa=qa)):sa=qa;qa=ra.length;if(0!==qa%2)throw new TypeError("Invalid hex string");sa>qa/2&&(sa=qa/2);for(qa=0;qa<sa;++qa){ya=parseInt(ra.substr(2*qa,2),16);if(isNaN(ya))break;this[ta+qa]=ya}return qa;case "utf8":case "utf-8":return da(ia(ra,this.length-ta),this,ta,sa);case "ascii":return da(fa(ra),this,ta,sa);case "latin1":case "binary":return da(fa(ra),this,ta,sa);case "base64":return da(ha(ra),this,ta,sa);case "ucs2":case "ucs-2":case "utf16le":case "utf-16le":qa=
ra;ya=this.length-ta;for(var Ba=[],Ja=0;Ja<qa.length&&!(0>(ya-=2));++Ja){var La=qa.charCodeAt(Ja);ra=La>>8;La%=256;Ba.push(La);Ba.push(ra)}return da(Ba,this,ta,sa);default:if(ya)throw new TypeError("Unknown encoding: "+qa);qa=(""+qa).toLowerCase();ya=!0}};ea.prototype.toJSON=function(){return{type:"Buffer",data:Array.prototype.slice.call(this.y8||this,0)}};var na=4096;ea.prototype.slice=function(ra,ta){var sa=this.length;ra=~~ra;ta=void 0===ta?sa:~~ta;0>ra?(ra+=sa,0>ra&&(ra=0)):ra>sa&&(ra=sa);0>ta?
(ta+=sa,0>ta&&(ta=0)):ta>sa&&(ta=sa);ta<ra&&(ta=ra);if(ea.Td)ta=this.subarray(ra,ta),ta.__proto__=ea.prototype;else{sa=ta-ra;ta=new ea(sa,void 0);for(var qa=0;qa<sa;++qa)ta[qa]=this[qa+ra]}return ta};ea.prototype.JD=function(ra){w(ra,1,this.length);return this[ra]};ea.prototype.Js=function(ra){w(ra,2,this.length);return this[ra]<<8|this[ra+1]};ea.prototype.y7=function(ra,ta){ra=+ra;ta|=0;aa(this,ra,ta,1,255,0);ea.Td||(ra=Math.floor(ra));this[ta]=ra&255;return ta+1};ea.prototype.x7=function(ra,ta){ra=
+ra;ta|=0;aa(this,ra,ta,4,4294967295,0);if(ea.Td)this[ta]=ra>>>24,this[ta+1]=ra>>>16,this[ta+2]=ra>>>8,this[ta+3]=ra&255;else{var sa=ta;0>ra&&(ra=4294967295+ra+1);for(var qa=0,ya=Math.min(this.length-sa,4);qa<ya;++qa)this[sa+qa]=ra>>>8*(3-qa)&255}return ta+4};ea.prototype.copy=function(ra,ta,sa,qa){sa||(sa=0);qa||0===qa||(qa=this.length);ta>=ra.length&&(ta=ra.length);ta||(ta=0);0<qa&&qa<sa&&(qa=sa);if(qa===sa||0===ra.length||0===this.length)return 0;if(0>ta)throw new RangeError("targetStart out of bounds");
if(0>sa||sa>=this.length)throw new RangeError("sourceStart out of bounds");if(0>qa)throw new RangeError("sourceEnd out of bounds");qa>this.length&&(qa=this.length);ra.length-ta<qa-sa&&(qa=ra.length-ta+sa);var ya=qa-sa;if(this===ra&&sa<ta&&ta<qa)for(qa=ya-1;0<=qa;--qa)ra[qa+ta]=this[qa+sa];else if(1E3>ya||!ea.Td)for(qa=0;qa<ya;++qa)ra[qa+ta]=this[qa+sa];else Uint8Array.prototype.set.call(ra,this.subarray(sa,sa+ya),ta);return ya};ea.prototype.fill=function(ra,ta,sa,qa){if("string"===typeof ra){"string"===
typeof ta?(qa=ta,ta=0,sa=this.length):"string"===typeof sa&&(qa=sa,sa=this.length);if(1===ra.length){var ya=ra.charCodeAt(0);256>ya&&(ra=ya)}if(void 0!==qa&&"string"!==typeof qa)throw new TypeError("encoding must be a string");if("string"===typeof qa&&!ea.ZK(qa))throw new TypeError("Unknown encoding: "+qa);}else"number"===typeof ra&&(ra&=255);if(0>ta||this.length<ta||this.length<sa)throw new RangeError("Out of range index");if(sa<=ta)return this;ta>>>=0;sa=void 0===sa?this.length:sa>>>0;ra||(ra=0);
if("number"===typeof ra)for(qa=ta;qa<sa;++qa)this[qa]=ra;else for(ra=ea.isBuffer(ra)?ra:ia((new ea(ra,qa)).toString()),ya=ra.length,qa=0;qa<sa-ta;++qa)this[qa+ta]=ra[qa%ya];return this};var Aa=/[^+\/0-9A-Za-z-_]/g}).call(this,ba(136))},357:function(Ea,va){function ba(ea){var ca=ea.length;if(0<ca%4)throw Error("Invalid string. Length must be a multiple of 4");ea=ea.indexOf("=");-1===ea&&(ea=ca);return[ea,ea===ca?0:4-ea%4]}va.byteLength=function(ea){ea=ba(ea);var ca=ea[1];return 3*(ea[0]+ca)/4-ca};
va.I6=function(ea){var ca=ba(ea);var y=ca[0];ca=ca[1];var r=new ja(3*(y+ca)/4-ca),n=0,b=0<ca?y-4:y,f;for(f=0;f<b;f+=4)y=ka[ea.charCodeAt(f)]<<18|ka[ea.charCodeAt(f+1)]<<12|ka[ea.charCodeAt(f+2)]<<6|ka[ea.charCodeAt(f+3)],r[n++]=y>>16&255,r[n++]=y>>8&255,r[n++]=y&255;2===ca&&(y=ka[ea.charCodeAt(f)]<<2|ka[ea.charCodeAt(f+1)]>>4,r[n++]=y&255);1===ca&&(y=ka[ea.charCodeAt(f)]<<10|ka[ea.charCodeAt(f+1)]<<4|ka[ea.charCodeAt(f+2)]>>2,r[n++]=y>>8&255,r[n++]=y&255);return r};va.uJ=function(ea){for(var ca=ea.length,
y=ca%3,r=[],n=0,b=ca-y;n<b;n+=16383){for(var f=r,e=f.push,h,z=ea,x=n+16383>b?b:n+16383,a=[],w=n;w<x;w+=3)h=(z[w]<<16&16711680)+(z[w+1]<<8&65280)+(z[w+2]&255),a.push(oa[h>>18&63]+oa[h>>12&63]+oa[h>>6&63]+oa[h&63]);h=a.join("");e.call(f,h)}1===y?(ea=ea[ca-1],r.push(oa[ea>>2]+oa[ea<<4&63]+"==")):2===y&&(ea=(ea[ca-2]<<8)+ea[ca-1],r.push(oa[ea>>10]+oa[ea>>4&63]+oa[ea<<2&63]+"="));return r.join("")};var oa=[],ka=[],ja="undefined"!==typeof Uint8Array?Uint8Array:Array;for(Ea=0;64>Ea;++Ea)oa[Ea]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"[Ea],
ka["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(Ea)]=Ea;ka[45]=62;ka[95]=63},358:function(Ea,va){va.read=function(ba,oa,ka,ja,ea){var ca=8*ea-ja-1;var y=(1<<ca)-1,r=y>>1,n=-7;ea=ka?ea-1:0;var b=ka?-1:1,f=ba[oa+ea];ea+=b;ka=f&(1<<-n)-1;f>>=-n;for(n+=ca;0<n;ka=256*ka+ba[oa+ea],ea+=b,n-=8);ca=ka&(1<<-n)-1;ka>>=-n;for(n+=ja;0<n;ca=256*ca+ba[oa+ea],ea+=b,n-=8);if(0===ka)ka=1-r;else{if(ka===y)return ca?NaN:Infinity*(f?-1:1);ca+=Math.pow(2,ja);ka-=r}return(f?-1:1)*ca*Math.pow(2,
ka-ja)};va.write=function(ba,oa,ka,ja,ea,ca){var y,r=8*ca-ea-1,n=(1<<r)-1,b=n>>1,f=23===ea?Math.pow(2,-24)-Math.pow(2,-77):0;ca=ja?0:ca-1;var e=ja?1:-1,h=0>oa||0===oa&&0>1/oa?1:0;oa=Math.abs(oa);isNaN(oa)||Infinity===oa?(oa=isNaN(oa)?1:0,ja=n):(ja=Math.floor(Math.log(oa)/Math.LN2),1>oa*(y=Math.pow(2,-ja))&&(ja--,y*=2),oa=1<=ja+b?oa+f/y:oa+f*Math.pow(2,1-b),2<=oa*y&&(ja++,y/=2),ja+b>=n?(oa=0,ja=n):1<=ja+b?(oa=(oa*y-1)*Math.pow(2,ea),ja+=b):(oa=oa*Math.pow(2,b-1)*Math.pow(2,ea),ja=0));for(;8<=ea;ba[ka+
ca]=oa&255,ca+=e,oa/=256,ea-=8);ja=ja<<ea|oa;for(r+=ea;0<r;ba[ka+ca]=ja&255,ca+=e,ja/=256,r-=8);ba[ka+ca-e]|=128*h}},359:function(Ea){var va={}.toString;Ea.exports=Array.isArray||function(ba){return"[object Array]"==va.call(ba)}}}]);}).call(this || window)