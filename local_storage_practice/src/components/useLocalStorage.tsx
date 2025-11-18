import React, {useState, useEffect} from "react";
import type { ToDoItem } from "../types/type";

function useLocalStorage<T>(key:string, initValue:T){

    const [toDoItem, setToDoItem] = useState<T>(()=>{
      try {
      const storedData = localStorage.getItem(key);
      return storedData? JSON.parse(storedData): initValue;
      } catch{
        return initValue;
      }
    });

    // Everytime an item is added to an array, store them in local storage. localStorage only accepts string = JSON.stringfy()
    useEffect(() => {
      localStorage.setItem("todoItem", JSON.stringify(toDoItem))
    }, [key, toDoItem]);

    return [toDoItem, setToDoItem] as const;
}

export default useLocalStorage;