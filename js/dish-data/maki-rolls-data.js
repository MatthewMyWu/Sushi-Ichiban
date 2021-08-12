import { imageFolderPath, placeholder, } from "./paths.js";
const path = imageFolderPath + "maki rolls images/";

const maki_rolls = {
    name: "Maki Rolls",
    items:  [
        {
            number: "30",
            name: "Avocado Roll",
            description: "Avocado",
            price: "3.95",
            image: path + "avocado roll.jpg",
        },
        {
            number: "31",
            name: "California Roll",
            description: "Avocado, crabmeat",
            price: "3.95",
            image: placeholder,
        },
        {
            number: "32",
            name: "California Roll (Outside)",
            description: "Avocado, crabmeat, mayo, sesame seed",
            price: "5.25",
            image: path + "california roll (outside).jpg",
        },
        {
            number: "33",
            name: "Tekka",
            description: "Tuna (add avocado for $0.75)",
            price: "3.95",
            image: path + "tekka roll.jpg",
        },
        {
            number: "34",
            name: "Sake Roll",
            description: "Salmon (add avocado for $0.75)",
            price: "3.95",
            image: path + "sake roll.jpg",
        },
        {
            number: "35",
            name: "Kappa",
            description: "Cucumber (add avocado for $0.75)",
            price: "3.95",
            image: placeholder,
        },
        {
            number: "36",
            name: "Spicy Tuna Roll",
            description: "Tuna, hot sauce, cucumber",
            price: "6.50",
            image: path + "spicy tuna roll.jpg",
        },
        {
            number: "37",
            name: "Special Scallop Roll",
            description: "Special scallop, cucumber",
            price: "6.50",
            image: placeholder,
        },
        {
            number: "38",
            name: "Alberta Roll",
            description: "BBQ salmon skin, cucumber",
            price: "9.95",
            image: placeholder,
        },
        {
            number: "39",
            name: "Tempura Yam Roll",
            description: "Yam tempura",
            price: "5.25",
            image: placeholder,
        },
        // MATTHEW SHOULD WE SPLIT INTO SEPERATE SECTION HERE?
        {
            number: "601",
            name: "Outsider Roll",
            description: "Tuna, salmon, tobiko, masago, avocado",
            price: "13.95",
            image: path + "outsider roll.jpg",
        },
        {
            number: "602",
            name: "Rainbow Roll",
            description: "Tuna, salmon, tobiko, masago, avocado, ebi",
            price: "14.95",
            image: path + "rainbow roll.jpg",
        },
        {
            number: "603",
            name: "Prawn Tempura Roll",
            description: "Tempura prawn, imitation crab meat, cucumber, mayo, avocado, masago",
            price: "13.95",
            image: path + "prawn tempura roll.jpg",
        },
        {
            number: "604",
            name: "Stampeder Roll",
            description: "Imitation crab meat, cucumber, ebi, salmon, avocado, wasabi sauce",
            price: "7.95",
            image: path + "stampeder roll.jpg",
        },
        {
            number: "605",
            name: "Spicy Salmon Roll",
            description: "Salmon, avocado, cucumber, spicy sauce",
            price: "7.95",
            image: placeholder,
        },
        {
            number: "606",
            name: "Ichiban House Roll",
            description: "Tempura prawn, salmon, tobiko, cucumber, avocado, spicy sauce, sesame",
            price: "13.95",
            image: path + "ichiban house roll.jpg",
        },
        {
            number: "607",
            name: "Unagi Roll",
            description: "Fresh water eel, avocado, cucumber",
            price: "7.95",
            image: path + "unagi roll.jpg",
        },
        {
            number: "608",
            name: "Fitness Roll",
            description: "Romaine lettuce, cucumber, avocado, sesame sauce",
            price: "9.95",
            image: path + "fitness roll.jpg",
        },
        {
            number: "609",
            name: "Alaska Roll",
            description: "Smoked salmon, imitation crab, avocado, sesame sauce",
            price: "7.95",
            image: path + "alaska roll.jpg",
        },
        {
            number: "610",
            name: "Dragon Roll",
            description: "Unagi, prawn tempura, tobiko, avocado, cucumber",
            price: "13.99",
            image: placeholder
        },
        {
            number: "611",
            name: "Dynamite Roll",
            description: "Prawn tempura, tobiko, avocado, sesame sauce",
            price: "9.95",
            image: path + "dynamite roll.jpg",
        },
        {
            number: "612",
            name: "Philadelphia Roll",
            description: "Smoked salmon, cream cheese, cucumber, wasabi sauce",
            price: "7.95",
            image: path + "philadelphia roll.jpg",
        },
        {
            number: "613",
            name: "Rocky Mountain Roll",
            description: "Salmon, cream cheese, avocado, cucumber, sweet sauce",
            price: "13.99",
            image: placeholder,
        },
        {
            number: "614",
            name: "Rapture Roll",
            description: "Salmon, tuna, prawn tempura, tobiko, cucumber, unagi sauce, spicy sauce",
            price: "13.95",
            image: placeholder,
        },
        {
            number: "615",
            name: "Mango Paradise",
            description: "Salmon, prawn tempura, tobiko, avocado, cucumber, spicy sauce, sesame seeds",
            price: "13.95",
            image: path + "mango paradise.jpg",
        },
        {
            number: "616",
            name: "Spider Roll",
            description: "Soft shell crab, imitation crab meat, tobiko, avocado, cucumber, mayo",
            price: "15.95",
            image: placeholder,
        },
        {
            number: "617",
            name: "Black Dragon Roll",
            description: "Tempura style unagi, cucumber, green onion",
            price: "13.95",
            image: placeholder,
        },
        {
            number: "618",
            name: "White Dragon Roll",
            description: "Tempura style ebi, cucumber, green onion",
            price: "13.95",
            image: path + "white dragon roll.jpg",
        },
        {
            number: "619",
            name: "Tempura Seafood Roll",
            description: "",
            price: "8.95",
            image: placeholder,
        },
        {
            number: "620",
            name: "Osaka Roll",
            description: "Red tuna, ebi, tempura, green onion",
            price: "13.95",
            image: placeholder,
        },
        {
            number: "621",
            name: "Tempura California Roll",
            description: "Lightly battered and deep fried california roll",
            price: "6.50",
            image: placeholder,
        },
        {
            number: "622",
            name: "Seafood with Soya Wrap",
            description: "",
            price: "14.95",
            image: placeholder,
        },
        {
            number: "623",
            name: "Tempura Salmon & Asparagus",
            description: "",
            price: "13.95",
            image: placeholder,
        },
        {
            number: "624",
            name: "Lobster Roll",
            description: "Tempura lobster, imitation crab meat, tobiko, avocado, cucumber, mayo",
            price: "16.95",
            image: placeholder,
        },
    ]
}

export { maki_rolls };