import oathOfConquest from './oath_of_conquest';
import oathOfDevotion from './oath_of_devotion';
import oathOfGlory from './oath_of_glory';
import oathOfRedemption from './oath_of_redemption';
import oathOfAncients from './oath_of_ancients';
import oathOfBlightedCrusade from './oath_of_blighted_crusade';
import oathOfCrown from './oath_of_crown';
import oathOfForsaken from './oath_of_forsaken';
import oathOfPaleReaper from './oath_of_pale_reaper';
import oathOfVengeance from './oath_of_vengeance';
import oathOfCrimson from './oath_of_crimson';
import oathbreaker from './oathbreaker';

const paladin = {
  slug: 'paladin',
  name: 'Paladin',
  description: `
    Paladins are holy warriors bound by sacred oaths, defenders of order, justice, and ideals greater than themselves. 
    Their power flows from their convictions and their sworn oaths which grant unique abilities in battle and beyond.
  `,
  hitDie: 'd10',
  primaryAbility: 'Strength & Charisma',
  subclasses: [
    oathOfConquest,
    oathOfDevotion,
    oathOfGlory,
    oathOfRedemption,
    oathOfAncients,
    oathOfBlightedCrusade,
    oathOfCrown,
    oathOfForsaken,
    oathOfPaleReaper,
    oathOfVengeance,
    oathOfCrimson,
    oathbreaker,
  ],
  features: [
    { level: 1, name: 'Divine Sense', description: 'Sense celestial, fiend, or undead presence nearby.' },
    { level: 1, name: 'Lay on Hands', description: 'Heal the wounded with a pool of healing points.' },
    { level: 2, name: 'Divine Smite', description: 'Imbue weapon strikes with divine energy for extra damage.' },
    { level: 3, name: 'Sacred Oath', description: 'Swear an oath that grants unique powers (subclass).' },
    // ...add more class features as desired!
  ]
};
export default paladin;