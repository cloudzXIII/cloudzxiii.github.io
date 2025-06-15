let jokers = [
  {
    name: "Sora",
    text: [
			"This Joker gains {X:mult,C:white}X0.1{} Mult",
			"For each scored {C:hearts}heart{} card,",
			"Resets when {C:attention}Boss Blind{} is defeated.{}",
    ],
    image_url: "img/sora.png",
    rarity: "Rare"
  },

  {
    name: "Riku",
    text: [
			"Gains {C:chips}+1{} Chips and {C:mult}+1{} Mult",
			"for each scored {C:spades}Spade{} or {C:clubs}Club{}",
			"Loses {C:chips}-1{} Chips and {C:mult}-1{} Mult",
			"for each scored {C:diamonds}Diamond{} or {C:hearts}Heart{}",
    ],
    image_url: "img/riku.png",
    rarity: "Uncommon"
  },

  {
    name: "Kairi",
    text: [
			"Earn {C:money}$1{} at end of round",
			"for each {C:attention}Joker{} card",
    ],
    image_url: "img/kairi.png",
    rarity: "Common"
  },

  {
    name: "Roxas",
    text: [
			"This Joker gains {C:chips}+7{} Chips",
			"every {C:attention}13{} {C:inactive}[13]{} cards discarded",
    ],
    image_url: "img/roxas.png",
    rarity: "Uncommon"
  },
  
  {
    name: "Naminé",
    text: [
			"{C:enhanced}Doubles{} values of leftmost {C:attention}Joker{}",
			"and applies a {C:spectral}Perishable{} sticker",
			"after defeating a {C:attention}boss blind",
    ],
    image_url: "img/namine.png",
    rarity: "Rare"
  },

  {
    name: "Axel",
    text: [
			"Halves all {C:attention}listed{}",
			"{C:green,E:1}probabilities",
			"{C:inactive}(ex: {C:green}1 in 2{}{C:inactive} -> {C:green}0.5 in 2{}{C:inactive}){} ",
    ],
    image_url: "img/axel.png",
    rarity: "Uncommon"
  },

  {
    name: "Donald Duck",
    text: [
			"Copies the ability of a",
			"{C:attention}random Joker{} each round.",
    ],
    image_url: "img/donald.png",
    rarity: "Rare"
  },

  {
    name: "Goofy",
    text: [
			"Gives {C:mult}+3{} Mult",
			"for each {C:attention}wild{} card",
			"in your {C:attention}full deck{}",
    ],
    image_url: "img/goofy.png",
    rarity: "Uncommon"
  },

  {
    name: "Meeska Mooska",
    text: [
			"Every scored {C:attention}King{} has a",
			"{C:green}1 in 2{} chance to gain",
			"{C:chips}+4{} Chips and {X:mult,C:white}X0.25{} Mult",
    ],
    image_url: "img/mickey.png",
    rarity: "Rare"
  },

  {
    name: "Master Yen Sid",
    text: [
			"{C:green}1 in 3{} chance to",
			"create a {C:dark_edition}Negative{}",
			"{C:planet}Planet{} card when a",
			"{C:purple}Tarot{} card is used",
    ],
    image_url: "img/disney.png",
    rarity: "Common"
  },

  {
    name: "Nobody",
    text: [
			"Gains {C:chips}+13{} Chips per",
			"unique {C:attention}suit{} in played hand",
    ],
    image_url: "img/nobody.png",
    rarity: "Legendary"
  },

  {
    name: "Keyblade",
    text: [
			"If {C:attention}first hand{} of round is",
			"a single {C:attention}7{}, destroy it and",
			"create a {C:dark_edition}random {}{C:attention}Tag{}",
    ],
    image_url: "img/keyblade.png",
    rarity: "Common"
  },
  
  
  {
    name: "Seal Salt Ice Cream",
    text: [
			"Cards with a {C:blue}Blue Seal{}",
			"trigger when {C:attention}scored",
    ],
    image_url: "img/sealsalt.png",
    rarity: "Uncommon"
  },
  
  {
    name: "Paopu Fruit",
    text: [
			"Retrigger all played {C:diamonds}Diamond{} cards",
			"{C:green}1 in 7{} chance this card is",
			"eaten at the end of the round",
    ],
    image_url: "img/paopufruit.png",
    rarity: "Uncommon"
  },
  
  {
    name: "Half Face",
    text: [
			"Gives {C:chips}+75{} Chips for each",
			"{C:attention}face{} card in played hand",
			"that {C:attention}does not score{}",
    ],
    image_url: "img/xigbar.png",
    rarity: "Common"
  },
  
    
  {
    name: "BryceTheNobody",
    text: [
			"Every played {C:hearts}Heart{} card",
			"Has a {C:green}1 in 2{} chance",
			"to permanently gain",
			"{C:mult}+3{} Mult when scored",
    ],
    image_url: "img/brycethenobody.png",
    rarity: "Uncommon"
  },

]

// works the same. 
let consumables = [
  {
     name: "Keyblade",
     text: [
			"Converts up to",
			"{C:attention}5{} selected cards",
			"into {C:dark_edition}random {}{C:attention}Ranks{}"
     ],
     image_url: "img/tarotblade.png",
     rarity: "Tarot"
   },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Planet"
  // },
   {
     name: "Sorcerer",
     text: [
			"Creates a {C:dark_edition}Negative{} ",
			"{C:green}Uncommon{} {C:attention}Joker,{}",
			"{C:red}-1{} Hand Size"
     ],
     image_url: "img/sorcerer.png",
     rarity: "Spectral"
   },
   
   {
     name: "Gummi Ship",
     text: [
			"Destroys a random",
			"{C:attention}Joker{} card,",
			"{C:green}+1{} Hand Size"
     ],
     image_url: "img/gummiship.png",
     rarity: "Spectral"
   },
]

let card_modifications = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Enhancement"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Edition"
  // },
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Seal"
  // },
]

let decks = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/j_joker.png",
  //   rarity: "Deck"
  // },
]

let stickers = [
  // {
  //   name: "Joker",
  //   text: [
  //     "{C:mult}+4{} Mult"
  //   ],
  //   image_url: "img/sticker_example.png",
  //   rarity: "Sticker"
  // },
]

let blinds = [
  // {
  //   name: "The Wall",
  //   text: [
  //     "Extra large blind",
  //     "{C:inactive}({C:red}4x{C:inactive} Base for {C:attention}$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 2)"
  //   ],
  //   image_url: "img/the_wall.png",
  //   rarity: "Boss Blind"
  // },
  // {
  //   name: "Violet Vessel",
  //   text: [
  //     "Very large blind",
  //     "{C:inactive}({C:red}6x{C:inactive} Base for {C:attention}$$$$$$$${C:inactive})",
  //     "{C:inactive}(Appears from Ante 8)"
  //   ],
  //   image_url: "img/violet_vessel.png",
  //   rarity: "Showdown"
  // },
]

let shop_items = [
//  {
//    name: "Joker",
//    text: [
//      "{C:mult}+4{} Mult"
//    ],
//    image_url: "img/j_joker.png",
//    rarity: "Voucher"
//  },
//  {
//    name: "Joker",
//    text: [
//      "{C:mult}+4{} Mult"
//    ],
//    image_url: "img/j_joker.png",
//    rarity: "Pack"
//  },
]

let cols = {
  
  MULT: "#FE5F55",
  CHIPS: "#009dff",
  MONEY: "#f3b958",
  XMULT: "#FE5F55",
  FILTER: "#ff9a00",
  ATTENTION: "#ff9a00",
  BLUE: "#009dff",
  RED: "#FE5F55",
  GREEN: "#4BC292",
  PALE_GREEN: "#56a887",
  ORANGE: "#fda200",
  IMPORTANT: "#ff9a00",
  GOLD: "#eac058",
  YELLOW: "#ffff00",
  CLEAR: "#00000000", 
  WHITE: "#ffffff",
  PURPLE: "#8867a5",
  BLACK: "#374244",
  L_BLACK: "#4f6367",
  GREY: "#5f7377",
  CHANCE: "#4BC292",
  JOKER_GREY: "#bfc7d5",
  VOUCHER: "#cb724c",
  BOOSTER: "#646eb7",
  EDITION: "#ffffff",
  DARK_EDITION: "#5d5dff",
  ETERNAL: "#c75985",
  INACTIVE: "#ffffff99",
  HEARTS: "#f03464",
  DIAMONDS: "#f06b3f",
  SPADES: "#403995",
  CLUBS: "#235955",
  ENHANCED: "#8389DD",
  JOKER: "#708b91",
  TAROT: "#a782d1",
  PLANET: "#13afce",
  SPECTRAL: "#4584fa",
  VOUCHER: "#fd682b",
  EDITION: "#4ca893",
}

let rarities = {
  "Common": "#009dff", 
  "Uncommon": "#4BC292",
  "Rare": "#fe5f55",
  "Legendary": "#b26cbb",
  "Joker": "#708b91",
  "Tarot": "#a782d1",
  "Planet": "#13afce",
  "Spectral": "#4584fa",
  "Voucher": "#fd682b",
  "Pack": "#9bb6bd",
  "Enhancement": "#8389DD",
  "Edition": "#4ca893",
  "Seal": "#4584fa",
  "Deck": "#9bb6bd",
  "Sticker": "#5d5dff",
  "Boss Blind": "#5d5dff",
  "Showdown": "#4584fa",
}

regex = /{([^}]+)}/g;

let add_cards_to_div = (jokers, jokers_div) => {
  for (let joker of jokers) {
    console.log("adding joker", joker.name);
  
    joker.text = joker.text.map((line) => { return line + "{}"});
  
    joker.text = joker.text.join("<br/>");
    joker.text = joker.text.replaceAll("{}", "</span>");
    joker.text = joker.text.replace(regex, function replacer(match, p1, offset, string, groups) {
      let classes = p1.split(",");
  
      let css_styling = "";
  
      for (let i = 0; i < classes.length; i++) {
        let parts = classes[i].split(":");
        if (parts[0] === "C") {
          css_styling += `color: ${cols[parts[1].toUpperCase()]};`;
        } else if (parts[0] === "X") {
          css_styling += `background-color: ${cols[parts[1].toUpperCase()]}; border-radius: 5px; padding: 0 5px;`;
        }
      }
  
      return `</span><span style='${css_styling}'>`;
    });
  
    let joker_div = document.createElement("div");
    joker_div.classList.add("joker");
    if (joker.rarity === "Sticker" || joker.rarity == "Seal") {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" class="hasback" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else if (joker.soul) {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <span class="soulholder">
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-bg" />
          <img src="${joker.image_url}" alt="${joker.name}" class="soul-top" />
        </span>
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    } else {
      joker_div.innerHTML = `
        <h3>${joker.name}</h3>
        <img src="${joker.image_url}" alt="${joker.name}" />
        <h4 class="rarity" style="background-color: ${rarities[joker.rarity]}">${joker.rarity}</h4>
        <div class="text">${joker.text}</div>
      `;
    }
  
    jokers_div.appendChild(joker_div);
  }
}

if (jokers.length === 0) {
  document.querySelector(".jokersfull").style.display = "none"
} else {
  let jokers_div = document.querySelector(".jokers");
  add_cards_to_div(jokers, jokers_div);
}

if (consumables.length === 0) {
  document.querySelector(".consumablesfull").style.display = "none"
} else {
  let consumables_div = document.querySelector(".consumables");
  add_cards_to_div(consumables, consumables_div);
}

if (card_modifications.length === 0) {
  document.querySelector(".cardmodsfull").style.display = "none"
} else {
  let cardmods_div = document.querySelector(".cardmods");
  add_cards_to_div(card_modifications, cardmods_div);
}

if (decks.length === 0) {
  document.querySelector(".decksfull").style.display = "none"
} else {
  let decks_div = document.querySelector(".decks");
  add_cards_to_div(decks, decks_div);
}

if (stickers.length === 0) {
  document.querySelector(".stickersfull").style.display = "none"
} else {
  let stickers_div = document.querySelector(".stickers");
  add_cards_to_div(stickers, stickers_div);
}

if (blinds.length === 0) {
  document.querySelector(".blindsfull").style.display = "none"
} else {
  let blinds_div = document.querySelector(".blinds");
  add_cards_to_div(blinds, blinds_div);
}

if (shop_items.length === 0) {
  document.querySelector(".shopitemsfull").style.display = "none"
} else {
  let shopitems_div = document.querySelector(".shopitems");
  add_cards_to_div(shop_items, shopitems_div);
}