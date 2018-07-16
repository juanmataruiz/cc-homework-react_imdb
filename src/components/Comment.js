import React from 'react';

const Comment = (props) => {

	return(
		<div className="comment">
			<h4>{props.title}</h4>
			<p>{props.children}</p>
		</div>
	)
}

export default Comment;