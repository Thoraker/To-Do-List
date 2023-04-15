const Counter = props => {
	return (
		<li id='counter'>
			{props.props === 0
				? 'Sin quehaceres pendientes, ¡¡Bien ahí!!'
				: props.props + ' quehaceres pendientes'}
		</li>
	)
}
export default Counter
