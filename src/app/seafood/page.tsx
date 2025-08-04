"use client";
import { useState } from "react";

const categories = [
  { name: "Shrimp", key: "shrimp" },
  { name: "Seafood", key: "seafood" },
  { name: "Raw PTO", key: "raw-pto" },
  { name: "Peeled & Deveined", key: "peeled-deveined" },
  { name: "Taiwan", key: "taiwan" },
  { name: "Chaina", key: "chaina" },
  { name: "Fish & Fillet", key: "fish-fillet" },
  { name: "Tiger EZ Peel IQF Headless", key: "tiger-ez-peel-iqf" },

];

const allProducts = [
  {
    id: 1,
    name: "Black Tiger Shrimp",
    category: "shrimp",
    variants: [
      { size: "13/15", origin: "Thailand", price: "$9.25/lb" },
      { size: "21/25", origin: "India", price: "$7.30/lb" },
      { size: "21/25", origin: "Thailand", price: "$7.70/lb" },
      { size: "26/30", origin: "Viet/Thai", price: "$8.80/lb" },
      { size: "31/35", origin: "Ecuador", price: "$5.25/lb" },
    ],
  },
  {
    id: 2,
    name: "White Shrimp",
    category: "shrimp",
    variants: [
      { size: "16/20", origin: "Ecuador", price: "$6.15/lb" },
      { size: "16/20", origin: "India", price: "$5.55/lb" },
      { size: "16/20", origin: "Nila", price: "$6.55/lb" },
      { size: "16/20", origin: "Nila", price: "$5.90/lb" },
      { size: "21/25", origin: "India", price: "$5.50/lb" },
      { size: "21/25", origin: "India", price: "$5.00/lb" },
      { size: "21/25", origin: "Nila", price: "$5.65/lb" },
      { size: "21/25", origin: "Nila", price: "$5.10/lb" },
      { size: "26/30", origin: "India", price: "$5.35/lb" },
      { size: "26/30", origin: "India", price: "$4.80/lb" },
      { size: "26/30", origin: "Nila", price: "$5.55/lb" },
      { size: "26/30", origin: "Nila", price: "$5.00/lb" },
    ],
  },
  {
    id: 3,
    name: "Seafood - Assorted",
    category: "seafood",
    variants: [
      { size: "Abalone with Shell-on 3 Pc 30x210g", origin: "China" },
      { size: "Abalone with Shell-on 5 Pc 30x220g", origin: "China" },
      { size: "Abalone Meat 27-29g 20x225g", origin: "China" },
      { size: "Abalone Meat 90-110g 1x10 lb", origin: "China" },
      { size: "Bean Curd Sheet `Ming Lee' 90-110g 40x1 lb", origin: "China" },
      { size: "Clam Whole Cooked 30-40 20x400g", origin: "China" },
      { size: "Clam Meat Cooked 100-200 24x300g", origin: "China" },
      { size: "Conch Meat L 10x3 lb", origin: "USA" },
      { size: "Cooked P+D White Shrimp 41/50 20x340g", origin: "China" },
      { size: "Cooked P+D White Shrimp 71/90 20x340g", origin: "China" },
      { size: "Cooked Whole IQF Shrimp 91-120 1x5 kg", origin: "Canada" },
      { size: "Crab, Soft Shell 70/100g 10x1 kg", origin: "Thailand" },
      { size: "Crab, Soft Shell 100/150g 10x1 kg", origin: "Thailand" },
      { size: "Crab, Soft Shell 150/200g 10x1 kg", origin: "Thailand" },
      { size: "Crab Claw (Snow) M(30-40) 12x1 kg", origin: "Korean" },
      { size: "Crab Claw (Snow) S(40-50) 12x1 kg", origin: "Korean" },
      { size: "Crab Swimming Cut 3L 12x500g", origin: "China" },
      { size: "Frog Leg 6-8 12x1 kg", origin: "Vietnam" },
      { size: "Frog Leg 8-12 12x1 kg", origin: "Vietnam" },
      { size: "Imitation Crab Stick 7\" 20x1.5 lb", origin: "USA" },
      { size: "Imitation Crab Stick 7\" 24x1 lb", origin: "China" },
      { size: "Mussels, Green 1/2 Shell M 12x800g", origin: "New Zealand" },
      { size: "Mussels, Green 1/2 Shell L 12x800g", origin: "New Zealand" },
      { size: "Seafood Mix (海鮮什錦) L 30x340g", origin: "China" },
      { size: "Seafood Mix (海鮮什錦) L 12x800g", origin: "China" },
      { size: "Soy Bean (Edamame) # 9 20x1 lb", origin: "Taiwan" },
      { size: "Samosa Curry 30g 10x32's", origin: "China" },
      { size: "Seasame Ball 20g 10x24's", origin: "China" },
      { size: "Spring Roll Shrimp 35g 18x16's", origin: "China" },
      { size: "Spring Roll Vegetable 25g 10x40's", origin: "China" },
      { size: "Spring Roll Vegetable 50g 10x20's", origin: "China" },
      { size: "Sushi ebi (Cooked from Alive) 3 L 20T x 30's", origin: "Thailand" },
      { size: "Sushi ebi (Cooked from Alive) 4 L 20T x 30's", origin: "Thailand" },
      { size: "Sushi ebi (Cooked from Alive) 5 L 20T x 30's", origin: "Thailand" },
    ],
  },

  {
    id: 4,
    name: "Black Tiger Headless Block",
    category: "shrimp",
    variants: [
      // India 100%
      { size: "6/8 100% Black Tiger Headless Block", origin: "India" },
      { size: "8/12 100% Black Tiger Headless Block", origin: "India" },
      { size: "13/15 100% Black Tiger Headless Block", origin: "India" },
      { size: "16/20 100% Black Tiger Headless Block", origin: "India" },
      { size: "21/25 100% Black Tiger Headless Block", origin: "India" },
      { size: "26/30 100% Black Tiger Headless Block", origin: "India" },
      { size: "31/35 100% Black Tiger Headless Block", origin: "India" },
      { size: "36/40 100% Black Tiger Headless Block", origin: "India" },
      { size: "31/40 100% Black Tiger Headless Block", origin: "India" },
      { size: "41/50 100% Black Tiger Headless Block", origin: "India" },
      { size: "51/60 100% Black Tiger Headless Block", origin: "India" },
      { size: "61/70 100% Black Tiger Headless Block", origin: "India" },
      { size: "71/90 100% Black Tiger Headless Block", origin: "India" },
      { size: "20/40 100% Black Tiger Headless Block", origin: "India" },
      { size: "40/60 100% Black Tiger Headless Block", origin: "India" },
      { size: "60/80 100% Black Tiger Headless Block", origin: "India" },
      { size: "80/120 100% Black Tiger Headless Block", origin: "India" },
      { size: "120/150 100% Black Tiger Headless Block", origin: "India" },

      // Viet/Thai 100%
      { size: "6/8 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "8/12 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "13/15 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "16/20 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "21/25 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "26/30 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "31/35 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "36/40 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "31/40 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "41/50 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "51/60 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "61/70 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "71/90 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "20/40 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "40/60 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "60/80 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "80/120 100% Black Tiger Headless Block", origin: "Viet/Thai" },
      { size: "120/150 100% Black Tiger Headless Block", origin: "Viet/Thai" },

      // Thailand 85%
      { size: "8/12 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "13/15 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "16/20 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "21/25 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "26/30 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "31/35 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "36/40 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "31/40 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "41/50 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "51/60 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "61/70 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "71/90 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "20/40 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "40/60 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "60/80 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "80/120 85% Black Tiger Headless Block", origin: "Thailand" },
      { size: "120/150 85% Black Tiger Headless Block", origin: "Thailand" },

      // Ecuador 100%
      { size: "6/8 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "8/12 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "13/15 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "16/20 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "21/25 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "26/30 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "31/35 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "36/40 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "31/40 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "41/50 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "51/60 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "61/70 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "71/90 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "20/40 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "40/60 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "60/80 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "80/120 100% Black Tiger Headless Block", origin: "Ecuador" },
      { size: "120/150 100% Black Tiger Headless Block", origin: "Ecuador" },

      // India 90%
      { size: "6/8 90% Black Tiger Headless Block", origin: "India" },
      { size: "8/12 90% Black Tiger Headless Block", origin: "India" },
      { size: "13/15 90% Black Tiger Headless Block", origin: "India" },
      { size: "16/20 90% Black Tiger Headless Block", origin: "India" },
      { size: "21/25 90% Black Tiger Headless Block", origin: "India" },
      { size: "26/30 90% Black Tiger Headless Block", origin: "India" },
      { size: "31/35 90% Black Tiger Headless Block", origin: "India" },
      { size: "36/40 90% Black Tiger Headless Block", origin: "India" },
      { size: "31/40 90% Black Tiger Headless Block", origin: "India" },
      { size: "41/50 90% Black Tiger Headless Block", origin: "India" },
      { size: "51/60 90% Black Tiger Headless Block", origin: "India" },
      { size: "61/70 90% Black Tiger Headless Block", origin: "India" },
      { size: "71/90 90% Black Tiger Headless Block", origin: "India" },
      { size: "20/40 90% Black Tiger Headless Block", origin: "India" },
      { size: "40/60 90% Black Tiger Headless Block", origin: "India" },
      { size: "60/80 90% Black Tiger Headless Block", origin: "India" },
      { size: "80/120 90% Black Tiger Headless Block", origin: "India" },
      { size: "120/150 90% Black Tiger Headless Block", origin: "India" },

      // India 80%
      { size: "6/8 80% Black Tiger Headless Block", origin: "India" },
      { size: "8/12 80% Black Tiger Headless Block", origin: "India" },
      { size: "13/15 80% Black Tiger Headless Block", origin: "India" },
      { size: "16/20 80% Black Tiger Headless Block", origin: "India" },
      { size: "21/25 80% Black Tiger Headless Block", origin: "India" },
      { size: "26/30 80% Black Tiger Headless Block", origin: "India" },
      { size: "31/35 80% Black Tiger Headless Block", origin: "India" },
      { size: "36/40 80% Black Tiger Headless Block", origin: "India" },
      { size: "31/40 80% Black Tiger Headless Block", origin: "India" },
      { size: "41/50 80% Black Tiger Headless Block", origin: "India" },
      { size: "51/60 80% Black Tiger Headless Block", origin: "India" },
      { size: "61/70 80% Black Tiger Headless Block", origin: "India" },
      { size: "71/90 80% Black Tiger Headless Block", origin: "India" },
      { size: "20/40 80% Black Tiger Headless Block", origin: "India" },
      { size: "40/60 80% Black Tiger Headless Block", origin: "India" },
      { size: "60/80 80% Black Tiger Headless Block", origin: "India" },
      { size: "80/120 80% Black Tiger Headless Block", origin: "India" },
      { size: "120/150 80% Black Tiger Headless Block", origin: "India" },

      // Nila 90%
      { size: "6/8 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "8/12 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "13/15 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "16/20 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "21/25 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "26/30 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "31/35 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "36/40 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "31/40 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "41/50 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "51/60 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "61/70 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "71/90 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "20/40 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "40/60 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "60/80 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "80/120 90% Black Tiger Headless Block", origin: "Nila" },
      { size: "120/150 90% Black Tiger Headless Block", origin: "Nila" },

      // Nila 80%
      { size: "6/8 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "8/12 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "13/15 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "16/20 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "21/25 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "26/30 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "31/35 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "36/40 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "31/40 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "41/50 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "51/60 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "61/70 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "71/90 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "20/40 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "40/60 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "60/80 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "80/120 80% Black Tiger Headless Block", origin: "Nila" },
      { size: "120/150 80% Black Tiger Headless Block", origin: "Nila" },
    ]
  },

  {
    id: 5,
    name: "Raw PTO",
    category: "raw-pto",
    variants: [
      // Viet / Thai
      { size: "8 - 12 10x2 lb", origin: "Viet / Thai" },
      { size: "13 - 15 10x2 lb", origin: "Viet / Thai" },
      { size: "16 - 20 10x2 lb", origin: "Viet / Thai" },
      { size: "21 - 25 10x2 lb", origin: "Viet / Thai" },
      { size: "26 - 30 10x2 lb", origin: "Viet / Thai" },
      { size: "31 - 40 10x2 lb", origin: "Viet / Thai" },
      { size: "41 - 50 10x2 lb", origin: "Viet / Thai" },
      { size: "51 - 60 10x2 lb", origin: "Viet / Thai" },

      // Vietnam
      { size: "8 - 12 6x4 lb", origin: "Vietnam" },
      { size: "13 - 15 6x4 lb", origin: "Vietnam" },
      { size: "16 - 20 6x4 lb", origin: "Vietnam" },
      { size: "21 - 25 6x4 lb", origin: "Vietnam" },
      { size: "26 - 30 6x4 lb", origin: "Vietnam" },
      { size: "31 - 40 6x4 lb", origin: "Vietnam" },
      { size: "41 - 50 6x4 lb", origin: "Vietnam" },
      { size: "51 - 60 6x4 lb", origin: "Vietnam" },

      // Indo 85%
      { size: "8 - 12 6x4 lb (85%)", origin: "Indo" },
      { size: "13 - 15 6x4 lb (85%)", origin: "Indo" },
      { size: "16 - 20 6x4 lb (85%)", origin: "Indo" },
      { size: "21 - 25 6x4 lb (85%)", origin: "Indo" },
      { size: "26 - 30 6x4 lb (85%)", origin: "Indo" },
      { size: "31 - 40 6x4 lb (85%)", origin: "Indo" },
      { size: "41 - 50 6x4 lb (85%)", origin: "Indo" },
      { size: "51 - 60 6x4 lb (85%)", origin: "Indo" },

      // Thai 85%
      { size: "8 - 12 6x4 lb (85%)", origin: "Thai" },
      { size: "13 - 15 6x4 lb (85%)", origin: "Thai" },
      { size: "16 - 20 6x4 lb (85%)", origin: "Thai" },
      { size: "21 - 25 6x4 lb (85%)", origin: "Thai" },
      { size: "26 - 30 6x4 lb (85%)", origin: "Thai" },
      { size: "31 - 40 6x4 lb (85%)", origin: "Thai" },
      { size: "41 - 50 6x4 lb (85%)", origin: "Thai" },
      { size: "51 - 60 6x4 lb (85%)", origin: "Thai" },
    ]
  },

  {
    id: 6,
    name: "RPTO",
    category: "raw-pto",
    variants: [
      // Cooked Thailand
      { size: "16/20", origin: "Cooked 10x300g Thailand" },
      { size: "21/25", origin: "Cooked 10x300g Thailand" },
      { size: "26/30", origin: "Cooked 10x300g Thailand" },
      { size: "31/35", origin: "Cooked 10x300g Thailand" },
      { size: "31/40", origin: "Cooked 10x300g Thailand" },
      { size: "41/50", origin: "Cooked 10x300g Thailand" },

      // RPTO 80%
      { size: "16/20", origin: "RPTO 6x4 lb 80%" },
      { size: "21/25", origin: "RPTO 6x4 lb 80%" },
      { size: "26/30", origin: "RPTO 6x4 lb 80%" },
      { size: "31/35", origin: "RPTO 6x4 lb 80%" },
      { size: "31/40", origin: "RPTO 6x4 lb 80%" },
      { size: "41/50", origin: "RPTO 6x4 lb 80%" },

      { size: "16/20", origin: "RPTO 10x2 lb 80%" },
      { size: "21/25", origin: "RPTO 10x2 lb 80%" },
      { size: "26/30", origin: "RPTO 10x2 lb 80%" },
      { size: "31/35", origin: "RPTO 10x2 lb 80%" },
      { size: "31/40", origin: "RPTO 10x2 lb 80%" },
      { size: "41/50", origin: "RPTO 10x2 lb 80%" },

      // RPTO 90%
      { size: "16/20", origin: "RPTO 10x2 lb 90%" },
      { size: "21/25", origin: "RPTO 10x2 lb 90%" },
      { size: "26/30", origin: "RPTO 10x2 lb 90%" },
      { size: "31/35", origin: "RPTO 10x2 lb 90%" },
      { size: "31/40", origin: "RPTO 10x2 lb 90%" },
      { size: "41/50", origin: "RPTO 10x2 lb 90%" },

      // Breaded Nobashi
      { size: "21-25 V", origin: "Breaded Nobashi 20x10 Pc Vietnam" },
      { size: "26-30", origin: "Breaded Nobashi 20x10 Pc Vietnam" },
      { size: "31-35", origin: "Breaded Nobashi 20x10 Pc Vietnam" },
      { size: "21-25 C", origin: "Breaded Nobashi 20x10 Pc Vietnam" },
    ]
  },

  {
    id: 6,
    name: "Peeled & Deveined",
    category: "peeled-deveined",
    variants: [
      // ===== India 80% =====
      { size: "16/20", origin: "India 80% Peeled and Deveined" },
      { size: "21/25", origin: "India 80% Peeled and Deveined" },
      { size: "26/30", origin: "India 80% Peeled and Deveined" },
      { size: "31/35", origin: "India 80% Peeled and Deveined" },
      { size: "31/40", origin: "India 80% Peeled and Deveined" },
      { size: "41/50", origin: "India 80% Peeled and Deveined" },
      { size: "51/60", origin: "India 80% Peeled and Deveined" },
      { size: "61/70", origin: "India 80% Peeled and Deveined" },
      { size: "71/90", origin: "India 80% Peeled and Deveined" },
      { size: "91/110", origin: "India 80% Peeled and Deveined" },
      { size: "110/130", origin: "India 80% Peeled and Deveined" },
      { size: "130/150", origin: "India 80% Peeled and Deveined" },
      { size: "100/200", origin: "India 80% Peeled and Deveined" },
      { size: "L(10-60)", origin: "India 80% Peeled and Deveined" },
      { size: "M(60-U)", origin: "India 80% Peeled and Deveined" },
      { size: "S(U-100)", origin: "India 80% Peeled and Deveined" },
      { size: "20/30", origin: "India 80% Peeled and Deveined" },
      { size: "30/40", origin: "India 80% Peeled and Deveined" },
      { size: "40/50", origin: "India 80% Peeled and Deveined" },
      { size: "50/60", origin: "India 80% Peeled and Deveined" },

      // ===== Vietnam 80% =====
      { size: "16/20", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "21/25", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "26/30", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "31/35", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "31/40", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "41/50", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "51/60", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "61/70", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "71/90", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "91/110", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "110/130", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "130/150", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "100/200", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "L(10-60)", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "M(60-U)", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "S(U-100)", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "20/30", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "30/40", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "40/50", origin: "Vietnam 80% Peeled and Deveined" },
      { size: "50/60", origin: "Vietnam 80% Peeled and Deveined" },

      // ===== China 80% =====
      { size: "16/20", origin: "China 80% Peeled and Deveined" },
      { size: "21/25", origin: "China 80% Peeled and Deveined" },
      { size: "26/30", origin: "China 80% Peeled and Deveined" },
      { size: "31/35", origin: "China 80% Peeled and Deveined" },
      { size: "31/40", origin: "China 80% Peeled and Deveined" },
      { size: "41/50", origin: "China 80% Peeled and Deveined" },
      { size: "51/60", origin: "China 80% Peeled and Deveined" },
      { size: "61/70", origin: "China 80% Peeled and Deveined" },
      { size: "71/90", origin: "China 80% Peeled and Deveined" },
      { size: "91/110", origin: "China 80% Peeled and Deveined" },
      { size: "110/130", origin: "China 80% Peeled and Deveined" },
      { size: "130/150", origin: "China 80% Peeled and Deveined" },
      { size: "100/200", origin: "China 80% Peeled and Deveined" },
      { size: "L(10-60)", origin: "China 80% Peeled and Deveined" },
      { size: "M(60-U)", origin: "China 80% Peeled and Deveined" },
      { size: "S(U-100)", origin: "China 80% Peeled and Deveined" },
      { size: "20/30", origin: "China 80% Peeled and Deveined" },
      { size: "30/40", origin: "China 80% Peeled and Deveined" },
      { size: "40/50", origin: "China 80% Peeled and Deveined" },
      { size: "50/60", origin: "China 80% Peeled and Deveined" },

      // ===== 75% =====
      { size: "16/20", origin: "75% Peeled and Deveined" },
      { size: "21/25", origin: "75% Peeled and Deveined" },
      { size: "26/30", origin: "75% Peeled and Deveined" },
      { size: "31/35", origin: "75% Peeled and Deveined" },
      { size: "31/40", origin: "75% Peeled and Deveined" },
      { size: "41/50", origin: "75% Peeled and Deveined" },
      { size: "51/60", origin: "75% Peeled and Deveined" },
      { size: "61/70", origin: "75% Peeled and Deveined" },
      { size: "71/90", origin: "75% Peeled and Deveined" },
      { size: "91/110", origin: "75% Peeled and Deveined" },
      { size: "110/130", origin: "75% Peeled and Deveined" },
      { size: "130/150", origin: "75% Peeled and Deveined" },
      { size: "100/200", origin: "75% Peeled and Deveined" },
      { size: "L(10-60)", origin: "75% Peeled and Deveined" },
      { size: "M(60-U)", origin: "75% Peeled and Deveined" },
      { size: "S(U-100)", origin: "75% Peeled and Deveined" },
      { size: "20/30", origin: "75% Peeled and Deveined" },
      { size: "30/40", origin: "75% Peeled and Deveined" },
      { size: "40/50", origin: "75% Peeled and Deveined" },
      { size: "50/60", origin: "75% Peeled and Deveined" },

      // ===== 70% =====
      { size: "16/20", origin: "70% Peeled and Deveined" },
      { size: "21/25", origin: "70% Peeled and Deveined" },
      { size: "26/30", origin: "70% Peeled and Deveined" },
      { size: "31/35", origin: "70% Peeled and Deveined" },
      { size: "31/40", origin: "70% Peeled and Deveined" },
      { size: "41/50", origin: "70% Peeled and Deveined" },
      { size: "51/60", origin: "70% Peeled and Deveined" },
      { size: "61/70", origin: "70% Peeled and Deveined" },
      { size: "71/90", origin: "70% Peeled and Deveined" },
      { size: "91/110", origin: "70% Peeled and Deveined" },
      { size: "110/130", origin: "70% Peeled and Deveined" },
      { size: "130/150", origin: "70% Peeled and Deveined" },
      { size: "100/200", origin: "70% Peeled and Deveined" },
      { size: "L(10-60)", origin: "70% Peeled and Deveined" },
      { size: "M(60-U)", origin: "70% Peeled and Deveined" },
      { size: "S(U-100)", origin: "70% Peeled and Deveined" },
      { size: "20/30", origin: "70% Peeled and Deveined" },
      { size: "30/40", origin: "70% Peeled and Deveined" },
      { size: "40/50", origin: "70% Peeled and Deveined" },
      { size: "50/60", origin: "70% Peeled and Deveined" },
    ],
  },

  {
    id: 7,
    name: "Taiwan",
    category: "taiwan",
    variants: [
      // ===== Taiwan Whole 1x8 kg =====
      { size: "U/5", origin: "Taiwan Whole 1x8 kg" },
      { size: "U/10", origin: "Taiwan Whole 1x8 kg" },
      { size: "300/400g", origin: "Taiwan Whole 1x8 kg" },
      { size: "400/600g", origin: "Taiwan Whole 1x8 kg" },
      { size: "80/120g", origin: "Taiwan Whole 1x8 kg" },
      { size: "120/150g", origin: "Taiwan Whole 1x8 kg" },
      { size: "150/170g", origin: "Taiwan Whole 1x8 kg" },
      { size: "170g/up", origin: "Taiwan Whole 1x8 kg" },
      { size: "Pineapple", origin: "Taiwan Whole 1x8 kg" },
      { size: "Breaded", origin: "Taiwan Whole 1x8 kg" },

      // ===== Baby India (80%) =====
      { size: "U/1", origin: "Baby India (80%)" },
      { size: "U/2", origin: "Baby India (80%)" },
      { size: "1/2", origin: "Baby India (80%)" },
      { size: "2/4", origin: "Baby India (80%)" },
      { size: "10/20", origin: "Baby India (80%)" },
      { size: "20/40", origin: "Baby India (80%)" },
      { size: "40/60", origin: "Baby India (80%)" },

      // ===== Canada Comeau 12x340g =====
      { size: "U/10", origin: "Canada Comeau 12x340g" },
      { size: "10/20", origin: "Canada Comeau 12x340g" },
      { size: "20/30", origin: "Canada Comeau 12x340g" },
      { size: "30/40", origin: "Canada Comeau 12x340g" },
      { size: "4S(23-27)", origin: "Canada Comeau 12x340g" },
      { size: "5S(28-36)", origin: "Canada Comeau 12x340g" },
      { size: "40/60", origin: "Canada Comeau 12x340g" },
      { size: "60/80", origin: "Canada Comeau 12x340g" },
      { size: "80/120", origin: "Canada Comeau 12x340g" },
      { size: "120/150", origin: "Canada Comeau 12x340g" },
      { size: "150/200", origin: "Canada Comeau 12x340g" },
    ],
  },


  {
    id: 8,
    name: "Taiwan",
    category: "taiwan",
    variants: [
      // ===== Taiwan Whole 1x8 kg =====
      { size: "U/5", origin: "Taiwan Whole 1x8 kg" },
      { size: "U/10", origin: "Taiwan Whole 1x8 kg" },
      { size: "300/400g", origin: "Taiwan Whole 1x8 kg" },
      { size: "400/600g", origin: "Taiwan Whole 1x8 kg" },
      { size: "80/120g", origin: "Taiwan Whole 1x8 kg" },
      { size: "120/150g", origin: "Taiwan Whole 1x8 kg" },
      { size: "150/170g", origin: "Taiwan Whole 1x8 kg" },
      { size: "170g/up", origin: "Taiwan Whole 1x8 kg" },
      { size: "Pineapple", origin: "Taiwan Whole 1x8 kg" },
      { size: "Breaded", origin: "Taiwan Whole 1x8 kg" },

      // ===== Fillet Thailand (80%) =====
      { size: "U/1", origin: "Fillet Thailand (80%)" },
      { size: "U/2", origin: "Fillet Thailand (80%)" },
      { size: "1/2", origin: "Fillet Thailand (80%)" },
      { size: "2/4", origin: "Fillet Thailand (80%)" },
      { size: "10/20", origin: "Fillet Thailand (80%)" },
      { size: "20/40", origin: "Fillet Thailand (80%)" },
      { size: "40/60", origin: "Fillet Thailand (80%)" },

      // ===== Japan Maruta 10x1 kg =====
      { size: "U/10", origin: "Japan Maruta 10x1 kg" },
      { size: "10/20", origin: "Japan Maruta 10x1 kg" },
      { size: "20/30", origin: "Japan Maruta 10x1 kg" },
      { size: "30/40", origin: "Japan Maruta 10x1 kg" },
      { size: "4S(23-27)", origin: "Japan Maruta 10x1 kg" },
      { size: "5S(28-36)", origin: "Japan Maruta 10x1 kg" },
      { size: "40/60", origin: "Japan Maruta 10x1 kg" },
      { size: "60/80", origin: "Japan Maruta 10x1 kg" },
      { size: "80/120", origin: "Japan Maruta 10x1 kg" },
      { size: "120/150", origin: "Japan Maruta 10x1 kg" },
      { size: "150/200", origin: "Japan Maruta 10x1 kg" },
    ],
  },


  {
    id: 9,
    name: "Taiwan",
    category: "taiwan",
    variants: [
      // ===== Tentacles 1x7 kg =====
      { size: "U/5", origin: "Tentacles 1x7 kg" },
      { size: "U/10", origin: "Tentacles 1x7 kg" },
      { size: "300/400g", origin: "Tentacles 1x7 kg" },
      { size: "400/600g", origin: "Tentacles 1x7 kg" },
      { size: "80/120g", origin: "Tentacles 1x7 kg" },
      { size: "120/150g", origin: "Tentacles 1x7 kg" },
      { size: "150/170g", origin: "Tentacles 1x7 kg" },
      { size: "170g/up", origin: "Tentacles 1x7 kg" },
      { size: "Pineapple", origin: "Tentacles 1x7 kg" },
      { size: "Breaded", origin: "Tentacles 1x7 kg" },

      // ===== Fillet Thailand (80%) =====
      { size: "U/1", origin: "Fillet Thailand (80%)" },
      { size: "U/2", origin: "Fillet Thailand (80%)" },
      { size: "1/2", origin: "Fillet Thailand (80%)" },
      { size: "2/4", origin: "Fillet Thailand (80%)" },
      { size: "10/20", origin: "Fillet Thailand (80%)" },
      { size: "20/40", origin: "Fillet Thailand (80%)" },
      { size: "40/60", origin: "Fillet Thailand (80%)" },

      // ===== China IQF 6x5 lb =====
      { size: "U/10", origin: "China IQF 6x5 lb" },
      { size: "10/20", origin: "China IQF 6x5 lb" },
      { size: "20/30", origin: "China IQF 6x5 lb" },
      { size: "30/40", origin: "China IQF 6x5 lb" },
      { size: "4S(23-27)", origin: "China IQF 6x5 lb" },
      { size: "5S(28-36)", origin: "China IQF 6x5 lb" },
      { size: "40/60", origin: "China IQF 6x5 lb" },
      { size: "60/80", origin: "China IQF 6x5 lb" },
      { size: "80/120", origin: "China IQF 6x5 lb" },
      { size: "120/150", origin: "China IQF 6x5 lb" },
      { size: "150/200", origin: "China IQF 6x5 lb" },
    ],
  },

  {
    id: 10,
    name: "Taiwan",
    category: "taiwan",
    variants: [
      // ===== Taiwan Illex Tube 1x10 kg(70%) =====
      { size: "U/5", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "U/10", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "300/400g", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "400/600g", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "80/120g", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "120/150g", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "150/170g", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "170g/up", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "Pineapple", origin: "Taiwan Illex Tube 1x10 kg(70%)" },
      { size: "Breaded", origin: "Taiwan Illex Tube 1x10 kg(70%)" },

      // ===== Whole Cleaned India (80%) =====
      { size: "U/1", origin: "Whole cleaned India (80%)" },
      { size: "U/2", origin: "Whole cleaned India (80%)" },
      { size: "1/2", origin: "Whole cleaned India (80%)" },
      { size: "2/4", origin: "Whole cleaned India (80%)" },
      { size: "10/20", origin: "Whole cleaned India (80%)" },
      { size: "20/40", origin: "Whole cleaned India (80%)" },
      { size: "40/60", origin: "Whole cleaned India (80%)" },

      // ===== Breaded Imitation Thailand 30x1 lb =====
      { size: "U/10", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "10/20", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "20/30", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "30/40", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "4S(23-27)", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "5S(28-36)", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "40/60", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "60/80", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "80/120", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "120/150", origin: "Breaded Imitation Thailand 30x1 lb" },
      { size: "150/200", origin: "Breaded Imitation Thailand 30x1 lb" },
    ],
  },

  {
    id: 11,
    name: "Chaina",
    category: "chaina",
    variants: [
      // ===== China Illex 1x7 kg =====
      { size: "U/5", origin: "China Illex 1x7 kg" },
      { size: "U/10", origin: "China Illex 1x7 kg" },
      { size: "300/400g", origin: "China Illex 1x7 kg" },
      { size: "400/600g", origin: "China Illex 1x7 kg" },
      { size: "80/120g", origin: "China Illex 1x7 kg" },
      { size: "120/150g", origin: "China Illex 1x7 kg" },
      { size: "150/170g", origin: "China Illex 1x7 kg" },
      { size: "170g/up", origin: "China Illex 1x7 kg" },
      { size: "Pineapple", origin: "China Illex 1x7 kg" },
      { size: "Breaded", origin: "China Illex 1x7 kg" },

      // ===== Baby India (80%) =====
      { size: "U/1", origin: "Baby India (80%)" },
      { size: "U/2", origin: "Baby India (80%)" },
      { size: "1/2", origin: "Baby India (80%)" },
      { size: "2/4", origin: "Baby India (80%)" },
      { size: "10/20", origin: "Baby India (80%)" },
      { size: "20/40", origin: "Baby India (80%)" },
      { size: "40/60", origin: "Baby India (80%)" },

      // ===== Canada Comeau 2x5 lb =====
      { size: "U/10", origin: "Canada Comeau 2x5 lb" },
      { size: "10/20", origin: "Canada Comeau 2x5 lb" },
      { size: "20/30", origin: "Canada Comeau 2x5 lb" },
      { size: "30/40", origin: "Canada Comeau 2x5 lb" },
      { size: "4S(23-27)", origin: "Canada Comeau 2x5 lb" },
      { size: "5S(28-36)", origin: "Canada Comeau 2x5 lb" },
      { size: "40/60", origin: "Canada Comeau 2x5 lb" },
      { size: "60/80", origin: "Canada Comeau 2x5 lb" },
      { size: "80/120", origin: "Canada Comeau 2x5 lb" },
      { size: "120/150", origin: "Canada Comeau 2x5 lb" },
      { size: "150/200", origin: "Canada Comeau 2x5 lb" },
    ],
  },

  {
    id: 12,
    name: "Chaina",
    category: "chaina",
    variants: [
      // ===== Gigas 1x7 kg =====
      { size: "U/5", origin: "Gigas 1x7 kg" },
      { size: "U/10", origin: "Gigas 1x7 kg" },
      { size: "300/400g", origin: "Gigas 1x7 kg" },
      { size: "400/600g", origin: "Gigas 1x7 kg" },
      { size: "80/120g", origin: "Gigas 1x7 kg" },
      { size: "120/150g", origin: "Gigas 1x7 kg" },
      { size: "150/170g", origin: "Gigas 1x7 kg" },
      { size: "170g/up", origin: "Gigas 1x7 kg" },
      { size: "Pineapple", origin: "Gigas 1x7 kg" },
      { size: "Breaded", origin: "Gigas 1x7 kg" },

      // ===== Baby Thailand =====
      { size: "U/1", origin: "Baby Thailand" },
      { size: "U/2", origin: "Baby Thailand" },
      { size: "1/2", origin: "Baby Thailand" },
      { size: "2/4", origin: "Baby Thailand" },
      { size: "10/20", origin: "Baby Thailand" },
      { size: "20/40", origin: "Baby Thailand" },
      { size: "40/60", origin: "Baby Thailand" },

      // ===== Canada Comeau 16x12 oz =====
      { size: "U/10", origin: "Canada Comeau 16x12 oz" },
      { size: "10/20", origin: "Canada Comeau 16x12 oz" },
      { size: "20/30", origin: "Canada Comeau 16x12 oz" },
      { size: "30/40", origin: "Canada Comeau 16x12 oz" },
      { size: "4S(23-27)", origin: "Canada Comeau 16x12 oz" },
      { size: "5S(28-36)", origin: "Canada Comeau 16x12 oz" },
      { size: "40/60", origin: "Canada Comeau 16x12 oz" },
      { size: "60/80", origin: "Canada Comeau 16x12 oz" },
      { size: "80/120", origin: "Canada Comeau 16x12 oz" },
      { size: "120/150", origin: "Canada Comeau 16x12 oz" },
      { size: "150/200", origin: "Canada Comeau 16x12 oz" },
    ],
  },

  {
    id: 13,
    name: "Fish & Fillet",
    category: "fish-fillet",
    variants: [
      { size: "10-14/14-16", origin: "Basa Fillet, `Deli-Sea' Layer(90%) 2x5 kg Vietnam" },
      { size: "10-14/14-16", origin: "Basa Fillet, 'MetroGold' Layer(80%) 2x5 kg Vietnam" },
      { size: "10/Up", origin: "Basa Fillet, `MetroGold' IQF(80%) 1x10 kg Vietnam" },
      { size: "10-12/14-16", origin: "Basa Fillet, `Star' Layer(80%) 2x5 kg Vietnam" },
      { size: "16-18/18-Up", origin: "Basa Fillet, `Star' Layer(80%) 2x5 kg Vietnam" },
      { size: "10-12", origin: "Basa Fillet, `Star' IQF(80%) 1x10 kg Vietnam" },
      { size: "3 cm", origin: "Basa Steak, `Star' Vac-Pack(100%) 20x680g Vietnam" },

      { size: "500-800g", origin: "Barramundi Fish GGS 1x20 lb Taiwan" },

      { size: "9 oz", origin: "Eel BBQ (Unagi Kabayaki) - 36 Pc 2x5 kg China" },
      { size: "10 oz", origin: "Eel BBQ (Unagi Kabayaki) - 32 Pc 2x5 kg China" },
      { size: "800-1000g", origin: "Eel Whole Gutted Vac-Pack 1x10 kg China" },
      { size: "600-800g", origin: "Eel Fillet Boneless 1x12 kg China" },

      { size: "1050-1250g", origin: "Fish Head 1x14 kg China" },

      { size: "4-6 oz", origin: "King Fish Steak, IQF 1x10 lb Taiwan" },
      { size: "Collar", origin: "Kinglip (Ling) Collar 1x20 kg N Z" },
      { size: "2-3 kg", origin: "Kinglip (Ling) Fillet 1x10 kg N Z" },

      { size: "600/800g", origin: "Milk Fish, IQF 1x9 lb Taiwan" },
      { size: "800g-Up", origin: "Milk Fish, IQF 1x18 lb Taiwan" },

      { size: "500-600g", origin: "Pearl Grouper Fish (Gilled/Gutted) 1x10 kg China" },
      { size: "600-800g", origin: "Pearl Grouper Fish (Gilled/Gutted) 1x10 kg China" },
      { size: "800-1000g", origin: "Pearl Grouper Fish (Gilled/Gutted) 1x10 kg China" },

      { size: "60-80g", origin: "Pomfret Fish White 20x320g China" },
      { size: "400/500g", origin: "Pompano, Golden (Whole), IVP 1x15 kg China" },
      { size: "500/600g", origin: "Pompano, Golden (Whole), IVP 1x15 kg China" },
      { size: "600/800g", origin: "Pompano, Golden (Whole), IVP 1x15 kg China" },
      { size: "400/500g", origin: "Pompano, Golden (Gilled/Gutted) 1x15 kg China" },

      { size: "150-200g", origin: "Ribbon Fish Chunk, Vac-Pack 20x500g China" },

      { size: "500g", origin: "Seabass, Seasoned in Wine 18x500g China" },
      { size: "700-800g", origin: "Seabass, Seasoned in Wine 1x9.1 kg China" },

      { size: "Slice", origin: "Snakehead Fish Slice 20x250g China" },

      { size: "350/550g", origin: "Tilapia Fish, GGS, IWP 1x9 lb China" },
      { size: "550/750g", origin: "Tilapia Fish, GGS, IVP 1x18 lb China" },

      { size: "500-600g", origin: "Turbot Fish, GG IVP 1x10 kg China" },

      { size: "50-70g", origin: "Yellow Fish Whole IQF 20x400g China" },
      { size: "400-500g", origin: "Yellow Fish GGS, IVP 1x10 kg China" },
      { size: "220g", origin: "Yellow Fish Salted IVP 40x220g China" },
    ],
  },

  {
    id: 13,
    name: "Tiger EZ Peel IQF Headless",
    category: "tiger-ez-peel-iqf",
    variants: [

      { size: "16/20", origin: "" },
      { size: "21/25", origin: "" },
      { size: "26/30", origin: "" },
      { size: "31/40", origin: "" }

    ],
  }




];

export default function SeafoodMenuPage() {
  const [selectedCategory, setSelectedCategory] = useState("shrimp");
  const [selectedProduct, setSelectedProduct] = useState(
    allProducts.find((p) => p.category === "shrimp") || null
  );

  const filteredProducts = allProducts.filter(
    (product) => product.category === selectedCategory
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <header className="bg-[#03468a] text-white py-6 shadow-md">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl font-bold">Seafood Product Menu</h1>
          <p className="text-sm mt-1">Fresh · Certified · Export Quality</p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        {/* Category Menu */}
        <div className="flex gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => {
                setSelectedCategory(cat.key);
                setSelectedProduct(
                  allProducts.find((p) => p.category === cat.key) || null
                );
              }}
              className={`px-4 py-2 rounded-full font-semibold border ${selectedCategory === cat.key
                ? "bg-[#03468a] text-white"
                : "bg-white text-[#03468a] border-[#03468a]"
                }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className="cursor-pointer bg-white border border-gray-200 rounded-lg shadow hover:shadow-lg transition-all p-4"
            >
              <h3 className="text-lg font-semibold text-[#03468a]">
                {product.name}
              </h3>
              <ul className="mt-2 text-sm text-gray-600 space-y-1">
                {product.variants.slice(0, 20).map((v, i) => (
                  <li key={i}>
                    <span className="font-medium">{v.size}</span> -{" "}
                    <span>{v.origin}</span>
                  </li>
                ))}
                {product.variants.length > 10 && (
                  <li className="text-gray-400 font-semibold">...</li>
                )}
              </ul>
            </div>
          ))}
        </div>

        {/* Detailed Section */}
        {selectedProduct && (
          <div className="mt-12 bg-white rounded-xl shadow p-6">
            <h2 className="text-2xl font-bold text-[#03468a] mb-4">
              {selectedProduct.name} Details
            </h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <table className="w-full text-sm border border-gray-200">
                  <thead className="bg-[#03468a] text-white">
                    <tr>
                      <th className="p-2 text-left">Size</th>
                      <th className="p-2 text-left">Origin</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProduct.variants.map((variant, index) => (
                      <tr key={index} className="border-t">
                        <td className="p-2 font-medium">{variant.size}</td>
                        <td className="p-2">{variant.origin}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="mt-4 text-sm grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Certifications</strong>
                    <p>HACCP, ASC</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>MOQ</strong>
                    <p>1 x 20' FCL</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Packaging</strong>
                    <p>Vacuum Packed</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded">
                    <strong>Shelf Life</strong>
                    <p>24 months at -18°C</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
