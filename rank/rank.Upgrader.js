let rankUpgrader = {
    
    run: (creep) => {

        let upgradeResponseCode = creep.upgradeController(creep.room.controller)
        if (upgradeResponseCode == ERR_NOT_IN_RANGE || upgradeResponseCode == ERR_NOT_ENOUGH_RESOURCES ) {
            creep.moveTo(creep.room.controller, {visualizePathStyle: {stroke: '#ffffff'}});
        }
        
        if (creep.carry.energy <= 0) {
            creep.say('Pic');
            let energyToUse = creep.room.find(FIND_DROPPED_RESOURCES);
            creep.pickup(energyToUse[0]);
        }
    }
}

module.exports = rankUpgrader