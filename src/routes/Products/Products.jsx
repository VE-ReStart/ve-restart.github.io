import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import './tempProduct.css'

function openBuyPage() {
	window.open(
		'https://portal.veinternational.org/buybuttons/us015434/btn/iphone-case-with-design-002/',
		'_blank'
	)
}

function ProductItem({ name, imageRoot }) {
	let [image, setImage] = useState(null)
	let [color, setColor] = useState('white')

	useEffect(() => {
		import(`${imageRoot}/${color}.png`).then((mod) => {
			setImage(mod.default)
		})
	}, [imageRoot, color])

	return (
		<div className='row-container'>
			<div className='row-wrapper'>
				<div className='picture-container'>
					<img src={image} />
				</div>
			</div>
			<h3>{name}</h3>
			<p>$15.00</p>
			<label htmlFor='phone-options'>Select Your Phone Model</label>
			<select name='phone-options' defaultValue='iPhone 13'>
				<option>iPhone 12</option>
				<option>iPhone 13</option>
				<option>iPhone 14</option>
			</select>
			<div className='buttons-container'>
				<button
					onClick={() => setColor('black')}
					className='black'
				></button>
				<button
					onClick={() => setColor('blue')}
					className='blue'
				></button>
				<button
					onClick={() => setColor('mint')}
					className='mint'
				></button>
				<button
					onClick={() => setColor('pink')}
					className='pink'
				></button>
				<button
					onClick={() => setColor('purple')}
					className='purple'
				></button>
				<button
					onClick={() => setColor('white')}
					className='white'
				></button>
				<button
					onClick={() => setColor('yellow')}
					className='yellow'
				></button>
			</div>
			<button className='buy' onClick={openBuyPage}>
				BUY
			</button>
		</div>
	)
}

ProductItem.propTypes = {
	name: PropTypes.node.isRequired,
	imageRoot: PropTypes.node.isRequired,
}

export default function Products() {
	return (
		<section id='ProductPage'>
			<ProductItem
				name='Cat Playing With A Yarn Ball'
				imageRoot='../../../images/cases/cat_yarn/'
			/>
			<ProductItem
				name='Cat With A Bowl Of Noodles'
				imageRoot='../../../images/cases/cat_noodle/'
			/>
			<ProductItem name='Cats' imageRoot='../../../images/cases/cats/' />
			<ProductItem
				name='Hello Kitty Christmas'
				imageRoot='../../../images/cases/hello_kitty_christmas/'
			/>
			<ProductItem
				name='Hello Kitty Heart'
				imageRoot='../../../images/cases/hello_kitty_heart/'
			/>
			<ProductItem name='Fish' imageRoot='../../../images/cases/fish/' />
			<ProductItem
				name='Flowers'
				imageRoot='../../../images/cases/flowers/'
			/>
			<ProductItem
				name='Flowers'
				imageRoot='../../../images/cases/flowers_2/'
			/>
			<ProductItem
				name="Five Nights At Freddy's"
				imageRoot='../../../images/cases/fnaf/'
			/>
		</section>
	)
}

