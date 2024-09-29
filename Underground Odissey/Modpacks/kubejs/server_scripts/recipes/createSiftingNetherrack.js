ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);


//string mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.05),
		Item.of('2x kubejs:gold_pieces').withChance(0.1)
	], 
['kubejs:crushed_netherrack', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('2x kubejs:gold_pieces').withChance(0.25),
		Item.of('minecraft:quartz').withChance(0.075),
	], 
['kubejs:crushed_netherrack', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.1),
		Item.of('2x kubejs:gold_pieces').withChance(0.3),
		Item.of('minecraft:netherite_scrap').withChance(0.004)
	], 
['kubejs:crushed_netherrack', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.15),
		Item.of('2x kubejs:gold_pieces').withChance(0.35),
		Item.of('minecraft:netherite_scrap').withChance(0.008)
	], 
['kubejs:crushed_netherrack', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.2),
		Item.of('2x kubejs:gold_pieces').withChance(0.4),
		Item.of('minecraft:netherite_scrap').withChance(0.02)
	], 
['kubejs:crushed_netherrack', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.25),
		Item.of('2x kubejs:gold_pieces').withChance(0.5),
		Item.of('minecraft:netherite_scrap').withChance(0.03)
	], 
['kubejs:crushed_netherrack', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:quartz').withChance(0.3),
		Item.of('2x kubejs:gold_pieces').withChance(0.6),
		Item.of('minecraft:netherite_scrap').withChance(0.04)
	], 
['kubejs:crushed_netherrack', 'kubejs:netherite_mesh']);
})