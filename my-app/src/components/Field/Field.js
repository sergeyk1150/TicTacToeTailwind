import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Component } from 'react';
import { handler } from '../../handlers/handler';

export class FieldContainer extends Component {
	onHandler(index) {
		handler(
			this.props.currentPlayer,
			this.props.isGameEnded,
			this.props.field,
			index,
			this.props.isDraw,
			this.props.dispatch,
		);
	}

	render() {
		return (
			<div className="flex flex-wrap w-full h-full">
				{this.props.field.map((item, index) => (
					<button
						className="border-2 text-8xl w-1/3 h-1/3"
						disabled={this.props.field[index]}
						key={index}
						onClick={() => {
							this.onHandler(index);
						}}
					>
						{this.props.field[index]}
					</button>
				))}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
	info: state.info,
	field: state.field,
});
export const Field = connect(mapStateToProps)(FieldContainer);

FieldContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
