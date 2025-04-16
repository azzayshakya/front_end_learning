import React, { useContext } from 'react';
import { NameContext, AgeContext } from './UseContext';

const Data = () => {
    const myname = useContext(NameContext);
    const myage = useContext(AgeContext);
    return (
        <div>
            <h1>Data Component</h1>
            <p>My information: {myname} and {myage}</p>
        </div>
    );
}

export default Data;
