(()=>{const e=document.querySelector(".js-menu-container"),o=document.querySelector(".js-open-menu"),t=document.querySelector(".js-close-menu"),n=()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)};o.addEventListener("click",n),t.addEventListener("click",n),window.matchMedia("(min-width: 768px)").addEventListener("change",(t=>{t.matches&&(e.classList.remove("is-open"),o.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();const e={openModalBuynowBtn:document.querySelector("[data-modalBuynow-open]"),closeModalBuynowBtn:document.querySelector("[data-modalBuynow-close]"),modalBuynow:document.querySelector("[data-modalBuynow]")};function o(){e.modalBuynow.classList.toggle("is-open")}e.openModalBuynowBtn.addEventListener("click",o),e.closeModalBuynowBtn.addEventListener("click",o);{const a={openModalproductsBtn:document.querySelector("[data-modalproducts-open]"),closeModalproductsBtn:document.querySelector("[data-modalproducts-close]"),modalproducts:document.querySelector("[data-modalproducts]")};function t(){a.modalproducts.classList.toggle("is-open")}a.openModalproductsBtn.addEventListener("click",t),a.closeModalproductsBtn.addEventListener("click",t)}{const l={openModalvideoBtn:document.querySelector("[data-modalvideo-open]"),closeModalvideoBtn:document.querySelector("[data-modalvideo-close]"),modalvideo:document.querySelector("[data-modalvideo]")};function n(){l.modalvideo.classList.toggle("is-open")}l.openModalvideoBtn.addEventListener("click",n),l.closeModalvideoBtn.addEventListener("click",n)}{const s={openModalLocationBtn:document.querySelector("[data-modalLocation-open]"),closeModalLocationBtn:document.querySelector("[data-modalLocation-close]"),modalLocation:document.querySelector("[data-modalLocation]")};function d(){s.modalLocation.classList.toggle("is-open")}s.openModalLocationBtn.addEventListener("click",d),s.closeModalLocationBtn.addEventListener("click",d)}{const i={openModalfranchiseBtn:document.querySelector("[data-modalfranchise-open]"),closeModalfranchiseBtn:document.querySelector("[data-modalfranchise-close]"),modalfranchise:document.querySelector("[data-modalfranchise]")};function c(){i.modalfranchise.classList.toggle("is-open")}i.openModalfranchiseBtn.addEventListener("click",c),i.closeModalfranchiseBtn.addEventListener("click",c)}(()=>{const e=document.querySelector(".js-modal-container"),o=document.querySelector(".js-open-modal"),t=(document.querySelector(".js-close-modal"),()=>{const t="true"===o.getAttribute("aria-expanded")||!1;o.setAttribute("aria-expanded",!t),e.classList.toggle("is-open");bodyScrollLock[t?"enableBodyScroll":"disableBodyScroll"](document.body)});o.addEventListener("click",t),closeModalBtn.addEventListener("click",t),window.matchMedia("(min-width: 768px)").addEventListener("change",(e=>{e.matches&&(mobileMenu.classList.remove("is-open"),openMenuBtn.setAttribute("aria-expanded",!1),bodyScrollLock.enableBodyScroll(document.body))}))})();
//# sourceMappingURL=index.8835d4d1.js.map