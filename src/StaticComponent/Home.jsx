import React from 'react';

class Home extends React.Component {
    state ={

    }
    render() { 
        return <div>
            <section className="w-100">
			<div className="container">
				<div className="row py-5">
					<div className="col-12 py-2 text-center">
						<h1>Album Example</h1>
						<p className="m-auto w-50 pb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
							odit accusamus laboriosam ipsum voluptate dicta, laudantium
							voluptas odio dolordem voluptatum hic incidunt esse repudiandae at
							unde delectus ducimus iusto?
						</p>
						<button type="button" className="btn btn-primary">
							Main call to action
						</button>
						<button type="button" className="btn btn-secondary ml-1">
							Secondary action
						</button>
					</div>
				</div>
			</div>
		</section>

		<div className="con-car pb-5">
			<div className="container">
				<div className="row bg-light py-4 card-group">
					<div className="col-md-4">
						<div className="card">
							<img src="images/66.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn">view</a>
								<a href="#" className="btn">Edit</a>
								<span className="float-right">9 mins</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<img src="images/66.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn">view</a>
								<a href="#" className="btn">Edit</a>
								<span className="float-right">9 mins</span>
							</div>
						</div>
					</div>
					<div className="col-md-4">
						<div className="card">
							<img src="images/66.jpg" className="card-img-top" alt="..." />
							<div className="card-body">
								<p className="card-text">
									Some quick example text to build on the card title and make up
									the bulk of the card's content.
								</p>
								<a href="#" className="btn">view</a>
								<a href="#" className="btn">Edit</a>
								<span className="float-right">9 mins</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
        </div>;
    }
}
 
export default Home;