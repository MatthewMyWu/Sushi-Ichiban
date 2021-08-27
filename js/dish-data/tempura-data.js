import { imageFolderPath, placeholder } from './paths.js'
const path = imageFolderPath + "tempura images/";

const tempura = {
    name: "Tempura",
    items: [
        {
            number: "201",
            name: "Prawn Tempura",
            description: "4pcs",
            price: "7.95",
            image: placeholder,
        },
        {
            number: "202",
            name: "Yam Tempura",
            description: "6pcs",
            price: "6.50",
            image: path + "yam tempura.jpg",
        },
        {
            number: "203",
            name: "Assorted Tempura",
            description: " 4pcs prawn tempura, 5pcs vegetable tempura",
            price: "10.95",
            image: path + "assorted tempura.jpg",
        },
        {
            number: "204",
            name: "Vegetable Tempura",
            description: "10pcs assorted vegetable tempura",
            price: "7.95",
            image: path + "vegetable tempura.jpg",
        },
        {
            number: "207",
            name: "Broccoli Tempura",
            description: "6pcs",
            price: "5.95",
            image: path + "broccoli tempura.jpg",
        },
        {
            number: "208",
            name: "Avocado Tempura",
            description: "6pcs",
            price: "5.95",
            image: path + "avocado tempura.jpg",
        },
        {
            number: "156",
            name: "Pumpkin Tempura",
            description: "6pcs",
            price: "5.95",
            image: placeholder,
        },
        {
            number: "157",
            name: "Asparagus Tempura",
            description: "8pcs",
            price: "5.95",
            image: placeholder,
        },
        {
            number: "158",
            name: "Onion Ring Tempura",
            description: "6pcs",
            price: "5.95",
            image: placeholder,
        },
        {
            number: "159",
            name: "Large Tempura",
            description: "6pcs prawn tempura, 8pcs vegetable tempura",
            price: "15.95",
            image: path + "prawn tempura.jpg",
        },
    ]
}

export { tempura };