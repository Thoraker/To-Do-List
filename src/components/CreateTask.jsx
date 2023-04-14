import { useState } from 'react'
import tasks from './Datos'
import './CreateTask.css'

const CreateTask = () => {
	const [taskLength, setTaskLength] = useState(4)

	const [task, setTask] = useState('')

	const createTask = () => {
		tasks.push({ chore: task, button: 'invisible' })
		setTaskLength(tasks.length)
		setTask('')
	}

	return (
		<div className='container'>
			<h1>To Do List</h1>
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
							<li
								className='d-flex'
								onMouseEnter={e => {
									chore.button = 'visible'
								}}
								onMouseLeave={e => {
									chore.button = 'invisible'
								}}
								key={index}
							>
								{chore.chore}
								<button
									type='button'
									ref={chore.button}
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

export default CreateTask
