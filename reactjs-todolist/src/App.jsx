import { useState } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
	// use for variables that the user interacts with
	const [todos, setTodos] = useState([
		'Go to the gym',
		'Eat healthier'
	])

	function handleAddTodos(newTodo) {
		const newTodoList = [...todos, newTodo]
		setTodos(newTodoList)
	}

	return (
		<>
			<TodoInput handleAddTodos={handleAddTodos} />
			<TodoList todos={todos} /> 
		</>
	)
}

export default App
