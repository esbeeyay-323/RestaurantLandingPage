export const menuTabs = [
  { id: "all", label: "All" },
  { id: "starters", label: "Starters" },
  { id: "grills", label: "Grills" },
  { id: "burgers", label: "Burgers" },
  { id: "seafood", label: "Seafood" },
  { id: "sides", label: "Sides" },
  { id: "desserts", label: "Desserts" },
  { id: "cocktails", label: "Cocktails" },
] as const;

export type MenuCategory = Exclude<(typeof menuTabs)[number]["id"], "all">;

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
}

export const menuItems: MenuItem[] = [
  {
    id: "smoky-beef-carpaccio",
    name: "Smoky Beef Carpaccio",
    description: "Arugula, parmesan, truffle oil",
    price: 95,
    category: "starters",
  },
  {
    id: "fire-roasted-corn-ribs",
    name: "Fire-Roasted Corn Ribs",
    description: "Chilli-lime butter, cotija",
    price: 55,
    category: "starters",
  },
  {
    id: "burrata-heirloom-tomatoes",
    name: "Burrata & Heirloom Tomatoes",
    description: "Basil, aged balsamic",
    price: 85,
    category: "starters",
  },
  {
    id: "jerk-chicken-skewers",
    name: "Jerk Chicken Skewers",
    description: "Pineapple salsa",
    price: 75,
    category: "starters",
  },
  {
    id: "flame-grilled-ribeye",
    name: "Flame-Grilled Ribeye",
    description: "28-day dry-aged, herb butter",
    price: 285,
    category: "grills",
  },
  {
    id: "charred-herb-chicken",
    name: "Charred Herb Chicken",
    description: "Garlic, herbs, charred lemon",
    price: 145,
    category: "grills",
  },
  {
    id: "grilled-lamb-chops",
    name: "Grilled Lamb Chops",
    description: "Mint chimichurri",
    price: 195,
    category: "grills",
  },
  {
    id: "timber-burger",
    name: "Timber Burger",
    description: "Cheddar, bacon jam, pickles",
    price: 125,
    category: "burgers",
  },
  {
    id: "grilled-prawns",
    name: "Grilled Prawns",
    description: "Garlic, lemon, chilli butter",
    price: 125,
    category: "seafood",
  },
  {
    id: "oak-smoked-salmon",
    name: "Oak-Smoked Salmon",
    description: "Cedar plank, dill crème fraîche",
    price: 195,
    category: "seafood",
  },
  {
    id: "ember-house-salad",
    name: "Ember House Salad",
    description: "Mixed leaves, citrus vinaigrette",
    price: 45,
    category: "sides",
  },
  {
    id: "sweet-potato-fries",
    name: "Sweet Potato Fries",
    description: "Smoked paprika",
    price: 45,
    category: "sides",
  },
  {
    id: "charred-broccolini",
    name: "Charred Broccolini",
    description: "Lemon, garlic, chilli",
    price: 45,
    category: "sides",
  },
  {
    id: "burnt-basque-cheesecake",
    name: "Burnt Basque Cheesecake",
    description: "Berry compote",
    price: 65,
    category: "desserts",
  },
  {
    id: "chocolate-lava-cake",
    name: "Chocolate Lava Cake",
    description: "Vanilla bean ice cream",
    price: 65,
    category: "desserts",
  },
  {
    id: "grilled-pineapple",
    name: "Grilled Pineapple",
    description: "Rum caramel, lime",
    price: 45,
    category: "desserts",
  },
  {
    id: "ember-old-fashioned",
    name: "Ember Old Fashioned",
    description: "Bourbon, smoked demerara, bitters",
    price: 85,
    category: "cocktails",
  },
  {
    id: "oak-citrus-spritz",
    name: "Oak & Citrus Spritz",
    description: "Aperitif, sparkling wine, burnt orange",
    price: 75,
    category: "cocktails",
  },
  {
    id: "smoked-pineapple-highball",
    name: "Smoked Pineapple Highball",
    description: "Dark rum, pineapple, lime, soda",
    price: 75,
    category: "cocktails",
  },
];
