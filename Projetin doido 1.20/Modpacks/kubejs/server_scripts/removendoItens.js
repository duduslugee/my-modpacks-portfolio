ServerEvents.recipes(event => {
    const recipesToRemove = [
        { input: 'ad_astra:hammer' },
        { input: 'immersiveengineering:hammer' },
        { input: 'botania:orechid' },
        { input: 'botania:orechid_ignem' },
        { output: 'botania:orechid' },
        { output: 'botania:orechid_ignem' }
    ];

    recipesToRemove.forEach(recipe => event.remove(recipe));
});

console.log("removendoItens.js iniciado com sucesso");
