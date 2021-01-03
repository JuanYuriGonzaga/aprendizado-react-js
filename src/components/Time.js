import React from 'react';

import SomaGol from './SomaGol';

export default class Time extends React.Component
{
	render()
	{
		return(
			<div>
				<h1>{this.props.nome}</h1>
				<h2>Quantidade Gols: {this.props.gols}</h2>

				<SomaGol marcarGol={this.props.marcarGol} />
			</div>
		);
	}
}