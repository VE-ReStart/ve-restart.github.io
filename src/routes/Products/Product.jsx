import './tempProduct.css'

const openBuyPage1 = () => {
	const newSiteUrl =
		'https://portal.veinternational.org/buybuttons/us015434/btn/iphone-13-pro-case-with-design-002/'
	window.open(newSiteUrl, '_blank')
}

function Product() {
	return (
		<section id='ProductPage'>
			<div className='row-container'>
				<div className='row-wrapper'>
					<div className='picture-container'>
						<a onClick={openBuyPage1}>
							<img
								src='../../images/phone cases/cat on yarn ball/black yarn.png'
								id='cat-yarn'
								alt='phone case with design'
							/>
						</a>
					</div>
				</div>
				<h3>Cat Playing With A Yarn Ball</h3>
				<p>$15.00</p>
				<label htmlFor='phone-options'>Select Your Phone Model</label>
				<select name='phone-options'>
					<option></option>
					<option>Iphone 12</option>
					<option>Iphone 13</option>
					<option>Iphone 14</option>
				</select>
				<div className='buttons-container'>
					<button className='black' id='black-cat-yarn'></button>
					<button className='blue' id='blue-cat-yarn'></button>
					<button className='mint' id='mint-cat-yarn'></button>
					<button className='pink' id='pink-cat-yarn'></button>
					<button className='purple' id='purple-cat-yarn'></button>
					<button className='white' id='white-cat-yarn'></button>
					<button className='yellow' id='yellow-cat-yarn'></button>
				</div>
				<button className='buy'>BUY</button>
			</div>

			<div className='row-container'>
				<div className='row-wrapper'>
					<div className='picture-container'>
						<a onClick={openBuyPage1}>
							<img
								src='../../images/phone cases/cat with noodle/black noodle.png'
								id='cat-noodle'
								alt='phone case with design'
							/>
						</a>
					</div>
				</div>
				<h3>Cat With a Bowl of Noodle</h3>
				<p>$15.00</p>
				<label htmlFor='phone-options'>Select Your Phone Model</label>
				<select name='phone-options'>
					<option></option>
					<option>Iphone 12</option>
					<option>Iphone 13</option>
					<option>Iphone 14</option>
				</select>
				<div className='buttons-container'>
					<button className='black' id='black-cat-yarn'></button>
					<button className='blue' id='blue-cat-yarn'></button>
					<button className='mint' id='mint-cat-yarn'></button>
					<button className='pink' id='pink-cat-yarn'></button>
					<button className='purple' id='purple-cat-yarn'></button>
					<button className='white' id='white-cat-yarn'></button>
					<button className='yellow' id='yellow-cat-yarn'></button>
				</div>
				<button className='buy'>BUY</button>
			</div>

			<div className='row-container'>
				<div className='row-wrapper'>
					<div className='picture-container'>
						<a onClick={openBuyPage1}>
							<img
								src='../../images/phone cases/cats/blackcats.png'
								id='cat-noodle'
								alt='phone case with design'
							/>
						</a>
					</div>
				</div>
				<h3>Cats</h3>
				<p>$15.00</p>
				<label htmlFor='phone-options'>Select Your Phone Model</label>
				<select name='phone-options'>
					<option></option>
					<option>Iphone 12</option>
					<option>Iphone 13</option>
					<option>Iphone 14</option>
				</select>
				<div className='buttons-container'>
					<button className='black' id='black-cat-yarn'></button>
					<button className='blue' id='blue-cat-yarn'></button>
					<button className='mint' id='mint-cat-yarn'></button>
					<button className='pink' id='pink-cat-yarn'></button>
					<button className='purple' id='purple-cat-yarn'></button>
					<button className='white' id='white-cat-yarn'></button>
					<button className='yellow' id='yellow-cat-yarn'></button>
				</div>
				<button className='buy'>BUY</button>
			</div>

			<div className='row-container'>
				<div className='row-wrapper'>
					<div className='picture-container'>
						<a onClick={openBuyPage1}>
							<img
								src='../../images/phone cases/christmas hello kitty/black christmas.png'
								id='cat-noodle'
								alt='phone case with design'
							/>
						</a>
					</div>
				</div>
				<h3>Hello Kitty Christmas Themed</h3>
				<p>$15.00</p>
				<label htmlFor='phone-options'>Select Your Phone Model</label>
				<select name='phone-options'>
					<option></option>
					<option>Iphone 12</option>
					<option>Iphone 13</option>
					<option>Iphone 14</option>
				</select>
				<div className='buttons-container'>
					<button className='black' id='black-cat-yarn'></button>
					<button className='blue' id='blue-cat-yarn'></button>
					<button className='mint' id='mint-cat-yarn'></button>
					<button className='pink' id='pink-cat-yarn'></button>
					<button className='purple' id='purple-cat-yarn'></button>
					<button className='white' id='white-cat-yarn'></button>
					<button className='yellow' id='yellow-cat-yarn'></button>
				</div>
				<button className='buy'>BUY</button>
			</div>

			<div className='row-container'>
				<div className='row-wrapper'>
					<div className='picture-container'>
						<a onClick={openBuyPage1}>
							<img
								src=''
								id='cat-noodle'
								alt='phone case with design'
							/>
						</a>
					</div>
				</div>
				<h3>Fish</h3>
				<p>$15.00</p>
				<label htmlFor='phone-options'>Select Your Phone Model</label>
				<select name='phone-options'>
					<option></option>
					<option>Iphone 12</option>
					<option>Iphone 13</option>
					<option>Iphone 14</option>
				</select>
				<div className='buttons-container'>
					<button className='black' id='black-cat-yarn'></button>
					<button className='blue' id='blue-cat-yarn'></button>
					<button className='mint' id='mint-cat-yarn'></button>
					<button className='pink' id='pink-cat-yarn'></button>
					<button className='purple' id='purple-cat-yarn'></button>
					<button className='white' id='white-cat-yarn'></button>
					<button className='yellow' id='yellow-cat-yarn'></button>
				</div>
				<button className='buy'>BUY</button>
			</div>
		</section>
	)
}

export default Product

