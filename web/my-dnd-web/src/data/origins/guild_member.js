const guildMember = {
  slug: 'guild_member',
  name: 'Guild Member',
  description: `
    You have spent your life in the service of a temple to a specific god or pantheon of gods. You act as an intermediary
    between the divine and the mortal world, performing sacred rites and offering sacrifices and prayers on behalf of others.
  `,
  abilityScores: {
    wisdom: 2,
    charisma: 1,
  },
  feat: 'divine_inspiration',  // This should match a feat slug in /data/feats
  toolProficiencies: ['Holy Symbol (Religious Focus)'],
  equipment: [
    'Prayer book or prayer wheel',
    '5 sticks of incense',
    'Vestments',
    'Common clothes',
    'Belt pouch containing 15 gp',
  ],
  photo: '/images/origins/acolyte.png', // Path to a photo or leave empty string if none yet
};

export default guildMember;