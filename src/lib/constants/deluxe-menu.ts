/** Full menu from deluxe-shishalounge.de */

export type MenuItem = {
  name: string;
  price?: string;
  note?: string;
};

export type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  items: MenuItem[];
};

export type MenuTab = {
  id: string;
  label: string;
  categories: MenuCategory[];
};

const SHISHA_CATEGORIES: MenuCategory[] = [
  {
    id: "elmas",
    title: "Shisha – Elmas",
    subtitle: "14 € · Kopfwechsel 10 €",
    items: [
      { name: "Doppelapfel" },
      { name: "Persischer Apfel" },
      { name: "Traube-Minze" },
      { name: "Zitrone-Minze" },
      { name: "Orange-Minze" },
      { name: "Kaugummi-Zimt" },
      { name: "Falim Red" },
      { name: "Falim" },
      { name: "Moloko" },
    ],
  },
  {
    id: "mix",
    title: "Shisha – Shisha Mix",
    subtitle: "16 € · Kopfwechsel 12 €",
    items: [
      {
        name: "Shisha Mix",
        note: "Premium Hausmischung – zwei verschiedene Tabaksorten zur Auswahl",
      },
      { name: "Deluxe Night Mix", note: "Icebonbon, Süßer Apfel, Limette" },
      { name: "Dubai Mix", note: "Wassermelone, Traube, Limette" },
      { name: "Istanbul Night Mix", note: "Orange, Zitrone Minze" },
      { name: "Big Bang Mix", note: "Love66, Icebonbon" },
      { name: "Champions Mix", note: "Black Box Ananas" },
      { name: "Love in Hamburg Mix", note: "Love66, Hamburg" },
    ],
  },
  {
    id: "wookah",
    title: "Shisha – Wookah",
    subtitle: "16 € · Kopfwechsel 12 €",
    items: [
      { name: "Ice Bomb", note: "Ice Bonbon" },
      { name: "Lemon Chill", note: "Zitrone, Minze" },
      {
        name: "Premium Black Nana",
        note: "Starke und intensive Traube Minze",
      },
      {
        name: "Sommer in Beirut",
        note: "Himbeere, Wassermelone und Zitrone",
      },
      {
        name: "Wild Punch",
        note: "Blaubeere, Himbeere und Brombeere mit Menthol",
      },
      { name: "069 FFM", note: "Erdbeere, Waldbeere" },
      { name: "Ice Kaktuz", note: "Kaktus" },
      { name: "Vibe Cola", note: "Limette" },
      { name: "Bruderherz", note: "Drachenfrucht" },
      { name: "Love 66", note: "Wassermelone, Honigmelone, Maracuja" },
      { name: "Tingle Tangle", note: "Grapefruit, Limette, Maracuja" },
      { name: "Premium Moloko", note: "Zitrone, Holunder, Ingwer" },
      { name: "Cold Peach", note: "Pfirsich, Menthol" },
      { name: "African Queen", note: "16 verschiedene Fruchtaromen" },
      { name: "Black Box", note: "Acai, Guarana, Zitrone, Minze" },
      { name: "Pineapple", note: "Ananas" },
      { name: "Premium Persian Apple", note: "Süßer Apfel" },
      { name: "Blaulicht", note: "Blaubeere, Beerenmix" },
      { name: "Rasporn", note: "Kühlende Himbeere" },
      { name: "Premium Falim" },
    ],
  },
];

export const MENU_TABS: MenuTab[] = [
  {
    id: "shisha",
    label: "Shisha",
    categories: SHISHA_CATEGORIES,
  },
  {
    id: "hot",
    label: "Heiße Getränke",
    categories: [
      {
        id: "hot-drinks",
        title: "Heiße Getränke",
        items: [
          { name: "Espresso", price: "2,50 €" },
          { name: "Kaffee", price: "3,20 €" },
          { name: "Milchkaffee", price: "3,50 €" },
          { name: "Latte Macchiato", price: "3,50 €" },
          { name: "Cappuccino", price: "3,50 €" },
          { name: "Heiße Schokolade", price: "3,50 €" },
        ],
      },
      {
        id: "tea",
        title: "Teesorten",
        items: [
          { name: "Deluxe Tee", price: "4,00 €" },
          { name: "Pfefferminz Tee", price: "3,50 €" },
          { name: "Kamillen Tee", price: "3,50 €" },
          { name: "Grüner Tee", price: "3,50 €" },
          { name: "Früchte Tee", price: "3,50 €" },
          { name: "Schwarztee", price: "3,50 €" },
        ],
      },
    ],
  },
  {
    id: "cold",
    label: "Kalte Getränke",
    categories: [
      {
        id: "soft",
        title: "Kalte Getränke",
        items: [
          { name: "Eiskaffee", price: "5,00 €" },
          { name: "Coca Cola", price: "4,00 €" },
          { name: "Cola Zero", price: "4,00 €" },
          { name: "Paulaner Spezi", price: "4,00 €" },
          { name: "Paulaner Spezi Zero", price: "4,00 €" },
          { name: "Fanta", price: "4,00 €" },
          { name: "Sprite", price: "4,00 €" },
          { name: "Bitter Lemon", price: "4,00 €" },
          { name: "Ginger Ale", price: "4,00 €" },
          { name: "Indian Tonic", price: "4,00 €" },
          { name: "Russian Wildberry", price: "4,00 €" },
          { name: "Orangina", price: "4,00 €" },
        ],
      },
      {
        id: "water",
        title: "Wasser",
        items: [
          {
            name: "Black Forest Still",
            price: "2,50 € / 5,90 €",
            note: "0,2L / 0,75L",
          },
          {
            name: "Peterstaler Classic",
            price: "2,50 € / 5,90 €",
            note: "0,2L / 0,75L",
          },
        ],
      },
      {
        id: "energy",
        title: "Energy Drinks 0,25L",
        items: [
          {
            name: "Red Bull",
            price: "4,00 €",
            note: "Original, Sugarfree, White, Blue, Green",
          },
          { name: "28 Black Acai", price: "4,00 €" },
          { name: "28 Black Zero", price: "4,00 €" },
          { name: "Moloko", price: "4,00 €" },
          { name: "Moloko Cranberry", price: "4,00 €" },
          { name: "Moloko Sugarfree", price: "4,00 €" },
        ],
      },
      {
        id: "juice",
        title: "Säfte 0,4L",
        items: [
          { name: "Orangensaft", price: "4,00 €" },
          { name: "Apfelsaft", price: "4,00 €" },
          { name: "Ananassaft", price: "4,00 €" },
          { name: "Sauerkirschnektar", price: "4,00 €" },
          { name: "Bananensaft", price: "4,00 €" },
          { name: "Maracujanektar", price: "4,00 €" },
          { name: "KiBa", price: "4,00 €" },
          { name: "Saftschorle", price: "4,00 €" },
        ],
      },
      {
        id: "house-ice-tea",
        title: "Hausgemachter Eistee 0,4L",
        items: [
          { name: "Apfel", price: "4,50 €" },
          { name: "Kiwi", price: "4,50 €" },
          { name: "Blaubeere", price: "4,50 €" },
          { name: "Erdbeere", price: "4,50 €" },
          { name: "Pfirsich", price: "4,50 €" },
        ],
      },
      {
        id: "elephant-ice-tea",
        title: "Elephant Bay Ice Tea 0,33L",
        items: [
          { name: "Blueberry", price: "4,00 €" },
          { name: "Pomegranate", price: "4,00 €" },
          { name: "Peach", price: "4,00 €" },
          { name: "Lemon", price: "4,00 €" },
          { name: "Mango", price: "4,00 €" },
          { name: "Pineapple", price: "4,00 €" },
        ],
      },
      {
        id: "lemonade",
        title: "Hausgemachte Limonade 0,4L",
        items: [
          { name: "Kiwi Limette", price: "4,50 €" },
          { name: "Apfel Zitrone", price: "4,50 €" },
          { name: "Strawberry Granatapfel", price: "4,50 €" },
        ],
      },
    ],
  },
  {
    id: "snacks",
    label: "Snacks",
    categories: [
      {
        id: "baguette",
        title: "Baguette & Snacks",
        items: [
          { name: "Sucuk Baguette", price: "5,90 €" },
          { name: "Mozzarella Baguette", price: "5,90 €" },
          {
            name: "Nachos",
            price: "4,50 €",
            note: "+ Extra Dip 1 € (Käse oder Salsa)",
          },
        ],
      },
    ],
  },
  {
    id: "cocktails",
    label: "Cocktails",
    categories: [
      {
        id: "cocktails-alc",
        title: "Alkoholische Cocktails",
        items: [
          {
            name: "Mojito",
            price: "7,90 €",
            note: "Weißer Rum, Minze, brauner Zucker, Limetten, Soda",
          },
          {
            name: "Mango Tango",
            price: "7,90 €",
            note: "Vodka, weißer Rum, Mangosirup, Pfirsichsirup, Maracuja",
          },
          {
            name: "Piña Colada",
            price: "7,90 €",
            note: "Weißer Rum, Kokossirup, Ananassaft, Sahne",
          },
          {
            name: "Swimming Pool",
            price: "7,90 €",
            note: "Vodka, Ananassaft, blauer Curaçao",
          },
          {
            name: "Sex on the Beach",
            price: "7,90 €",
            note: "Vodka, Zitrone, Grenadine, Orangensaft, Ananassaft",
          },
        ],
      },
      {
        id: "cocktails-na",
        title: "Alkoholfreie Cocktails",
        items: [
          {
            name: "Deluxe Acai",
            price: "6,90 €",
            note: "28 Black, Limette, brauner Zucker, Minze",
          },
          {
            name: "Fruit Punch",
            price: "6,90 €",
            note: "Erdbeer, Orangensaft, Ananassaft, Maracujanektar, Zitrone",
          },
          {
            name: "Coconut Kiss",
            price: "6,90 €",
            note: "Grenadine, Sahne, Ananassaft, Kokossirup",
          },
          {
            name: "Just Sunshine",
            price: "6,90 €",
            note: "Lime Juice, Erdbeer, Orangensaft, Maracujanektar",
          },
          {
            name: "Ipanema",
            price: "6,90 €",
            note: "Ginger Ale, Limetten, brauner Zucker",
          },
          {
            name: "Deluxe Caipi",
            price: "6,90 €",
            note: "Limette, brauner Zucker, Energy, Kirsche, Minze",
          },
        ],
      },
    ],
  },
  {
    id: "longdrinks",
    label: "Long Drinks",
    categories: [
      {
        id: "long",
        title: "Long Drinks",
        items: [
          { name: "Bacardi-Cola", price: "7,50 €" },
          { name: "Bacardi-Razz Sprite", price: "7,50 €" },
          { name: "Havana-Cola", price: "7,50 €" },
          { name: "Vodka Energy", price: "7,50 €" },
          { name: "Vodka Maracuja", price: "7,50 €" },
          { name: "Vodka Lemon", price: "7,50 €" },
          { name: "Jacky-Cola", price: "7,50 €" },
          { name: "Gin-Tonic", price: "7,50 €" },
          { name: "Batida-Kirsch", price: "7,50 €" },
          { name: "Malibu-Ananas", price: "7,50 €" },
          { name: "Malibu-Kirsch", price: "7,50 €" },
          { name: "Jäger Red Bull", price: "7,50 €" },
        ],
      },
      {
        id: "beer",
        title: "Bier",
        items: [
          { name: "Corona 0,33L", price: "4,00 €" },
          { name: "Heineken 0,25L", price: "4,00 €" },
          { name: "Radler 0,33L", price: "4,00 €" },
          { name: "Becks", price: "4,00 €" },
        ],
      },
      {
        id: "shots",
        title: "Shots 2cl",
        items: [
          { name: "Tequila Silver", price: "2,50 €" },
          { name: "Tequila Gold", price: "2,50 €" },
          { name: "Jägermeister", price: "2,50 €" },
          { name: "Erdbeerlimes", price: "2,50 €" },
        ],
      },
      {
        id: "rocks",
        title: "On the Rocks",
        items: [
          { name: "Jack Daniels", price: "6,00 €" },
          { name: "Chivas Regal 12 Years", price: "6,00 €" },
          { name: "Grey Goose", price: "6,00 €" },
          { name: "Gordon's Gin", price: "6,00 €" },
          { name: "Bombay Gin", price: "6,00 €" },
          { name: "Hendrick's", price: "6,00 €" },
          { name: "Jägermeister", price: "6,00 €" },
          { name: "Malibu", price: "6,00 €" },
          { name: "Raki", price: "6,00 €" },
          { name: "Hennessy V.S", price: "7,00 €" },
        ],
      },
      {
        id: "aperitivo",
        title: "Aperitivo",
        items: [
          {
            name: "Lillet Berry",
            price: "6,50 €",
            note: "Lillet, Russian Wildberry, Limetten",
          },
          {
            name: "Aperol Spritz",
            price: "6,50 €",
            note: "Aperol, Prosecco, Soda, Orange",
          },
        ],
      },
    ],
  },
  {
    id: "wine",
    label: "Wein & Spirituosen",
    categories: [
      {
        id: "open-wine",
        title: "Offene Weine 0,35L / 0,5L",
        items: [
          {
            name: "Rotwein – Cellier de Vicomtes Merlot",
            price: "5,90 € / 7,90 €",
          },
          {
            name: "Weißwein – Weingut Hensel Riesling trocken",
            price: "5,90 € / 7,90 €",
          },
          {
            name: "Rosé – Weingut Heitlinger",
            price: "5,90 € / 7,90 €",
          },
        ],
      },
      {
        id: "bottle-wine",
        title: "Flaschenweine 0,75L",
        items: [
          { name: "Rotwein – Silber Palms Zinfandel", price: "16,90 €" },
          { name: "Weißwein – Reichsrat von Buhl Riesling", price: "17,90 €" },
          { name: "Rosé – Los Haroldos Malbec", price: "16,90 €" },
        ],
      },
      {
        id: "premium",
        title: "Flaschen & Champagner",
        items: [
          {
            name: "Jack Daniels 0,7L + 1L Coca Cola",
            price: "95 €",
          },
          { name: "Moët & Chandon Rosé", price: "95 €" },
          {
            name: "Belvedere 0,7L + 6 Dosen Red Bull",
            price: "110 €",
          },
          { name: "Moët Ice Imperial", price: "110 €" },
          {
            name: "Grey Goose 0,7L + 6 Red Bull oder 1L Bitter Lemon",
            price: "110 €",
          },
          {
            name: "Gordon's Gin + 1L Indian Tonic",
            price: "80 €",
          },
          {
            name: "Hendrick's Gin + 1L Indian Tonic",
            price: "110 €",
          },
        ],
      },
    ],
  },
];

/** @deprecated Use MENU_TABS */
export const SHISHA_MENU = SHISHA_CATEGORIES;
/** @deprecated Use MENU_TABS */
export const DRINKS_MENU: MenuCategory[] = [];
