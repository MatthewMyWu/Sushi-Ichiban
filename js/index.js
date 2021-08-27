import * as comboData from "./dish-data/combos-data.js";
console.log(comboData.name);

const FeatureItem = Vue.component("feature-item", {
    props: ["item_number"],
    computed: {
        item: function () {
            return data.filter(function (elem) {
                if (elem.number == item_number) {
                    return elem;
                }
            });
        },
    },
    template: `<p>{{combos.name}}</p>`

    /*
    template: `<div class="feature-item">
        <div class="number-container">
            <p class="dish-number">{{item.number}}:</p>
        </div>
        <div class="text-container">
            <h3 class="dish-name">{{iten.name}}</h3>
            <p class="dish-description">{{item.description}}</p>
            <p class="dish-price">{{price}}</p>
        </div>
        <div class="image-container">
            <img loading="lazy" class="dish-image" :src="image" v-bind:alt="name">
        </div>
    </div>`
    */
});


const indexApp = new Vue({
    el: "#index-app",
    data: {
        combos: comboData,
    }
});