import React from 'react';
import PlacarContainer from './PlacarContainer';

const dados = {
	partida: {
		estadio: "Maracanã/RJ",
		data: "02/01/2020",
		horario: "21:21:00",
	},

	casa: {
		nome: "Vasco",
		gols: 0,
	},

	visitante: {
		nome: "Flamengo",
		gols: 0,
	}
};

export default class App extends React.Component
{
	//render()
	//{
	//	return <PlacarContainer partida={dados.partida} casa={dados.casa} visitante={dados.visitante}/>;
	//}

	render()
	{
		return <PlacarContainer {...dados}/>;
	}

}