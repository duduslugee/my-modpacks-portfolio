ServerEvents.recipes(event => {
//removendo brick e adicionando no sequenced assembly
event.custom({
	"type": "create:sequenced_assembly",
	"ingredient": {
	  "tag": "forge:sandstone"
	},
	"loops": 4,
	"results": [
	  {
		"item": "immersiveengineering:cokebrick",
        "count": 3
	  }
	],
	"sequence": [
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  },
		  {
			"item": "minecraft:clay_ball"
		  }
		],
		"results": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  },
		  {
			"item": "minecraft:brick"
		  }
		],
		"results": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  }
		]
	  },
	  {
		"type": "create:deploying",
		"ingredients": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  },
		  {
			"item": "powah:dielectric_paste"
		  }
		],
		"results": [
		  {
			"item": "kubejs:incomplete_coke_brick"
		  }
		]
	  }
	],
	"transitionalItem": {
	  "item": "kubejs:incomplete_coke_brick"
	}
  })
})