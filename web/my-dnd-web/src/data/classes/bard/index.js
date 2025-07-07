import collegeOfCreation from './college_of_creation';
import collegeOfEloquence from './college_of_eloquence';
import collegeOfGlamour from './college_of_glamour';
import collegeOfSwords from './college_of_swords';
import collegeOfJestersMasquerade from './college_of_jesters_masquerade';
import collegeOfValor from './college_of_valor';
import collegeOfWhispers from './college_of_whispers';


const bard = {
  slug: 'bard',
  name: 'Bard',
  description: `
    Bards weave magic through music and the spoken word, inspiring allies and confounding foes. Their performances,
    whether rousing speech or mystical song, are at the heart of their spellcasting and power.
  `,
  hitDie: 'd8',
  primaryAbility: 'Charisma',
  subclasses: [
    collegeOfCreation,
    collegeOfEloquence,
    collegeOfGlamour,
    collegeOfSwords,
    collegeOfJestersMasquerade,
    collegeOfValor,
    collegeOfWhispers,
  ],
  features: [
    { level: 1, name: 'Bardic Inspiration', description: 'Inspire allies with dice to boost their rolls.' },
    { level: 1, name: 'Spellcasting', description: 'Cast spells from the bard spell list.' },
    { level: 2, name: 'Jack of All Trades', description: 'Add bonus to any ability check not already proficient in.' },
    { level: 2, name: 'Song of Rest', description: 'Heal allies during a short rest.' },
    // ...continue up to level 20 features as desired!
  ]
};
export default bard;