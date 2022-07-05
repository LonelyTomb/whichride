import React from 'react'
import PurpleShield from './../../assets/images/purple-shield.svg'
import GreenToolbar from './../../assets/images/green-toolbar.svg'
import YellowClock from './../../assets/images/yellow-clock.svg'
import BlueCar from './../../assets/images/blue-car.svg'

const InfoSection = () => {
	return (<section className={'info__section  py-28 px-4 lg:px-32'}>
		<p className={'mb-4 font-bold text-4xl text-dark mb-14 text-center'}>Why whichride</p>
		<div className={'flex flex-col lg:flex-row flex-wrap gap-y-8'}>
			<div
				className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5 px-4 lg:px-24 text-center lg:text-left">
				<img src={BlueCar} alt="choices"/>
				<p className={'font-bold text-dark text-xl'}>More choices</p>
				<p className={'text-gray-2 text-lg font-medium'}>WhichRide lets you compare pricing across the major
					rideshares so you can save money on every
					ride.</p>
			</div>
			<div
				className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5 px-4 lg:px-24 text-center lg:text-left">
				<img src={GreenToolbar} alt="choices"/>
				<p className={'font-bold text-dark text-xl'}>More choices</p>
				<p className={'text-gray-2 text-lg font-medium'}>WhichRide lets you compare pricing across the major
					rideshares so you can save money on every
					ride.</p>
			</div>
			<div
				className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5 px-4 lg:px-24 text-center lg:text-left">
				<img src={YellowClock} alt="choices"/>
				<p className={'font-bold text-dark text-xl'}>More choices</p>
				<p className={'text-gray-2 text-lg font-medium'}>WhichRide lets you compare pricing across the major
					rideshares so you can save money on every
					ride.</p>
			</div>
			<div
				className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5 px-4 lg:px-24 text-center lg:text-left">
				<img src={PurpleShield} alt="choices"/>
				<p className={'font-bold text-dark text-xl'}>Safety first</p>
				<p className={'text-gray-2 text-lg font-medium'}>WhichRide lets you compare pricing across the major
					rideshares so you can save money on every
					ride.</p>
			</div>
		</div>
	</section>)
}

export default InfoSection
