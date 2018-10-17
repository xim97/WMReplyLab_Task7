export default function loadItems(itemsStore) {
    itemsStore.setLoading(true);
    const request = "https://api.punkapi.com/v2/beers/random";
    fetch(request)
        .then(response => response.json())
        .then(data => {
            itemsStore.setLoading(false);
            if (data.length > 0) {
                itemsStore.setItems(data);
            }
        })
}