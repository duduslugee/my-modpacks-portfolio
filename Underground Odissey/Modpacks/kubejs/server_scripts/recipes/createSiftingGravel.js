ServerEvents.recipes(event => {

function sifter(outputs, inputs){
	event.recipes.createsifterSifting(outputs, inputs);
}

//sifter([Item.of('item').withChance(0.1), Item.of().withChance(0.1)], [input, mesh]);

//string mesh
sifter([
		Item.of('minecraft:amethyst_shard').withChance(0.05), 
		Item.of('minecraft:flint').withChance(0.25)
	
	], 
['minecraft:gravel', 'kubejs:string_mesh']);

//flint mesh
sifter([
		Item.of('minecraft:coal').withChance(0.125),
		Item.of('minecraft:lapis_lazuli').withChance(0.05),
		Item.of('minecraft:amethyst_shard').withChance(0.05), 
		Item.of('minecraft:flint').withChance(0.25),
		Item.of('kubejs:iron_pieces').withChance(0.1),
		Item.of('kubejs:gold_pieces').withChance(0.05),
		Item.of('kubejs:copper_pieces').withChance(0.05),
		Item.of('kubejs:lead_pieces').withChance(0.05),
		Item.of('kubejs:nickel_pieces').withChance(0.05),
		Item.of('kubejs:silver_pieces').withChance(0.05),
		Item.of('kubejs:tin_pieces').withChance(0.05),
		Item.of('kubejs:aluminum_pieces').withChance(0.05),
		Item.of('kubejs:platinum_pieces').withChance(0.05),
		Item.of('kubejs:uranium_pieces').withChance(0.05),
		Item.of('kubejs:zinc_pieces').withChance(0.05)
	], 
['minecraft:gravel', 'kubejs:flint_mesh']);

//iron mesh
sifter([
		Item.of('minecraft:coal').withChance(0.125),
		Item.of('minecraft:lapis_lazuli').withChance(0.05),
		Item.of('minecraft:amethyst_shard').withChance(0.05), 
		Item.of('minecraft:flint').withChance(0.25), 
		Item.of('kubejs:iron_pieces').withChance(0.1),
		Item.of('kubejs:gold_pieces').withChance(0.05),
		Item.of('kubejs:copper_pieces').withChance(0.05),
		Item.of('kubejs:lead_pieces').withChance(0.05),
		Item.of('kubejs:nickel_pieces').withChance(0.05),
		Item.of('kubejs:silver_pieces').withChance(0.05),
		Item.of('kubejs:tin_pieces').withChance(0.05),
		Item.of('kubejs:aluminum_pieces').withChance(0.05),
		Item.of('kubejs:platinum_pieces').withChance(0.05),
		Item.of('kubejs:uranium_pieces').withChance(0.05),
		Item.of('kubejs:zinc_pieces').withChance(0.05)
	], 
['minecraft:gravel', 'kubejs:iron_mesh']);


//gold mesh
sifter([
		Item.of('minecraft:coal').withChance(0.15),
		Item.of('minecraft:lapis_lazuli').withChance(0.1),
		Item.of('minecraft:amethyst_shard').withChance(0.1), 
		Item.of('minecraft:flint').withChance(0.35), 
		Item.of('kubejs:iron_pieces').withChance(0.2),
		Item.of('kubejs:gold_pieces').withChance(0.1),
		Item.of('kubejs:copper_pieces').withChance(0.1),
		Item.of('kubejs:lead_pieces').withChance(0.1),
		Item.of('kubejs:nickel_pieces').withChance(0.1),
		Item.of('kubejs:silver_pieces').withChance(0.1),
		Item.of('kubejs:tin_pieces').withChance(0.1),
		Item.of('kubejs:aluminum_pieces').withChance(0.1),
		Item.of('kubejs:platinum_pieces').withChance(0.1),
		Item.of('kubejs:uranium_pieces').withChance(0.1),
		Item.of('kubejs:zinc_pieces').withChance(0.1)
	], 
['minecraft:gravel', 'kubejs:gold_mesh']);

//diamond mesh
sifter([
		Item.of('minecraft:coal').withChance(0.2),
		Item.of('minecraft:lapis_lazuli').withChance(0.15),
		Item.of('minecraft:amethyst_shard').withChance(0.15), 
		Item.of('minecraft:flint').withChance(0.45), 
		Item.of('minecraft:diamond').withChance(0.125), 
		Item.of('minecraft:emerald').withChance(0.125),
		Item.of('kubejs:iron_pieces').withChance(0.3),
		Item.of('kubejs:gold_pieces').withChance(0.15),
		Item.of('kubejs:copper_pieces').withChance(0.15),
		Item.of('kubejs:lead_pieces').withChance(0.15),
		Item.of('kubejs:nickel_pieces').withChance(0.15),
		Item.of('kubejs:silver_pieces').withChance(0.15),
		Item.of('kubejs:tin_pieces').withChance(0.15),
		Item.of('kubejs:aluminum_pieces').withChance(0.15),
		Item.of('kubejs:platinum_pieces').withChance(0.15),
		Item.of('kubejs:uranium_pieces').withChance(0.15),
		Item.of('kubejs:zinc_pieces').withChance(0.15)
	], 
['minecraft:gravel', 'kubejs:diamond_mesh']);

//emerald mesh
sifter([
		Item.of('minecraft:coal').withChance(0.3),
		Item.of('minecraft:lapis_lazuli').withChance(0.2),
		Item.of('minecraft:amethyst_shard').withChance(0.2), 
		Item.of('minecraft:flint').withChance(0.55), 
		Item.of('minecraft:diamond').withChance(0.15), 
		Item.of('minecraft:emerald').withChance(0.15),
		Item.of('kubejs:iron_pieces').withChance(0.35),
		Item.of('kubejs:gold_pieces').withChance(0.2),
		Item.of('kubejs:copper_pieces').withChance(0.2),
		Item.of('kubejs:lead_pieces').withChance(0.2),
		Item.of('kubejs:nickel_pieces').withChance(0.2),
		Item.of('kubejs:silver_pieces').withChance(0.2),
		Item.of('kubejs:tin_pieces').withChance(0.2),
		Item.of('kubejs:aluminum_pieces').withChance(0.2),
		Item.of('kubejs:platinum_pieces').withChance(0.2),
		Item.of('kubejs:uranium_pieces').withChance(0.2),
		Item.of('kubejs:zinc_pieces').withChance(0.2)
	], 
['minecraft:gravel', 'kubejs:emerald_mesh']);

//netherite mesh
sifter([
		Item.of('minecraft:coal').withChance(0.4),
		Item.of('minecraft:lapis_lazuli').withChance(0.3),
		Item.of('minecraft:amethyst_shard').withChance(0.3), 
		Item.of('minecraft:flint').withChance(0.3), 
		Item.of('minecraft:diamond').withChance(0.25), 
		Item.of('minecraft:emerald').withChance(0.25),
		Item.of('kubejs:iron_pieces').withChance(0.5),
		Item.of('kubejs:gold_pieces').withChance(0.35),
		Item.of('kubejs:copper_pieces').withChance(0.35),
		Item.of('kubejs:lead_pieces').withChance(0.35),
		Item.of('kubejs:nickel_pieces').withChance(0.35),
		Item.of('kubejs:silver_pieces').withChance(0.35),
		Item.of('kubejs:tin_pieces').withChance(0.35),
		Item.of('kubejs:aluminum_pieces').withChance(0.35),
		Item.of('kubejs:platinum_pieces').withChance(0.35),
		Item.of('kubejs:uranium_pieces').withChance(0.35),
		Item.of('kubejs:zinc_pieces').withChance(0.35)
	], 
['minecraft:gravel', 'kubejs:netherite_mesh']);
})