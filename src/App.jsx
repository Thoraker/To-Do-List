import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import data from './components/Data'
import Counter from './components/Counter'

const App = () => {
	console.log(data)
	return (
		<>
			<div className='col-8 container-fluid'>
				<h1>To Do List</h1>
				<ul>
					<Input />
					<Tasks />
					<Counter />
				</ul>
			</div>
		</>
	)
}

export default App
