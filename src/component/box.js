import React from 'react';
import './box.css'

class Box extends React.Component {
	render(){
		return (
			<div className="box centered">
			 <div style={{
				     backgroundColor: `${this.props.color}`
			 }}>
				<button className="btn btn-danger">
				Change Color
				</button>
			 </div>
			</div>
			);
	}

}

export default Box;