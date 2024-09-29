// priority: 0
ServerEvents.recipes(event => {

function removeRecipeById(recipeId) {
	event.remove({ output: recipeId });
	console.log(`Recipe with ID ${recipeId} removed successfully.`);
	}

// Andesite Alloy
removeRecipeById('create:andesite_alloy');

//removendo o brass dust
removeRecipeById('alltheores:brass_dust');

//removendo plates pela crafting table
event.remove({ input: '#alltheores:ore_hammers' });
event.remove({ input: 'ad_astra:hammer' });
event.remove({ input: 'immersiveengineering:hammer' });

//removendo blast/coke
removeRecipeById('immersiveengineering:blastbrick');
removeRecipeById('immersiveengineering:cokebrick');

//removendo recipe de steel da fornalha normal
event.remove([{ type: 'minecraft:smelting', input: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', input: 'minecraft:iron_ingot' }]);

//pity machine frame
removeRecipeById('industrialforegoing:machine_frame_pity');

//applied
removeRecipeById('ae2:controller');
removeRecipeById('ae2:energy_acceptor');
removeRecipeById('ae2:inscriber');

//industrialforegoing
removeRecipeById('industrialforegoing:mob_slaughter_factory');

//compactmachines
removeRecipeById('compactmachines:wall');

//thermal
removeRecipeById('thermal:machine_frame');

//powah
removeRecipeById('powah:energizing_orb');

})
