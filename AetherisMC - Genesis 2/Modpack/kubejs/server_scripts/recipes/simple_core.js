ServerEvents.recipes(event => {
  //removendo brick e adicionando no sequenced assembly
  event.custom({
      "type": "create:sequenced_assembly",
      "ingredient": {
        "item": "extendedcrafting:ultimate_catalyst"
      },
      "loops": 4,
      "results": [
        {
          "item": "kubejs:simple_core",
          "count": 3
        }
      ],
      "sequence": [
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "kubejs:incomplete_simple_core"
            },
            {
              "item": "create:sturdy_sheet"
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_simple_core"
            }
          ]
        },
        {
          "type": "create:deploying",
          "ingredients": [
            {
              "item": "kubejs:incomplete_simple_core"
            },
            {
              "tag": "forge:dusts/redstone"
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_simple_core"
            }
          ]
        },
        {
          "type": "create:filling",
          "ingredients": [
            {
              "item": "kubejs:incomplete_simple_core"
            },
            {
              "fluid": "immersiveengineering:biodiesel",
              "amount": 100
            }
          ],
          "results": [
            {
              "item": "kubejs:incomplete_simple_core"
            }
          ]
        }
      ],
      "transitionalItem": {
        "item": "kubejs:incomplete_simple_core"
      }
    });
})