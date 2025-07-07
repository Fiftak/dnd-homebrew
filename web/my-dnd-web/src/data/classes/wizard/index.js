import schoolOfAbjuration from './school_of_abjuration';
import schoolOfBladesinging from './school_of_bladesinging';
import schoolOfConjuration from './school_of_conjuration';
import schoolOfDivination from './school_of_divination';
import schoolOfEnchantment from './school_of_enchantment';
import schoolOfEvocation from './school_of_evocation';
import schoolOfIllusion from './school_of_illusion';
import schoolOfNecromancy from './school_of_necromancy';
import schoolOfRuinforging from './school_of_ruinforging';
import schoolOfAshenPyre from './school_of_ashen_pyre';
import schoolOfBlackThorn from './school_of_black_thorn';
import schoolOfDeepcaller from './school_of_deepcaller';
import schoolOfTransmutation from './school_of_transmutation';

const wizard = {
  slug: 'wizard',
  name: 'Wizard',
  description: `
    Wizards devote themselves to the study and mastery of arcane secrets. Their power comes from understanding and organizing magic
    into schools, each unlocking unique abilities and spells.
  `,
  hitDie: 'd6',
  primaryAbility: 'Intelligence',
  subclasses: [
    schoolOfAbjuration,
    schoolOfBladesinging,
    schoolOfConjuration,
    schoolOfDivination,
    schoolOfEnchantment,
    schoolOfEvocation,
    schoolOfIllusion,
    schoolOfNecromancy,
    schoolOfRuinforging,
    schoolOfAshenPyre,
    schoolOfBlackThorn,
    schoolOfDeepcaller,
    schoolOfTransmutation,
  ],
  features: [
    { level: 1, name: 'Spellcasting', description: 'Cast wizard spells using careful study of magic.' },
    { level: 1, name: 'Arcane Recovery', description: 'Recover some spell slots during a short rest.' },
    { level: 2, name: 'Arcane Tradition', description: 'Choose your magical school (subclass).' },
    // ...fill out more core features as desired!
  ]
};
export default wizard;