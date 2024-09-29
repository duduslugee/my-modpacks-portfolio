ServerEvents.recipes(event =>{

	event.recipes.createsifterSifting([Item.of('minecraft:glowstone_dust').withChance(0.5),
									   Item.of('minecraft:redstone').withChance(0.1)], 

										['exdeorum:dust','kubejs:string_mesh']);



})