import { useState, useEffect } from "react";
import axios from "axios";

function useAxiosGet(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading("loading...");
        setData(null);
        setError(null);
        axios
            .get(url)
            .then((res) => {
                console.log(res.data);
                setLoading(false);
                res.data && setData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError("An error occurred. Awkward..");
            });
    }, [url]);

    return [data, loading, error];
}

export default useAxiosGet;
