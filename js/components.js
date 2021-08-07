class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<header>
        <nav>
            <ul>
                <li class="desktop"><a href="./index.html"><img src="./images/Logo.jpg" alt=""></a></li>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./html/menu.html">Menu</a></li>
                <li><a href="./html/about.html">About</a></li>
                <li><a href="./html/contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>`;
    }
}



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
customElements.define('menu-item-component', MenuItem);

const all = {
    Header,
    MenuItem,
}
export default all;
