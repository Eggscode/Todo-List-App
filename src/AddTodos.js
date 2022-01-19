import React from 'react'
import { useState,useEffect } from 'react'

const AddTodos = () => {
    const [title, setTitle] = useState('')
    

    return (
        <div className='todos'>
            <form >
                <input 
                type="text" 
                required
                value={title}
                placeholder='Enter Todos'
                onChange={(e)=> setTitle(e.target.value)}
                />
                <button type='submit'>Add Todos</button>
                <p>{title}</p>
            </form>
        </div>
    )
}

export default AddTodos
