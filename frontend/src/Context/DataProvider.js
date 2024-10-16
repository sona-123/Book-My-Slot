import React, { createContext, useContext, useState } from 'react';

const DataContext = createContext();

export const useData = () => useContext(DataContext);

export const DataProvider = ({ children }) => {
    const [user, setUser] = useState(null); // Store user state

    return (
        <DataContext.Provider value={{ user, setUser }}>
            {children}
        </DataContext.Provider>
    );
};
