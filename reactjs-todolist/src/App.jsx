import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"

function App() {
	let todos = [
        'Go to the gym',
        'Eat healthier'
    ]


	return (
		<>
			<TodoInput todos={todos} />
			<TodoList todos={todos} />
		</>
	)
}

export default App
