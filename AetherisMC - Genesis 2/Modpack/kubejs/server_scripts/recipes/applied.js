ServerEvents.recipes(event => {
  //me controller
  event.custom({
      "input": [
        {
          "item": "ae2:smooth_sky_stone_block"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "ae2:smooth_sky_stone_block"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "ae2:smooth_sky_stone_block"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "ae2:smooth_sky_stone_block"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:pink_slime\",Amount:500}",
      "processingTime": 300,
      "output": {
        "item": "ae2:controller",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    });
  
    //energy acceptor
  event.custom({
      "input": [
        {
          "tag": "forge:ingots/steel"
        },
        {
          "item": "ae2:quartz_vibrant_glass"
        },
        {
          "tag": "forge:ingots/steel"
        },
        {
          "item": "ae2:quartz_vibrant_glass"
        },
        {
          "item": "ae2:quartz_vibrant_glass"
        },
        {
          "tag": "forge:ingots/steel"
        },
        {
          "item": "ae2:quartz_vibrant_glass"
        },
        {
          "tag": "forge:ingots/steel"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:1000}",
      "processingTime": 300,
      "output": {
        "item": "ae2:energy_acceptor",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    });

    //inscriber
  event.custom({
      "input": [
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "minecraft:sticky_piston"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "kubejs:simple_core"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "tag": "forge:gems/fluix"
        },
        {
          "item": "minecraft:sticky_piston"
        },
        {
          "tag": "forge:gems/fluix"
        }
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:latex\",Amount:250}",
      "processingTime": 300,
      "output": {
        "item": "ae2:inscriber",
        "count": 1
      },
      "type": "industrialforegoing:dissolution_chamber"
    });
  
  
})