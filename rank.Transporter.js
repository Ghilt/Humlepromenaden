let rankTransporter = {
    
    run: (creep) => {
        if (creep.carry.energy < creep.carryCapacity) {
            var energySource = parseInt(creep.name.substring(creep.name.length - 3, creep.name.length - 1)) % 2;
            var sources = creep.room.find(FIND_SOURCES);
            if(creep.harvest(sources[energySource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[energySource], {visualizePathStyle: {stroke: '#ff75bb'}});
            }
        } else if (creep.memory.target) {
            let target = Game.getObjectById(creep.memory.target);
            if (creep.pos.isNearTo(target)) {
                creep.transfer(target, RESOURCE_ENERGY);
            } else {
                creep.moveTo(Game.getObjectById(creep.memory.target), {visualizePathStyle: {stroke: '#1775bb'}});
            };
        } else {
            for (var id in Memory.requestTransport) {
                if (Memory.requestTransport[id]) {
                    Memory.requestTransport[id] = false;
                    creep.memory.target = id;
                }
            }
        }
    }
}

module.exports = rankTransporter