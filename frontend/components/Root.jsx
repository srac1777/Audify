import React from 'react';
import { Provider } from 'react-redux';
import { withRouter, HashRouter } from 'react-router-dom';
import App from './App';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <App store={store}/>
        </HashRouter>
    </Provider>
);

export default Root;