import { useEffect, useState } from "react"

const useItemDetail = id => {
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch(`https://whispering-ravine-60008.herokuapp.com/items/${id}`)
            .then(res => res.json())
            .then(data => setItem(data))
    }, [id]);
    return [item, setItem];
}

export default useItemDetail;