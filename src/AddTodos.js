import React from 'react';
import { useState } from 'react';

const AddTodos = () => {
        const [title, setTitle] = useState('');
        const [detail, setDetail] = useState('');
        const [todoList, setTodoList] = useState([]);

        const todoSubmit =(e)=>{
            e.preventDefault();
            const newTodo = {
                title: title,
                detail: detail,
                id: Math.round(Math.random()*10)
            };
            setTodoList([...todoList, newTodo])
            setTitle('');
            setDetail('');
        }
 
    return (
        <div className='todos'>
            <h1>Todo-List</h1>
                    <form onSubmit={todoSubmit}>
                        <input type="text" 
                        placeholder='Enter Todo'
                        value={title}
                        required
                        onChange={(e)=>setTitle(e.target.value)}
                        />
                        <input type="text" 
                        placeholder='Enter details of todo'
                        value={detail}
                        required
                        onChange={(e)=>setDetail(e.target.value)}/>
                        <button>Add Todo</button>
                    </form>

                    {todoList.map(todo=> 
                        <div className='todos-list' key={todo.id}>
                            <h3>{todo.title}</h3>
                            <p>{todo.detail}</p>
                        </div>
                        )}

        </div>
    )
}

export default AddTodos;
