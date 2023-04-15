import { useState } from 'react'
import tasks from './Datos'
import './CreateTask.css'
import Counter from './Counter'

const CreateTask = () => {
	const [taskLength, setTaskLength] = useState(4)

	const [task, setTask] = useState('')

	const createTask = () => {
		tasks.push({ id: +new Date(), chore: task, completed: false })
		setTaskLength(tasks.length)
		setTask('')
	}

	return (
		<div className='container'>
			<h1>Lista de tareas</h1>
			<div className='body'>
				<ul>
					<li>
						<input
							type='text'
							name='chore'
							placeholder='Agrega una nueva tarea'
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
								className={chore.completed ? 'd-flex complete' : 'd-flex'}
								key={index}
							>
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
					<Counter props={taskLength} />
				</ul>
			</div>
			<div id='stackOfPages1'></div>
			<div id='stackOfPages2'></div>
			<div id='stackOfPages3'></div>
		</div>
	)
}

export default CreateTask
