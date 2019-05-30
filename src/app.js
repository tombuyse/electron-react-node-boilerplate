import React, {useState, useEffect} from 'react';
import {api} from './api';

const App = () => {
    const [successText, setSuccessText] = useState(null);

    useEffect(() => {
        api.get('/test')
            .then(({data}) => setSuccessText(data))
            .catch(err => console.error(err));
    });

    return (
        <div>
            <h2>Electron is running! sss</h2>
            <p>Fetched api response from server: {successText}</p>
        </div>
    );
};

export default App;
