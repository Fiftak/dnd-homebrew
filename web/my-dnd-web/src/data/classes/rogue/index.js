import arcaneTrickster from './arcane_trickster';
import assassin from './assassin';
import bloodletter from './bloodletter';
import phantom from './phantom';
import scout from './scout';
import soulknife from './soulknife';
import stalker from './stalker';
import swashbuckler from './swashbuckler';
import thief from './thief';

const rogue = {
  slug: 'rogue',
  name: 'rogue',
  description: `
    rogue are masters of stealth, cunning, and quick thinking. Whether infiltrating enemy strongholds or
    striking quickly from the shadows, rogue rely on skill and subtlety over brute force.
  `,
  hitDie: 'd8',
  primaryAbility: 'Dexterity',
  subclasses: [
    arcaneTrickster,
    assassin,
    bloodletter,
    phantom,
    scout,
    soulknife,
    stalker,
    swashbuckler,
    thief,
  ],
  features: [
    { level: 1, name: 'Sneak Attack', description: 'Deal extra damage by catching foes off guard.' },
    { level: 2, name: 'Cunning Action', description: 'Dash, Disengage, or Hide as a bonus action.' },
    { level: 3, name: 'Roguish Archetype', description: 'Choose your unique path as a rogue.' },
    // ...continue with more core features if you wish!
  ]
};
export default rogue;