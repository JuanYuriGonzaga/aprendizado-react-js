import React from 'react';

export default class SomaGol extends React.Component
{

	handleClick(event)
	{
		event.preventDefault();
		this.props.marcarGol();
	}

	render()
	{
		return(
			<div>
				<button onClick={this.handleClick.bind(this)}>Gol!</button>
			</div>
		);
	}
}