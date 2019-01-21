let init = () => {
    if (Memory.initialized) {
        return;
    }
    
    Memory.requestTransport = {};

    console.log(`Initiation initialized (>'.')>`);
    Memory.initialized = true;
}

module.exports = init;