import React, { useEffect } from "react";
import useAxiosGet from "./useAxiosGet";

function UseAxiosComponent() {
    let [data, loading, error] = useAxiosGet("https://api.quotable.io/random");

    return (
        <div>
            {loading && <p>{loading}</p>}
            {data && <h2>"{data.content}"</h2>}
            {data && <h3>{data.author}</h3>}
            {error && <p>{error}</p>}
        </div>
    );
}

export default UseAxiosComponent;
