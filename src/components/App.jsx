import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {


  const [note, setNote] = useState("");

  const [items, setItems] = useState([]);

  function addText(event) {
    const newValue = event.target.value;
    setNote(newValue);
  }

  function saveText() {
    setItems( (prevValue) => {
      return (
        [...prevValue, note]
        );});
    setNote("");
  }



  function deleteItem(id){
    setItems(function(prevValue){
      return(
        prevValue.filter(
          function(item, index){
            return (
              index !== id
            )
          }
        ) 
      )
    })
  }

  function loopItems (item, index) {
    return(
      <ToDoItem 
      // funkciju deleteItem šalješ kao properies u ToDoItem
        key = {index}
        id = {index}
        onChecked = {deleteItem}
        toDoItem = {item}
      />
    )
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Notes</h1>
      </div>
      <div className="form">
        <input  type="text" value={note} onChange={addText}/>
        <button onClick={saveText}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map(loopItems)}
        </ul>
      </div>
    </div>
  );
}

export default App;
