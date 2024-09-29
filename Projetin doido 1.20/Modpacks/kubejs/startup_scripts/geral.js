// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
/*
	event.create('simple_core').displayName('Simple Core');
	event.create('advanced_core').displayName('Advanced Core');
	event.create('stellar_core').displayName('Stellar Core');
	event.create('technomancy_core').displayName('Technomancy Core');
	event.create('ultimate_core').displayName('Ultimate Core');
*/
	event.create('wood_gear').displayName('Wooden Gear');
	event.create('wood_plate').displayName('Wooden Plate');

	event.create('create:raw_andesite_alloy').texture("layer0", "kubejs:item/raw_material").color(0, 0xA9AFA1).tag("forge:raw_materials").tag(`forge:raw_materials/raw_andesite_alloy`);
	event.create('create:shaft_mold').texture("layer0", "kubejs:item/shaft_mold").tag("forge:shafts");
	
	//mechanisms
	event.create('create:initial_mechanism').displayName('Initial Mechanism').texture("layer0", "kubejs:item/mechanism").color(0x8A8D87);
	event.create('create:advanced_mechanism').displayName('Advanced Mechanism').texture("layer0", "kubejs:item/mechanism").color(0xD42F2F);
	event.create('create:stellar_mechanism').displayName('Stellar Mechanism').texture("layer0", "kubejs:item/mechanism").color(0xCFEFF6);
	event.create('create:krypton_mechanism').displayName('Krypton Mechanism').texture("layer0", "kubejs:item/mechanism").color(0xB765FF);
	event.create('create:dark_mechanism').displayName('Dark Mechanism').texture("layer0", "kubejs:item/mechanism").color(0x4F4F4F);


})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})
