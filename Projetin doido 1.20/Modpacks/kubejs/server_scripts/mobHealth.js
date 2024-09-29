//priority 10000
EntityEvents.checkSpawn((event) => {
    const { entity } = event;
    if (!entity.monster) return;
  
    entity.health = entity.maxHealth = entity.maxHealth * 2.5;
  });

EntityEvents.spawned((event) => {
  const { entity } = event;
  if (!entity.monster) return;

  entity.health = entity.maxHealth = entity.maxHealth * 2;
})