const t=document.querySelector("body"),e=document.querySelector("button[data-start]"),r=document.querySelector("button[data-stop]");let o=null;e.addEventListener("click",(()=>{o=setInterval((()=>{t.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}),1e3),e.setAttribute("disabled",!1)})),r.addEventListener("click",(()=>{clearInterval(o),e.removeAttribute("disabled")}));
//# sourceMappingURL=01-color-switcher.8979b19b.js.map
