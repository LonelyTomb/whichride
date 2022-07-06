import React from 'react'
import Image from './../../assets/images/image-2.png'

const Welcome = () => {
	return (<section className={'min-h-75 flex flex-row items-center pt-8 pb-16 lg:pb-0 px-4 lg:px-32 gap-4'}
	                 id={'welcome'}>
		<div className={'w-full lg:w-1/2'}>
			<div className="lg:w-5/6 ml-auto">
				<h2 className={'font-bold text-5xl text-left mb-4 animation tracking-in-expand'}>Compare & book ride-hailing providers </h2>
				<p className={'text-grey text-base lg:text-xl font-medium animation tracking-in-expand'}>
					Save money and time with WhichRide.
					<br/>
					Think Compare the market but for taxis.
				</p>
			</div>
		</div>
		<div className={'hidden lg:block w-1/2'}>
			<img src={Image} alt="whichride app" className={'object-contain object-center animation slide-in-right'}/>
		</div>
	</section>)
}

export default Welcome
