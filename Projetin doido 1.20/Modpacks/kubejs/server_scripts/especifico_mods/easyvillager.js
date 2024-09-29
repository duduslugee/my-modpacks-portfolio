//priority 1000

ServerEvents.recipes(event => {
    //Iron Farm
    event.remove({id: 'easy_villagers:iron_farm'});
    event.shaped('easy_villagers:iron_farm', [
        'XXX',
        'ZAB',
        'YYY'
    ],{
        X: '#forge:glass',
        Z: 'minecraft:lava_bucket',
        Y: 'minecraft:iron_block',
        A: Item.of('enderio:broken_spawner', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:iron_golem"}}}}').weakNBT(),
        B: 'minecraft:zombie_head'
    });

    //Converter
    event.remove({id: 'easy_villagers:converter'});
    event.shaped('easy_villagers:converter', [
        'XXX',
        'XZX',
        'YAY'
    ],{
        X: '#forge:glass_panes',
        Z: 'minecraft:rotten_flesh',
        Y: 'minecraft:iron_block',
        A: Item.of('enderio:broken_spawner', '{BlockEntityTag:{EntityStorage:{Entity:{id:"minecraft:zombie"}}}}').weakNBT()
    });
});

