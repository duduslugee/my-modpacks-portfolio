//priority 1000

ServerEvents.recipes(event => {
    //removendo iron rod da crafting table
    event.remove({id: 'immersiveengineering:crafting/stick_iron'});
    event.remove({id: 'ad_astra:iron_rod'});

    
});

