function UserGroupIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 640 512'>
			<path d='M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3zM609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4C567.8 320 640 392.2 640 481.3c0 17-13.8 30.7-30.7 30.7zM432 256c-31 0-59-12.6-79.3-32.9C372.4 196.5 384 163.6 384 128c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112z' />
		</svg>
	)
}

function SustainableIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M174.7 45.1C192.2 17 223 0 256 0s63.8 17 81.3 45.1l38.6 61.7 27-15.6c8.4-4.9 18.9-4.2 26.6 1.7s11.1 15.9 8.6 25.3l-23.4 87.4c-3.4 12.8-16.6 20.4-29.4 17l-87.4-23.4c-9.4-2.5-16.3-10.4-17.6-20s3.4-19.1 11.8-23.9l28.4-16.4L283 79c-5.8-9.3-16-15-27-15s-21.2 5.7-27 15l-17.5 28c-9.2 14.8-28.6 19.5-43.6 10.5c-15.3-9.2-20.2-29.2-10.7-44.4l17.5-28zM429.5 251.9c15-9 34.4-4.3 43.6 10.5l24.4 39.1c9.4 15.1 14.4 32.4 14.6 50.2c.3 53.1-42.7 96.4-95.8 96.4L320 448v32c0 9.7-5.8 18.5-14.8 22.2s-19.3 1.7-26.2-5.2l-64-64c-9.4-9.4-9.4-24.6 0-33.9l64-64c6.9-6.9 17.2-8.9 26.2-5.2s14.8 12.5 14.8 22.2v32l96.2 0c17.6 0 31.9-14.4 31.8-32c0-5.9-1.7-11.7-4.8-16.7l-24.4-39.1c-9.5-15.2-4.7-35.2 10.7-44.4zm-364.6-31L36 204.2c-8.4-4.9-13.1-14.3-11.8-23.9s8.2-17.5 17.6-20l87.4-23.4c12.8-3.4 26 4.2 29.4 17L182 241.2c2.5 9.4-.9 19.3-8.6 25.3s-18.2 6.6-26.6 1.7l-26.5-15.3L68.8 335.3c-3.1 5-4.8 10.8-4.8 16.7c-.1 17.6 14.2 32 31.8 32l32.2 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32.2 0C42.7 448-.3 404.8 0 351.6c.1-17.8 5.1-35.1 14.6-50.2l50.3-80.5z' />
		</svg>
	)
}

function AffordableIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
			<path d='M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z' />
		</svg>
	)
}

function CustomizableIcon() {
	return (
		<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'>
			<path d='M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z' />
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
							<p>
								Here at Re:Start, we realized that most people don&apos;t put priority into protecting
								their devices. The average person drops their phone multiple times in a day! While
								plenty of companies sell phone cases, most cases are made of unprotective and
								environment-damaging materials, have bad designs, and most importantly, are being sold
								at outrageous prices.
							</p>
							<br />
							<p>
								Because of this, we decided to create a platform where you can design your very own
								personalized phone case at the click of a button that you&apos;ll love, and buy them at
								low and affordable prices in order to promote the need to protect your phone from
								damage.
							</p>
						</div>

						<div className='about-cards'>
							<div className='about-card'>
								<CustomizableIcon />
								<h4>Customizable</h4>
								<p>Easily create your very own personalized designs</p>
							</div>
							<div className='about-card'>
								<AffordableIcon />
								<h4>Affordable</h4>
								<p>The lowest price points in the market</p>
							</div>
							<div className='about-card'>
								<SustainableIcon />
								<h4>Sustainable</h4>
								<p>We only use long-lasting eco-friendly materials</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutSection
