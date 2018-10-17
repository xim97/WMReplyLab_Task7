import { observable, action, computed } from 'mobx';

export class ItemsStore {  
    @observable items = [];
    @observable isLoading = false;
    @observable showingDetailedItem = null;    

    @action setLoading = isLoading => {
        this.isLoading = isLoading;
    }   

    @action setItems = items => {
        this.items = items;
    }
    
    @action hideItems = () => {
        this.items = [];
    }

    @action setShowingDetailedItem = item => {
        this.showingDetailedItem = item;
    }

    @action hideShowingDetailedItem = () => {        
        this.showingDetailedItem = null;        
    }

    @computed get showingDetailed() {        
        return this.showingDetailedItem;
    }

}
