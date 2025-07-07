import abyssTouched from './abyss_touched';
import bloodMage from './blood_mage';
import divineSoul from './divine_soul';
import draconicLineage from './draconic_lineage';
import lunarSorcery from './lunar_sorcery';
import shadowMagic from './shadow_magic';
import spellfire from './spellfire';
import stormSorcery from './storm_sorcery';
import wildMagic from './wild_magic';

const sorcerer = {
  slug: 'sorcerer',
  name: 'Sorcerer',
  description: `
    Sorcerers possess innate magical talent, their power flowing from arcane bloodlines, cosmic events, or strange forces. 
    They cast spells naturally, shaping magical energy to their will.
  `,
  hitDie: 'd6',
  primaryAbility: 'Charisma',
  subclasses: [
    abyssTouched,
    bloodMage,
    divineSoul,
    draconicLineage,
    lunarSorcery,
    shadowMagic,
    spellfire,
    stormSorcery,
    wildMagic,
  ],
  features: [
    { level: 1, name: 'Spellcasting', description: 'Cast spells using Charisma.' },
    { level: 1, name: 'Sorcerous Origin', description: 'Choose your arcane heritage (subclass).' },
    { level: 2, name: 'Font of Magic', description: 'Access sorcery points for magical effects.' },
    { level: 3, name: 'Metamagic', description: 'Shape magic in unique ways.' },
    // ...continue core features as you wish!
  ]
};
export default sorcerer;