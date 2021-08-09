import React from 'react'
import { useState } from 'react'

export const Todos = () => {
  const [todos, setTodos] = useState("");
  const [listItems, setListItems] = useState([]);
  function onDelete(index) {
    const remainingTodo = listItems.filter((todo, ind) => { return ind !== index });
    setListItems(
      remainingTodo);
    console.log(index);
  }
  return (   
    <div>
      <input
        className="input-text"
        type="text"
        value={todos}
        placeholder="Write Your Task Here..................."
        onChange={(e) => {
          setTodos(e.target.value);
        }}
      />
      <input
        className="input-btn"
        type="button"
        value="Add"
        onClick={(e) => {

          if (!todos) {
            alert("write something")
          }else{
            setListItems([
              ...listItems,
              {
                id: listItems.length + 1,
                text: todos 
              }
            ]);
            setTodos("");
            console.log("cleared text");
          }}
          }
          
      />
      <ol className="list-item">
        {listItems.map((todo, ind) => (
          <li className="each-item" key={ind}>{todo.text}
            <button
              className="btn btn-danger"
              onClick={() => {
                onDelete(ind)
              }}>Delete</button>
          </li>
        ))}
      </ol>
    </div>

  )
}
