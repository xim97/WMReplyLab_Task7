import createRequest from "./createRequest";

export default function loadItems(itemsStore, input, page) {    
    itemsStore.setLoading(true);   
    const request = createRequest(input, page);
    fetch(request)
        .then(response => response.json())
        .then(data => {
            itemsStore.setLoading(false);
            if (data.length > 0) {                
                itemsStore.setItems(data);
            }
        })
}