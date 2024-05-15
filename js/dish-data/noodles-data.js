import { imageFolderPath, placeholder } from './paths.js'
const path = imageFolderPath + "noodles images/";

const noodles = {
    name: "Noodles",
    items: [
        {
            number: "300",
            name: "Teriyaki Chicken Udon",
            description: "",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "301",
            name: "Tempura Udon",
            description: "",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "302",
            name: "Beef Udon",
            description: "",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "303",
            name: "Spicy Chicken Udon",
            description: "",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "304",
            name: "Chicken Yakisoba",
            description: "Pan fried noodles with vegetables",
            price: "14.99",
            image: path + "chicken yakisoba.jpg",
        },
        {
            number: "305",
            name: "Beef Yakisoba",
            description: "Pan fried noodles with vegetables",
            price: "14.99",
            image: path + "beef yakisoba.jpg",
        },
        {
            number: "308",
            name: "Chicken Fried Rice",
            description: "Pan fried rice with chicken, egg, corn, and cucumber",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "309",
            name: "Deluxe Ramen",
            description: "Pirk chasu, egg, seaweed and green onions",
            price: "14.99",
            image: placeholder,
        },
    ]
}

export { noodles };