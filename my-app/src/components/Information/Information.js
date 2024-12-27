import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setInfo } from '../../actions';
import { getInfoAboutGame } from '../../utils/utils';
import { Component } from 'react';
import { InformationLayout } from './InformationLayout';

export class InformationContainer extends Component {
	componentDidMount() {
		this.props.dispatch(
			setInfo(
				getInfoAboutGame(
					this.props.isDraw,
					this.props.isGameEnded,
					this.props.currentPlayer,
				),
			),
		);
	}

	render() {
		return <InformationLayout />;
	}
}

const mapStateToProps = (state) => ({
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
	currentPlayer: state.currentPlayer,
});

export const Information = connect(mapStateToProps)(InformationContainer);

InformationContainer.propTypes = {
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setIsGameEnded: PropTypes.func,
	isDraw: PropTypes.bool,
	setIsDraw: PropTypes.func,
	field: PropTypes.array,
	setField: PropTypes.func,
};
