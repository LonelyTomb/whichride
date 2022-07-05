import React from 'react'

const Contact = () => {
	return (<section className={'flex flex-col justify-center items-center py-24 px-4 lg:px-32 bg-yellow'} id={'contact'}>
		<div className="w-full lg:w-3/5 text-center">
			<p className={'mb-4 font-bold text-4xl text-dark'}>Sign up to our beta form</p>
			<p className={'mb-8 text-xl text-dark'}>Sign up to our mailing list to find out more information and keep up
				to date about our activities</p>
			<form action="">
				<div className="flex flex-col lg:flex-row items-center gap-3">
					<input type="email" placeholder="email" name={'email'} value={''}
					       className={'w-full border-2 border-white pl-6 pr-4 py-4 bg-transparent placeholder:text-white'}/>
					<button type="submit" className={'bg-dark text-white px-10 py-4'}>Subscribe</button>
				</div>
			</form>
		</div>

	</section>)
}

export default Contact
