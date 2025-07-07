import pathOfBerserker from './path_of_berserker';
import pathOfBloodfury from './path_of_bloodfury';
import pathOfGigantSlayer from './path_of_gigant_slayer';
import pathOfHollowed from './path_of_hollowed';
import pathOfJuggernaut from './path_of_juggernaut';
import pathOfPrimalPact from './path_of_primal_pact';
import pathOfShackledTitan from './path_of_shackled_titan';
import pathOfTotemWarrior from './path_of_totem_warrior';

const barbarian = {
  slug: 'barbarian',
  name: 'Barbarian',
  description: `
    Barbarians are primal warriors who channel their rage into relentless fury, shrugging off wounds and 
    unleashing devastating attacks. The call of battle fuels their power, and their resilience makes them 
    legends among warriors.
  `,
  hitDie: 'd12',
  primaryAbility: 'Strength',
  subclasses: [
    pathOfBerserker,
    pathOfBloodfury,
    pathOfGigantSlayer,
    pathOfHollowed,
    pathOfJuggernaut,
    pathOfPrimalPact,
    pathOfShackledTitan,
    pathOfTotemWarrior,
  ],
  features: [
    { level: 1, name: 'Rage', description: 'Enter a violent rage for bonus damage and resilience.' },
    { level: 1, name: 'Unarmored Defense', description: 'Gain better defenses while not wearing armor.' },
    { level: 2, name: 'Reckless Attack', description: 'Attack boldly, trading defense for advantage.' },
    { level: 2, name: 'Danger Sense', description: 'Advantage on Dexterity saves against effects you can see.' },
    // ...add all Barbarian class features here!
  ]
};
export default barbarian;