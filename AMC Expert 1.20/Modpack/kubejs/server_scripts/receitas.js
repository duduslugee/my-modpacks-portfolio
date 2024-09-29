ServerEvents.recipes(event => {

	const itensParaRemover = [
    'exdeorum:netherite_mesh',
    'exdeorum:diamond_mesh',
    'exdeorum:golden_mesh',
    'exdeorum:iron_mesh',
    'exdeorum:flint_mesh',
    'exdeorum:string_mesh',
    'exdeorum:bamboo_sieve',
    'exdeorum:cherry_sieve',
    'exdeorum:mangrove_sieve',
    'exdeorum:dark_oak_sieve',
    'exdeorum:acacia_sieve',
    'exdeorum:jungle_sieve',
    'exdeorum:birch_sieve',
    'exdeorum:spruce_sieve',
    'exdeorum:oak_sieve',
    'exdeorum:crimson_sieve',
    'exdeorum:warped_sieve',
    'exdeorum:archwood_sieve',
    'exdeorum:netherite_watering_can',
    'exdeorum:diamond_watering_can',
    'exdeorum:golden_watering_can',
    'exdeorum:iron_watering_can',
    'exdeorum:stone_watering_can',
    'exdeorum:wooden_watering_can'
    // Adicione todos os itens aqui...
  ];

  function removerReceitas(itensParaRemover) {
    itensParaRemover.forEach(item => {
      event.remove({ id: item });
    });
  }

  removerReceitas(itensParaRemover);
})