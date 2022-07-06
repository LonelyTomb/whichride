import React, {useEffect} from 'react'
import './styles/App.css';
import AppHeader from './components/AppHeader';
import Welcome from './components/landing/WelcomeSection'
import About from './components/landing/AboutSection'
import Contact from './components/landing/ContactSection'
import Info from './components/landing/InfoSection'
import AppFooter from './components/AppFooter'

function App() {

	useEffect(() => {
		const callback = (entries) => {
			entries.forEach(
				(entry) => {
					if (entry.isIntersecting) {
						entry.target.classList.add('animate')
					} else {
					}
				}
			);
		}

		let observer = new IntersectionObserver(callback);
		const animationItems = document.querySelectorAll('.animation');
		animationItems.forEach(item => {
			observer.observe(item)
		})

	}, [])
	return (
		<div className="App hd:container mx-auto">
			<AppHeader/>
			<Welcome/>
			<About/>
			<Info/>
			<Contact/>
			<AppFooter/>
		</div>
	);
}

export default App;
