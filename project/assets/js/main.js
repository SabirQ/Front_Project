window.onload=function(){

  const menuBtn=document.querySelector("._menu-btn");
  const closeMenuBtn=document.querySelector(".mobile-menu__container__close__btn");
  const transparentDiv=document.querySelector(".transparent__body");
  const mobileMenu=document.querySelector(".mobile-menu");
  const accardions=document.querySelectorAll(".mobile-menu__container__navbar__list__item__sub-list");
  const accardionBtns=document.querySelectorAll(".mobile-menu__container__navbar__list__item__link-btn__btn");
  const subAccardions=document.querySelectorAll(".additional-sub-list");
  const subAccardionBtns=document.querySelectorAll(".additional-menu__btn");
  const currencyBtns=document.querySelectorAll(".mobile-menu__container__currency-accaunt__list__currency__link");
  const currencyAccardions=document.querySelectorAll(".mobile-menu__container__currency-accaunt__list__currency__list");
  const searchBtn=document.querySelector(".extras-search");
  const closeSearchBtn=document.querySelector(".transparent__body__search__close__btn");
  const transparentSearchDiv=document.querySelector(".transparent__body__search");
  const transparentSearchInput=document.querySelector(".transparent__body__search__input-btn");
  const carouselBtns=document.querySelectorAll("._cus-carousel__icon");
  const carouselContainer=document.querySelector(".main-carousel__container");
  carouselContainer.onmouseenter = function(){
    carouselBtns.forEach((btn)=>{
      btn.classList.add("_opacity-return")
    })
  };
  carouselContainer.onmouseleave = function(){
    carouselBtns.forEach((btn)=>{
      btn.classList.remove("_opacity-return")
    })
  };




  searchBtn.onclick=function(){
    transparentSearchDiv.classList.add("_opacity-return");
    transparentSearchInput.classList.add("_transform-xy-search");
  }
  closeSearchBtn.onclick=function(){
    transparentSearchDiv.classList.remove("_opacity-return");
    transparentSearchInput.classList.remove("_transform-xy-search");

  }

  menuBtn.onclick=function(){
    transparentDiv.classList.add("_opacity-return");
    mobileMenu.classList.add("_transform-translate-x");

  }
  closeMenuBtn.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    mobileMenu.classList.remove("_transform-translate-x");

  }
  transparentDiv.onclick=function(){
    transparentDiv.classList.remove("_opacity-return");
    mobileMenu.classList.remove("_transform-translate-x");

  }

  for (let i = 0; i < accardionBtns.length; i++) {
    accardionBtns[i].onclick=function(){
      for (let i = 0; i < currencyBtns.length; i++) {
        currencyAccardions[i].classList.remove("_custom-accordion")
      }
      if(accardionBtns[i].classList.contains("_x-rotate-vr")){
        accardionBtns[i].classList.remove("_x-rotate-vr")
        accardions[i].classList.remove("_custom-accordion")
      }
      else{
        for (let i = 0; i < accardionBtns.length; i++) {
          accardionBtns[i].classList.remove("_x-rotate-vr")
          accardions[i].classList.remove("_custom-accordion")
          for (let i = 0; i < subAccardionBtns.length; i++) {
            subAccardionBtns[i].classList.remove("_x-rotate-vr")
           subAccardions[i].classList.remove("_custom-accordion")
          }
        }
        accardionBtns[i].classList.toggle("_x-rotate-vr")
        accardions[i].classList.toggle("_custom-accordion")
      }
    }
  }

  for (let i = 0; i < subAccardionBtns.length; i++) {
    subAccardionBtns[i].onclick=function(){
      for (let i = 0; i < currencyBtns.length; i++) {
        currencyAccardions[i].classList.remove("_custom-accordion")
      }
      if(subAccardionBtns[i].classList.contains("_x-rotate-vr")){
        subAccardionBtns[i].classList.remove("_x-rotate-vr")
        subAccardions[i].classList.remove("_custom-accordion")
      }
      else{
        for (let i = 0; i < subAccardionBtns.length; i++) {
          subAccardionBtns[i].classList.remove("_x-rotate-vr")
         subAccardions[i].classList.remove("_custom-accordion")
        }
        subAccardionBtns[i].classList.toggle("_x-rotate-vr")
        subAccardions[i].classList.toggle("_custom-accordion")
      }
    }
    for (let i = 0; i < currencyBtns.length; i++) {
      currencyBtns[i].onclick=function(){
        if(currencyAccardions[i].classList.contains("_custom-accordion")){
          currencyAccardions[i].classList.remove("_custom-accordion")
        }
        else{
          for (let i = 0; i < currencyBtns.length; i++) {
            currencyAccardions[i].classList.remove("_custom-accordion")
          }
          currencyAccardions[i].classList.toggle("_custom-accordion")
        }
      }
    }
  }
  
}
