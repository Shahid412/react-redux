import React from 'react'
import ReactDOM from 'react-dom'
import Card from './Cards'
import HomeContainer from './containers/HomeContainer'

function Hello() {
	return (
		<div>
			<div>
				<h1>Cards</h1>
				<Card data={{name: 'Blank', age: 42}} />
			</div>
			<hr />
			<div>
				<HomeContainer />
			</div>
			<hr />
			<div>
				<Person />
				<Message />
			</div>
		</div>
	)
}

const Person = () => {
	return <h2>I am Person</h2>
}

const Message = () => {
	return <p>This is my message</p>
}

ReactDOM.render(<Hello />, document.getElementById('root'))
