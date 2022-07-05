import React from 'react'
import Logo from '../assets/images/Logo.svg'

const AppFooter = () => {
	const year = new Date().getFullYear();
	return (
		<footer className={'py-7 px-4 lg:px-32 flex flex-col lg:flex-row items-center justify-between gap-4 bg-darkyellow text-white'}>
			<div>
				<p className={'text-sm'}>&copy; {year} Whichride - All rights reserved.</p>
			</div>
			<div>
				<ul className={'flex flex-row text-sm gap-6'}>
					<li>
						<a href="#">Privacy Policy</a>
					</li>
					<li>
						<a href="#">Terms and Conditions</a>
					</li>
				</ul>
			</div>
		</footer>
	)
}

export default AppFooter
