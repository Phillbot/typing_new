import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as InversifyReactProvider } from 'inversify-react';
import { Container } from 'inversify';
import { App } from './components/App/App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * need crate and bind container
 */

export const container = new Container();

root.render(
    <React.StrictMode>
        <InversifyReactProvider container={container}>
            <App />
        </InversifyReactProvider>
    </React.StrictMode>
);
