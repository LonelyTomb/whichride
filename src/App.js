import './styles/App.css';
import AppHeader from './components/AppHeader';
import Welcome from './components/landing/WelcomeSection'
import About from './components/landing/AboutSection'
import Contact from './components/landing/ContactSection'
import Info from './components/landing/InfoSection'
import AppFooter from './components/AppFooter'

function App() {
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
