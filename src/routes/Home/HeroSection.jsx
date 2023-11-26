function LogoIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'/>
		</svg>
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
						<li><a href='#footer'>Contact</a></li>
					</ul>
				</div>
			</header>

			<div className='container'>
				<div className='content'>
					<div className='title'>
						<h2>We&apos;re <span>Restarting</span> Digital Accessories.</h2>
						<p className='description'>Personalized phone and tablet cases, keyboards, and more</p>
					</div>

					<a className='button'>
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
