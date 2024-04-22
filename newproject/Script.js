const left=document.querySelector('.leftarrow');
const right=document.querySelector('.rightarrow');
const slides=document.querySelector('.slides');
const images=document.querySelectorAll('article')//selecting sliding content
let slideNumber = 1;
const length=images.length;
const nextSlide=() =>{
  slides.style.transform='translateX(-${slideNumber*800}px)';
  slideNumber++;
  updateActiveProfile();//new line
};
const prevSlide=() =>{
  slides.style.transform='translateX(-${(slideNumber-2)*800}px)';
  slideNumber--;
  updateActiveProfile();//new line
};
const getFirstSlide=()=>{
  slides.style.transform='translateX(0px)';
  slideNumber =1;
  updateActiveProfile();//new line
};
const getLastSlide=()=>{
  slides.style.transform='translateX(-${(length-1)*800}px)';
  slideNumber =length;
  updateActiveProfile();//new line
};
//new function
function updateActiveProfile() {
    console.log("updateActiveProfile called with slider:",slideNumber);
    images.forEach((image, index) => {
        image.style.display = (index === slideNumber -1)?'block': 'none';
    });
}
right.addEventListener('click',()=>{
  slideNumber<length  ? nextSlide() :getFirstSlide();
});
left.addEventListener('click' ,()=>{
  slideNumber > 1  ? prevSlide() :getLastSlide();
});
updateActiveProfile();//new line