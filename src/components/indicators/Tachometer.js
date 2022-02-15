import React from 'react';
import useSWR from 'swr'
import { address, engineDataFetcher } from '../../services/SimulationService'

const Tachometer = () => { 
    const { data, error, isValidating } = useSWR(address, engineDataFetcher)

    let message = ""
    
    if (isValidating)
        message = `Loading engine speed from ${address} ...`
    else if (error) 
        message = `Failed engine speed from ${address}. ${error}.`
    else
        message = `Engine speed is: ${data.engineSpeed}`
        

    return (
        <div className="card-line">
            {message}
        </div>
    );
}

export default Tachometer;