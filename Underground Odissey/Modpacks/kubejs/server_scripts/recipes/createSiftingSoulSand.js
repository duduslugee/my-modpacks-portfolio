ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//string mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1)
	
	], 
['minecraft:soul_sand', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1), 
		Item.of('minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.33),
		Item.of('minecraft:brown_mushroom').withChance(0.05),
		Item.of('minecraft:red_mushroom').withChance(0.05)
	], 
['minecraft:soul_sand', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1), 
		Item.of('minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.33),
		Item.of('minecraft:brown_mushroom').withChance(0.05),
		Item.of('minecraft:red_mushroom').withChance(0.05)
	], 
['minecraft:soul_sand', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1), 
		Item.of('minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:brown_mushroom').withChance(0.1),
		Item.of('minecraft:red_mushroom').withChance(0.1)
	], 
['minecraft:soul_sand', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1), 
		Item.of('minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:quartz').withChance(0.8),
		Item.of('minecraft:ghast_tear').withChance(0.02),
		Item.of('minecraft:brown_mushroom').withChance(0.15),
		Item.of('minecraft:red_mushroom').withChance(0.15)
	], 
['minecraft:soul_sand', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.1), 
		Item.of('minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:quartz').withChance(0.8),
		Item.of('minecraft:ghast_tear').withChance(0.02),
		Item.of('minecraft:brown_mushroom').withChance(0.2),
		Item.of('minecraft:red_mushroom').withChance(0.2)
	], 
['minecraft:soul_sand', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:nether_wart').withChance(0.2), 
		Item.of('2x minecraft:quartz').withChance(1.0),
		Item.of('minecraft:quartz').withChance(0.5),
		Item.of('minecraft:quartz').withChance(0.8),
		Item.of('minecraft:ghast_tear').withChance(0.05),
		Item.of('minecraft:brown_mushroom').withChance(0.3),
		Item.of('minecraft:red_mushroom').withChance(0.3)
	], 
['minecraft:soul_sand', 'kubejs:netherite_mesh']);

})