// priority: 1000
ServerEvents.recipes(event => {
    // Remove existing Andesite Alloy recipes
    event.remove({ output: 'create:andesite_alloy', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:andesite_alloy', type: 'thermal:smelter' });

    // Andesite Alloy Mixing recipes
    event.recipes.createMixing('create:raw_andesite_alloy', [
        '#chipped:andesite',
        '#forge:nuggets/aluminum'
    ]);
    event.recipes.createMixing('create:raw_andesite_alloy', [
        '#chipped:andesite',
        '#forge:nuggets/zinc'
    ]);

    // Andesite Alloy Blasting and Smelting recipes
    event.blasting('create:andesite_alloy', 'create:raw_andesite_alloy');
    event.smelting('create:andesite_alloy', 'create:raw_andesite_alloy');

    // Shaped crafting for raw Andesite Alloy
    event.shaped('2x create:raw_andesite_alloy', [
        'ZZZ',
        'YYY',
        'ZZZ'
    ], {
        Y: '#forge:ingots/aluminum',
        Z: '#chipped:andesite'
    });
    event.shaped('2x create:raw_andesite_alloy', [
        'ZZZ',
        'YYY',
        'ZZZ'
    ], {
        Y: '#forge:ingots/zinc',
        Z: '#chipped:andesite'
    });

    // Splashing recipe for Andesite Alloy
    event.recipes.create.splashing([
        '2x create:andesite_alloy',
        Item.of('create:andesite_alloy').withChance(0.66)
    ], 'create:raw_andesite_alloy');

    // Remove shaft recipes
    event.remove({ output: 'create:shaft', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:shaft', type: 'minecraft:crafting_shapeless' });

    // Add iron sheet recipe
    event.shaped('create:iron_sheet', [
        ' X ',
        'XYX',
        ' X '
    ], {
        X: '#forge:ingots/iron',
        Y: 'immersiveengineering:hammer'
    });

    // Remove and add cogwheel recipes
    event.remove({ output: 'create:cogwheel', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:cogwheel', type: 'minecraft:crafting_shapeless' });
    event.shaped('create:cogwheel', [
        ' X ',
        'XYX',
        ' X '
    ], {
        X: '#minecraft:planks',
        Y: 'create:shaft'
    });

    // Remove and add large cogwheel recipes
    event.remove({ output: 'create:large_cogwheel', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:large_cogwheel', type: 'minecraft:crafting_shapeless' });
    event.shaped('create:large_cogwheel', [
        ' X ',
        'XYX',
        ' X '
    ], {
        X: '#minecraft:planks',
        Y: 'create:cogwheel'
    });

    // Remove and add water wheel simple recipes
    event.remove({ output: 'create:water_wheel', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:water_wheel', type: 'minecraft:crafting_shapeless' });
    event.shaped('create:water_wheel', [
        'XXX',
        'XYX',
        'XXX'
    ], {
        X: '#minecraft:planks',
        Y: 'create:large_cogwheel'
    });

    // Remove and add large water wheel recipes
    event.remove({ output: 'create:large_water_wheel', type: 'minecraft:crafting_shaped' });
    event.remove({ output: 'create:large_water_wheel', type: 'minecraft:crafting_shapeless' });
    event.shaped('create:large_water_wheel', [
        'XXX',
        'XYX',
        'XXX'
    ], {
        X: '#minecraft:planks',
        Y: 'create:water_wheel'
    });

    //Remove and add saw recipe (a little difficult for early)
    event.remove({ output: 'create:mechanical_saw', type: 'minecraft:crafting_shaped'});
    event.remove({ output: 'create:mechanical_saw', type: 'minecraft:crafting_shapeless'});
    event.shaped('create:mechanical_saw', [
        'XXX',
        'XYX',
        'ZZZ'
    ],{
        X: 'create:iron_sheet',
        Y: 'thermal:saw_blade',
        Z: 'create:andesite_casing'
    });

    //Remove and add mechanical press
    event.remove({ output: 'create:mechanical_press', type: 'minecraft:crafting_shaped'});
    event.remove({ output: 'create:mechanical_press', type: 'minecraft:crafting_shapeless'});
    event.shaped('create:mechanical_press', [
        'XYX',
        'XCX',
        'ABA'
    ],{
        X: 'create:iron_sheet',
        Y: 'create:shaft',
        C: 'create:andesite_casing',
        A: 'create:andesite_alloy',
        B: 'minecraft:heavy_weighted_pressure_plate'
    });

    //Remove and add createaddition:rolling_mill
    event.remove({ output: 'createaddition:rolling_mill', type: 'minecraft:crafting_shaped'});
    event.remove({ output: 'createaddition:rolling_mill', type: 'minecraft:crafting_shapeless'});
    event.shaped('createaddition:rolling_mill', [
        'XXX',
        'YAY',
        'ZZZ'
    ],{
        X: '#forge:rods/silver',
        Y: 'create:andesite_alloy',
        Z: 'create:andesite_casing',
        A: '#forge:plates/silver'
    });

    //Remove and add mechanical mixer
    event.remove({ output: 'create:mechanical_mixer', type: 'minecraft:crafting_shaped'});
    event.remove({ output: 'create:mechanical_mixer', type: 'minecraft:crafting_shapeless'});
    event.shaped('create:mechanical_mixer', [
        'YXY',
        'YZY',
        ' B '
    ],{
        Y: '#forge:plates/iron',
        X: 'minecraft:piston',
        Z: 'create:initial_mechanism',
        B: 'create:whisk'
    });

    //Add initial mechanism
    event.shaped('create:initial_mechanism', [
        'XYX',
        'YZY',
        'XYX'
    ],{
        X: 'create:andesite_alloy',
        Y: '#forge:rods/iron',
        Z: '#forge:gears/stone'
    });

    //Blaze burner
    event.remove({id: 'create:crafting/kinetics/empty_blaze_burner'});
    event.shaped('create:empty_blaze_burner',[
        'XXX',
        'AYA',
        'ZZZ'
    ],{
        X: 'create:iron_sheet',
        Y: Item.of('enderio:broken_spawner', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:blaze"}}}}').weakNBT(),
        Z: 'create:initial_mechanism',
        A: '#forge:rods/iron'
    });
    event.shaped('2x create:empty_blaze_burner',[
        'XXX',
        'AYA',
        'ZZZ'
    ],{
        X: 'create:iron_sheet',
        Y: 'create:empty_blaze_burner',
        Z: 'create:initial_mechanism',
        A: '#forge:rods/iron'
    });



});

// Reload info
console.log("create.js recipes event carregado");
