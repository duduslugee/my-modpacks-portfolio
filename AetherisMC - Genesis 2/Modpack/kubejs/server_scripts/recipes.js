// priority: 0
ServerEvents.recipes(event => {

	//andesite alloy
	event.recipes.createMixing('2x create:andesite_alloy', 
	['minecraft:andesite','#forge:nuggets/aluminum','powah:dielectric_paste']);
	event.recipes.createMixing('2x create:andesite_alloy', 
	['minecraft:andesite','#forge:nuggets/zinc','powah:dielectric_paste']);
	event.blasting('create:andesite_alloy', 'kubejs:raw_andesite_alloy');
	event.smelting('create:andesite_alloy', 'kubejs:raw_andesite_alloy');
	
	//raw andesite alloy
	event.shaped('kubejs:raw_andesite_alloy', [
		'XXX',
		'YYY',
		'ZZZ'
	  ], {
		X: 'minecraft:andesite',
		Y: '#forge:ingots/aluminum',
		Z: 'powah:dielectric_paste'
	  })

	  event.shaped('kubejs:raw_andesite_alloy', [
		'XXX',
		'YYY',
		'ZZZ'
	  ], {
		X: 'minecraft:andesite',
		Y: '#forge:ingots/zinc',
		Z: 'powah:dielectric_paste'
	  })

	//pity machine frame
	event.shaped('industrialforegoing:machine_frame_pity', [
		'XYX',
		'YZY',
		'XYX'
	], {
		X: '#minecraft:logs',
		Y: '#forge:ingots/steel',
		Z: 'kubejs:simple_core'
	});

	//energizing orb
	event.shaped('powah:energizing_orb', [
		'XXX',
		'XZX',
		'YYY'
	], {
		X: '#forge:ingots/stellarium',
		Y: 'powah:dielectric_casing',
		Z: 'kubejs:explorer_core'
	});
})