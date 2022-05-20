import { useEffect, useState } from "react"

const useItemDetail = id => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
    return [item, setItem];
}

export default useItemDetail;