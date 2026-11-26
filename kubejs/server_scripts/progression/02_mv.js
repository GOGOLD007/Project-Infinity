// MV (128 EU/t): late-early-game magic and the AE2 network core.

ServerEvents.recipes(event => {
  // Botania Terrestrial Agglomeration Plate: the middle lapis block becomes an MV circuit.
  event.remove({ id: 'botania:terra_plate' })
  event.shaped('botania:terra_plate', [
    'LCL',
    '0M1',
    '283'
  ], {
    L: 'minecraft:lapis_block',
    C: '#gtceu:circuits/mv',
    M: '#botania:manasteel_blocks',
    0: 'botania:rune_water',
    1: 'botania:rune_fire',
    2: 'botania:rune_earth',
    3: 'botania:rune_air',
    8: 'botania:rune_mana'
  }).id('infinity:mv/terra_plate')

  // AE2 ME Controller: only made in an MV Assembler.
  event.remove({ id: 'ae2:network/blocks/controller' })
  event.recipes.gtceu.assembler('infinity:mv/me_controller')
    .itemInputs(
      '4x ae2:smooth_sky_stone_block',
      '4x ae2:fluix_crystal',
      'ae2:engineering_processor',
      '#gtceu:circuits/mv'
    )
    .itemOutputs('ae2:controller')
    .duration(400)
    .EUt(120)
})
