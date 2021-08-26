import { imageFolderPath, placeholder } from './paths.js'
const path = imageFolderPath + "sushi pizza images/";

const sushi_pizza = {
    name: "Sushi Pizza",
    items: [
        {
            number: "171",
            name: "Salmon Pizza",
            description: "",
            price: "9.95",
            image: path + "salmon pizza.jpg",
        },
        {
            number: "172",
            name: "Spicy Salmon Pizza",
            description: "",
            price: "9.95",
            image: placeholder,
        },
        {
            number: "173",
            name: "Tuna Pizza",
            description: "",
            price: "9.95",
            image: placeholder,
        },
        {
            number: "174",
            name: "Spicy Tuna Pizza",
            description: "",
            price: "9.95",
            image: placeholder,
        },
        {
            number: "177",
            name: "Avocado Pizza",
            description: "",
            price: "9.95",
            image: placeholder,
        },
        {
            number: "178",
            name: "Spicy Avocado Pizza",
            description: "",
            price: "9.95",
            image: placeholder,
        },
    ]
}

export { sushi_pizza };