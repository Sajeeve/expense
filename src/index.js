import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="302dadf3-a21a-4a04-9939-921c2c2c94d3" language="en-US">
        <Provider>
            <App/>
        </Provider>
    </SpeechProvider>,
document.getElementById('root'));