import { HashLink as Link } from 'react-router-hash-link'

import logoImage from '../../../images/logo.png'

function LogoIcon() {
	return <img src={logoImage} alt='logo icon' id='logo' />
}

function ProductHeroSection() {
	return (
		<section id='hero'>
			<header>
				<div className='content-outer'>
					<Link to='/' className='logo'>
						<LogoIcon /> Re:Start
					</Link>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<a href='https://ve-restart.github.io/customize/'>Customize</a>
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
		</section>
	)
}

export default ProductHeroSection
