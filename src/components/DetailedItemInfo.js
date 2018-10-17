import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject("itemsStore")
@observer
export default class DetailedItemInfo extends Component {
    render() {        
        const store = this.props.itemsStore;
        const { name, description, image_url, first_brewed, tagline, food_pairing } = store.showingDetailed;
        return (
            <div className="detailed-info">
                <h2>{name}</h2>
                <p>{description}</p>
                <img src={image_url} alt={name} />
                <p>First brewed:{first_brewed}</p>
                <p>{tagline}</p>
                <ul>
                    <li>Food</li>
                    {
                        food_pairing.map(food => <li key={food}>{food}</li>)
                    }
                </ul>
                <input
                    type="button"
                    value="Hide"
                    onClick={() => {
                        store.hideShowingDetailedItem();
                        this.forceUpdate();
                    }}
                />
            </div>
        );
    }
}