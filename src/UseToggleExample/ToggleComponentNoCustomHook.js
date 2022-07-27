import React, { useState } from "react";

function ToggleComponentNoCustomHook() {
    const [value, setValue] = useState(false);

    function toggleValue(value) {
        setValue((currentValue) =>
            typeof value === "boolean" ? value : !currentValue
        );
    }

    return (
        <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
        </div>
    );
}

export default ToggleComponentNoCustomHook;
