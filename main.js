let rankAbomination = require('rank.Abomination');
let rankUpgrader = require('rank.Upgrader');
let rankTransporter = require('rank.Transporter');
let facilitySpawner = require('facility.Spawner');

module.exports.loop = function () {
    var creep = Game.creeps['Adam'];
    
    facilitySpawner.run()
    
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.rank == 'Abomination') {
            rankAbomination.run(creep);
        }
        if (creep.memory.rank == 'Upgrader') {
            rankUpgrader.run(creep);
        }
        if (creep.memory.rank == 'Transporter') {
            rankTransporter.run(creep);
        }
    }
    
}