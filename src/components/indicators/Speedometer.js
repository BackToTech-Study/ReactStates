import { useRef, useEffect } from 'react';
import useSWR, { mutate } from 'swr'
import { address, engineDataFetcher, putSpeed } from '../../services/SimulationService'

const Speedometer = () => { 

    const speedInputRef = useRef();

    const { data, error, isValidating, mutate } = useSWR(address, engineDataFetcher);

    let message = ""
    if (isValidating)
        message = `Loading vehicle speed from ${address} ...`
    else if (error) 
        message = `Failed vehicle speed from ${address}. ${error}.`
    else
        message = `Vehile speed is: ${data.vehicleSpeed}`

    useEffect(() => {
        if (data)
            speedInputRef.current.value = data.vehicleSpeed;
    }, [data])        

    function updateSpeed() {
        var newSpeed = speedInputRef.current.value;
        
        putSpeed(address, newSpeed).then(() => { mutate() });
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