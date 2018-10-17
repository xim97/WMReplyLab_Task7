import React, { Component, Fragment } from "react";
import PaginationButtons from "./PaginationButtons";
import { inject, observer } from 'mobx-react';

@inject("itemsStore")
@observer
export default class ItemsList extends Component {
    render() {
        const store = this.props.itemsStore;
        return (
            <div className="right-part">
                {
                    store.isLoading ? <p>Loading ... </p> : store.items.length > 0 ?
                        <Fragment>
                            {
                                store.items.length === 25 && <PaginationButtons />
                            }
                            <ol>
                                {
                                    store.items.map(item =>
                                        <li key={item.id}>
                                            {item.name}
                                            <input
                                                type="button"
                                                value="Get info"
                                                onClick={() => store.setShowingDetailedItem(item)}
                                            />
                                        </li>
                                    )
                                }
                            </ol>
                        </Fragment> : <p>Nothing to show</p>
                }
            </div>
        );
    }
}
