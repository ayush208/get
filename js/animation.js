function initScrollCheck(t,e,c=!1){const n=document.querySelectorAll(t);document.addEventListener("scroll",(function(t){scrollCheck(n,e,c)})),scrollCheck(n,e,c)}function scrollCheck(t,e,c){Object.values(t).forEach(t=>{isElementVisible(t,e,c)})}function isElementVisible(t,e,c,n=!1){let i=parseInt(t.getAttribute("data-scroll-offset"));i=isNaN(i)?0:i,setTimeout(()=>{let i=n?t.getBoundingClientRect().top:t.offsetTop;const o=window.innerHeight||document.documentElement.clientHeight;i<=window.scrollY+o&&animate(c?t.children[0]:t,e)},i)}function animate(t,e){t.classList.contains(e)||t.classList.add(e)}function setZeroOpacity(t,e=!1){document.querySelectorAll(t).forEach(t=>{e?t.childNodes[0].classList.add("opacity-0"):t.classList.add("opacity-0")})}