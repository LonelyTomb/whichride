import React from 'react'
import Logo from '../assets/images/Logo.svg'

const AppHeader = () => {
	return (
		<header className={'pt-14 px-4 lg:px-32'}>
			<nav className={'flex flex-row items-center justify-between'}>
				<img src={Logo} alt=""/>
				<ul className={'hidden lg:flex flex-row items-center gap-8'}>
					<li>
						<a href="#welcome" className={'hover:text-purple transition-all'}>The App</a>
					</li>
					<li>
						<a href="#about" className={'hover:text-purple transition-all'}>About Us</a>
					</li>
					<li>
						<a href="#contact" className={'hover:text-purple transition-all'}>Get in Touch</a>
					</li>
				</ul>
			</nav>
		</header>
	)
}

export default AppHeader
