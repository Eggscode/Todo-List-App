import React from 'react'

const Todos = ({todos,title,todoDelete}) => {
    return (
        <div>
            {todos.map((todos)=>(
                <div className="todos-list" key={todos.id}>
                    <p className="todo">{todos.title}</p>
                        <div className="action">
                            <i className='fa-done'>Done</i>
                                <i className='fa-delete' onClick={()=>todoDelete(todos.id)}>Delete</i>
                        </div>
                </div>
            ))}
        </div>
        
    )
}

export default Todos
