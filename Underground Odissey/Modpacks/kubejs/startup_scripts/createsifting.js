StartupEvents.registry('item', event => {
	event.create('string_mesh','createsifter:mesh').displayName('String Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/string_mesh").texture("frame","kubejs:block/meshes/bordamesh");

	event.create('flint_mesh','createsifter:mesh').displayName('Flint Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/flint_mesh").texture("frame","kubejs:block/meshes/bordamesh");

	event.create('iron_mesh','createsifter:mesh').displayName('Iron Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/iron_mesh").texture("frame","kubejs:block/meshes/bordamesh");

	event.create('gold_mesh','createsifter:mesh').displayName('Gold Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/gold_mesh").texture("frame","kubejs:block/meshes/bordamesh2");

	event.create('diamond_mesh','createsifter:mesh').displayName('Diamond Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/diamond_mesh").texture("frame","kubejs:block/meshes/bordamesh2");

	event.create('emerald_mesh','createsifter:mesh').displayName('Emerald Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/emerald_mesh").texture("frame","kubejs:block/meshes/bordamesh2");

	event.create('netherite_mesh','createsifter:mesh').displayName('Netherite Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/netherite_mesh").texture("frame","kubejs:block/meshes/bordamesh3");

	//event.create('creative_mesh','createsifter:mesh').displayName('Creative Mesh').parentModel("createsifter:block/meshes/mesh").texture("mesh","kubejs:item/meshes/creative_mesh").texture("frame","kubejs:block/meshes/bordamesh3");
})