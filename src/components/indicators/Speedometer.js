import { useRef, useEffect } from 'react';
import useSWR, { mutate } from 'swr'
import { address, engineDataFetcher, putSpeed } from '../../services/SimulationService'

const Speedometer = () => { 

    const speedInputRef = useRef();

    //TODO use SWR here

    let message = ""
    //TODO handle SWR states here  

    useEffect(() => {
        //TODO set data from SWR here
    }, []) //TODO bind effect to SWR data        

    function updateSpeed() {
        var newSpeed = speedInputRef.current.value;
        putSpeed(address, newSpeed)
        //TODO use SWR mutate to trigger data refresh
    }

    return (
        <div>
            <p className="card-line">
                Set speed to: 
                <input className="card-line" ref={speedInputRef} onBlur={updateSpeed}/>
            </p>
            <p className="card-line">{message}</p>
        </div>
    );
}

export default Speedometer;