const leftBtn = document.getElementById('leftSlide');
const rightBtn = document.getElementById('rightSlide');
const slides = document.querySelectorAll('.hero-boxes');

let slideNo = 0;


rightBtn.addEventListener('click', () => {
    slideNo++;
    if(slideNo === slides.length){
      slideNo = 0;
    }
    updateSlides();
    console.log(slideNo);
  })

leftBtn.addEventListener('click', () => {
  slideNo--;
  if(slideNo < 0){
    slideNo = slides.length -1;
  }
  updateSlides();
  console.log(slideNo);
})
function updateSlides(){
  slides.forEach(slide =>{
    slide.classList.remove('active');
  })
  slides[slideNo].classList.add('active')
}