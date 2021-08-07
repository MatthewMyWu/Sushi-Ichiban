const MenuItem = Vue.component('menu-item', {
    props: ['name', 'description', 'price'],
    template: `<div class="menu-item">
    <h3 class="dish-name">{{name}}</h3>
    <p class="dish-description">{{description}}</p>
    <p class="dish-price">{{price}}</p>
    <img class="dish-image" src="./images/Sample Sushi.jpg" alt="">
</div>`
});
// <img src={{image}} alt="">



const menuApp = new Vue({
    el: "#menu-app",
    data: {
        menuItems: [
            {
                name: "Item 1",
                description: "Description 1",
                price: "1",
            },
            {
                name: "Item 2",
                description: "Description 2",
                price: "2",
            },
            {
                name: "Item 2",
                description: "Description 2",
                price: "2",
            }
        ]
    }
});