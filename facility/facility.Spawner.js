let facilitySpawner = {
    
    run: () => {
        
        let whatToSpawn = () => {
            var abs = _.filter(Game.creeps, (creep) => creep.memory.rank == 'Abomination');
            //console.log('Abomination: ' + abs.length);
            
            var upgraders = _.filter(Game.creeps, (creep) => creep.memory.rank == 'Upgrader');
            //console.log('Upgrader: ' + upgraders.length);
            
            var owls = _.filter(Game.creeps, (creep) => creep.memory.rank == 'Transporter');
            //console.log('Owl: ' + owls.length);
            
            if (abs.length < 3) return 'abs';
            if (upgraders.length < 1) return 'upg';
            if (owls.length < 6) return 'owl';
            if (upgraders.length < 3) return 'upg';
            return null;
        };

        let spawnSoldier = (type) => {
            if (type === 'abs') {
                console.log('Spawning: ' + type);
                var newName = 'Abomination' + Game.time;
                console.log('Spawning new abomination: ' + newName);
                Game.spawns['Humlepromenaden'].spawnCreep([WORK, CARRY, CARRY, MOVE], newName,
                    { memory: { rank: 'Abomination' } });
            }
            
        
            if (type === 'upg') {
                var newName = 'Upgrader🛠️' + Game.time;
                console.log('Spawning new upgrader: ' + newName);
                Game.spawns['Humlepromenaden'].spawnCreep([WORK, WORK, CARRY, MOVE], newName,
                    { memory: { rank: 'Upgrader' } });
            }
        
            if (type === 'owl') {
                var newName = 'Owl' + Game.time;
                console.log('Spawning new Owl: ' + newName);
                Game.spawns['Humlepromenaden'].spawnCreep([WORK, MOVE, CARRY, MOVE], newName,
                    { memory: { rank: 'Transporter' } });
            } 
            if (!type) return;
            //console.log('Spawning: ' + type);
        }    
        
        spawnSoldier(whatToSpawn());
    }
}

module.exports = facilitySpawner