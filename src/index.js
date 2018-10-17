import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import App from "./App";
import { InputStore } from './stores/inputStore';
import { ItemsStore } from './stores/itemsStore';

const itemsStore = new ItemsStore();
const inputStore = new InputStore(itemsStore);

const Main = () => (
    <Provider
        inputStore={inputStore}
        itemsStore={itemsStore}
    >
        <App />
    </Provider>
);

ReactDOM.render(
    <Main />,
    document.getElementById('app')
);
