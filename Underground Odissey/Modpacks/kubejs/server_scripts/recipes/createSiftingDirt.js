ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);

//string mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	
	], 
['minecraft:dirt', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	
	], 
['minecraft:dirt', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	
	], 
['minecraft:dirt', 'kubejs:iron_mesh']);

//gold mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	], 
['minecraft:dirt', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	], 
['minecraft:dirt', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	], 
['minecraft:dirt', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:beetroot_seeds').withChance(0.35),
		Item.of('minecraft:oak_sapling').withChance(0.05),
		Item.of('minecraft:spruce_sapling').withChance(0.05),
		Item.of('minecraft:birch_sapling').withChance(0.05),
		Item.of('minecraft:jungle_sapling').withChance(0.05),
		Item.of('minecraft:acacia_sapling').withChance(0.05),
		Item.of('minecraft:dark_oak_sapling').withChance(0.05),
		Item.of('minecraft:cherry_sapling').withChance(0.05),
		Item.of('integrateddynamics:menril_sapling').withChance(0.05),
		Item.of('ars_nouveau:blue_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:red_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:purple_archwood_sapling').withChance(0.05),
		Item.of('ars_nouveau:green_archwood_sapling').withChance(0.05),
		Item.of('minecraft:wheat_seeds').withChance(0.7),
		Item.of('minecraft:pumpkin_seeds').withChance(0.35),
		Item.of('minecraft:melon_seeds').withChance(0.35),
		Item.of('minecraft:bamboo').withChance(0.05),
		Item.of('minecraft:sweet_berries').withChance(0.05),
		Item.of('minecraft:potato').withChance(0.05),
		Item.of('minecraft:carrot').withChance(0.05)
	], 
['minecraft:dirt', 'kubejs:netherite_mesh']);



})