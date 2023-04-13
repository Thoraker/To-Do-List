import './App.css'
import Input from './components/Input'
import Tasks from './components/Tasks'
import Counter from './components/Counter'

const App = () => {
	const data = [
		{ chore: 'Wake up', complete: false },
		{ chore: 'Take a shower', complete: false },
		{ chore: 'Get dressed', complete: true },
		{ chore: 'Eat breakfast', complete: false },
	]

	return (
		<>
			<div className='col-8 container-fluid'>
				<h1>To Do List</h1>
				<ul>
					<Input data={data} />
					<Tasks />
					<Counter data={data} />
				</ul>
			</div>
		</>
	)
}

export default App
