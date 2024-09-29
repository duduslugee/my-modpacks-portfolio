ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);

//string mesh
sifter([
		Item.of('minecraft:cocoa_beans').withChance(0.03), 
		Item.of('minecraft:cactus').withChance(0.05),
		Item.of('minecraft:sugar_cane').withChance(0.05)
	
	], 
['minecraft:sand', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:cocoa_beans').withChance(0.05), 
		Item.of('minecraft:cactus').withChance(0.07),
		Item.of('minecraft:sugar_cane').withChance(0.07)
	], 
['minecraft:sand', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('kubejs:iron_pieces').withChance(0.1),
		Item.of('minecraft:cocoa_beans').withChance(0.07), 
		Item.of('minecraft:cactus').withChance(0.1),
		Item.of('minecraft:sugar_cane').withChance(0.1)
	],
['minecraft:sand', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('kubejs:iron_pieces').withChance(0.2),
		Item.of('minecraft:cocoa_beans').withChance(0.1), 
		Item.of('minecraft:cactus').withChance(0.15),
		Item.of('minecraft:sugar_cane').withChance(0.15)
	],
['minecraft:sand', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('kubejs:iron_pieces').withChance(0.3),
		Item.of('minecraft:cocoa_beans').withChance(0.125), 
		Item.of('minecraft:cactus').withChance(0.2),
		Item.of('minecraft:sugar_cane').withChance(0.2)
	], 
['minecraft:sand', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('kubejs:iron_pieces').withChance(0.4),
		Item.of('minecraft:cocoa_beans').withChance(0.15), 
		Item.of('minecraft:cactus').withChance(0.25),
		Item.of('minecraft:sugar_cane').withChance(0.25)
	], 
['minecraft:sand', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('kubejs:iron_pieces').withChance(0.5),
		Item.of('minecraft:cocoa_beans').withChance(0.2), 
		Item.of('minecraft:cactus').withChance(0.3),
		Item.of('minecraft:sugar_cane').withChance(0.3)
	], 
['minecraft:sand', 'kubejs:netherite_mesh']);

})
