import React from 'react';



const gallery = () => {

	// const imageList = {
	// 	"img":[
	// 		{"name":"../img/headerImage.png"},
	// 		{"name":"../img/headerImage.png"},
	// 		{"name":"../img/headerImage.png"},
	// 		{"name":"../img/headerImage.png"},
	// 		{"name":"../img/headerImage.png"},
	// 	]
	// }

	// const images = imageList.map(function(image){
	// 	return(
	// 		<div className='col-6'>
	// 			<img src={require(image.name)}></img>
	// 		</div>
	// 	)
	// })

	return(
		<div className="section">
			<h3 className="section-heading mb-5"> On the blog </h3>
			<div className="img-section">
				<div className="row">
					<div className='col-6'>
						<div className='square'>
							<div className='img-content'>
								<img className='rs-img' src={require('../img/1.jpg')}></img>
							</div>
						</div>
						
						<div className="image-title"> 
							<span className="menu-items" > Know Your Soil </span> 
							<p className="img-descr">When to repot, how to repot, and tips for choosing potting mix</p>
						</div>
			 		</div>
					 <div className='col-6'>
						<div className='square'>
							<div className='img-content'>
								<img className='rs-img' src={require('../img/1.jpg')}></img>
							</div>
						</div>
						
						<div className="image-title"> 
							<span className="menu-items" > Know Your Soil </span> 
							<p className="img-descr">When to repot, how to repot, and tips for choosing potting mix</p>
						</div>
			 		</div>
				</div>

				<div className="row">
					<div className='col-6'>
						<div className='square'>
							<div className='img-content'>
								<img className='rs-img' src={require('../img/3.jpg')}></img>
							</div>
						</div>
						
						<div className="image-title"> 
							<span className="menu-items" > Know Your Soil </span> 
							<p className="img-descr">When to repot, how to repot, and tips for choosing potting mix</p>
						</div>
			 		</div>
					 <div className='col-6'>
						<div className='square'>
							<div className='img-content'>
								<img className='rs-img' src={require('../img/3.jpg')}></img>
							</div>
						</div>
						
						<div className="image-title"> 
							<span className="menu-items" > Know Your Soil </span> 
							<p className="img-descr">When to repot, how to repot, and tips for choosing potting mix</p>
						</div>
			 		</div>
				</div>
			</div>

		</div>
	)
};

export default gallery;