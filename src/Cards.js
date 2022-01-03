import React from 'react'

const Card = (props) => {
	const {data} = props
	return (
		<div>
			{' '}
			<h4>I am a Card </h4>
			<p>{data.name}</p>
			<p>{data.age}</p>
		</div>
	)
}

export default Card
