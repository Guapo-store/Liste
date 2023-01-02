
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
});


var repeat = function(activeClass){
  let active = document.getElementsByClassName("active");
  let i = 1;

  var repeater = () =>{
    setTimeout(function(){
      [...active].forEach((activeSlide)=>{
        activeSlide.classList.remove("active");
      });
      slides[i].classList.add("active");
      btns[i].classList.add("active");
      rows[i].classList.add("active");
      i++
      if(slides.length == i){
        i = 0;
      }
      if(i >= slides.length){
        return;
      }
      repeater()
    },3000)
    repeater()
  }
  repeat()
}

