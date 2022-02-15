import SimulatedEngine from './DummyData'
const address = 'api/engine';

// simulated fether with 2[s] delay
const engineDataFetcher = (addr) => new Promise((resolve, reject) => setTimeout( () => { resolve(SimulatedEngine)}, 2000 ));

// simulated fether with error
// const engineDataFetcher = (addr) => new Promise((resolve, reject) => setTimeout(() => { reject("Error 404: Engine not found!") }, 500))

const putSpeed = (addr, speed) => new Promise((resolve, reject) => setTimeout( 
    () => { 
        SimulatedEngine.setVehilceSpeed(speed)
        resolve();
    }, 0));

export { address, engineDataFetcher, putSpeed };