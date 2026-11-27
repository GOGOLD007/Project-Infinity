// LV (32 EU/t): the core magic crafting stations need LV circuits and steel.

ServerEvents.recipes(event => {
  // Botania Runic Altar: both variants (mana pearl / mana diamond) now need steel plates.
  event.remove({ id: 'botania:runic_altar' })
  event.remove({ id: 'botania:runic_altar_alt' })
  event.shaped('botania:runic_altar', [
    'SSS',
    'TPT'
  ], {
    S: 'botania:livingrock',
    T: '#forge:plates/steel',
    P: 'botania:mana_pearl'
  }).id('infinity:lv/runic_altar')

  // Ars Nouveau Enchanting Apparatus: the diamond becomes an LV circuit and the gold ingots become gold plates.
  event.remove({ id: 'ars_nouveau:enchanting_apparatus' })
  event.shaped('ars_nouveau:enchanting_apparatus', [
    'NSN',
    'GCG',
    'NSN'
  ], {
    N: '#forge:nuggets/gold',
    S: 'ars_nouveau:sourcestone',
    G: '#forge:plates/gold',
    C: '#gtceu:circuits/lv'
  }).id('infinity:lv/enchanting_apparatus')

  // Blood Magic Alchemy Table: the iron ingot becomes an LV circuit.
  event.remove({ id: 'bloodmagic:alchemy_table' })
  event.shaped('bloodmagic:alchemytable', [
    'SSS',
    'WCW',
    'GOG'
  ], {
    S: '#forge:stone',
    W: '#minecraft:planks',
    C: '#gtceu:circuits/lv',
    G: '#forge:ingots/gold',
    O: 'bloodmagic:blankslate'
  }).id('infinity:lv/alchemy_table')

  // AE2 Inscriber: sticky piston -> LV Electric Piston, iron -> steel plates.
  event.remove({ id: 'ae2:network/blocks/inscribers' })
  event.shaped('ae2:inscriber', [
    'TPT',
    'C T',
    'TPT'
  ], {
    T: '#forge:plates/steel',
    P: 'gtceu:lv_electric_piston',
    C: '#forge:plates/copper'
  }).id('infinity:lv/inscriber')

  // GregTech -> Botania: make Manasteel in an LV Alloy Smelter from iron and mana powder.
  // This is an extra recipe; the mana pool route still works.
  event.recipes.gtceu.alloy_smelter('infinity:lv/manasteel_ingot')
    .itemInputs('#forge:ingots/iron', 'botania:mana_powder')
    .itemOutputs('botania:manasteel_ingot')
    .duration(100)
    .EUt(16)
})
