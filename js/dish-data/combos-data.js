import { imageFolderPath, placeholder } from './paths.js'
const path = imageFolderPath + "combos images/";

const combos = {
    name: "Combos",
    items: [
        {
            number: "500",
            name: "Sushi & Sashimi",
            description: "6pcs sashima (tuna, salmon), sushi (salmon, tuna, ebi, red snapper, special scallop, 2pc outsider)",
            price: "24.99",
            image: placeholder,
        },
        {
            number: "501",
            name: "Maki Combo",
            description: "Cali roll, salmon roll, avocado with kappa roll, 2pcs outsider roll",
            price: "15.99",
            image: path + "maki combo.jpg",
        },
        {
            number: "502",
            name: "Assorted Sushi",
            description: "Salmon x2, tuna x2, ebi, toro, hamachi, special scallop, cali roll, 2pcs outsider roll",
            price: "25.99",
            image: path + "assorted sushi.jpg",
        },
        {
            number: "503",
            name: "Assorted Sashimi",
            description: "Salmon x3, tuna x3, red tuna x2, hamachi x2, scallop x2",
            price: "27.99",
            image: placeholder,
        },
        {
            number: "504",
            name: "Love Boat",
            description: "8pcs sashimi (tuna, salmon), 8pcs sushi (salmon, tuna, red snapper, ebi), 22pcs rolls (sake, california, outsider). Comes with soup & salad for 2",
            price: "48.99",
            image: path + "love boat.jpg",
        },
        {
            number: "505",
            name: "Boat Deluxe",
            description: "8pcs sashimi (salmon, tuna), 4pcs sushi (salmon, tuna), 10pcs roll (california, outsider), yakitori chicken, gyoza, tempura. Comes with soup & salad for 2",
            price: "52.99",
            image: path + "boat deluxe.jpg",
        },
        {
            number: "506",
            name: "Dinner for Two",
            description: "8pcs sashimi (salmon, tuna), 6pcs sushi (salmon, tuna, red snapper), 10pcs roll (california, outsider). Comes with soup & salad for 2",
            price: "38.99",
            image: placeholder,
        },
        {
            number: "507",
            name: "Dinner for Four",
            description: "8pcs sashimi (salmon, tuna), 12pcs sushi (salmon, tuna, red snapper), 34 pcs roll (sake, california, outsider, dragon). Comes with soup & salad for 4",
            price: "82.99",
            image: placeholder,
        },
        {
            number: "508",
            name: "Salmon Lover's Combo",
            description: "salmon sashimi x6, salmon sushi x6, 24pcs roll (salmon avocado, spicy salmon)",
            price: "38.99",
            image: placeholder,
        },
        {
            number: "509",
            name: "Ichiban Boat of Maki Rolls",
            description: "52pcs rolls (fitness roll, tempura roll, california roll, outsider roll, salmon roll, spicy tuna roll, avocado roll)",
            price: "66.99",
            image: placeholder,
        },
        {
            number: "521",
            name: "Roll Group",
            description: "70pcs rolls (outsider, dragon, california x2, avocado, stampeder, spicy tuna, tuna, sake, prawn tempura)",
            price: "75.99",
            image: placeholder,
        },
        {
            number: "522",
            name: "Sushi Group",
            description: "48pcs sushi (salmon, tuna, shrimp, tamago, unagi, red snapper, tobiko, special scallop, spicy salmon, spicy tuna)",
            price: "97.99",
            image: placeholder,
        },
        {
            number: "523",
            name: "Dinner Boat for Four",
            description: "Served with soup & salad, tempura, chicken katsu, sushi & sashimi",
            price: "63.99",
            image: placeholder,
        },
        {
            number: "524",
            name: "Special Dinner Boat for Six",
            description: "Served with soup & salad, tempura, chicken, beef, spring roll, gyoza, sushi & sashimi",
            price: "119.95",
            image: placeholder,
        },
    ]
}

export { combos };