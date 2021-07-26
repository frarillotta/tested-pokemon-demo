import type { URLString } from './pokemon';

export type Abilities = {
    effect_changes: [],
    effect_entries: {
          effect: string,
          language:{
             name: string,
             url:URLString
          },
          short_effect:string
    }[],
    flavor_text_entries: {
          flavor_text: string,
          language:{
             name: string,
             url: URLString
          },
          version_group:{
            name: string,
            url: URLString
          }
    }[],
    generation:{
       name: string,
       url: URLString
    },
    id: number,
    is_main_series: boolean,
    name: string,
    names:{
          language:{
            name: string,
            url: URLString
          },
          name: string
       }[],
    pokemon: {
          is_hidden: boolean,
          pokemon:{
            name: string,
            url: URLString
          },
          slot: number
    }[]
 }