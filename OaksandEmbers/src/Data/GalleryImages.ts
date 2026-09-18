import basqueCheesecake from "../assets/gallery/basque-cheesecake.jpg";
import charredBroccolini from "../assets/gallery/charred-broccolini.jpg";
import chefAtTheFire from "../assets/gallery/chef-at-the-fire.jpg";
import chilliButterPrawns from "../assets/gallery/chilli-butter-prawns.jpg";
import chocolateLavaCake from "../assets/gallery/chocolate-lava-cake.jpg";
import emberLitDiningRoom from "../assets/gallery/ember-lit-dining-room.jpg";
import flameGrilledRibeye from "../assets/gallery/flame-grilled-ribeye.jpg";
import friendsAtDinner from "../assets/gallery/friends-at-dinner.jpg";
import oakSmokedSalmon from "../assets/gallery/oak-smoked-salmon.jpg";
import openFireHearth from "../assets/gallery/open-fire-hearth.jpg";
import privateDiningAlcove from "../assets/gallery/private-dining-alcove.jpg";
import restaurantExterior from "../assets/gallery/restaurant-exterior.jpg";
import smokedOakBar from "../assets/gallery/smoked-oak-bar.jpg";
import smokedPineappleHighball from "../assets/gallery/smoked-pineapple-highball.jpg";
import tableSetting from "../assets/gallery/table-setting.jpg";

export type GalleryImageCategory = "food" | "drinks" | "people" | "venue";
export type GalleryImageOrientation = "landscape" | "portrait" | "square";

export interface GalleryImage {
  id: string;
  title: string;
  src: string;
  alt: string;
  category: GalleryImageCategory;
  width: number;
  height: number;
  orientation: GalleryImageOrientation;
}

export const galleryImages = [
  {
    id: "flame-grilled-ribeye",
    title: "Ribeye over oak",
    src: flameGrilledRibeye,
    alt: "Sliced flame-grilled ribeye with melting herb butter",
    category: "food",
    width: 720,
    height: 540,
    orientation: "landscape",
  },
  {
    id: "chef-at-the-fire",
    title: "At the hearth",
    src: chefAtTheFire,
    alt: "Chef tending steaks over the open wood fire",
    category: "people",
    width: 510,
    height: 680,
    orientation: "portrait",
  },
  {
    id: "oak-smoked-salmon",
    title: "Oak-smoked salmon",
    src: oakSmokedSalmon,
    alt: "Oak-smoked salmon served with charred lemon",
    category: "food",
    width: 810,
    height: 540,
    orientation: "landscape",
  },
  {
    id: "chilli-butter-prawns",
    title: "Chilli butter prawns",
    src: chilliButterPrawns,
    alt: "Grilled prawns with chilli butter and citrus",
    category: "food",
    width: 610,
    height: 610,
    orientation: "square",
  },
  {
    id: "open-fire-hearth",
    title: "The heart of the room",
    src: openFireHearth,
    alt: "Glowing wood embers in the restaurant's open-fire hearth",
    category: "venue",
    width: 880,
    height: 495,
    orientation: "landscape",
  },
  {
    id: "charred-broccolini",
    title: "Greens from the grill",
    src: charredBroccolini,
    alt: "Charred broccolini with lemon, garlic and chilli",
    category: "food",
    width: 490,
    height: 735,
    orientation: "portrait",
  },
  {
    id: "smoked-pineapple-highball",
    title: "Smoke in the glass",
    src: smokedPineappleHighball,
    alt: "Smoked pineapple highball with lime and clear ice",
    category: "drinks",
    width: 520,
    height: 650,
    orientation: "portrait",
  },
  {
    id: "ember-lit-dining-room",
    title: "Dinner by firelight",
    src: emberLitDiningRoom,
    alt: "Oaks and Embers dining room lit by candles and the open fire",
    category: "venue",
    width: 850,
    height: 510,
    orientation: "landscape",
  },
  {
    id: "basque-cheesecake",
    title: "Burnt Basque cheesecake",
    src: basqueCheesecake,
    alt: "Burnt Basque cheesecake with berry compote",
    category: "food",
    width: 700,
    height: 525,
    orientation: "landscape",
  },
  {
    id: "chocolate-lava-cake",
    title: "A warm finish",
    src: chocolateLavaCake,
    alt: "Chocolate lava cake with vanilla bean ice cream",
    category: "food",
    width: 465,
    height: 775,
    orientation: "portrait",
  },
  {
    id: "table-setting",
    title: "A place at the table",
    src: tableSetting,
    alt: "Handmade ceramics and brass cutlery on a candlelit table",
    category: "venue",
    width: 590,
    height: 590,
    orientation: "square",
  },
  {
    id: "restaurant-exterior",
    title: "Ember Lane at dusk",
    src: restaurantExterior,
    alt: "The Oaks and Embers restaurant entrance at blue hour",
    category: "venue",
    width: 920,
    height: 518,
    orientation: "landscape",
  },
  {
    id: "smoked-oak-bar",
    title: "The oak bar",
    src: smokedOakBar,
    alt: "Warm brass lighting over the smoked-oak cocktail bar",
    category: "venue",
    width: 495,
    height: 660,
    orientation: "portrait",
  },
  {
    id: "private-dining-alcove",
    title: "The quiet corner",
    src: privateDiningAlcove,
    alt: "An intimate private dining alcove set for two",
    category: "venue",
    width: 630,
    height: 630,
    orientation: "square",
  },
  {
    id: "friends-at-dinner",
    title: "Passed around the table",
    src: friendsAtDinner,
    alt: "Friends sharing plates around a warm candlelit table",
    category: "people",
    width: 535,
    height: 669,
    orientation: "portrait",
  },
] as const satisfies readonly GalleryImage[];
