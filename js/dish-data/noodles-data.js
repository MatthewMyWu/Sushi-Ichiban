import { imageFolderPath, placeholder } from './paths.js'
const path = imageFolderPath + "noodles images/";

const noodles = {
    name: "Noodles",
    items: [
        {
            number: "300",
            name: "Teriyaki Chicken Udon",
            description: "",
            price: "10.95",
            image: placeholder,
        },
        {
            number: "301",
            name: "Tempura Udon",
            description: "",
            price: "10.95",
            image: placeholder,
        },
        {
            number: "302",
            name: "Beef Udon",
            description: "",
            price: "10.95",
            image: placeholder,
        },
        {
            number: "303",
            name: "Spicy Chicken Udon",
            description: "",
            price: "10.95",
            image: placeholder,
        },
        {
            number: "304",
            name: "Chicken Yakisoba",
            description: "Pan fried noodles with vegetables",
            price: "12.95",
            image: path + "chicken yakisoba.jpg",
        },
        {
            number: "305",
            name: "Beef Yakisoba",
            description: "Pan fried noodles with vegetables",
            price: "12.95",
            image: placeholder,
        },
        {
            number: "306",
            name: "Pork Ramen",
            description: "Ramen served with BBQ pork, egg, green onion, and seaweed",
            price: "12.95",
            image: placeholder,
        },
        {
            number: "307",
            name: "Unagi Fried Rice",
            description: "Fried Rice served with BBQ eel",
            price: "13.95",
            image: placeholder,
        },
        {
            number: "308",
            name: "Chicken Fried Rice",
            description: "",
            price: "12.95",
            image: placeholder,
        },
    ]
}

export { noodles };