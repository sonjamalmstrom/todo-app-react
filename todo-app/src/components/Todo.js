import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";
import TodoForm from "./TodoForm";
function Todo({ todos, completeTodo, removeTodo, updateTodo }) {
    const [edit, setEdit] = useState({ id: null, text: '' })
    const submitEdit = value => {
        if (value === "") {
            alert("This field can't be empty");
        } else {
            updateTodo(edit.id, value)
            setEdit({
                id: null,
                value: ''
            })
        }


    }
    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }
    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row complete' : 'todo-row'} key={index}>
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <button
                onClick={() => setEdit({ id: todo.id, text: todo.text })}
                className="edit-button" >Edit
            </button>
            <div className='icons'>
                <TfiClose
                    onClick={() => removeTodo(todo.id)}
                    className="delete-icon"
                />

            </div>
        </div>
    ))
}
export default Todo