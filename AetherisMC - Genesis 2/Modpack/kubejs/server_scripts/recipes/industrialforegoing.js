ServerEvents.recipes(event => {
  //mudando mob slaughter factory 
  event.custom({
      "input": [
        {
          "tag": "forge:plastic"
        },
        {
          "tag": "forge:gears/diamond"
        },
        {
          "tag": "forge:plastic"
        },
        {
          "item": "ae2:engineering_processor"
        },
        {
          "item": "ae2:engineering_processor"
        },
        {
          "item": "minecraft:diamond_sword"
        },
        {
          "item": "industrialforegoing:machine_frame_pity"
        },
        {
          "item": "minecraft:diamond_sword"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
      "processingTime": 300,
      "output": {
        "item": "industrialforegoing:mob_slaughter_factory",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    })
})