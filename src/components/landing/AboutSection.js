import React from 'react'
import iPhone from './../../assets/images/iPhone-X-2.png'

const About = () => {
	return (<section className={'bg-purple py-28 px-4 lg:px-32'} id={'about'}>
		<div className={'lg:w-3/5 mx-auto mb-12 lg:mb-6'}>
			<h2 className={'font-bold text-4xl text-center mb-7 text-white'}>
				Whichride brings together multiple ride hailing providers
				and local taxi firms in one app
			</h2>
			<p className={'text-grey-5 text-xl font-medium text-center px-5'}>
				Allowing riders to select the provider that offers the best price, service or travel time, then
				seamlessly book within the app
			</p>
		</div>
		<div className="flex flex-row items-center">
			<div className="hidden lg:block w-1/2">
				<img src={iPhone} alt="whichride preview" className={'object-center object-contain ml-auto flip-in-ver-left animation'}/>
			</div>
			<div className="lg:w-1/2 flex flex-col justify-end gap-10">
				<div className={'flex flex-col lg:flex-row items-center gap-8'}>
					<div className={'rounded-full bg-yellow h-14 w-14 text-center flex items-center justify-center'}>
						<p className={'text-black text-sm'}>Step 1</p>
					</div>
					<div className={'text-white lg:w-3/4 text-center lg:text-left'}>
						<p className={'text-2xl font-bold mb-4'}>Enter location</p>
						<p className={'font-medium text-lg text-grey-7'}>Enter your destination to see a list of taxi
							providers near you.</p>
					</div>
				</div>
				<div className={'flex flex-col lg:flex-row items-center gap-8'}>
					<div className={'rounded-full bg-white h-14 w-14 text-center flex items-center justify-center'}>
						<p className={'text-black text-sm'}>Step 2</p>
					</div>
					<div className={'text-white lg:w-3/4 text-center lg:text-left'}>
						<p className={'text-2xl font-bold mb-4'}>Find the perfect ride</p>
						<p className={'font-medium text-lg text-grey-7'}>Filter results by driver rating, driver sex,
							waiting times, price or speed. Reduce carbon footprint by only showing hybrid or electric
							cars.</p>
					</div>
				</div>
				<div className={'flex flex-col lg:flex-row items-center gap-8'}>
					<div className={'rounded-full bg-white h-14 w-14 text-center flex items-center justify-center'}>
						<p className={'text-black text-sm'}>Step 3</p>
					</div>
					<div className={'text-white lg:w-3/4 text-center lg:text-left'}>
						<p className={'text-2xl font-bold mb-4'}>Pay and Save</p>
						<p className={'font-medium text-lg text-grey-7'}>Once you select a ride, we search the web for
							coupons to get you an even better deal, then book seamlessly within our app and earn points
							while you ride.</p>
					</div>
				</div>
			</div>
		</div>
	</section>)
}

export default About
