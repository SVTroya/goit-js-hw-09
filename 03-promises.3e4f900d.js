function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},n={},i=t.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in n){var t=n[e];delete n[e];var i={id:e,exports:{}};return o[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){n[e]=t},t.parcelRequired7c6=i);var r=i("7Y9D8");function l(e,t){const o=Math.random()>.3;new Promise(((n,i)=>{setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)})).then(u).catch(s)}function u({position:t,delay:o}){setTimeout(e(r).Notify.success(`Fulfilled promise ${t} in ${o}ms`),o)}function s({position:t,delay:o}){setTimeout(e(r).Notify.failure(`Rejected promise ${t} in ${o}ms`),o)}document.querySelector("form").onsubmit=e=>{e.preventDefault();const{delay:t,step:o,amount:n}=e.target.elements;let i=Number(o.value);for(let e=0,o=Number(t.value);e<n.value;e++,o+=i)l(e,o)};
//# sourceMappingURL=03-promises.3e4f900d.js.map
