//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
// import { Home } from "./component/home.js";

function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="d-flex">
                <div className="d-flex bd-highlight">
                    <div className="p-2 flex-grow-1 bd-highlight">Start Bootstrap</div>
                    <div className="p-2 bd-highlight text-light">Home</div>
                    <div className="p-2 bd-highlight text-light">About</div>
                    <div className="p-2 bd-highlight text-light">Services</div>
                    <div className="p-2 bd-highlight text-light">Contact</div>
                </div>
            </div>
        </nav>
    );
}
function Jumbotton() {
    <div className="jumbotron">
        <h1 className="display-4">A Warm Welcome!</h1>
        <p className="lead">
            This is a simple hero unit, a simple jumbotron-style component for
            !actionacCall to 			calling extra attention to featured content or information.
		</p>
        <hr className="my-4" />
        <p>
            It uses utility classes for typography and spacing to space content
            out within the larger container.
		</p>
        <p className="lead">
            <a className="btn btn-primary btn-lg" href="#" role="button">
                Call to action!
			</a>
        </p>
    </div>;
}
function BodyPart() {
    return (
        <div className="card-deck mt-4">
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
					</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">
                        Find out more!
					</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This card has supporting text below as a natural lead-in
                        to additional content.
					</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">
                        Find out more!
					</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
					</p>
                </div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">
                        Find out more!
					</a>
                </div>
            </div>
            <div className="card">
                <img className="card-img-top" src="..." alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
					</p>
				</div>
                <div className="card-footer text-center">
                    <a href="#" className="btn btn-primary">
                        Find out more!
					</a>
                </div>
            </div>
        </div>
    );
}
function Footer() { 
    return(
        <div class="d-flex p-2 bd-highlight">Copyright © Your Website 2021</div>
    );
}
function Home() {
    return (
        <div className="container">
            <NavBar />
            <Jumbotton />
            <BodyPart />
            <Footer />
        </div>
    );
}

//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
