ServerEvents.recipes(event => {

  event.custom({
      "input": [
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        },
        {
          "item": "minecraft:polished_deepslate"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:100}",
      "processingTime": 900,
      "output": {
        "item": "compactmachines:wall",
        "count": 16
      },
      "type": "industrialforegoing:dissolution_chamber"
  });
})