import ashenWarden from './ashen_warden';
import beastMaster from './beast_master';
import feyWanderer from './fey_wanderer';
import ghostwalker from './ghostwalker';
import hollowfang from './hollowfang';
import monsterHunter from './monster_hunter';
import carmineMarksman from './carmine_marksman';
import gloomStalker from './gloom_stalker';

const ranger = {
  slug: 'ranger',
  name: 'Ranger',
  description: `
    Rangers are masters of survival, tracking, and nature magic, defending the wilderness and battling threats wherever they appear.
    Specialists in favored terrain and adaptable fighters, rangers walk the line between civilization and the wild.
  `,
  hitDie: 'd10',
  primaryAbility: 'Dexterity & Wisdom',
  subclasses: [
    ashenWarden,
    beastMaster,
    feyWanderer,
    ghostwalker,
    hollowfang,
    monsterHunter,
    carmineMarksman,
    gloomStalker,
  ],
  features: [
    { level: 1, name: 'Favored Enemy', description: 'Hunt a chosen type of creature with greater skill.' },
    { level: 1, name: 'Natural Explorer', description: 'Master survival and travel in your favored terrain.' },
    { level: 2, name: 'Fighting Style', description: 'Specialize in a particular form of combat.' },
    { level: 3, name: 'Ranger Archetype', description: 'Choose a path that grants unique benefits (subclass).' },
    // ...more features as you expand!
  ]
};
export default ranger;