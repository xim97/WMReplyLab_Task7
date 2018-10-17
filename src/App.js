import React, { Component } from 'react';
import './App.css';
import SearchForm from "./components/SearchForm";
import ItemsList from "./components/ItemsList";
import DetailedItemInfo from "./components/DetailedItemInfo";
import { inject, observer } from 'mobx-react';

@inject("itemsStore")
@observer
export default class App extends Component {
    render() {
        const store = this.props.itemsStore;
        return (
            <div className="App-container">
                <div className="App">
                    <SearchForm />
                    <ItemsList />
                </div>
                {
                    store.showingDetailed !== null &&
                    <DetailedItemInfo />
                }
            </div>

        );
    }
}//  