import React from 'react'
import { useState } from 'react'

export const Todos = () => {
  const [todos, setTodos] = useState("");
  const [todoItems, setTodoItems] = useState([]);
  function onDelete(index) {
    const deleteTodo = todoItems.filter((todo, ind) =>
    {return  ind !== index});
    setTodoItems(
deleteTodo); 
    console.log(index);
  }
  return (
    <div>
      <input
        className="input-text"
        type="text"
        value={todos}
        placeholder="Enter a text"
        onChange={(e) => {
          setTodos(e.target.value);
        }}
      />
      <input
        className="input-btn"
        type="button"
        value="Add"
        onClick={(e) => {
          setTodoItems([
            ...todoItems,
            {
              id: todoItems.length + 1,
              text: todos + "  -> Added on :- " + new Date()
            }
          ]);
         
          setTodos("");
          console.log("cleared text");
        }}
      />
      <ol className="list-item">
        {todoItems.map((todo, ind) => (
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

    /* {todos.map((element,index)=>{
                    return <TodoItem title={element.title} desc={element.desc} sno={index+1} />
                })} */
  )
}
