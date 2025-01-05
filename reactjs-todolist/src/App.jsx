import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
	// use for variables that the user interacts with
	const [todos, setTodos] = useState([])

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		setTodos(newTodoList)
	}

	function handleEdit(index) {

	}

	function handleDeleteTodo(index) {
		const newTodoList = todos.filter((todo, todoIndex) => {
			return todoIndex !== index
		})
		setTodos(newTodoList)
	}

	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos} />
			<TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} />
		</>
	)
}

export default App
