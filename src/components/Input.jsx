import { useState } from 'react'
import data from './Data'

const Input = () => {
	const [task, setTask] = useState('')

	const newTask = () => {
		setTask((previousTask)=> const auxTask = [...{ chore: { task }, complete: false })
		setTask('')
	}

	return (
		<>
			<input
				type='text'
				onChange={e => setTask(() => e.target.value)}
				onKeyDown={e =>
					e.key === 'Enter' || e.key === 'NumpadEnter' ? newTask() : ''
				}
				value={task}
			/>
			<h1>{task}</h1>
		</>
	)
}
export default Input
