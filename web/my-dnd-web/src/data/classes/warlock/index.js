import theArchfeyProdigy from './the_archfey_prodigy';
import theChainsOfBelphegor from './the_chains_of_belphegor';
import theCrimsonDuke from './the_crimson_duke';
import theDrownedQueen from './the_drowned_queen';
import theGenieServant from './the_genie_servant';
import theGreatOldOne from './the_great_old_one';
import theHexbladeSlayer from './the_hexblade_slayer';
import theInfernalRegent from './the_infernal_regent';
import theLamentingSeraph from './the_lamenting_seraph';
import theLaughingTrickster from './the_laughing_trickster';
import theMawBeneath from './the_maw_beneath';
import thePitbornParasite from './the_pitborn_parasite';
import theRadiantMartyr from './the_radiant_martyr';
import theThousandFacedLiar from './the_thousand_faced_liar';

const warlock = {
  slug: 'warlock',
  name: 'Warlock',
  description: `
    Warlocks are arcane seekers who strike pacts with powerful patrons—from eldritch beings, ancient fey, or titans of the Lower Planes.
    Their magic is born from bargains and the strange gifts of their extraordinary benefactors.
  `,
  hitDie: 'd8',
  primaryAbility: 'Charisma',
  subclasses: [
    theArchfeyProdigy,
    theChainsOfBelphegor,
    theCrimsonDuke,
    theDrownedQueen,
    theGenieServant,
    theGreatOldOne,
    theHexbladeSlayer,
    theInfernalRegent,
    theLamentingSeraph,
    theLaughingTrickster,
    theMawBeneath,
    thePitbornParasite,
    theRadiantMartyr,
    theThousandFacedLiar,
  ],
  features: [
    { level: 1, name: 'Otherworldly Patron', description: 'Choose the supernatural force that granted your magic (subclass).' },
    { level: 1, name: 'Pact Magic', description: 'You can cast warlock spells thanks to your patron.' },
    { level: 2, name: 'Eldritch Invocations', description: 'Choose magical enhancements to augment your abilities.' },
    { level: 3, name: 'Pact Boon', description: 'Gain a magical gift—like a familiar, weapon, or book.' },
    // ...add more features as desired!
  ]
};
export default warlock;