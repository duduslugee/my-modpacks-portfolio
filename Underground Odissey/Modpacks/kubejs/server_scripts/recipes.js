// priority: 0

console.info('Recipes.js iniciando...');

ServerEvents.recipes(event => {
//receitas...
//woodgear
	event.shaped(
	  Item.of('kubejs:wood_gear', 1),
	  [
	    ' A ',
	    'ABA', 
	    ' A '
	  ],
	  {
	    A: '#minecraft:planks',
	    B: '#minecraft:wooden_buttons'
	  }
	)

//woodplate
	event.shapeless(
	  Item.of('kubejs:wood_plate', 1),
	  [
	    '#alltheores:ore_hammers',
	    '#minecraft:planks', 
	    '#minecraft:planks'
	  ]
	)

//receita das builders wand
event.shaped(
	  'constructionwand:diamond_wand',
	  [
	    '  A',
	    ' B ', 
	    'B  '
	  ],
	  {
	    A: 'botania:quartz_mana',
	    B: '#forge:rods/wooden'
	  }
	)

//receita water condensator
event.shaped(
	  'watercondenser:watercondenser',
	  [
	    'BDB',
	    'ACA', 
	    'AAA'
	  ],
	  {
	    A: '#minecraft:logs',
	    B: '#minecraft:leaves',
	    C: 'ceramicbucket:ceramic_bucket',
	    D: '#forge:rods'
	  }
	)

//receita sifter
event.remove({ output: 'createsifter:sifter' });
event.shaped(
	  'createsifter:sifter',
	  [
	    'BDB',
	    'BCB',
	    ' A '
	  ],
	  {
	    A: 'minecraft:smooth_stone',
	    B: 'woodenhopper:wooden_hopper',
	    C: '#forge:gears/wood',
	    D: '#forge:shafts'
	  }
	)

//recipe hand crank
event.shaped(
	  'create:hand_crank',
	  [
	    '   ',
	    'AAA', 
	    '  B'
	  ],
	  {
	    A: '#minecraft:logs',
	    B: '#forge:gears/wood'
	  }
	)

//receita millstone
event.remove({ output: 'create:millstone' });
event.shaped(
	  'create:millstone',
	  [
	    'ABA',
	    'CEC', 
	    'DDD'
	  ],
	  {
	    A: '#minecraft:planks',
	    B: '#forge:shafts',
	    C: 'woodenhopper:wooden_hopper',
	    D: 'minecraft:smooth_stone',
	    E: '#forge:gears/stone'
	  }
	)

//receita waterwheel
event.shaped(
	  'create:water_wheel',
	  [
	    'AAA',
	    'ABA', 
	    'AAA'
	  ],
	  {
	    A: '#minecraft:planks',
	    B: '#forge:shafts'
	  }
	)

})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

