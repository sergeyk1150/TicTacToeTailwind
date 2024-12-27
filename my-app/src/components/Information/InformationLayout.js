import { Component } from 'react';
import { connect } from 'react-redux';

export class InformationLayoutContainer extends Component {
	render() {
		return (
			<div className="text-rose-500 text-center text-3xl m-2">
				{this.props.info}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	info: state.info,
});

export const InformationLayout = connect(mapStateToProps)(InformationLayoutContainer);
