import './Counter.css'
import data from './Data'

const Counter = () => {
	return (
		<li id='count'>
			{data.length === 0 ? 'No pending tasks, Well done!!' : data.length}
		</li>
	)
}
export default Counter
