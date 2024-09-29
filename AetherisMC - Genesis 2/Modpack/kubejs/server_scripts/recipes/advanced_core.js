ServerEvents.recipes(event => {

  event.custom({
      "input": [
        {
          "tag": "forge:glass"
        },
        {
          "item": "ae2:singularity"
        },
        {
          "tag": "forge:glass"
        },
        {
          "tag": "forge:glass"
        },
        {
          "tag": "forge:glass"
        },
        {
          "item": "compactmachines:wall"
        },
        {
          "item": "industrialforegoing:machine_frame_advanced"
        },
        {
          "item": "compactmachines:wall"
        },
      ],
      "inputFluid": "{FluidName:\"industrialforegoing:ether_gas\",Amount:50}",
      "processingTime": 100,
      "output": {
        "item": "minecraft:air",
        "count": 1
      },
      "outputFluid": "{FluidName:\"kubejs:liquid_advanced_core\",Amount:500}",
      "type": "industrialforegoing:dissolution_chamber"
    });


  event.custom({
    "input": [
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      },
      {
        "item": "minecraft:echo_shard"
      }
    ],
    "inputFluid": "{FluidName:\"kubejs:liquid_advanced_core\",Amount:500}",
    "processingTime": 100,
    "output": {
      "item": "kubejs:advanced_core",
      "count": 2
    },
    "type": "industrialforegoing:dissolution_chamber"
  });
})