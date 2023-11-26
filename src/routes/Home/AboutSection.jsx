function UserGroupIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
			<path d='M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z'/>
		</svg>
	)
}

function CardIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M0 96C0 60.7 28.7 32 64 32H448c35.3 0 64 28.7 64 64V416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6h96 32H424c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z'/>
		</svg>
	)
}

function AboutSection() {
	return (
		<section id='about'>
			<div className='container'>
				<div className='content'>
					<div className='subtitle'>
						<UserGroupIcon />
						<h3>About Us</h3>
					</div>

					<div className='about'>
						<div className='about-main'>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim nec dui nunc mattis enim. Cursus sit amet dictum sit amet. Eget duis at tellus at urna condimentum mattis pellentesque. Sed ullamcorper morbi tincidunt ornare massa eget egestas purus. Dapibus ultrices in iaculis nunc sed. Iaculis urna id volutpat lacus. Leo urna molestie at elementum eu facilisis. Ultricies integer quis auctor elit sed vulputate. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Massa tincidunt nunc pulvinar sapien et. Elementum sagittis vitae et leo duis ut diam quam. Dui id ornare arcu odio. Viverra mauris in aliquam sem fringilla ut morbi tincidunt augue. Nascetur ridiculus mus mauris vitae ultricies.</p>
							<br />
							<p>Nec feugiat nisl pretium fusce. Euismod nisi porta lorem mollis aliquam ut porttitor. Nunc non blandit massa enim nec dui. Auctor neque vitae tempus quam pellentesque nec nam aliquam sem. Enim ut sem viverra aliquet eget sit amet. Sit amet justo donec enim diam vulputate ut. Augue lacus viverra vitae congue eu. Malesuada proin libero nunc consequat interdum. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Sagittis eu volutpat odio facilisis mauris sit.</p>
						</div>

						<div className='about-cards'>
							<div className='about-card'>
								<CardIcon />
								<h4>Sample text</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
							<div className='about-card'>
								<CardIcon />
								<h4>Sample text</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
							<div className='about-card'>
								<CardIcon />
								<h4>Sample text</h4>
								<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
