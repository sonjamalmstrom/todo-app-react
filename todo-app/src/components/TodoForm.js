import React, { useState, useEffect, useRef } from "react";
function TodoForm(props) {

    const [input, setInput] = useState(props.edit ? props.edit.text : '')

    //focus on whatever I put as the ref
    const focus = useRef(null)
    useEffect(() => { focus.current.focus() })

    const handleChange = event => {
        setInput(event.target.value)
    }
    const handleSubmit = event => {
        event.preventDefault()
        if (input === "") {
            alert("This field can't be empty");
        } else {

            props.onSubmit({
                id: Math.floor(Math.random() * 10000),
                text: input
            })
            setInput('')
        }

    }
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
                    <input className="todo-input edit"
                        type="text"
                        placeholder="Update the text"
                        value={input}
                        name="text"
                        onChange={handleChange}
                        ref={focus} />
                    <button className="todo-button edit">Update</button>
                </>)
                :
                (<>
                    <input className="todo-input"
                        type="text"
                        placeholder="Add a todo"
                        value={input}
                        name="text"
                        onChange={handleChange}
                        ref={focus}
                    />
                    <button className="todo-button">Add</button>

                </>
                )
            }

        </form>
    )
}
export default TodoForm