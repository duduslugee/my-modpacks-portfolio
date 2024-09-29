ServerEvents.recipes(event => {
    //creosote
    event.replaceOutput(
        { input: 'thermal:creosote' },  // O filtro para encontrar 'thermal:creosote'
        'thermal:creosote',             // O item que será substituído
        'immersiveengineering:creosote' // O item que substituirá o original
      );
})