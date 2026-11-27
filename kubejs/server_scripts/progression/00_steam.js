// Steam age (bronze): the first magic blocks need GregTech's early metalwork.
// Recipe IDs and item IDs were checked against the mod jars in the pack.

ServerEvents.recipes(event => {
  // Botania Mana Spreader: copper ingot -> bronze plate.
  // (Removing this ID also removes the Garden of Glass variant.)
  event.remove({ id: 'botania:mana_spreader' })
  event.shaped('botania:mana_spreader', [
    'WWW',
    'BP ',
    'WWW'
  ], {
    W: '#botania:livingwood_logs',
    B: '#forge:plates/bronze',
    P: '#botania:petals'
  }).id('infinity:steam/mana_spreader')

  // Blood Magic Blood Altar: gold ingots -> bronze plates.
  event.remove({ id: 'bloodmagic:blood_altar' })
  event.shaped('bloodmagic:altar', [
    'S S',
    'SFS',
    'BBB'
  ], {
    S: '#forge:stone',
    F: 'minecraft:furnace',
    B: '#forge:plates/bronze'
  }).id('infinity:steam/blood_altar')

  // Ars Nouveau Imbuement Chamber: gold ingots -> gold plates.
  event.remove({ id: 'ars_nouveau:imbuement_chamber' })
  event.shaped('ars_nouveau:imbuement_chamber', [
    'XGX',
    'X X',
    'XGX'
  ], {
    X: 'ars_nouveau:archwood_planks',
    G: '#forge:plates/gold'
  }).id('infinity:steam/imbuement_chamber')
})
