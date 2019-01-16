let rankTransporter = {
    
    run: (creep) => {
        let dumbledore = new RoomPosition(27, 19, Game.spawns['Humlepromenaden'].room.name)
        if (creep.carry.energy < creep.carryCapacity) {
            var energySource = parseInt(creep.name.substring(creep.name.length - 3, creep.name.length - 1)) % 2;
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[energySource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[energySource], {visualizePathStyle: {stroke: '#ff75bb'}});
            }
        } else if (creep.pos.isNearTo(dumbledore)) {
            creep.drop(RESOURCE_ENERGY)
        } else {
            creep.moveTo(dumbledore,  {visualizePathStyle: {stroke: '#1775bb'}})
            creep.say("Transport")
        }
    }
}

module.exports = rankTransporter