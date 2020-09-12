import React, {useState} from "react";
import "./TodoForm.css"

function TodoForm(props) {
    const {addTodo} = props;
    const [value, setValue] = useState("");

    //methods
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!value) {
            return;
        }

    addTodo(value);
    setValue("");

    }


    return (
        <form onSubmit={handleSubmit}>
            <input 
            value={value}
            type="text" 
            placeholder="Add todo..."
            onChange={(event) => setValue(event.target.value)}
            
        />
        </form>
    )
}

export default TodoForm;
