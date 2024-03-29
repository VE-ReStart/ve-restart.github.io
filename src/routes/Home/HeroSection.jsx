import { HashLink as Link } from 'react-router-hash-link'

import logoImage from '../../../images/logo.png'

function LogoIcon() {
	return <img src={logoImage} id='logo' />
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
					<Link to='/' className='logo'>
						<LogoIcon /> Re:Start
					</Link>
					<ul>
						<li>
							<Link to='#about'>About</Link>
						</li>
						<li>
							<Link to='#products'>Products</Link>
						</li>
						<li>
							<Link to='#footer'>Contact</Link>
						</li>
						<li>
							<a
								href='https://portal.veinternational.org/buybuttons/us015434/cart/'
								target='_blank'
								rel='noreferrer'
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
							We&apos;re <span>Restarting</span> Digital Accessories.
						</h2>
						<p className='description'>Personalized phone and tablet cases, keyboards, and more</p>
					</div>

					<Link to='/products' className='button'>
						Explore our products <ArrowIcon />
					</Link>

					<div className='image'></div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
