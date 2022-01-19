import React from 'react'
import AddTodos from './AddTodos'
import Todos from './Todos'
import { useState } from 'react'

const Form = () => {
    const [todos, setTodos]=useState([
        {title:'Buy coffee', id:2},
        {title:'Coding Practice', id:3},
    ]);
    const [title, setTitle] = useState('')

const todoDelete = (id) => {
    const newTodos = todos.filter((todo)=>(todo.id !== id))
                        setTodos(newTodos)
    };


    return (
        <div className='form'>
            <h1 className="title">To-Do List</h1>
            <AddTodos title={title}/>
            <Todos title={title} todos={todos} setTodos={setTodos} todoDelete={todoDelete} />
        </div>
    )
}

export default Form
