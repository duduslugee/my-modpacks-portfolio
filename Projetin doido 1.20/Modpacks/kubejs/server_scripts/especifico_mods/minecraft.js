//priority 1000
ServerEvents.recipes(event => {
    //piston
    event.remove({id: 'minecraft:piston'});
    event.remove({id: 'terralith:piston_alt'});
    event.shaped('minecraft:piston', [
        'AAA',
        'CBC',
        'CDC'
    ],{
        A: 'immersiveengineering:treated_wood_horizontal',
        C: '#forge:cobblestone',
        B: '#forge:rods/iron',
        D: 'minecraft:redstone'
    });
    
});