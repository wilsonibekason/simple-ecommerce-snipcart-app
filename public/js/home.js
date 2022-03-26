

let ProduceContainer = [...document.querySelectorAll('.product-container')];
let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
let preBtn = [...document.querySelectorAll('.pre-btn')];

ProduceContainer.forEach((item, i) => {
    let containerDimesions = item.getBoundingClientRect();
    containerWidth = containerDimesions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })
    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })

})