import React, { useState } from "react";

function useStateExample() {
    const [word, setWord] = useState("word");

    return (
        <div>
            <div>{word.toString()}</div>
            <input onChange={(e) => setWord(e.target.value)} />
        </div>
    );
}

export default useStateExample;
