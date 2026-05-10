import React from 'react';
import { getStoredBook } from './localstorage';

const Installation = () => {
    const installApp = getStoredBook()
      
    console.log(installApp);
    return (
        <div>
            <h1>Installation {installApp.length}</h1>
        </div>
    );
};

export default Installation;   