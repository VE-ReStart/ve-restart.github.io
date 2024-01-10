import logoImage from './logo.png'

function LogoIcon() {
	return <img src={logoImage} alt='logo icon' id='logo' />
}

function ShoppingCartIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
			<path d='M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z' />
		</svg>
	)
}

function ArrowIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z' />
		</svg>
	)
}

function HeroSection() {
	return (
		<section id='hero'>
			<header>
				<div className='content-outer'>
					<a href='/' className='logo'>
						<LogoIcon /> Re:Start
					</a>
					<ul>
						<li>
							<a href='#about'>About</a>
						</li>
						<li>
							<a href='#products'>Products</a>
						</li>
						<li>
							<a href='#footer'>Contact</a>
						</li>
						<li>
							<a
								href='https://portal.veinternational.org/buybuttons/us015434/cart/'
								target='_blank'
							>
								Cart
							</a>
						</li>
					</ul>
				</div>
			</header>

			<div className='container'>
				<div className='content'>
					<div className='title'>
						<h2>
							We&apos;re <span>Restarting</span> Digital
							Accessories.
						</h2>
						<p className='description'>
							Personalized phone and tablet cases, keyboards, and
							more
						</p>
					</div>

					<a className='button' href='/products'>
						Explore our products <ArrowIcon />
					</a>

					<div className='image'>
						<p>Placeholder</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection

