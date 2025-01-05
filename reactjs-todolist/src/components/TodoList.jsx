import React from 'react'

export default function TodoList() {
    let todos = [
        'Go to the gym',
        'Eat healthier'
    ]


    return (
        <ul className='main'>
            {todos.map((todo, todoIndex) => {
                return (
                    <li className='todoItem' key={todoIndex}>
                        {todo}
                        <i class="fa-solid fa-pen-to-square"></i>
                    </li>
                )
            })}
        </ul>
    )
}
