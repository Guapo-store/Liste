
const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navi");

 menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   nav.classList.toggle("active");
 });


 const btns = document.querySelectorAll(".nav-btn");
 const slides = document.querySelectorAll(".image-slide");
 const rows = document.querySelectorAll(".row");


 var sliderNavv = function(manual){

  btns.forEach((btn) =>{
    btn.classList.remove("active");
    })

  slides.forEach((slide) =>{
    slide.classList.remove("active");
    })

  rows.forEach((row) =>{
    row.classList.remove("active");
    })

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  rows[manual].classList.add("active");
 }
btns.forEach((btn,i) =>{
  btn.addEventListener("click",()=>{
    sliderNavv(i);
  })
})
