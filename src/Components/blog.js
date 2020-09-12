import React from'react';


const blog = () => {
	return(
		<div id='blog-section' className='section'> 
			<h3 className="section-heading mb-5"> Out and about <span className='link'> @theplantwarehouse </span> </h3>
			<div className='row'>
				<div className='col-4'>
					<div className='blog'>
						<img className='blog-img' src={require('../img/2.jpg')}></img>
						<p className='mt-2 p-2'>When to repot, how to repot, and tips for choosing potting mix</p>
					</div>
				</div>

				<div className='col-4'>
					<div className='blog'>
						<img className='blog-img' src={require('../img/2.jpg')}></img>
						<p className='mt-2 p-2'>When to repot, how to repot, and tips for choosing potting mix</p>
					</div>
				</div>

				<div className='col-4'>
					<div className='blog'>
						<img className='blog-img' src={require('../img/2.jpg')}></img>
						<p className='mt-2 p-2'>When to repot, how to repot, and tips for choosing potting mix</p>
					</div>
				</div>

			</div>

		</div>
	)
};

export default blog;