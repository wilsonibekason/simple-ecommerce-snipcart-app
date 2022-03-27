/** making our image slidable and button toggleableable */

const productImages = document.querySelectorAll(".product-images img"); // selecting all image thumbs
const productImageSlide = document.querySelector(".image-slider"); // seclecting image slider element

let activeImageSlide = 0; // default slider image

productImages.forEach((item, i) => { // loopinh through each image thumb
    item.addEventListener('click', () => { // adding click event to each image thumbnail
        productImages[activeImageSlide].classList.remove('active'); // removing active class from current image thumb
        item.classList.add('active'); // adding active class to the current or clicked image thumb
        productImageSlide.style.backgroundImage = `url('${item.src}')`; // setting up image slider's background image
        activeImageSlide = i; // updating the image slider variable to track current thumb
    })
})

// toogle size buttons functionality

const sizeBtns = document.querySelectorAll('.size-radio-btn');
let checkBtn = 0; // current selected button

sizeBtns.forEach((item, i) => {
    item.addEventListener('click', () => {
    sizeBtns[checkBtn].classList.remove('check');
    item.classList.add('check');
    checkBtn = i;  // updating the variable
    });
})