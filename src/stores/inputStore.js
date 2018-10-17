import { observable, action } from "mobx";
import loadItems from "../utils/loadItems";
import loadRandomItem from "../utils/loadRandomItem";

export class InputStore {    
    constructor(itemsStore) {
       this.itemsStore = itemsStore;
    }

    @observable input = {
        abv_gt: "",
        abv_lt: "",
        ibu_gt: "",
        ibu_lt: "",
        ebc_gt: "",
        ebc_lt: "",
        beer_name: "",
        yeast: "",
        brewed_before: "",
        brewed_after: "",
        hops: "",
        malt: "",
        food: "",
    }
    @observable page = 1;

    @action nextPage = () => {
        this.page++;
        loadItems(this.itemsStore, this.input, this.page);
    }

    @action prevPage = () => {
        if (this.page > 1) {
            this.page--;
        }
        loadItems(this.itemsStore, this.input, this.page);
    }

    @action setValue = event => {
        const value = event.target.value;
        switch (event.target.name) {
            case "abv_gt": {
                this.input.abv_gt = value;
                break;
            }
            case "abv_lt": {
                this.input.abv_lt = value;
                break;
            }
            case "ibu_gt": {
                this.input.ibu_gt = value;
                break;                
            }
            case "ibu_lt": {
                this.input.ibu_lt = value;
                break;                
            }
            case "ebc_gt": {
                this.input.ebc_gt = value;
                break;                
            }
            case "ebc_lt": {
                this.input.ebc_lt = value;
                break;                
            }
            case "beer_name": {
                this.input.beer_name = value;
                break;
            }
            case "yeast": {
                this.input.yeast = value;
                break;
            }
            case "brewed_before": {
                this.input.brewed_before = value;
                break;
            }
            case "brewed_after": {
                this.input.brewed_after = value;
                break;
            }
            case "hops": {
                this.input.hops = value;
                break;
            }
            case "malt": {
                this.input.malt = value;
                break;
            }
            case "food": {
                this.input.food = value;
                break;
            }
        }
    }

    @action getItems = () => {
        this.page = 1;
        loadItems(this.itemsStore, this.input, this.page);
    }

    @action getRandomItem = () => {
        this.page = 1;
        loadRandomItem(this.itemsStore);
    }

}
