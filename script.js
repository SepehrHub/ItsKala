/*siderbavnav 1*/
const dropdownBtn = document.querySelector("#btn");
const dropdownMenu = document.querySelector(".sidebar");
const toggleArrow = document.getElementById("arrow");
const toggelDropdown = function(){
dropdownMenu.classList.toggle("show");
toggleArrow.classList.toggle("arrow");
}
dropdownBtn.addEventListener("click",function(e){
e.stopPropagation();
toggelDropdown();
});
document.documentElement.addEventListener("click" , function(){
	if(dropdownMenu.classList.contains("show"))
	{
		toggelDropdown();
	}
});
/*sticky*/
var navbar = document.getElementById('navigate');
window.onscroll = function (){
    navsticky();
  }
  var mysticky = navbar.offsetTop;
    function  navsticky(){
      if(window.pageYOffset >= "180"){
        navbar.classList.add("sticky" )
        navbar.style.display = "block";
      }
    else{
      navbar.style.display = "none";
      navbar.classList.remove("sticky");
  }
  }
  /*slider one*/
  let slideindex = 0 ;
showslide(slideindex);
showSlide();
function plusslides(n){
  showslide(slideindex += n)
}
function showslide(n) {
  var slides = document.getElementsByClassName('my-slides');
  if (n > slides.length ) {
    slideindex = 1 ;
  }
  if (n < 1) {
    slideindex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display  = 'none';
  }
  slides[slideindex-1].style.display = 'block';
}
function showSlide(){
  let slides1 = document.getElementsByClassName('my-slides');
  for (let i = 0; i < slides1.length; i++) {
    slides1[i].style.display = "none";
  }
  slideindex++ ;
  if (slideindex > slides1.length) {
    slideindex = 1 ;
  }
  slides1[slideindex - 1].style.display = "block";
  setTimeout(showSlide , 7500);
}
   /*slider two*/
   let slidei = 0 ;
   showslides(slidei);
   showSlides();
   function plusslide(n){
    showslides(slidei += n)
   }
   function showslides(n) {
     var slides = document.getElementsByClassName('my-slides-main');
     if (n > slides.length ) {
       slidei = 1 ;
     }
     if (n < 1) {
       slidei = slides.length;
     }
     for (var i = 0; i < slides.length; i++) {
       slides[i].style.display  = 'none';
     }
     slides[slidei-1].style.display = 'block';
   }
  function showSlides(){
    let slides = document.getElementsByClassName('my-slides-main');
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideindex++ ;
    if (slideindex > slides.length) {
      slideindex = 1 ;
    }
    slides[slideindex - 1].style.display = "block";
    setTimeout(showSlides , 7200);
  }
/*multiple slider one*/
const wrapper = document.querySelector(".wrapper");
const carosel = document.querySelector(".carosel");
const arrowslider = document.querySelectorAll(".wrapper i");
const firstcardWidth= carosel.querySelector(".card").offsetWidth;
let isDragging = false , startX , scrollLeftX , timeoutId; 
const caroselChlidren = [...carosel.children];
const cardview = Math.round(carosel.offsetWidth / firstcardWidth);
caroselChlidren.slice(-cardview).reverse().forEach(card =>{
carosel.insertAdjacentHTML("afterbegin" , card.outerHTML)
});
caroselChlidren.slice(0 , cardview).forEach(card =>{
carosel.insertAdjacentHTML("beforeend" , card.outerHTML)
});
arrowslider.forEach(btn => {
btn.addEventListener("click" , ()=>{
carosel.scrollLeft += btn.id === "left" ? -firstcardWidth : firstcardWidth ;
})
});
const dragstart = (e) =>{
isDragging = true ;
carosel.classList.add("dragging");
startX = e.pageX ;
scrollLeftX = carosel.scrollLeft ;
}
const dragging = (e) => {
if (!isDragging) return;
carosel.scrollLeft =  scrollLeftX - (e.pageX - startX);
}
const dragstop = () => {
isDragging = false ;
carosel.classList.remove("dragging");  
}
const autoPlay = () =>{
if (window.innerWidth < 800) return;
timeoutId = setTimeout(() => carosel.scrollLeft -= firstcardWidth , 4000);
}
autoPlay();
const infinitescroll = () => {
if (carosel.scrollLeft === 0) {
carosel.classList.add("no_transition");
carosel.scrollLeft = carosel.scrollWidth - (2 * carosel.offsetWidth);
carosel.classList.remove("no_transition");
}
else if (Math.ceil(carosel.scrollLeft) === carosel.scrollWidth - carosel.offsetWidth) {
carosel.classList.add("no_transition");
carosel.scrollLeft = carosel.offsetWidth;
carosel.classList.remove("no_transition");
}
clearTimeout(timeoutId);
if(!wrapper.matches(":hover"))autoPlay();
}
carosel.addEventListener("mousedown" , dragstart);
carosel.addEventListener("mousemove" , dragging);
document.addEventListener("mouseup" , dragstop);
carosel.addEventListener("scroll" , infinitescroll);
wrapper.addEventListener("mouseenter" , () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave" , autoPlay);
/*multiple slider one*/
/*multiple slider two*/
const wrapper_1 = document.querySelector(".wrapper-1");
const carosel_1 = document.querySelector(".carosel-1");
const arrowslider_1 = document.querySelectorAll(".wrapper-1 i");
const firstcardWidth_1= carosel_1.querySelector(".card-1").offsetWidth;
let isDragging_1 = false , startX_1 , scrollLeftX_1 , timeoutId_1; 
const caroselChlidren_1 = [...carosel_1.children];
const cardview_1 = Math.round(carosel_1.offsetWidth / firstcardWidth_1);
caroselChlidren_1.slice(-cardview_1).reverse().forEach(card =>{
  carosel_1.insertAdjacentHTML("afterbegin" , card.outerHTML)
  });
  caroselChlidren_1.slice(0 , cardview_1).forEach(card =>{
  carosel_1.insertAdjacentHTML("beforeend" , card.outerHTML)
  });
  arrowslider_1.forEach(btn => {
  btn.addEventListener("click" , ()=>{
  carosel_1.scrollLeft += btn.id === "left" ? -firstcardWidth_1 : firstcardWidth_1 ;
  })
  });
const dragstarts = (e) =>{
  isDragging_1 = true ;
  carosel_1.classList.add("dragging");
  startX_1 = e.pageX ;
  scrollLeftX_1 = carosel_1.scrollLeft ;
  }
  const draggings = (e) => {
  if (!isDragging_1) return;
  carosel_1.scrollLeft =  scrollLeftX_1 - (e.pageX - startX_1);
  }
  const dragstops = () => {
  isDragging_1 = false ;
  carosel_1.classList.remove("dragging");  
  }
  const autoPlays = () =>{
  if (window.innerWidth < 800) return;
  timeoutId_1 = setInterval(() => carosel_1.scrollLeft -= firstcardWidth_1 , 4000);
  }
  autoPlays();
  const infinitescrolls = () => {
  if (carosel_1.scrollLeft === 0) {
  carosel_1.classList.add("no_transition");
  carosel_1.scrollLeft = carosel_1.scrollWidth - (2 * carosel_1.offsetWidth);
  carosel_1.classList.remove("no_transition");
  }
  else if (Math.ceil(carosel_1.scrollLeft) === carosel_1.scrollWidth - carosel_1.offsetWidth) {
  carosel_1.classList.add("no_transition");
  carosel_1.scrollLeft = carosel_1.offsetWidth;
  carosel_1.classList.remove("no_transition");
  }
  clearTimeout(timeoutId_1);
  if(!wrapper_1.matches(":hover"))autoPlays();
}
carosel_1.addEventListener("mousedown" , dragstarts);
carosel_1.addEventListener("mousemove" , draggings);
document.addEventListener("mouseup" , dragstops);
carosel_1.addEventListener("scroll" , infinitescrolls);
wrapper_1.addEventListener("mouseenter" , () => clearTimeout(timeoutId_1));
wrapper_1.addEventListener("mouseleave" , autoPlays);
/*multiple slider two*/
/*multiple slider three*/
const wrapper_2 = document.querySelector(".wrapper-2");
const carosel_2 = document.querySelector(".carosel-2");
const arrowslider_2 = document.querySelectorAll(".wrapper-2 i");
const firstcardWidth_2= carosel_2.querySelector(".card-2").offsetWidth;
let isDragging_2 = false , startX_2 , scrollLeftX_2 , timeoutId_2; 
const caroselChlidren_2 = [...carosel_2.children];
const cardview_2 = Math.round(carosel_2.offsetWidth / firstcardWidth_2);
caroselChlidren_2.slice(-cardview_2).reverse().forEach(card =>{
  carosel_2.insertAdjacentHTML("afterbegin" , card.outerHTML)
  });
  caroselChlidren_2.slice(0 , cardview_2).forEach(card =>{
  carosel_2.insertAdjacentHTML("beforeend" , card.outerHTML)
  });
arrowslider_2.forEach(btn => {
  btn.addEventListener("click" , ()=>{
  carosel_2.scrollLeft += btn.id === "left" ? -firstcardWidth_2 : firstcardWidth_2 ;
  })
  });
const dragstartss = (e) =>{
  isDragging_2 = true ;
  carosel_2.classList.add("dragging");
  startX_2 = e.pageX ;
  scrollLeftX_2 = carosel_2.scrollLeft ;
  }
  const draggingss = (e) => {
  if (!isDragging_2) return;
  carosel_2.scrollLeft =  scrollLeftX_2 - (e.pageX - startX_2);
  }
  const dragstopss = () => {
  isDragging_2 = false ;
  carosel_2.classList.remove("dragging");  
  }
  const autoPlayss = () =>{
  if (window.innerWidth < 800) return;
  timeoutId_2 = setInterval(() => carosel_2.scrollLeft -= firstcardWidth_2 , 4500);
  }
  autoPlayss();
  const infinitescrollss = () => {
  if (carosel_1.scrollLeft === 0) {
  carosel_2.classList.add("no_transition");
  carosel_2.scrollLeft = carosel_2.scrollWidth - (2 * carosel_2.offsetWidth);
  carosel_2.classList.remove("no_transition");
  }
  else if (Math.ceil(carosel_2.scrollLeft) === carosel_2.scrollWidth - carosel_2.offsetWidth) {
  carosel_2.classList.add("no_transition");
  carosel_2.scrollLeft = carosel_2.offsetWidth;
  carosel_2.classList.remove("no_transition");
  }
  clearTimeout(timeoutId_1);
  if(!wrapper_2.matches(":hover"))autoPlays();
}
carosel_2.addEventListener("mousedown" , dragstartss);
carosel_2.addEventListener("mousemove" , draggingss);
document.addEventListener("mouseup" , dragstopss);
carosel_2.addEventListener("scroll" , infinitescrollss);
wrapper_2.addEventListener("mouseenter" , () => clearTimeout(timeoutId_2));
wrapper_2.addEventListener("mouseleave" , autoPlayss);
/*multiple slider three*/
/*multiple slider four*/
const wrap_comment = document.querySelector(".wrap-comment");
const carosel_comment = document.querySelector(".carosel-comment");
const firstcardWidth_3 = carosel_comment.querySelector(".card-comment").offsetWidth;
let isDragging_3 = false , startX_3 , scrollLeftX_3 , timeoutId_3; 
const caroselChlidren_3 = [...carosel_comment.children];
const cardview_3 = Math.round(carosel_comment.offsetWidth / firstcardWidth_3);
caroselChlidren_3.slice(-cardview_3).reverse().forEach(card =>{
carosel_comment.insertAdjacentHTML("afterbegin" , card.outerHTML)
});
caroselChlidren_3.slice(0 , cardview_3).forEach(card =>{
carosel_comment.insertAdjacentHTML("beforeend" , card.outerHTML)
});
const dragstart_comment = (e) =>{
  isDragging_3 = true ;
  carosel_comment.classList.add("dragging");
  startX_3 = e.pageX ;
  scrollLeftX_3 = carosel_comment.scrollLeft ;
  }
  const dragging_comment = (e) => {
  if (!isDragging_3) return;
  carosel_comment.scrollLeft =  scrollLeftX_3 - (e.pageX - startX_3);
  }
  const dragstop_comment = () => {
  isDragging_3 = false ;
  carosel_comment.classList.remove("dragging");  
  }
  const autoPlay_comment = () =>{
  if (window.innerWidth < 800) return;
  timeoutId_3 = setInterval(() => carosel_comment.scrollLeft -= firstcardWidth_3 , 4000);
  }
  autoPlay_comment();
  const infinitescroll_comment = () => {
  if (carosel_comment.scrollLeft === 0) {
  carosel_comment.classList.add("no_transition");
  carosel_comment.scrollLeft = carosel_comment.scrollWidth - (2 * carosel_comment.offsetWidth);
  carosel_comment.classList.remove("no_transition");
  }
  else if (Math.ceil(carosel_comment.scrollLeft) === carosel_comment.scrollWidth - carosel_comment.offsetWidth) {
  carosel_comment.classList.add("no_transition");
  carosel_comment.scrollLeft = carosel_comment.offsetWidth;
  carosel_comment.classList.remove("no_transition");
  }
  clearTimeout(timeoutId_3);
  if(!wrap_comment.matches(":hover"))autoPlay_comment();
}
carosel_comment.addEventListener("mousedown" , dragstart_comment);
carosel_comment.addEventListener("mousemove" , dragging_comment);
document.addEventListener("mouseup" , dragstop_comment);
carosel_comment.addEventListener("scroll" , infinitescroll_comment);
carosel_comment.addEventListener("mouseenter" , () => clearTimeout(timeoutId_3));
carosel_comment.addEventListener("mouseleave" , autoPlay_comment);
/*multiple slider four*/