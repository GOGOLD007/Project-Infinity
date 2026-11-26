// Server-side recipe changes for Project Infinity.
// Reloads with /reload. Docs: https://kubejs.com/wiki

ServerEvents.recipes(event => {
  // Example: GregTech-gate AE2's ME Controller behind a GT assembler recipe.
  // event.remove({ output: 'ae2:controller' })
  // event.recipes.gtceu.assembler('infinity:me_controller')
  //   .itemInputs('4x gtceu:steel_plate', '2x ae2:fluix_crystal', 'gtceu:lv_machine_hull')
  //   .itemOutputs('ae2:controller')
  //   .duration(200)
  //   .EUt(30)
})
