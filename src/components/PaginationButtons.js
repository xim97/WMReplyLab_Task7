import React, { Component } from "react";
import { inject, observer } from 'mobx-react';

@inject("inputStore")
@observer
export default class PaginationButtons extends Component {
    render() {
        const store = this.props.inputStore;
        return (
            <div className="pagination">
                <input
                    type="button"
                    value="previous page"
                    onClick={() => {
                        store.prevPage();
                        /*if (this.props.page > 1) {
                            this.props.loadItems();
                        }*/

                    }}
                />
                <p>{store.page}</p>
                <input
                    type="button"
                    value="next page"
                    onClick={() => {
                        store.nextPage();
                        //this.props.loadItems();
                    }}
                />
            </div>
        );
    }
}
