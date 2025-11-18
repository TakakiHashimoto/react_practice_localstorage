import React from "react";

interface ButtonProps {
    onDelete: (index:number) => void; // What it takes as an argument and what it returns 
    index: number
}

export default function DeleteButton({onDelete, index}: ButtonProps) {
    return (
    <button onClick={() => {
        onDelete(index);
    }}>Delete item</button>
)
}