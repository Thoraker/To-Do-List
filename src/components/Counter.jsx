const Counter = props => {
	return (
		<li id='counter'>
			{props.props === 0
				? 'Sin tareas pendientes, ¡¡Bien ahí!!'
				: props.props + ' tareas pendientes'}
		</li>
	)
}
export default Counter
