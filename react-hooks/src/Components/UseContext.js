import React, { useContext, createContext } from 'react';
import Data from './Data';

const NameContext = createContext();
const AgeContext = createContext();

const UseContext = () => {
    const name = "Ajay Shakya";
    const age = 20;

    return (
        <div>
            <NameContext.Provider value={name}>
                <AgeContext.Provider value={age}>
                    <Data />
                </AgeContext.Provider>
            </NameContext.Provider>
        </div>
    );
}

export default UseContext;
export { NameContext, AgeContext };

