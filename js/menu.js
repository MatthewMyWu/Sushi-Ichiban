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



import * as dishData from "./dish-data/all.js";


const menuApp = new Vue({
    el: "#menu-app",
    data: {
        // appetizers: data.appetizers,
        appetizers: dishData.appetizers,
        tempura: dishData.tempura,
        noodles: dishData.noodles,
        dinner: dishData.dinner,
        maki_rolls: dishData.maki_rolls,
    }
});