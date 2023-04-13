import { useState } from 'react'
import tasks from './Datos'

const Input = () => {
	const [taskLength, setTaskLength] = useState(4)

	const [task, setTask] = useState('')

	const createTask = () => {
		tasks.push({ chore: task })
		setTaskLength(tasks.length)
		setTask('')
	}

	return (
		<div className='container'>
			<div className='header'>
				<h1>To Do List</h1>
			</div>
			<div className='body'>
				<ul>
					<li>
						<input
							type='text'
							name='chore'
							placeholder='What needs to be done?'
							autoComplete='off'
							onKeyDown={e =>
								e.key === 'Enter' || e.key === 'NumpadEnter' ? createTask() : ''
							}
							onChange={e => setTask(e.target.value)}
							value={task}
						/>
					</li>
					{tasks.map((chore, index) => {
						return (
							<li className='d-flex' key={index}>
								{chore.chore}
								<button
									type='button'
									className='btn-close ms-auto'
									onClick={() => {
										tasks.splice(index, 1)
										setTaskLength(tasks.length)
									}}
								></button>
							</li>
						)
					})}
					<li id='counter'>
						{taskLength === 0
							? 'No Chores Left!! Well done!!'
							: taskLength + ' chores left'}
					</li>
				</ul>
			</div>
			<div id='stackOfPages1'></div>
			<div id='stackOfPages2'></div>
			<div id='stackOfPages3'></div>
		</div>
	)
}

export default Input