import arcanaDomain from './arcana_domain';
import deathDomain from './death_domain';
import forgeDomain from './forge_domain';
import gravekeeperDomain from './gravekeeper_domain';
import knowledgeDomain from './knowledge_domain';
import lifeDomain from './life_domain';
import lightDomain from './light_domain';
import namelessSaintDomain from './nameless_saint_domain';
import natureDomain from './nature_domain';
import orderDomain from './order_domain';
import peaceDomain from './peace_domain';
import tempestDomain from './tempest_domain';
import trickeryDomain from './trickery_domain';
import twilightDomain from './twilight_domain';
import warDomain from './war_domain';

const cleric = {
  slug: 'cleric',
  name: 'Cleric',
  description: `
    Clerics are intermediaries between the mortal world and the distant planes of the gods. 
    As varied as the deities they serve, clerics strive to embody the divine principles of their patrons,
    harnessing magic through faith and devotion.
  `,
  hitDie: 'd8',
  primaryAbility: 'Wisdom',
  subclasses: [
    arcanaDomain,
    deathDomain,
    forgeDomain,
    gravekeeperDomain,
    knowledgeDomain,
    lifeDomain,
    lightDomain,
    namelessSaintDomain,
    natureDomain,
    orderDomain,
    peaceDomain,
    tempestDomain,
    trickeryDomain,
    twilightDomain,
    warDomain,
  ],
  features: [
    { level: 1, name: 'Spellcasting', description: 'Cast cleric spells using Wisdom.' },
    { level: 1, name: 'Divine Domain', description: 'Gain features based on your chosen domain.' },
    { level: 2, name: 'Channel Divinity', description: 'Invoke divine power for unique effects.' },
    { level: 5, name: 'Destroy Undead', description: 'Instantly destroy lesser undead with Channel Divinity.' },
    // Add all core class features up to level 20 as desired.
  ]
};
export default cleric;