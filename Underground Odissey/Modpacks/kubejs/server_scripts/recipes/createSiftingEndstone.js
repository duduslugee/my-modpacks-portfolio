ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);

/*[
'kubejs:crushed_end_stone', 
'kubejs:crushed_netherrack', 
'kubejs:end_stone_pebble', 
'minecraft:ender_pearl', 
'minecraft:chorus_flower']*/

//string mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.003),
		Item.of('minecraft:chorus_flower').withChance(0.003)
	
	], 
['kubejs:crushed_end_stone', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.008),
		Item.of('minecraft:chorus_flower').withChance(0.008)
	], 
['kubejs:crushed_end_stone', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.012),
		Item.of('minecraft:chorus_flower').withChance(0.012)
	], 
['kubejs:crushed_end_stone', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.018),
		Item.of('minecraft:chorus_flower').withChance(0.018)
	], 
['kubejs:crushed_end_stone', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.023),
		Item.of('minecraft:chorus_flower').withChance(0.023)
	], 
['kubejs:crushed_end_stone', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.028),
		Item.of('minecraft:chorus_flower').withChance(0.028)
	], 
['kubejs:crushed_end_stone', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:ender_pearl').withChance(0.035),
		Item.of('minecraft:chorus_flower').withChance(0.035)
	], 
['kubejs:crushed_end_stone', 'kubejs:netherite_mesh']);
})