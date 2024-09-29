ServerEvents.recipes(event => {
  //removendo brick e adicionando no sequenced assembly    
  event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "minecraft:magma_block"
      },
      "loops": 4,
      "results": [
        {
          "item": "immersiveengineering:blastbrick",
          "count": 3
        }
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "kubejs:incomplete_blast_brick"
            },
            {
              "item": "minecraft:nether_brick"
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_blast_brick"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "kubejs:incomplete_blast_brick"
            },
            {
              "item": "minecraft:brick"
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_blast_brick"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "kubejs:incomplete_blast_brick"
            },
            {
              "item": "powah:dielectric_paste"
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_blast_brick"
            }
          ]
        }
      ],
      "transitionalItem": {
        "item": "kubejs:incomplete_blast_brick"
      }
    })
})