import alchemist from './alchemist';
import armorer from './armorer';
import battleSmith from './battle_smith';
import fleshcrafter from './fleshcrafter';
import gunslinger from './gunslinger';
import scrapwright from './scrapwright';

const artificer = {
  slug: 'artificer',
  name: 'Artificer',
  description: `...`,
  hitDie: 'd10',
  primaryAbility: 'Strength, Charisma',
  subclasses: [
    alchemist,
    armorer,
    battleSmith,
    fleshcrafter,
    gunslinger,
    scrapwright
    // ...
  ],
  features: [
    { level: 1, name: 'Divine Sense', description: '...' },
    // ...
  ]
};
export default artificer;