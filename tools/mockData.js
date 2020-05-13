const characters = [
  {
    id: 1,
    name: "Han Solo",
    species: "Human",
    career: "Smuggler",
    specializations: ["Scoundrel", "Pilot"],
    playerId: 1,
    level: 5,
  },
  {
    id: 2,
    name: "Chewbacca",
    species: "Wookie",
    career: "Technician",
    specializations: ["Mechanic"],
    playerId: 2,
    level: 8,
  },
];

const backgrounds = [
  {
    id: 0,
    description: "Unknown",
    descriptionDetail: "Unknown",
  },
  {
    id: 1,
    description: "The Down and Out",
    descriptionDetail:
      "\tYou come from humble or hardscrabble beginnings. Perhaps you were a farmer on some barren world, an indentured servent working for the Hutts, or abandoned from a young age to survive in the depths of Coruscant's underworld.\n\tYou know life is nasty, brutish, and short. You've seen more than your fair share of horror. You've seen friends and family members die from malnutrition, disease, or violence and witnessed tremendous injustice done to the weak or vulnerable.\n\n\tDespite (or because of) this harsh early view of the universe, you strive to better yourself and do your best to escape your plight. You train incessently, pick up knowledge any way you can, or you are tough and resourceful enough to go out on your own.\n\n\tHowever, leaving this rough-and-tumble life might not be as easy as it seems. You still have friends and family you've left behind in squalor, former comrades that take a dim view of you leaving their gang, or former \"employers\" that want you to finish up your \"contract\"",
  },
  {
    id: 2,
    description: "Middle Class Struggles",
    descriptionDetail:
      "You come from modest, but comfortable conditions. You know the meaning of hard work and don't come from a lot of money. You've had a taste of the good (or at least decent) life and starting your adventure is harder than it seems.\n\n\tYou might be anything from a skilled technician, minor political official, professional soldier, or any other hard-working lifestyle with pay that makes it worth it. You are no stranger to hard work and certain levels of injustice but you've likely been shielded from the truly darker side of the galaxy - crime, corruption, slavery, and conflict.",
  },
  {
    id: 3,
    description: "The High and Mighty",
    descriptionDetail:
      "As they say, the bigger you are, the harder you fall. You come from a life of high social standing, great wealth, or an existance of great comfort. Even you are subject to the whims of fate and you find yourself cast out from the life you once knew. Your fall from grace could have come in many forms: scandal, poor business decisions, war, revolution, or an enemy's revenge. In any event you've been ripped from your world and cast into the shadows.\n\n\tYou may have been landed gentry, a wealthy business owner, a doctor, politician, or any other position with wealth, status, and power. You'll find a rough life ahead. You might be fleeing your former life with little more than the (upscale) clothes on your back and only your abilities, skills, and will to survive.\n\n\tYou'll have obligations tied to your downfall. Perhaps you have a tremendous gambling debt. Or maybe an enemy has blackmailed you. You may have brought shamed upon your clan and been exiled.",
  },
  {
    id: 4,
    description: "The Outsider",
    descriptionDetail:
      "You come from a society outside the galactic norm. This could include planets not yet marked on a map, a prison colony, or solitude in the wilderness. You are most likely ill-informed or unaware of the politics, customs, or even technology of the rest of the galaxy. You might be superstitious of the strange sights around you, or you could embrace the wonders you encounter.\n\n\tHow did you manage to leave your isolated or primitive beginnings?",
  },
  {
    id: 5,
    description: "Other",
    descriptionDetail: "",
  },
];

const hooks = [
  {
    id: 0,
    description: "Unknown",
    descriptionDetail: "Unknown",
  },
  {
    id: 1,
    description: "Opportunity Knocks",
    descriptionDetail:
      "This might be the simplist explaination for wanting to live on the fringes of society. Maybe you are jumping at the first oppotunity to give yourself a better life, or you've been living a pampered life and seek a change. Or it could be as simple as making a last-second decision to jump on board a departing starship.",
  },
  {
    id: 2,
    description: "A Higher Calling",
    descriptionDetail:
      "There are always those who strive to change the galaxy--for better or for worse. Maybe you've made a vow to help others or you've felt a calling pulling you towards the edge of the galaxy.",
  },
  {
    id: 3,
    description: "Enemies and Antagonists",
    descriptionDetail:
      "Simply put, you rubbed somebody the wrong way and now you are forced to leave your old life behind.",
  },
  {
    id: 4,
    description: "A Failure of Character",
    descriptionDetail:
      "A flaw in your character has forced you to leave your life behind and head into the unknown. Your former society has pushed you out and forced you to deal with your addiction, obsession, or a betrayal. Your new life is a fresh start, or maybe you want to stay on the move to leave your troubles behind.",
  },
  {
    id: 5,
    description: "Wrong Place, Wrong Time",
    descriptionDetail:
      "You're thrown into your adventure through no fault of your own. Maybe you were captured by pirates, or were the sole survivor of a deadly plague. No matter what, it would be almost impossible to return to your old life. You'll have to quickly adapt to your new life.",
  },
  {
    id: 6,
    description: "Other",
    descriptionDetail: "",
  },
];

const newCharacter = {
  id: null,
  name: "",
  species: "",
  career: "",
  specializations: [],
  playerId: null,
  level: 1,
};

module.exports = {
  characters,
  backgrounds,
  hooks,
  newCharacter,
};
