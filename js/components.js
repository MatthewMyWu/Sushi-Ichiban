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
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////


customElements.define('header-component', Header);

const all = {
    Header,
}
export default all;
