let rankAbomination = {
    
    run: (creep) => {
        if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES);
            var energySource = parseInt(creep.name.substring(creep.name.length - 3, creep.name.length - 1)) % 2;
            if(creep.harvest(sources[energySource]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[energySource], {visualizePathStyle: {stroke: '#ffaa00'}});
                creep.say('Abominexecution');
            }
        }
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
    }
}

module.exports = rankAbomination