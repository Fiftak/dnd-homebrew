import circleOfBloodwood from './circle_of_bloodwood';
import circleOfDeepSea from './circle_of_deep_sea';
import circleOfDreams from './circle_of_dreams';
import circleOfHollowBeast from './circle_of_hollow_beast';
import circleOfLand from './circle_of_land';
import circleOfPrimalPact from './circle_of_primal_pact';
import circleOfSpores from './circle_of_spores';
import circleOfStars from './circle_of_stars';
import circleOfTheMoons from './circle_of_the_moons';
import circleOfRotbloom from './circle_of_rotbloom';
import circleOfWildfire from './circle_of_wildfire';

const druid = {
  slug: 'druid',
  name: 'Druid',
  description: `
    Druids are nature’s mystics: defenders of the wilds, keepers of ancient secrets, and guardians of the balance.
    They draw on primal forces to cast spells, assume animal forms, and channel the raw energies of nature through
    their chosen Circle.
  `,
  hitDie: 'd8',
  primaryAbility: 'Wisdom',
  subclasses: [
    circleOfBloodwood,
    circleOfDeepSea,
    circleOfDreams,
    circleOfHollowBeast,
    circleOfLand,
    circleOfPrimalPact,
    circleOfSpores,
    circleOfStars,
    circleOfTheMoons,
    circleOfRotbloom,
    circleOfWildfire,
  ],
  features: [
    { level: 1, name: 'Druidic', description: 'You know the secret language of druids.' },
    { level: 1, name: 'Spellcasting', description: 'Cast druid spells using Wisdom.' },
    { level: 2, name: 'Wild Shape', description: 'Transform into animals and other creatures of the wild.' },
    // ...continue listing class features through level 20 as desired!
  ]
};
export default druid;