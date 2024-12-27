import PropTypes from 'prop-types';
import { Component } from 'react';
import { connect } from 'react-redux';
import { reset } from './actions/reset.js';
import { Field } from './components/Field/Field.js';
import { Information } from './components/Information/Information.js';

export class GameLayoutContainer extends Component {
	constructor(props) {
		super(props);
		this.handlerReset = this.handlerReset.bind(this);
	}
	handlerReset() {
		this.props.dispatch(reset);
	}
	render() {
		return (
			<div className="m-auto  w-500 h-500 text-center">
				<Information />
				<Field />
				<button
					className="bg-red-600 m-4 p-4 rounded-lg hover:bg-red-700 transition-colors"
					onClick={this.handlerReset}
				>
					Начать заного
				</button>
			</div>
		);
	}
}

export const GameLayout = connect()(GameLayoutContainer);

GameLayout.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
