let rankUpgrader = {

    run: (creep) => {

        let upgradeResponseCode = creep.upgradeController(creep.room.controller)

        if (!creep.pos.inRangeTo(creep.room.controller, 3)) {
            creep.moveTo(creep.room.controller, { visualizePathStyle: { stroke: '#ffffbf' } });
        } else if (upgradeResponseCode == ERR_NOT_ENOUGH_RESOURCES) {
            Memory.requestTransport[creep.id] = true;
        } else {
            delete Memory.requestTransport[creep.id];
        }
    }
}

module.exports = rankUpgrader