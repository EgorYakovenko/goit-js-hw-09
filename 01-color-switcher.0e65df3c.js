!function(){var t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]"),n=null;r.setAttribute("disabled",!1),e.addEventListener("click",(function(){n=setInterval((function(){t.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),e.setAttribute("disabled",!1),n&&r.removeAttribute("disabled",!1)})),r.addEventListener("click",(function(){clearInterval(n),e.removeAttribute("disabled",!1),r.setAttribute("disabled",!1)}))}();
//# sourceMappingURL=01-color-switcher.0e65df3c.js.map
