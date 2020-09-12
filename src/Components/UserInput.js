import React from 'react';
import './userStyle.css'

const UserInput = (props) => {
	return(
		<div>
			<input type="text" onChange={props.changed} value={props.username}></input>
		</div>
	)
};

export default UserInput;