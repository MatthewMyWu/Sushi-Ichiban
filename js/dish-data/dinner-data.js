import { imageFolderPath, placeholder, } from "./paths.js";
const path = imageFolderPath + "dinner images/";

const dinner = {
    name: "Dinner",
    items:  [
        {
            number: "401",
            name: "Teriyaki Chicken",
            description: "BBQ chicken glazed wtih teriyaki sauce",
            price: "16.95",
            image: path + "teriyaki chicken.jpg",
        },
        {
            number: "402",
            name: "Teriyaki Beef",
            description: "Pan fried sliced beef with teriyaki sauce, mushroom, and onion",
            price: "17.95",
            image: path + "teriyaki beef.jpg",
        },
        {
            number: "403",
            name: "Teriyaki Salmon",
            description: "salmon fillet grilled to perfection",
            price: "18.95",
            image: path + "teriyaki salmon.jpg",
        },
        {
            number: "404",
            name: "Ginger Chicken",
            description: "Deep fried shredded chicken with ginger sauce",
            price: "16.95",
            image: placeholder,
        },
        {
            number: "408",
            name: "Ginger Beef",
            description: "Deep fried beef with ginger sauce",
            price: "16.95",
            image: placeholder,
        },
        {
            number: "405",
            name: "Tonkatsu Don",
            description: "Deep fried breaded pork with onion and egg on rice",
            price: "13.95",
            image: path + "tonkatsu don.jpg",
        },
        {
            number: "406",
            name: "Chicken Teriyaki & Tempura",
            description: "",
            price: "20.95",
            image: placeholder,
        },
        {
            number: "407",
            name: "Sushi & Tempura",
            description: "Sushi (tuna, salmon, red snapper, special scallop, 2pcs outsider), tempura (2pcs prawn and 4pcs veggies)",
            price: "20.95",
            image: path + "sushi & tempura.jpg",
        },
        {
            number: "409",
            name: "Unagi Don",
            description: "BBQ eel with unagi sauce served on rice",
            price: "18.95",
            image: path + "unagi don.jpg",
        },
    ],
};

export { dinner };