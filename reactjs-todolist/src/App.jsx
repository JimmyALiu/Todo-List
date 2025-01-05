import { useState, useEffect } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
	// use for variables that the user interacts with
	const [todos, setTodos] = useState([])
	const [todoValue, setTodoValue] = useState('')

	function persistData(newList) {
		localStorage.setItem('todos', JSON.stringify({ todos: newList }))
	}

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		persistData(newTodoList)
		setTodos(newTodoList)
	}

	function handleEditTodo(index) {
		const curTodo = todos[index]
		persistData(newTodoList)
		setTodoValue(curTodo)

		handleDeleteTodo(index)
	}

	function handleDeleteTodo(index) {
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index
		}) 
		setTodos(newTodoList)
	}

	// read stored todos
	useEffect(() => {
		if (!localStorage) {
			return
		}

		let localTodos = localStorage.getItem('todos')
		if (!localTodos) {
			return
		}

		localTodos = JSON.parse(localTodos).todos
		setTodos(localTodos)
	}, [])

	return (
		<>
			<TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos} />
			<TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos} />
		</>
	)
}

export default App
