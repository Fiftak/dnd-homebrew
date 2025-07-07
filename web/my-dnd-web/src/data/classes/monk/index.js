import wayOfMercy from './way_of_mercy';
import wayOfShadow from './way_of_shadow';
import wayOfAscendantDragon from './way_of_ascendant_dragon';
import wayOfAshenSoul from './way_of_ashen_soul';
import wayOfDrunkenMaster from './way_of_drunken_master';
import wayOfFourElements from './way_of_four_elements';
import wayOfHollowPalm from './way_of_hollow_palm';
import wayOfOpenHand from './way_of_open_hand';
import wayOfShatteredFist from './way_of_shattered_fist';
import wayOfBloodyClaw from './way_of_bloody_claw';

const monk = {
  slug: 'monk',
  name: 'Monk',
  description: `
    Monks channel the energy called ki to unlock extraordinary martial and spiritual abilities.
    Through discipline and training, monks become living weapons, blending combat prowess with mystical techniques.
  `,
  hitDie: 'd8',
  primaryAbility: 'Dexterity & Wisdom',
  subclasses: [
    wayOfMercy,
    wayOfShadow,
    wayOfAscendantDragon,
    wayOfAshenSoul,
    wayOfDrunkenMaster,
    wayOfFourElements,
    wayOfHollowPalm,
    wayOfOpenHand,
    wayOfShatteredFist,
    wayOfBloodyClaw,
  ],
  features: [
    { level: 1, name: 'Unarmored Defense', description: 'Add Wisdom to AC while unarmored.' },
    { level: 1, name: 'Martial Arts', description: 'Attack quickly and with agility, using Dexterity in place of Strength.' },
    { level: 2, name: 'Ki', description: 'Channel supernatural abilities through ki points.' },
    { level: 2, name: 'Unarmored Movement', description: 'Move faster when not wearing armor.' },
    { level: 3, name: 'Monastic Tradition', description: 'Adopt a specific way, learning mystical techniques.' },
    // ...add more features as you wish!
  ]
};
export default monk;