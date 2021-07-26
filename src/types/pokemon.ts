import { GenerationSprites } from './pokemon';
export type Pokemon = {
    abilities: {
          ability:{
             name: string,
             url: URLString
          },
          is_hidden: boolean,
          slot: number
       }[],
    base_experience: number,
    forms: {
          name: string,
          url:URLString
       }[],
    game_indices: {
          game_index: number,
          version:{
             name: string,
             url: URLString
          }
    }[],
    height: number,
    held_items: any[],
    id: number,
    is_default: boolean,
    location_area_encounters: string,
    moves: Move[],
    name: string,
    order: number,
    past_types: [],
    species:{
       name: string,
       url: string
    },
    sprites:{
		back_default: URLString | null,
		back_female: URLString | null,
		back_shiny: URLString | null,
		back_shiny_female: URLString | null,
		front_default: URLString | null,
		front_female: URLString | null,
		front_shiny: URLString | null,
		front_shiny_female: URLString | null,
       other:{
          dream_world: GenerationSprites,
          "official-artwork": GenerationSprites
       },
       versions:{
          "generation-i": {
             "red-blue": GenerationSprites,
             yellow: GenerationSprites
          },
            "generation-ii": {
             crystal: GenerationSprites,
             gold: GenerationSprites,
             silver: GenerationSprites
          },
          "generation-iii":{
             emerald: GenerationSprites,
             "firered-leafgreen": GenerationSprites,
             "ruby-sapphire": GenerationSprites
          },
          "generation-iv":{
             "diamond-pearl": GenerationSprites,
             "heartgold-soulsilver": GenerationSprites,
             platinum: GenerationSprites
          },
          "generation-v":{
             "black-white":{
                animated: GenerationSprites,
                GenerationSprites
             }
          },
          "generation-vi":{
             "omegaruby-alphasapphire": GenerationSprites,
             "x-y": GenerationSprites
          },
          "generation-vii":{
             icons: GenerationSprites,
             "ultra-sun-ultra-moon": GenerationSprites
          },
          "generation-viii":{
             icons: GenerationSprites
          }
       }
    },
    stats: Stat[],
    types: {
          slot: number,
          type:{
             name: "normal" | "fire" | "water" | "grass" | "electric" | "ice" | "fighting" | "poison" | "ground" | "flying" | "psychic" | "bug" | "rock" | "ghost" | "dark" | "dragon" | "steel" | "fairy",
             url: URLString
          }
       }[],
    weight: number
 }

export type GenerationSprites = {
    back_default: URLString | null,
    back_female: URLString | null,
    back_shiny: URLString | null,
    back_shiny_female: URLString | null,
    front_default: URLString | null,
    front_female: URLString | null,
    front_shiny: URLString | null,
    front_shiny_female: URLString | null
 };

export type Stat = {
	base_stat: number,
	effort: number,
	stat:{
	   name: "hp" | "attack" | "defense" | "special-defense" | "special-attack" | "speed",
	   url: URLString
	}
};

export type Move = {
	move:{
	   name: string,
	   url: URLString
	},
	version_group_details: {
		  level_learned_at: number,
		  move_learn_method:{
			 name: string,
			 url: URLString
		  },
		  version_group:{
			 name: string,
			 url: URLString
		  }
	  }[],
 }

export type URLString = `https://${string}`;
