import React from 'react';
import Speedometer from '../indicators/Speedometer';
import Tachometer from '../indicators/Tachometer';

const Simulation = () => {  
    return (
        <div className='container-sm'>
            <Speedometer />
            <Tachometer />
        </div>
    )
}

export default Simulation;