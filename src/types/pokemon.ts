export default interface IPokemon {
  abilities:                Ability[];
  base_experience:          number;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               HeldItem[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

interface Ability {
  ability:   Species;
  is_hidden: boolean;
  slot:      number;
}

interface Species {
  name: string;
  url:  string;
}

interface GameIndex {
  game_index: number;
  version:    Species;
}

interface HeldItem {
  item:            Species;
  version_details: VersionDetail[];
}

interface VersionDetail {
  rarity:  number;
  version: Species;
}

interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  version_group:     Species;
}

interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

interface Type {
  slot: number;
  type: Species;
}
