import { useState } from "react";

export function useForm(initialValue){
    const [value, setValue] = useState(initialValue);
    
    function handleChange(e){
        setValue(e.target.value);
    }
    return {
        value,
        onChange: handleChange,
    };
}