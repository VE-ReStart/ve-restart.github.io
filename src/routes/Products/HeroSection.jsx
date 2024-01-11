function LogoIcon() {
	return <img src={'src/routes/Home/logo.png'} alt='logo icon' id='logo' />
}

function ProductHeroSection() {
	return (
		<section id='hero'>
			<header>
				<div className='content-outer'>
					<a href='/' className='logo'>
						<LogoIcon /> Re:Start
					</a>
					<ul>
						<li>
							<a href='/'>Home</a>
						</li>
						<li>
							<a href='https://uwuelias.github.io/ve-customize/'>
								Customize
							</a>
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
