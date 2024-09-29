ServerEvents.recipes(event => {
    //machine frame
    event.shaped('thermal:machine_frame', [
        'XYX',
        'YZY',
        'XYX'
    ], {
        X: '#forge:ingots/steel',
        Y: '#forge:glass',
        Z: 'kubejs:advanced_core'
    });
})