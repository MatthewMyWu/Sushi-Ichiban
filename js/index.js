
const FeatureItem = Vue.component("feature-item", {
    props: ["item_section", "item_number"],

    computed: {
        item() {
            return matchSection(this.item_section).items.find(element => element.number == this.item_number);
        },
    },

    template: `<div class="feature-item">
    <div class="image-container">
        <img loading="lazy" class="dish-image" :src="item.image" v-bind:alt="item.name">
    </div>
    <div class="text-container">
        <span class="dish-number">{{item.number}}:</span>
        <h3 class="dish-name">{{item.name}}</h3>
        <span class="dish-description">{{item.description}}</span>
        <span class="dish-price">{{item.price}}</span>
    </div>
</div>`
});


import * as dishData from "./dish-data/all.js";

const indexApp = new Vue({
    el: "#index-app",
    data: {
        appetizers: dishData.appetizers,
        tempura: dishData.tempura,
        noodles: dishData.noodles,
        dinner: dishData.dinner,
        maki_rolls: dishData.maki_rolls,
        nigiri: dishData.nigiri,
        sashimi: dishData.sashimi,
        temaki: dishData.temaki,
        torch_sushi: dishData.torch_sushi,
        sushi_pizza: dishData.sushi_pizza,
        combos: dishData.combos,
    },
});


function matchSection(section_name) {
    switch (section_name) {
        case "appetizers":
            return dishData.appetizers;
        case "tempura":
            return dishData.tempura;
        case "noodles":
            return dishData.noodles;
        case "dinner":
            return dishData.dinner;
        case "maki_rolls":
            return dishData.maki_rolls;
        case "nigiri":
            return dishData.nigiri;
        case "sashimi":
            return dishData.sashimi;
        case "temaki":
            return dishData.temaki;
        case "torch_sushi":
            return dishData.torch_sushi;
        case "sushi_pizza":
            return dishData.sushi_pizza;
        case "combos":
            return dishData.combos;
    }
}