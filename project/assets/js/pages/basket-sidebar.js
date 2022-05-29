
const cartSidebar=document.querySelector("._cart-sidebar");
const cartSidebarBtn=document.getElementById("_cart-right-sidebar");
const cartSidebarCloseBtn=document.querySelector("._cart-sidebar__container__close__btn");
const transparentDiv=document.getElementById("transparent");



cartSidebarBtn.onclick=function(){
    transparentDiv.classList.add("_opacity-return");
    cartSidebar.classList.add("_transform-translate-x");

}
cartSidebarCloseBtn.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    cartSidebar.classList.remove("_transform-translate-x");

}
  transparentDiv.onclick=function(){
    cartSidebar.classList.remove("_transform-translate-x");
    transparentDiv.classList.remove("_opacity-return");

}

// basket////////////////////////////////////////////////////


