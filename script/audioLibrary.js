/**
 * Module that defines all audio files
 */
var AudioLibrary = {
    EVENT_FRIENDLY_OUTPOST: '/audio/friendly-outpost.wav',
    EVENT_SWAMP: '/audio/swamp.wav',
    EVENT_CAVE: '/audio/cave.wav',
    EVENT_TOWN: '/audio/town.wav',
    EVENT_CITY: '/audio/city.wav',
    EVENT_HOUSE: '/audio/house.wav',
    EVENT_BATTLEFIELD: '/audio/battlefield.wav',
    EVENT_BOREHOLE: '/audio/borehole.wav',
    EVENT_CRASHED_SHIP: '/audio/crashed-ship.wav',
    EVENT_SULPHUR_MINE: '/audio/sulphurmine.wav',
    EVENT_COAL_MINE: '/audio/coalmine.wav',
    EVENT_IRON_MINE: '/audio/ironmine.wav',
    EVENT_DESTROYED_VILLAGE: '/audio/destroyed-village.wav',
    EVENT_NOMAD: '/audio/nomad.wav',
    EVENT_NOISES_OUTSIDE: '/audio/noises-outside.wav',
    EVENT_NOISES_INSIDE: '/audio/noises-inside.wav',
    EVENT_BEGGAR: '/audio/beggar.wav',
    EVENT_SHADY_BUILDER: '/audio/shady-builder.wav',
    EVENT_MYSTERIOUS_WANDERER: '/audio/mysterious-wanderer.wav',
    EVENT_SCOUT: '/audio/scout.wav',
    EVENT_WANDERING_MASTER: '/audio/wandering-master.wav',
    EVENT_SICK_MAN: '/audio/sick-man.wav',
    EVENT_RUINED_TRAP: '/audio/ruined-trap.wav',
    EVENT_HUT_FIRE: '/audio/hut-fire.wav',
    EVENT_SICKNESS: '/audio/sickness.wav',
    EVENT_PLAGUE: '/audio/plague.wav',
    EVENT_BEAST_ATTACK: '/audio/beast-attack.wav',
    EVENT_SOLDIER_ATTACK: '/audio/soldier-attack.wav',
    EVENT_THIEF: '/audio/thief.wav',
    ENCOUNTER_SNARLING_BEAST: '/audio/snarling-beast.wav',
    ENCOUNTER_GAUNT_MAN: '/audio/gaunt-man.wav',
    ENCOUNTER_STRANGE_BIRD: '/audio/strange-bird.wav',
    ENCOUNTER_SHIVERING_MAN: '/audio/shivering-man.wav',
    ENCOUNTER_MAN_EATER: '/audio/man-eater.wav',
    ENCOUNTER_SCAVENGER: '/audio/scavenger.wav',
    ENCOUNTER_HUGE_LIZARD: '/audio/huge-lizard.wav',
    ENCOUNTER_FERAL_TERROR: '/audio/feral-terror.wav',
    ENCOUNTER_SOLDIER: '/audio/soldier.wav',
    ENCOUNTER_SNIPER: '/audio/sniper.wav',
    MUSIC_DUSTY_PATH: '/audio/dusty-path.wav',
    MUSIC_SILENT_FOREST: '/audio/silent-forest.wav',
    MUSIC_LONELY_HUT: '/audio/lonely-hut.wav',
    MUSIC_TINY_VILLAGE: '/audio/tiny-village.wav',
    MUSIC_MODEST_VILLAGE: '/audio/modest-village.wav',
    MUSIC_LARGE_VILLAGE: '/audio/large-village.wav',
    MUSIC_RAUCOUS_VILLAGE: '/audio/raucous-village.wav',
    MUSIC_COMBAT: '/audio/combat.wav',
    MUSIC_EVENT: '/audio/event.wav',
    MUSIC_FIRE_DEAD: '/audio/fire-dead.wav',
    MUSIC_FIRE_SMOLDERING: '/audio/fire-smoldering.wav',
    MUSIC_FIRE_FLICKERING: '/audio/fire-flickering.wav',
    MUSIC_FIRE_BURNING: '/audio/fire-burning.wav',
    MUSIC_FIRE_ROARING: '/audio/fire-roaring.wav',
    MUSIC_WORLD: '/audio/world.wav',
    MUSIC_SPACE: '/audio/space.wav',
    MUSIC_TROPOSPHERE: '/audio/troposphere.wav',
    MUSIC_STRATOSPHERE: '/audio/stratosphere.wav',
    MUSIC_MESOSPHERE: '/audio/mesosphere.wav',
    MUSIC_THERMOSPHERE: '/audio/thermosphere.wav',
    MUSIC_EXOSPHERE: '/audio/exosphere.wav',
    MUSIC_ENDING: '/audio/ending.wav',
    MUSIC_SHIP: '/audio/ship.wav',
    BUILD_TRAP: '/audio/build-trap.wav',
    BUILD_CART: '/audio/build-cart.wav',
    BUILD_HUT: '/audio/build-hut.wav',
    BUILD_LODGE: '/audio/build-lodge.wav',
    BUILD_TRADING_POST: '/audio/build-trading-post.wav',
    BUILD_TANNERY: '/audio/build-tannery.wav',
    BUILD_SMOKEHOUSE: '/audio/build-smokehouse.wav',
    BUILD_WORKSHOP: '/audio/build-workshop.wav',
    BUILD_STEELWORKS: '/audio/build-steelworks.wav',
    BUILD_ARMOURY: '/audio/build-armoury.wav',
    CRAFT_TORCH: '/audio/craft-torch.wav',
    CRAFT_WATERSKIN: '/audio/craft-waterskin.wav',
    CRAFT_CASK: '/audio/craft-cask.wav',
    CRAFT_WATER_TANK: '/audio/craft-water-tank.wav',
    CRAFT_BONE_SPEAR: '/audio/craft-bone-spear.wav',
    CRAFT_RUCKSACK: '/audio/craft-rucksack.wav',
    CRAFT_WAGON: '/audio/craft-wagon.wav',
    CRAFT_CONVOY: '/audio/craft-convoy.wav',
    CRAFT_LEATHER_ARMOUR: '/audio/craft-leather-armour.wav',
    CRAFT_IRON_ARMOUR: '/audio/craft-iron-armour.wav',
    CRAFT_STEEL_ARMOUR: '/audio/craft-steel-armour.wav',
    CRAFT_IRON_SWORD: '/audio/craft-iron-sword.wav',
    CRAFT_STEEL_SWORD: '/audio/craft-steel-sword.wav',
    CRAFT_RIFLE: '/audio/craft-rifle.wav',
    BUY_SCALES: '/audio/buy-scales.wav',
    BUY_TEETH: '/audio/buy-teeth.wav',
    BUY_IRON: '/audio/buy-iron.wav',
    BUY_COAL: '/audio/buy-coal.wav',
    BUY_STEEL: '/audio/buy-steel.wav',
    BUY_MEDICINE: '/audio/buy-medicine.wav',
    BUY_BULLETS: '/audio/buy-bullets.wav',
    BUY_ENERGY_CELL: '/audio/buy-energy-cell.wav',
    BUY_BOLAS: '/audio/buy-bolas.wav',
    BUY_GRENADE: '/audio/buy-grenade.wav',
    BUY_BAYONET: '/audio/buy-bayonet.wav',
    BUY_ALIEN_ALLOY: '/audio/buy-alien-alloy.wav',
    BUY_COMPASS: '/audio/buy-compass.wav',
    EMBARK: '/audio/embark.wav',
    GATHER_WOOD: '/audio/gather-wood.wav',
    CHECK_TRAPS: '/audio/check-traps.wav',
    TRIGGER_FIGHT: '/audio/trigger-fight.wav',
    TRIGGER_EVENT: '/audio/trigger-event.wav',
    ENEMY_HIT: '/audio/enemy-hit.wav',
    EAT_MEAT: '/audio/eat-meat.wav',
    USE_MEDS: '/audio/use-meds.wav',
    WIN_FIGHT: '/audio/win-fight.wav',
    LOST_FIGHT: '/audio/lose-fight.wav',
    LIGHT_FIRE: '/audio/light-fire.wav',
    STOKE_FIRE: '/audio/stoke-fire.wav',
    FOOTSTEPS1: '/audio/footsteps-1.wav',
    FOOTSTEPS2: '/audio/footsteps-2.wav',
    FOOTSTEPS3: '/audio/footsteps-3.wav',
    DEATH_STARVED: '/audio/death-starved.wav',
    DEATH_DEHYDRATED: '/audio/death-dehydrated.wav',
    ASTEROID_HIT1: '/audio/asteroid-hit-1.wav',
    ASTEROID_HIT2: '/audio/asteroid-hit-2.wav',
    ASTEROID_HIT3: '/audio/asteroid-hit-3.wav',
    CRASH: '/audio/crash.wav',
    REINFORCE_HULL: '/audio/reinforce-hull.wav',
    UPGRADE_ENGINE: '/audio/upgrade-engine.wav',
    LIFT_OFF: '/audio/lift-off.wav',
    PUNCH: '/audio/punch.wav',
    STAB: '/audio/stab.wav',
    SWING: '/audio/swing.wav',
    SLASH: '/audio/slash.wav',
    THRUST: '/audio/thrust.wav',
    SHOOT: '/audio/shoot.wav',
    BLAST: '/audio/blast.wav',
    TANGLE: '/audio/tangle.wav'
};