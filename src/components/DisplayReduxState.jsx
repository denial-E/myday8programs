import React from 'react';
import {  useSelector } from 'react-redux';

const DisplayReduxState = () => {
    const OperationStateValue = useSelector((state)=>state.opReducer.value) //fetch statevalue from reducer
    return (
        <div>
            <h1>State Value:{OperationStateValue}</h1>
            
        </div>
    );
};

export default DisplayReduxState;