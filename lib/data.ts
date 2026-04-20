// lib/data.ts — Données statiques King Aqua Lounge

export const activities = [
  {
    id: 'grillades',
    tag: 'Spécialité maison',
    name: 'Grillades',
    description: 'Viandes et poissons braisés à la braise, marinades maison et épices du terroir malien',
    image: '/images/activite-grillades.jpg',
    alt: 'Grillades au feu de bois — terrasse King Aqua Lounge au bord du fleuve Niger',
    link: '/menu',
    linkLabel: 'Voir la carte →',
  },
  {
    id: 'jetski',
    tag: 'Sport nautique',
    name: 'Jet Ski',
    description: 'Jet ski à Bamako sur le fleuve Niger — l\'activité nautique incontournable à Baco-Djicoroni, sessions encadrées',
    image: '/images/activite-jetski.jpg',
    alt: 'Jet ski à Bamako sur le fleuve Niger — King Aqua Lounge Baco-Djicoroni',
    link: '/contact',
    linkLabel: 'Nous contacter →',
  },
  {
    id: 'bateau',
    tag: 'Balade fluviale',
    name: 'Bateau',
    description: 'Couchers de soleil inoubliables sur le fleuve Niger — balades privatisables sur demande',
    image: '/images/activite-bateau.jpg',
    alt: 'Balade en bateau — promenade sur le fleuve Niger au King Aqua Lounge',
    link: '/contact',
    linkLabel: 'Privatiser →',
  },
  {
    id: 'billard',
    tag: 'Lounge',
    name: 'Billard',
    description: 'Salle de billard à Bamako — tables professionnelles, cocktail en main, ambiance lounge au bord du fleuve Niger',
    image: '/images/activite-billard.jpg',
    alt: 'Salle de billard à Bamako — King Aqua Lounge Baco-Djicoroni, meilleur billard de Bamako',
    link: '/contact',
    linkLabel: 'En savoir plus →',
  },
];

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  tag?: string;
}

export interface WineItem {
  region: string;
  name: string;
  year: string;
  description: string;
  price: string;
  type: 'Champagne' | 'Blanc' | 'Rouge' | 'Rosé';
}

// ─── ENTRÉES ─────────────────────────────────────────────────────────────────

export const entreesFroides: MenuItem[] = [
  {
    name: 'Salade César',
    description: 'Poulet, crevettes, parmesan, croûtons, sauce César maison',
    price: '7 000 F CFA',
    tag: 'Populaire',
  },
  {
    name: 'Salade Composée',
    description: 'Mélange de légumes frais de saison',
    price: '3 000 F CFA',
  },
  {
    name: 'Salade Niçoise',
    description: 'Thon, œufs, tomates, olives, anchois',
    price: '4 000 F CFA',
  },
  {
    name: 'Salade Maraîchère',
    description: 'Légumes du marché, vinaigrette maison',
    price: '4 000 F CFA',
  },
  {
    name: 'Nems × 3 pièces',
    description: 'Croustillants, servis avec sauce nuoc-mâm',
    price: '3 000 F CFA',
  },
];

export const entreesChaudes: MenuItem[] = [
  {
    name: 'Soupe de Capitaine',
    description: 'Bouillon de poisson capitaine aux épices',
    price: '5 000 F CFA',
  },
  {
    name: 'Soupe de Vermicelle',
    description: 'Vermicelles en bouillon parfumé',
    price: '3 000 F CFA',
  },
  {
    name: 'Beignets de Crevettes',
    description: 'Beignets croustillants, sauce piquante maison',
    price: '6 000 F CFA',
  },
  {
    name: 'Soupe aux Fruits de Mer',
    description: 'Crevettes, gambas, poisson — bouillon riche et parfumé',
    price: '7 500 F CFA',
    tag: 'Spécialité',
  },
];

// ─── GRILLADES & PLATS ────────────────────────────────────────────────────────

export const brochettes: MenuItem[] = [
  {
    name: 'Brochette de Bœuf',
    description: 'Viande marinée aux épices, grillée au feu de bois',
    price: '6 000 F CFA',
  },
  {
    name: 'Brochette de Poulet',
    description: 'Poulet épicé grillé à la braise',
    price: '7 000 F CFA',
  },
  {
    name: 'Brochette de Capitaine',
    description: 'Poisson du fleuve Niger, épices locales',
    price: '9 000 F CFA',
  },
  {
    name: 'Brochette de Gambas',
    description: 'Gambas géantes marinées, grillées à la perfection',
    price: '15 000 F CFA',
    tag: 'Premium',
  },
  {
    name: 'Brochette de Rognon',
    description: 'Rognons de bœuf grillés, sauce moutarde',
    price: '7 000 F CFA',
  },
  {
    name: 'Brochette de Kafta',
    description: 'Viande hachée épicée, herbes fraîches',
    price: '6 000 F CFA',
  },
  {
    name: 'Brochette de Foie de Bœuf',
    description: 'Foie de bœuf tendre, oignons grillés',
    price: '6 000 F CFA',
  },
];

export const grillades: MenuItem[] = [
  {
    name: 'Pavé de Bœuf',
    description: 'Pièce de bœuf grillée, sauce au choix',
    price: '9 000 F CFA',
  },
  {
    name: 'Pavé de Capitaine',
    description: 'Filet de capitaine grillé, beurre citron',
    price: '10 000 F CFA',
  },
  {
    name: 'Côte de Bœuf',
    description: 'Pièce noble grillée, accompagnements au choix',
    price: '12 000 F CFA',
    tag: 'Spécialité',
  },
  {
    name: "Côte d'Agneau",
    description: 'Côtelettes marinées romarin et ail',
    price: '12 000 F CFA',
  },
  {
    name: 'Crevettes Provençales',
    description: 'Crevettes sautées, ail, tomates, herbes de Provence',
    price: '12 000 F CFA',
  },
  {
    name: 'Gambas Provençales',
    description: 'Gambas jumbo à la provençale, ail et persil',
    price: '15 000 F CFA',
    tag: 'Premium',
  },
  {
    name: 'Émincé de Bœuf Crème',
    description: 'Lamelles de bœuf tendres en sauce crème',
    price: '8 000 F CFA',
  },
  {
    name: 'Émincé Blanc de Poulet',
    description: 'Filet de poulet émincé en sauce blanche',
    price: '8 000 F CFA',
  },
  {
    name: 'Poisson Braisé',
    description: 'Poisson entier braisé aux épices maliennes',
    price: '6 000 F CFA',
  },
];

export const volailles: MenuItem[] = [
  {
    name: 'Poulet Grillé Entier',
    description: 'Marinade maison, braisé lentement — idéal pour 2',
    price: '10 000 F CFA',
    tag: 'Best-seller',
  },
  {
    name: 'Poulet Grillé Demi',
    description: 'Demi-poulet, marinade maison, garniture incluse',
    price: '6 000 F CFA',
  },
];

export const spaghettis: MenuItem[] = [
  {
    name: 'Spaghetti Bolognaise',
    description: 'Sauce bolognaise maison, parmesan râpé',
    price: '5 000 F CFA',
  },
  {
    name: 'Spaghetti Carbonara',
    description: 'Lardons, crème fraîche, parmesan, jaune d\'œuf',
    price: '7 000 F CFA',
  },
  {
    name: 'Spaghetti aux Crevettes',
    description: 'Crevettes sautées, ail, huile d\'olive, piment',
    price: '7 000 F CFA',
  },
];

export const accompagnements: MenuItem[] = [
  {
    name: 'Frite',
    description: 'Pommes de terre frites maison',
    price: '1 500 F CFA',
  },
  {
    name: 'Alloco',
    description: 'Banane plantain frite dorée',
    price: '1 500 F CFA',
  },
  {
    name: 'Pomme Sautée',
    description: 'Pommes de terre sautées à l\'huile',
    price: '2 500 F CFA',
  },
  {
    name: 'Pomme Purée',
    description: 'Purée maison onctueuse',
    price: '2 500 F CFA',
  },
  {
    name: 'Pomme Vapeur',
    description: 'Pommes de terre cuites à la vapeur',
    price: '2 500 F CFA',
  },
  {
    name: 'Attiéké',
    description: 'Semoule de manioc fraîche',
    price: '1 500 F CFA',
  },
  {
    name: 'Légumes Sautés',
    description: 'Légumes frais de saison sautés',
    price: '2 500 F CFA',
  },
];

// ─── PIZZA & FAST-FOOD ────────────────────────────────────────────────────────

export const pizza: MenuItem[] = [
  {
    name: 'Pizza Margarita',
    description: 'Sauce tomate, mozzarella, basilic frais',
    price: '5 000 F CFA',
  },
  {
    name: 'Pizza Bolognaise',
    description: 'Sauce bolognaise maison, mozzarella',
    price: '6 000 F CFA',
  },
  {
    name: 'Pizza Poulet',
    description: 'Poulet rôti, champignons, mozzarella',
    price: '7 000 F CFA',
  },
  {
    name: 'Pizza Crevette',
    description: 'Crevettes, ail, mozzarella, herbes fraîches',
    price: '9 000 F CFA',
  },
  {
    name: 'Pizza Reine',
    description: 'Jambon, champignons, mozzarella',
    price: '8 000 F CFA',
  },
  {
    name: 'Pizza Thon',
    description: 'Thon, olives, câpres, mozzarella',
    price: '7 000 F CFA',
  },
  {
    name: 'Pizza Merguez',
    description: 'Merguez épicées, poivrons, mozzarella',
    price: '7 000 F CFA',
  },
  {
    name: 'Pizza Végétarienne',
    description: 'Légumes grillés, mozzarella, herbes fraîches',
    price: '6 000 F CFA',
  },
  {
    name: 'Pizza Crispy',
    description: 'Pâte extra-croustillante, garnitures généreuses',
    price: '9 500 F CFA',
    tag: 'Signature',
  },
];

export const fastFood: MenuItem[] = [
  {
    name: 'Chawarma Poulet',
    description: 'Poulet mariné, légumes croquants, sauce maison',
    price: '3 500 F CFA',
  },
  {
    name: 'Chawarma de Bœuf',
    description: 'Bœuf épicé, légumes, sauce maison',
    price: '3 000 F CFA',
  },
  {
    name: 'Tacos Poulet ou Viande',
    description: 'Tacos garni au choix, sauce fromagère',
    price: '5 000 F CFA',
  },
  {
    name: 'Tacos Pané',
    description: 'Poulet pané croustillant, sauce piquante',
    price: '6 000 F CFA',
  },
  {
    name: 'Tacos Mix (Poulet-Viande)',
    description: 'Mélange poulet et viande, sauce maison',
    price: '6 000 F CFA',
  },
  {
    name: 'Hamburger Simple',
    description: 'Steak haché, salade, tomate, cornichon',
    price: '3 500 F CFA',
  },
  {
    name: 'Double Burger',
    description: 'Double steak, cheddar, sauce BBQ maison',
    price: '5 000 F CFA',
  },
  {
    name: 'Double Cheese Burger',
    description: 'Double steak, double cheddar, oignons caramélisés',
    price: '6 500 F CFA',
    tag: 'Populaire',
  },
  {
    name: 'KFC × 3 pièces',
    description: 'Poulet frit croustillant à la manière du sud',
    price: '5 000 F CFA',
  },
];

// ─── DESSERTS ─────────────────────────────────────────────────────────────────

export const desserts: MenuItem[] = [
  {
    name: 'Crêpes (Nature / Chocolat)',
    description: 'Crêpes moelleuses, nature ou nappées de chocolat fondu',
    price: '5 000 F CFA',
  },
  {
    name: 'Mousse au Chocolat',
    description: 'Mousse aérienne au chocolat noir intense',
    price: '5 000 F CFA',
  },
  {
    name: 'Salade de Fruits',
    description: 'Fruits frais de saison, citron et menthe',
    price: '5 000 F CFA',
  },
  {
    name: 'Dessert du Jour',
    description: 'Création du chef selon inspiration du jour',
    price: '3 000 F CFA',
    tag: 'Du chef',
  },
];

export const boissonsChaudes: MenuItem[] = [
  {
    name: 'Thé',
    description: 'Thé noir classique',
    price: '2 000 F CFA',
  },
  {
    name: 'Café',
    description: 'Expresso noir',
    price: '2 000 F CFA',
  },
  {
    name: 'Thé Marakech',
    description: 'Thé à la menthe façon marocaine',
    price: '2 000 F CFA',
  },
  {
    name: 'Thé au Gingembre',
    description: 'Infusion gingembre, fraîche et tonique',
    price: '3 000 F CFA',
  },
  {
    name: 'Café au Lait',
    description: 'Café allongé, lait chaud mousse',
    price: '3 000 F CFA',
  },
  {
    name: 'Cappuccino',
    description: 'Espresso, mousse de lait veloutée, cacao',
    price: '3 000 F CFA',
  },
  {
    name: 'Chocolat Chaud',
    description: 'Chocolat chaud onctueux, crème fouettée',
    price: '2 000 F CFA',
  },
];

// ─── BOISSONS ─────────────────────────────────────────────────────────────────

export const mocktails: MenuItem[] = [
  {
    name: 'Virgin Mojito',
    description: 'Menthe fraîche, citron vert, eau gazeuse',
    price: '5 000 F CFA',
  },
  {
    name: 'Virgin Piña',
    description: 'Ananas, noix de coco, citron vert',
    price: '5 000 F CFA',
  },
  {
    name: 'Bora Bora',
    description: 'Fruits exotiques, grenadine, eau gazeuse',
    price: '5 000 F CFA',
  },
  {
    name: 'Lait de Caïman',
    description: 'Lait de coco, fruit de la passion, vanille',
    price: '2 000 F CFA',
  },
  {
    name: 'Tropic King',
    description: 'Mangue, ananas, citron vert — la signature du King',
    price: '5 000 F CFA',
    tag: 'Signature',
  },
  {
    name: 'Punch Exotique',
    description: 'Mélange de fruits tropicaux, jus d\'agrumes',
    price: '5 000 F CFA',
  },
  {
    name: 'Happy Day',
    description: 'Fruits rouges, passion, menthe fraîche',
    price: '5 000 F CFA',
  },
];

export const cocktails: MenuItem[] = [
  {
    name: 'Margarita',
    description: 'Tequila, triple sec, citron vert, sel',
    price: '6 000 F CFA',
  },
  {
    name: 'Mojito',
    description: 'Rhum blanc, menthe fraîche, citron vert, sucre, eau gazeuse',
    price: '6 000 F CFA',
  },
  {
    name: 'Blue Virgin',
    description: 'Curaçao bleu, citron, eau gazeuse — visuellement spectaculaire',
    price: '6 000 F CFA',
  },
  {
    name: 'Sauvage',
    description: 'Rhum vieux, fruits de la passion, gingembre, citron',
    price: '6 000 F CFA',
  },
  {
    name: 'Matador',
    description: 'Tequila, jus d\'ananas, citron vert, menthe',
    price: '6 000 F CFA',
  },
  {
    name: 'Jus de Fruit Naturelle',
    description: 'Pur jus de fruits frais pressés du jour',
    price: '5 000 F CFA',
  },
];

export const boissons: MenuItem[] = [
  {
    name: 'Coca-Cola',
    description: 'Boisson gazeuse classique',
    price: '2 000 F CFA',
  },
  {
    name: 'Fanta',
    description: 'Orange ou autre parfum',
    price: '2 000 F CFA',
  },
  {
    name: 'Sprite',
    description: 'Citron-lime, boisson gazeuse',
    price: '2 000 F CFA',
  },
  {
    name: 'Double Seven',
    description: 'Boisson pétillante locale',
    price: '2 000 F CFA',
  },
  {
    name: 'Bissap',
    description: 'Jus d\'hibiscus maison',
    price: '2 000 F CFA',
  },
  {
    name: 'Gingembre',
    description: 'Jus de gingembre maison',
    price: '2 000 F CFA',
  },
  {
    name: 'Jus Maison',
    description: 'Jus de fruits frais du jour',
    price: '2 000 F CFA',
  },
  {
    name: 'Rox',
    description: 'Eau minérale pétillante',
    price: '2 500 F CFA',
  },
  {
    name: 'Red Bull',
    description: 'Boisson énergisante',
    price: '2 500 F CFA',
  },
  {
    name: 'Perrier',
    description: 'Eau gazeuse française',
    price: '2 500 F CFA',
  },
  {
    name: 'Ira',
    description: 'Boisson locale rafraîchissante',
    price: '2 000 F CFA',
  },
];

// ─── HOME PAGE PREVIEW ───────────────────────────────────────────────────────

export const menuPreview = [
  {
    name: 'Brochette de Gambas',
    description: 'Gambas géantes marinées et grillées à la perfection',
    tag: 'Premium',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Brochette de gambas grillées — King Aqua Lounge Bamako',
  },
  {
    name: 'Côte de Bœuf',
    description: 'Pièce noble grillée, accompagnements généreux',
    tag: 'Spécialité',
    image: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Côte de bœuf grillée — King Aqua Lounge Bamako',
  },
  {
    name: 'Poulet Grillé Entier',
    description: 'Marinade maison, braisé lentement au feu de bois',
    tag: 'Best-seller',
    image: 'https://images.unsplash.com/photo-1598515214211-89d3c73ae83b?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Poulet grillé entier — King Aqua Lounge Bamako',
  },
  {
    name: 'Tropic King',
    description: 'Mangue, ananas, citron vert — la signature du King',
    tag: 'Mocktail',
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f32a?auto=format&fit=crop&w=600&h=800&q=80',
    alt: 'Tropic King mocktail signature — King Aqua Lounge Bamako',
  },
];

// ─── TÉMOIGNAGES ──────────────────────────────────────────────────────────────

export const testimonials = [
  {
    id: 1,
    name: 'Aminata D.',
    location: 'Bamako',
    rating: 5,
    text: 'Une expérience inoubliable au bord du fleuve ! Les grillades sont excellentes, le cadre est magnifique. Je recommande vivement.',
    date: 'Mars 2025',
  },
  {
    id: 2,
    name: 'Moussa K.',
    location: 'Bamako',
    rating: 5,
    text: 'Le jet ski sur le Niger, c\'est une sensation unique. Et après, les brochettes de bœuf sont juste parfaites. King Aqua Lounge, c\'est la meilleure adresse de Bamako !',
    date: 'Février 2025',
  },
  {
    id: 3,
    name: 'Fatoumata T.',
    location: 'Bamako',
    rating: 5,
    text: 'Nous avons privatisé pour notre anniversaire de mariage. L\'équipe a été aux petits soins, la décoration était superbe. Une soirée de rêve au bord du fleuve.',
    date: 'Janvier 2025',
  },
  {
    id: 4,
    name: 'Ibrahim S.',
    location: 'Bamako',
    rating: 5,
    text: 'La balade en bateau au coucher du soleil... des images qui restent gravées. Et le Tropic King en mocktail, un pur délice ! Merci King Aqua.',
    date: 'Décembre 2024',
  },
  {
    id: 5,
    name: 'Kadiatou B.',
    location: 'Bamako',
    rating: 5,
    text: 'Ambiance lounge exceptionnelle, service impeccable et grillades de qualité. L\'espace billard est bien équipé. On reviendra sans hésiter !',
    date: 'Novembre 2024',
  },
];

// ─── GALERIE ──────────────────────────────────────────────────────────────────

export const galleryImages = [
  { src: '/images/galerie-1.jpg', alt: 'Terrasse du King Aqua Lounge avec vue sur le fleuve Niger', caption: 'La terrasse' },
  { src: '/images/galerie-2.jpg', alt: 'Ambiance au King Aqua Lounge Baco-Djicoroni', caption: 'L\'ambiance' },
  { src: '/images/galerie-4.jpg', alt: 'Vue extérieure du King Aqua Lounge au bord du fleuve', caption: 'Le cadre' },
  { src: '/images/galerie-5.jpg', alt: 'Terrasse et promenade en bois du King Aqua Lounge sur le Niger', caption: 'Au bord du fleuve' },
];
