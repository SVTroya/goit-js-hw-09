!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("6JpON"),u=document.querySelector("form");function a(e,n){var o=Math.random()>.3;new Promise((function(t,i){setTimeout((function(){o?t({position:e,delay:n}):i({position:e,delay:n})}),n)})).then(l).catch(c)}function l(n){var o=n.position,t=n.delay;setTimeout(e(r).Notify.success("Fulfilled promise ".concat(o+1," in ").concat(t,"ms")),t)}function c(n){var o=n.position,t=n.delay;setTimeout(e(r).Notify.failure("Rejected promise ".concat(o+1," in ").concat(t,"ms")),t)}u.onsubmit=function(e){e.preventDefault();for(var n=e.target.elements,o=n.delay,t=n.step,i=n.amount,r=Number(t.value),l=0,c=Number(o.value);l<i.value;l++,c+=r)a(l,c);u.reset()}}();
//# sourceMappingURL=03-promises.7d4c30ff.js.map