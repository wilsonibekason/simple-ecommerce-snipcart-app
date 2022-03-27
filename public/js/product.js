
/** making our image slidable and button toggleableable */

let productImages = document.querySelector('.product-images img');
let imageSlider = document.querySelector('.image-slider');

let activeImageSlider = 0;

productImages.forEach((item, i) => {
    item.addEventListener('click', () => {
        productImages[activeImageSlider].classList.remove('active');
        item.classList.add('active');
        imageSlider.style.backgroundImage  = 'url(`$(item.src)`)';
        activeImageSlider = i;
    })
})