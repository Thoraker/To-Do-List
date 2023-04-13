import { useState } from 'react'

const Input = data => {
	const [task, setTask] = useState('')

	const newTask = () => {
		data.push({ chore: { task }, complete: false })
		setTask('')
	}
	console.log(data)

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
