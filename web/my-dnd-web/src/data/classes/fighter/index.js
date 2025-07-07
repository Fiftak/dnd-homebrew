import arcaneArcher from './arcane_archer';
import battleMaster from './battle_master';
import bladewraith from './bladewraith';
import cavalier from './cavalier';
import champion from './champion';
import deathReaver from './death_reaver';
import dreadnought from './dreadnought';
import eldritchKnight from './eldritch_knight';
import bloodHerald from './blood_herald';
import runeKnight from './rune_knight';
import samurai from './samurai';

const fighter = {
  slug: 'fighter',
  name: 'Fighter',
  description: `
    Fighters are versatile warriors known for their mastery of weapons and tactics. Whether focusing on pure physical
    prowess or blending martial skill with supernatural power, fighters excel at adapting to any battlefield role.
  `,
  hitDie: 'd10',
  primaryAbility: 'Strength or Dexterity',
  subclasses: [
    arcaneArcher,
    battleMaster,
    bladewraith,
    cavalier,
    champion,
    deathReaver,
    dreadnought,
    eldritchKnight,
    bloodHerald,
    runeKnight,
    samurai,
  ],
  features: [
    { level: 1, name: 'Fighting Style', description: 'Choose a specialized combat technique.' },
    { level: 1, name: 'Second Wind', description: 'Regain hit points as a bonus action.' },
    { level: 2, name: 'Action Surge', description: 'Take one additional action on your turn.' },
    { level: 3, name: 'Martial Archetype', description: 'Choose a subclass to define your combat strategy.' },
    // ...continue with all core Fighter features.
  ]
};
export default fighter;