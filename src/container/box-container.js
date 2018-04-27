import React from 'react';
import * as actionCreators from '../actions/index.js';
import Box from '../component/box.js';
import { connect } from 'tls';

class BoxCon extends React.Component {
	render(){
		return (
			<div>
			 <Box></Box>
			</div>);
	}
};

const mapStateToProps = (state) => {
	return state
};

export default connect (mapStateToProps, actionCreators)(BoxCon);