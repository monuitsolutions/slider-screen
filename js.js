let slides = document.querySelectorAll(".slide");
// console.log(slides);
var count = 0;
slides.forEach(
    (slide, index) =>{
        slide.style.left = `${index * 100}%`
    } 
)

let previus = () =>{
    count--
    slideContainer()
}
let next = () =>{
    count++
    slideContainer()
}

let slideContainer = () =>{
    slides.forEach(
        (slide)=>{
            slide.style.transform = `translateX(-${count * 100}% )`; 
        }
    );
}
