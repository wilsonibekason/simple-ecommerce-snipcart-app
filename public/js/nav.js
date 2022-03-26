

const CreateNav = () => {
    let nav = document.querySelector('.navbar');
    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo.png" alt="" class="brand-logo">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="search brand, product">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<div>
    <ul class="links-container">
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Home</a></li>
        <li class="link-item"><a href="#" class="link">Home</a></li>
    </ul>
</div>
    
    `;
}

CreateNav();