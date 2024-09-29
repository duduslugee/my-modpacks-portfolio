// priority: 0

console.info('Hello, World! (You will only see this line once in console, during startup)')

StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
	event.create('simple_core').displayName('Simple Core');
	event.create('advanced_core').displayName('Advanced Core');
	event.create('explorer_core').displayName('Explorer Core');
	event.create('space_core').displayName('Space Core');
	event.create('ultimate_core').displayName('Ultimate Core');
	event.create('wood_gear').displayName('Wooden Gear');
	event.create('wood_plate').displayName('Wooden Plate');
	event.create('raw_andesite_alloy').displayName('Raw Andesite Alloy');
	event.create('negative_core').displayName('Negative Core');

})

StartupEvents.registry('block', event => {
	// Register new blocks here
	// event.create('example_block').material('wood').hardness(1.0).displayName('Example Block')
})


StartupEvents.registry('fluid', event => {
//fluidos custom meu
	event.create('liquid_simple_core')
    	.thickTexture(0x830101)
    	.bucketColor(0x830101)
    	.displayName('Liquid Simple Core')
  		.luminosity(8)

	event.create('liquid_advanced_core')
		.thickTexture(0xD8D850)
		.bucketColor(0xD8D850)
		.displayName('Liquid Advanced Core')
		.luminosity(8)

	event.create('liquid_explorer_core')
   		.thickTexture(0x9250D8)
    	.bucketColor(0x9250D8)
    	.displayName('Liquid Explorer Core')
  		.luminosity(8)
	
	event.create('liquid_space_core')
		.thickTexture(0x50C8D8)
	    .bucketColor(0x50C8D8)
	    .displayName('Liquid Space Core')
		.luminosity(8)
})


Platform.mods.kubejs.name = 'Expert Sky'