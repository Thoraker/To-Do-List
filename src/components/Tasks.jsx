import { useState } from 'react'
import './Tasks.css'
import data from './Data'

const Tasks = () => {
	const [list, setList] = useState(data)

	setList((data = [...data]))
	list.map(index => {
		return (
			<>
				<li>{list.chore}</li>
			</>
		)
	})
}
export default Tasks
