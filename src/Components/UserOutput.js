import React from 'react';
import './userStyle.css'

const UserOutput = (props) => {
	const style = {
		backgroundColor:'#ccc',
		borderRadius:'5px',
		padding:'5px'
	}
	return(
		<div className="output">
			<h3 style={style} >User Name is {props.username}</h3>
			<p>
				Cake or pie? I can tell a lot about you by which one you pick. It may seem silly, but cake people and pie people are really different. I know which one I hope you are, but that's not for me to decide.
			</p>
			<p>
				Another writing challenge can be to take the individual sentences in the random paragraph and incorporate a single sentence from that into a new paragraph to create a short story. Unlike the random sentence.
			</p>
		</div>
	)
};

export default UserOutput;