import React from 'react';

class Footer extends React.Component {
    render() { 
        return <div>
                    <footer className="navbar-dark bg-dark border-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-8 p-4">
                                <a href="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                                    <svg className="bi" width="30" height="24"><use href="#bootstrap"/></svg>
                                </a>
                                <span className='text-light'>&copy; 2021 Company, Inc</span>
                                </div>
                                <div className="col-4 p-4">
                                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                                        <li className="ml-3"><a className="text-light " href="#"><i className="fab fa-facebook-square fs-1"></i></a></li>
                                        <li className="ml-3"><a className="text-light" href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li className="ml-3"><a className="text-light" href="#"><i className="fab fa-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </footer>
        </div>;
    }
}
 
export default Footer;