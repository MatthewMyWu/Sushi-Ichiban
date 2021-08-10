const MenuItem = Vue.component("menu-item", {
    props: ["number", "name", "description", "price", "image"],
    template: `<div class="menu-item">
        <div class="number-container">
            <p class="dish-number">{{number}}:</p>
        </div>
        <div class="text-container">
            <h3 class="dish-name">{{name}}</h3>
            <p class="dish-description">{{description}}</p>
            <p class="dish-price">{{price}}</p>
        </div>
        <div class="image-container">
            <img class="dish-image" :src="image" alt="">
        </div>
    </div>`
});

const MenuSection = Vue.component("menu-section", {
    props: ["section_name"],
    template: `
    <section class="menu-section">
        <h2 class="menu-section-title">{{section_name.name}}</h2>
                <div class="menu-section-container">
                    <menu-item v-for="menuItem in ` + "section_name" + `.items"
                        v-bind:number="menuItem.number"
                        v-bind:name="menuItem.name"
                        v-bind:description="menuItem.description"
                        v-bind:price="menuItem.price"
                        v-bind:image="menuItem.image"
                        v-bind:key="menuItem.id">
                    </menu-item>
                </div>
            </section>
    `
})



const soupsAndSalads = {
    name: "Soups and Salads",
    items: [
        {
            number: "1",
            name: "soup and salad 1",
            description: "sas 1",
            price: "1",
            image: "images/Lone Sushi.jpg",
        },
    ]
};

const seafood = {
    name: "Seafood",
    items: [
        {
            number: "5",
            name: "seafood 1",
            description: "sea 1",
            price: "1",
        },
        {
            number: "6",
            name: "seafood 2",
            description: "sea 2",
            price: "2",
        },
        {
            number: "7",
            name: "seafood 3",
            description: "sea 3",
            price: "3",
        },
        {
            number: "8",
            name: "seafood 4",
            description: "sea 4",
            price: "4",
        },
    ]
};



import * as data from "./dish-data/all.js";


const menuApp = new Vue({
    el: "#menu-app",
    data: {
        // appetizers: data.appetizers,
        appetizers: data.appetizers,
        seafood: seafood,
    }
});