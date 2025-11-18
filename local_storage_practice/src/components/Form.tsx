import React, { useState } from "react";

interface FormProps {
    onAdd: (item:string, index:number) => void;
    index: number;
}
export default function Form({onAdd, index}:FormProps) {
    const [typed, setTyped] = useState("");

    function handleTyped(event:React.ChangeEvent<HTMLInputElement>) {
        setTyped(event.target.value)
    }
    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            setTyped("");
            onAdd(typed, index+1);
        }}>
          <label>Type in to-do item</label>
          <input onChange={handleTyped} value={typed}/>
          <button type="submit">Submit</button>
        </form>
    )
}