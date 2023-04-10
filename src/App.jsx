// import { useState } from 'react'
import './App.css'

const App = () => {
	const [task, setTask] = useState('')

	return (
		<>
			<h1 className='text-secondary'>To Dos</h1>
			<div>
				<ul>
					<input
						type='text'
						onKeyDown={e =>
							e.key === 'Enter' || e.key === 'NumpadEnter'
								? e => this.setTask({ value: e.target.value })
								: ''
						}
						value={this.task.value}
					/>
				</ul>
			</div>
		</>
	)
}

export default App
