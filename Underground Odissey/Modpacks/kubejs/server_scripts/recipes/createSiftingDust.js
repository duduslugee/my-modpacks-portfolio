ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);

//string mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.07), 
		Item.of('minecraft:bone_meal').withChance(0.2)
	
	], 
['kubejs:dust', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.1),
		Item.of('minecraft:bone_meal').withChance(0.25)
	], 
['kubejs:dust', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.125),
		Item.of('minecraft:bone_meal').withChance(0.3),
		Item.of('minecraft:blaze_powder').withChance(0.05), 
		Item.of('minecraft:glowstone_dust').withChance(0.0625),
		Item.of('minecraft:redstone').withChance(0.125),
		Item.of('ae2:certus_quartz_dust').withChance(0.125)
	], 
['kubejs:dust', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.15),
		Item.of('minecraft:bone_meal').withChance(0.3),
		Item.of('minecraft:blaze_powder').withChance(0.07), 
		Item.of('minecraft:glowstone_dust').withChance(0.1),
		Item.of('minecraft:redstone').withChance(0.15),
		Item.of('ae2:certus_quartz_dust').withChance(0.15)
	], 
['kubejs:dust', 'kubejs:gold_mesh']);


//diamond mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.175),
		Item.of('minecraft:bone_meal').withChance(0.3),
		Item.of('minecraft:blaze_powder').withChance(0.1), 
		Item.of('minecraft:glowstone_dust').withChance(0.125),
		Item.of('minecraft:redstone').withChance(0.15),
		Item.of('ae2:certus_quartz_dust').withChance(0.15)
	], 
['kubejs:dust', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.2),
		Item.of('minecraft:bone_meal').withChance(0.3),
		Item.of('minecraft:blaze_powder').withChance(0.125), 
		Item.of('minecraft:glowstone_dust').withChance(0.15),
		Item.of('minecraft:redstone').withChance(0.1725),
		Item.of('ae2:certus_quartz_dust').withChance(0.1725)
	], 
['kubejs:dust', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:gunpowder').withChance(0.25),
		Item.of('minecraft:bone_meal').withChance(0.3),
		Item.of('minecraft:blaze_powder').withChance(0.15), 
		Item.of('minecraft:glowstone_dust').withChance(0.2),
		Item.of('minecraft:redstone').withChance(0.2),
		Item.of('ae2:certus_quartz_dust').withChance(0.15)
	], 
['kubejs:dust', 'kubejs:netherite_mesh']);

})