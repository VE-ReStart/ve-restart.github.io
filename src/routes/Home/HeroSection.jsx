function LogoIcon() {
	return (
		<img src='./images/icon.png' alt="logo icon" id="logo"/>
	)
}

function ArrowIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM294.6 135.1l99.9 107.1c3.5 3.8 5.5 8.7 5.5 13.8s-2 10.1-5.5 13.8L294.6 376.9c-4.2 4.5-10.1 7.1-16.3 7.1C266 384 256 374 256 361.7l0-57.7-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-57.7c0-12.3 10-22.3 22.3-22.3c6.2 0 12.1 2.6 16.3 7.1z'/>
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
						<li><a href='#about'>About</a></li>
						<li><a href='#products'>Products</a></li>
						<li><a href='#contact'>Contact</a></li>
					</ul>
				</div>
			</header>

			<div className='container'>
				<div className='content'>
					<div className='title'>
						<h2>We&apos;re <span>Restarting</span> Digital Accessories.</h2>
						<p className='description'>Personalized phone and tablet cases, keyboards, and more</p>
					</div>

					<a href="/Buy/index.jsx" className='button'>
						Explore our products <ArrowIcon />
					</a>

					<div className='image'>
						<p>charlie gimme a cool image to use here thanks</p>
					</div>
				</div>
			</div>
		</section>
	)
}

export default HeroSection
