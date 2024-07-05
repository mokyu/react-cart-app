import {useEffect, useState} from "react";
import {ListItem} from "../component/organisms/Item";

const useFakeStoreApi = () => {
    const [items, setItems] = useState<ListItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<unknown>(null);

    useEffect(() => {
        (async function(){
            try {
                const response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Network request failed");
                }

                setItems(await response.json() as ListItem[]);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        }());
    }, []);
    return {items, loading, error};
}

export default useFakeStoreApi;