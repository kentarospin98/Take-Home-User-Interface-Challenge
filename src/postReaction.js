import React from 'react';

class Emoji extends React.Component {
	constructor(props) {
		// Get the emoji from parent
		super(props)
		this.emoji = props.emoji
		this.selected = props.selected
	}

	render() {
		// When emoji is clicked, the parent is called
		return (
			<div className='reaction-emoji'>
				<span className='reaction-emoji-name'>
					{this.emoji.name}
				</span>
				<span className='reaction-emoji-symbol' onClick={() => this.selected(this.emoji)}>
					{this.emoji.symbol}
				</span>
			</div>
		)
	}
}

class ReactionButton extends React.Component {
	constructor(props) {
		super(props)
		// Initial State
		this.state = {
			listOpen: false,
			mouseIn: false
		}
		// Emoji List with names. This can come from props.
		this.emojis = [
			{
				symbol:'⭐',
				name: 'star'
			}, {
				symbol: '🔼',
				name: 'up'
			}, {
				symbol:'🔽',
				name: 'down'
			}, {
				symbol: '💰',
				name: 'money'
			}, {
				symbol: '😮',
				name: 'wow'
			}, {
				symbol: '😂',
				name: 'haha'
			}]
	}

	selected(emoji) {
		// Logs the emoji and closes the list
		console.log(emoji);
		this.closeList()
	}

	mouseEnter() {
		// Open's the list
		this.setState({listOpen: true, mouseIn: true})
	}

	closeList() {
		// Closes the list
		this.setState({listOpen: false})
	}

	mouseLeave() {
		// Sets mouseIn to false, and closes list after 0.5s if it is still false
		this.setState({mouseIn: false})
		setTimeout(() => {
			if(!this.state.mouseIn) {
				this.closeList()
			}
		}, 500)
	}

	render() {
		let emojiElements = []
		// Creates an Emoji element for each emoji in the list
		// The `selected` call back is passed in to be called when an emoji is clicked 
		this.emojis.forEach((emoji, index) => {
			emojiElements.push(
				<Emoji emoji={emoji} selected={(emoji) => this.selected(emoji)} key={emoji.symbol}></Emoji>
			)
		})

		// Shows the list if listOpen is true
		let emojiList = null
		if (this.state.listOpen) 
			emojiList = (
				<div className='reaction-emoji-list'>
					{emojiElements}
				</div>
			)

		// Respective call backs are passed into the parent
		return (
			<div className='reaction-emoji-parent'  onMouseEnter={() => this.mouseEnter()} onMouseLeave={() => this.mouseLeave()}>
				{emojiList}
				<div className='reaction-indicator'>
					⭐😂🔽 You and 673 others
				</div>
				<div className='reaction-button-parent'>
					<button className='reaction-button'>⭐ Star</button>
				</div>
			</div>
		)
	}
}

export { ReactionButton }