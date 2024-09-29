ServerEvents.recipes(event => {

//adicionando receitas nos pieces
function registrarReceitasOutput(itemOutput, receitaInput) {
    event.shapeless(
        Item.of(itemOutput, 1),
        [
            receitaInput,
            receitaInput,
            receitaInput,
            receitaInput
        ]
    );
}

const items = [
    'minecraft:raw_iron',
    'minecraft:raw_gold',
    'minecraft:raw_copper',
    'mekanism:raw_lead',
    'alltheores:raw_nickel',
    'alltheores:raw_silver',
    'mekanism:raw_tin',
    'alltheores:raw_aluminum',
    'alltheores:raw_platinum',
    'create:raw_zinc',
    'mekanism:raw_uranium',
    'mekanism:raw_osmium'
];

const receitasInput = [
    'kubejs:iron_pieces',
    'kubejs:gold_pieces',
    'kubejs:copper_pieces',
    'kubejs:lead_pieces',
    'kubejs:nickel_pieces',
    'kubejs:silver_pieces',
    'kubejs:tin_pieces',
    'kubejs:aluminum_pieces',
    'kubejs:platinum_pieces',
    'kubejs:zinc_pieces',
    'kubejs:uranium_pieces',
    'kubejs:osmium_pieces'
];

// Registro das receitas usando um loop
for (let i = 0; i < items.length; i++) {
    registrarReceitasOutput(items[i], receitasInput[i]);
}
	
event.recipes.createMilling('minecraft:sand', 'minecraft:gravel');
event.recipes.createMilling('kubejs:dust', 'minecraft:sand');
event.recipes.createMilling('kubejs:crushed_netherrack', '#forge:netherrack');
event.recipes.createMilling('kubejs:crushed_end_stone', '#forge:end_stones');

})