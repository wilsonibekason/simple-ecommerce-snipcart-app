

const GenerateFooter = () => {
    
    let FooterContent = document.querySelector('footer');
    FooterContent.innerHTML = `
    <div class="footer-content">
    <img src="img/light-logo.png" alt="" class="logo">
    <div class="footer-ul-container">
        <ul class="category">
            <li class="category-title">Men</li>
            <li><a href="#" class="footer-link">t-shirts</a></li>
        <li><a href="#" class="footer-link">sweatshirts</a></li>
        <li><a href="#" class="footer-link">shirts</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">trousers</a></li>
        <li><a href="#" class="footer-link">shoes</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">formals</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
        </ul>
        <ul class="category">
            <li class="category-title">
                Women
            </li>
                <li><a href="#" class="footer-link">t-shirts</a></li>
                <li><a href="#" class="footer-link">sweatshirts</a></li>
                <li><a href="#" class="footer-link">shirts</a></li>
                <li><a href="#" class="footer-link">jeans</a></li>
                <li><a href="#" class="footer-link">trousers</a></li>
                <li><a href="#" class="footer-link">shoes</a></li>
                <li><a href="#" class="footer-link">casuals</a></li>
                <li><a href="#" class="footer-link">formals</a></li>
                <li><a href="#" class="footer-link">sports</a></li>
                <li><a href="#" class="footer-link">watch</a></li>
        </ul>
    </div>
</div>

<p class="footer-title">about company</p>
<p class="info">Lorem, ipsum dolor.</p>
<p class="info">Lorem, ipsum dolor.</p>
<p class="info">Lorem, ipsum dolor.</p>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-link">terms & services</a>
        <a href="#" class="social-link">privacy page</a>
    </div>
    <div>
        <a href="#" class="social-link">instagram</a>
        <a href="#" class="social-link">facebook</a>
        <a href="#" class="social-link">twitter</a>
    </div>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>
    `
}

GenerateFooter();