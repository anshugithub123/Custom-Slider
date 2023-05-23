const slides = document.querySelectorAll(".slide");
var counter = 0;
slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)
const goPrev = () => {
    counter --;
    slideImg()
}

const goNext = () => {
    counter ++;
    slideImg()
}

const slideImg = () => {
    slides.forEach(
        (slide) =>{
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}