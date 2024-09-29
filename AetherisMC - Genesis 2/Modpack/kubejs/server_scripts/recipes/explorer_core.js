ServerEvents.recipes(event => {
  //explorer core
  event.custom({
      "input": [
        {
          "item": "thermalendergy:stellarium_coin"
        },
        {
          "item": "twilightforest:alpha_yeti_fur"
        },
        {
          "item": "thermalendergy:stellarium_coin"
        },
        {
          "item": "thermal_extra:upgrade_augment"
        },
        {
          "item": "thermalendergy:endergy_upgrade_3"
        },
        {
          "item": "thermal_extra:dragonsteel_coin"
        },
        {
          "item": "industrialforegoing:machine_frame_supreme"
        },
        {
          "item": "thermal_extra:dragonsteel_coin"
        },
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:100}",
      "processingTime": 100,
      "output": {
        "item": "minecraft:air",
        "count": 1
      },
      "outputFluid": "{FluidName:\"kubejs:liquid_explorer_core\",Amount:1000}",
      "type": "industrialforegoing:dissolution_chamber"
    });

  event.custom({
    "input": [
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      },
      {
        "item": "extendedcrafting:enhanced_redstone_ingot"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:liquid_explorer_core\",Amount:500}",
    "processingTime": 100,
    "output": {
      "item": "kubejs:explorer_core",
      "count": 4
    },
    "type": "industrialforegoing:dissolution_chamber"
  });
})