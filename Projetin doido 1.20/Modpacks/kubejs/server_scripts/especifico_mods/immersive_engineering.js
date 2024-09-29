//priority 1000

ServerEvents.recipes(event => {
    //Remove and add kiln block
    event.remove({id: 'immersiveengineering:crafting/alloybrick'});
    event.remove({id: 'createaddition:compat/immersiveengineering/item_application/kiln_brick_using_deployer'});
    event.remove({id: 'createaddition:compat/immersiveengineering/item_application/kiln_brick'});

    event.recipes.create.mixing('2x immersiveengineering:alloybrick', ['#forge:sandstone', '#chipped:bricks']).heated()

    //Remove and add coke_brick
    event.remove({id: 'immersiveengineering:crafting/cokebrick'});
    event.shaped('2x immersiveengineering:cokebrick', [
        'XYX',
        'YZY',
        'XYX'
    ],{
        X: 'minecraft:deepslate_bricks',
        Y: 'minecraft:bricks',
        Z: 'minecraft:clay'
    });
});

