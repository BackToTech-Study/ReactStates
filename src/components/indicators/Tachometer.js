import React from 'react';
import useSWR from 'swr'
import { address, engineDataFetcher } from '../../services/SimulationService'

const Tachometer = () => { 

    //TODO use SWR here

    let message = ""
    
    //TODO handle SWR states here      

    return (
        <div className="card-line">
            {message}
        </div>
    );
}

export default Tachometer;