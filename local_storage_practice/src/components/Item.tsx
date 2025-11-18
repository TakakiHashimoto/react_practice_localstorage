import React from "react";
import type { ToDoItem } from "../types/type";

interface displayItem {
    displayitem: ToDoItem
}

// props = {displayitem: {id:1, item:"fffff"}}
export default function Item({displayitem}:displayItem) { // {displayitem} = {id:1, item:"fffff"}
    return (
        <div>
            <p>{displayitem.item}</p>
        </div>
    )
}