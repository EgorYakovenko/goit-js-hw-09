const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let d=null;r.setAttribute("disabled",!1),e.addEventListener("click",(()=>{d=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled",!1),d&&r.removeAttribute("disabled",!1)})),r.addEventListener("click",(()=>{clearInterval(d),e.removeAttribute("disabled",!1),r.setAttribute("disabled",!1)}));
//# sourceMappingURL=01-color-switcher.692fedcf.js.map
