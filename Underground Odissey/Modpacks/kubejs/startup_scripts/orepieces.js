StartupEvents.registry('item', event => {
	
const piecesOre = [
	'iron_pieces', 
	'gold_pieces', 
	'copper_pieces', 
	'lead_pieces', 
	'nickel_pieces', 
	'silver_pieces', 
	'tin_pieces', 
	'aluminum_pieces', 
	'platinum_pieces', 
	'zinc_pieces', 
	'uranium_pieces',
	'osmium_pieces'
	];

const piecesOreName = [
	"Iron Pieces", 
	"Gold Pieces", 
	"Copper Pieces", 
	"Lead Pieces", 
	"Nickel Pieces", 
	"Silver Pieces", 
	"Tin Pieces", 
	"Aluminum Pieces", 
	"Platinum Pieces", 
	"Zinc Pieces", 
	"Uranium Pieces",
	"Osmium Pieces"
	];



function registrarMinerios(piecesOre, piecesOreName) {
    piecesOre.forEach((item, index) => {
        event.create(item).displayName(piecesOreName[index])
    });
}

// Chamar a função para registrar os minérios
registrarMinerios(piecesOre, piecesOreName);

})

StartupEvents.registry('block', event => {
	event.create('crushed_netherrack').displayName("Crushed Netherrack").soundType('sand').hardness(0.75).textureAll('kubejs:block/crushed_netherrack').mapColor('sand')
	event.create('crushed_end_stone').displayName("Crushed End Stone").soundType('sand').hardness(0.75).textureAll('kubejs:block/crushed_end_stone').mapColor('sand')
	event.create('dust').displayName("Dust").soundType('sand').hardness(0.75).textureAll('kubejs:block/dust').mapColor('sand')
})