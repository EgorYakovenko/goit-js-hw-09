function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},i={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in i){var t=i[e];delete i[e];var o={id:e,exports:{}};return n[e]=o,t.call(o.exports,o,o.exports),o.exports}var s=new Error("Cannot find module '"+e+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(e,t){i[e]=t},t.parcelRequired7c6=o);var s=o("7Y9D8");document.querySelector(".form").addEventListener("submit",(async function(t){t.preventDefault();document.querySelector('button[type="submit"]').disabled=!0;const n=parseInt(this.elements.delay.value),i=parseInt(this.elements.step.value),o=parseInt(this.elements.amount.value);if(isNaN(n)||isNaN(i)||isNaN(o))return void notiflix.Notify.failure("Please fill in all fields with valid numbers.");function r(e,t){return new Promise(((n,i)=>{const o=Math.random()>.3;setTimeout((()=>{o?n({position:e,delay:t}):i({position:e,delay:t})}),t)}))}const l=[];for(let e=1;e<=o;e++){const t=n+(e-1)*i;l.push(r(e,t))}for(const t of l)try{const n=await t;e(s).Notify.success(`Fulfilled promise ${n.position} in ${n.delay}ms`)}catch(t){e(s).Notify.failure(`Rejected promise ${t.position} in ${t.delay}ms`)}}));
//# sourceMappingURL=03-promises.cf11bde0.js.map