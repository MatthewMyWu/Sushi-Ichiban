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
            <img loading="lazy" class="dish-image" :src="image" v-bind:alt="name">
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



import * as dishData from "./dish-data/all.js";


const menuApp = new Vue({
    el: "#menu-app",
    data: {
        appetizers: dishData.appetizers,
        tempura: dishData.tempura,
        noodles: dishData.noodles,
        dinner: dishData.dinner,
        maki_rolls: dishData.maki_rolls,
        nigiri_and_sashimi: dishData.nigiri_and_sashimi,
        temaki: dishData.temaki,
        torch_sushi: dishData.torch_sushi,
        sushi_pizza: dishData.sushi_pizza,
        combos: dishData.combos,
    }
});





//INTERSECTION OBSERVER
//  Highlight appropriate section of menu navbar when user scrolls to respective section of menu
const observerHelper = document.getElementById("intersection_observer_helper");
//Menu sections
const appetizers_section = document.getElementById("appetizers");
const tempura_section = document.getElementById("tempura");
const noodles_section = document.getElementById("noodles");
const dinner_section = document.getElementById("dinner");
const maki_rolls_section = document.getElementById("maki_rolls");
const nigiri_and_sashimi_section = document.getElementById("nigiri_and_sashimi");
const temaki_section = document.getElementById("temaki");
const torch_sushi_section = document.getElementById("torch_sushi");
const sushi_pizza_section = document.getElementById("sushi_pizza");
const combos_section = document.getElementById("combos");
//navbar sections
const appetizers_nav = document.getElementById("appetizers_nav");
const tempura_nav = document.getElementById("tempura_nav");
const noodles_nav = document.getElementById("noodles_nav");
const dinner_nav = document.getElementById("dinner_nav");
const maki_rolls_nav = document.getElementById("maki_rolls_nav");
const nigiri_and_sashimi_nav = document.getElementById("nigiri_and_sashimi_nav");
const temaki_nav = document.getElementById("temaki_nav");
const torch_sushi_nav = document.getElementById("torch_sushi_nav");
const sushi_pizza_nav = document.getElementById("sushi_pizza_nav");
const combos_nav = document.getElementById("combos_nav");

const observer = new IntersectionObserver(function (entries) {
    // console.log(entries.length + " " + entries[0]["isIntersecting"] + " " + entries[0]["intersectionRatio"]);
    //Figure out which section to highlight
    for (const entry of entries) {
        if (entry["isIntersecting"]) {
            matchSectionToNav(entry["target"]).classList.add("nav_highlight");
        } else {
            matchSectionToNav(entry["target"]).classList.remove("nav_highlight");
        }
    }
}, { threshold: [0.01, 0.02, 0.05, 0.07, 0.09, 0.1] } );


const matchSectionToNav = (section) => {
    let ret;
    switch (section) {
        case appetizers_section:
            ret = appetizers_nav;
            break;
        case tempura_section:
            ret = tempura_nav;
            break;
        case noodles_section:
            ret = noodles_nav;
            break;
        case dinner_section:
            ret = dinner_nav;
            break;
        case maki_rolls_section:
            ret = maki_rolls_nav;
            break;
        case nigiri_and_sashimi_section:
            ret =  nigiri_and_sashimi_nav;
            break;
        case temaki_section:
            ret =  temaki_nav;
            break;
        case torch_sushi_section:
            ret =  torch_sushi_nav;
            break;
        case sushi_pizza_section:
            ret =  sushi_pizza_nav;
            break;
        case combos_section:
            ret =  combos_nav;
            break;
    }
    return ret;
}



observer.observe(document.querySelector("#appetizers"));
observer.observe(document.querySelector("#tempura"));
observer.observe(document.querySelector("#noodles"));
observer.observe(document.querySelector("#dinner"));
observer.observe(document.querySelector("#maki_rolls"));
observer.observe(document.querySelector("#nigiri_and_sashimi"));
observer.observe(document.querySelector("#temaki"));
observer.observe(document.querySelector("#torch_sushi"));
observer.observe(document.querySelector("#sushi_pizza"));
observer.observe(document.querySelector("#combos"));