class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
            <ul>
                <li class="desktop"><a href="./index.html"><img src="./images/Logo.png" alt=""></a></li>
                <li><a href="index.html">Home</a></li>
                <li><a href="menu.html">Menu</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
    </header>`;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<footer>
        <span>Copyright © 2021</span>
        <span>Created By Matthew Wu</span>
        <span>Icons by Freepik, Smash Icons, Good Ware, Gregor Cresnar, and Pixel Perfect from www.flaticon.com</span>
    </footer>`;
    }
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class MenuItem extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<div class="menu-item">
            <h3 class="dish-name">Dish Name</h3>
            <p class="dish-description">Rare sliced beef with ponzu sauce</p>
            <p class="dish-price">7.50</p>
            <img src="./images/Sample Sushi.jpg" alt="">
        </div>`;
    }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


customElements.define('header-component', Header);
customElements.define('footer-component', Footer);
customElements.define('menu-item-component', MenuItem);

const all = {
    Header,
    Footer,
    MenuItem,
}
export default all;
