import React from 'react';
import CommentList from '../components/CommentList.js'

class CommentBox extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			data: [
				{title: "Incredible 2", showtime: "18:00"},
				{title: "The First Purge", showtime: "21:20"},
				{title: "Jurassic World: Fallen Kingdom", showtime: "17:10"},
				{title: "Ocean's 8", showtime: "19:30"}
			]
		}
	}

	render() {
		return (
			<div>
				<h2>Movies</h2>
				<CommentList data={this.state.data} />
			</div>
		)
	}
}

export default CommentBox;