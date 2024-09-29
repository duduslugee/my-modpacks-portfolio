ServerEvents.recipes(event => {

//removendo do sifter
const Meshes = [
  'createsifter:advanced_brass_mesh', 
  'createsifter:string_mesh', 
  'createsifter:andesite_mesh', 
  'createsifter:zinc_mesh', 
  'createsifter:brass_mesh', 
  'createsifter:advanced_brass_mesh'
  ];

function removerPorInput(Meshes){
  Meshes.forEach(item =>{
    event.remove({ input: item });
  });
}

removerPorInput(Meshes);



	//string mesh
	event.shaped('kubejs:string_mesh',
		[
			'ABA',
		    'BBB', 
		    'ABA'
		],
		{
			A: '#minecraft:logs',
			B: 'minecraft:string'
		}
		);

	//flint mesh
	event.shaped('kubejs:flint_mesh',
		[
			'B B',
		    'BCB',
		    'B B'
		],
		{
			B: 'minecraft:flint',
			C: 'kubejs:string_mesh'
		}
		);

	//iron mesh
	event.shaped('kubejs:iron_mesh',
		[
			'B B',
		    'BCB',
		    'B B'
		],
		{
			B: 'minecraft:iron_ingot',
			C: 'kubejs:flint_mesh'
		}
		);
	//gold mesh

	//diamond mesh
	
	//emerald mesh

	//netherite mesh
})