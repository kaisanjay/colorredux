import React from 'react';
import './box.css'

class Box extends React.Component {
	render(){
		return (
			<div className="box centered">
			<button className="btn btn-danger" align="center">
			 Change Color
			</button>
			</div>
			);
	}

}

export default Box;