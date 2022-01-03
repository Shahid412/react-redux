import React from 'react'
import '../style.css'

function Home() {
	return (
		<div>
			<h1>Home Component</h1>
			<div className="cart-wrapper">
				<div className="img-wrapper item">
					<img src="https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-12-pro-max-1.jpg" />
				</div>
				<div className="text-wrapper item">
					<span>IPhone</span>
					<br />
					<span>$999.0</span>
				</div>
				<div className="btn-wrapper">
					<button className="">Add to Cart</button>
				</div>
			</div>
		</div>
	)
}

export default Home
