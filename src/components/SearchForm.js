import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject("inputStore")
@observer
export default class SearchForm extends Component {

    render() {
        const store = this.props.inputStore;
        return (
            <form className="search-form">
                <label>
                    abv_gt
                    <input
                        type="number"
                        name="abv_gt"
                        onChange={event => store.setValue(event)}
                        value={store.input.abv_gt}
                    />
                </label>
                <label>
                    abv_lt
                    <input
                        type="number"
                        name="abv_lt"
                        onChange={event => store.setValue(event)}
                        value={store.input.abv_lt}
                    />
                </label>
                <label>
                    ibu_gt
                    <input
                        type="number"
                        name="ibu_gt"
                        onChange={event => store.setValue(event)}
                        value={store.input.ibu_gt}
                    />
                </label>
                <label>
                    ibu_lt
                    <input
                        type="number"
                        name="ibu_lt"
                        onChange={event => store.setValue(event)}
                        value={store.input.ibu_lt}
                    />
                </label>
                <label>
                    ebc_gt
                    <input
                        type="number"
                        name="ebc_gt"
                        onChange={event => store.setValue(event)}
                        value={store.input.ebc_gt}
                    />
                </label>
                <label>
                    ebc_lt
                    <input
                        type="number"
                        name="ebc_lt"
                        onChange={event => store.setValue(event)}
                        value={store.input.ebc_lt}
                    />
                </label>
                <label>
                    beer_name
                    <input
                        type="text"
                        name="beer_name"
                        onChange={event => store.setValue(event)}
                        value={store.input.beer_name}
                    />
                </label>
                <label>
                    yeast
                    <input
                        type="text"
                        name="yeast"
                        onChange={event => store.setValue(event)}
                        value={store.input.yeast}
                    />
                </label>
                <label>
                    brewed_before
                    <input
                        type="date"
                        name="brewed_before"
                        onChange={event => store.setValue(event)}
                        value={store.input.brewed_before}
                    />
                </label>
                <label>
                    brewed_after
                    <input
                        type="date"
                        name="brewed_after"
                        onChange={event => store.setValue(event)}
                        value={store.input.brewed_after}
                    />
                </label>
                <label>
                    hops
                    <input
                        type="text"
                        name="hops"
                        onChange={event => store.setValue(event)}
                        value={store.input.hops}
                    />
                </label>
                <label>
                    malt
                    <input
                        type="text"
                        name="malt"
                        onChange={event => store.setValue(event)}
                        value={store.input.malt}
                    />
                </label>
                <label>
                    food
                    <input
                        type="text"
                        name="food"
                        onChange={event => store.setValue(event)}
                        value={store.input.food}
                    />
                </label>
                <input
                    type="button"
                    value="Search"
                    onClick={
                        store.getItems
                    }
                />
                <input
                    type="button"
                    value="get random beer"
                    onClick={
                        store.getRandomItem
                    }
                />
            </form>
        );
    }
}