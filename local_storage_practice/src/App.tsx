// need to know how to create custome hook
// need to know when to use custome hook
// need to know how to store data in local storage ==> localStorage API provided by browser
// Objects must be converted to strings using JSON.stringify()
// need to know how to manage user data with useState (to-do list)
// have input fileld, display their typed items and delete items

import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Item from "./components/Item";
import type { ToDoItem } from "./types/type";
import DeleteButton from "./components/DeleteButton";

function App() {
 
    const [toDoItem, setToDoItem] = useState<ToDoItem[]>([]);

    useEffect(() => {
      localStorage.setItem("todoItem", JSON.stringify(toDoItem))
    }, [toDoItem]);

    // adding item to array[]
    function addItem(item:string, index:number) {
      setToDoItem((prev) => {
        return [...prev, {id: index, item: item}]
      })
    }

    // deleting item from array[]
    function deleteItem(index:number) {
        setToDoItem((prev) => {
          return prev.filter((item)=> {
            return item.id !== index
          })
        })  
    }

    return (
      <div>
        <Form onAdd={addItem} index={toDoItem.length}/>
        {toDoItem.map((item) => {
          return (
          <div>
            <Item displayitem={item}/>
            <DeleteButton onDelete={deleteItem} index={item.id} />
          </div>)
        })}
      </div>
    )
}

export default App;