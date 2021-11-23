import React from 'react';
import Header from '../components/Header'
import Footer from "../components/Footer";
import {Link} from 'react-router-dom';

function LoginPage() {
    return (
        <div className="container-fluid p-0">
            <Header />
            <main>
                <div className="container-fluid text-center">
                    <div className="container login-title">
                        <Link to="/login" className="login-title-black">Login </Link>
                        <p className="d-inline-block title-or">or</p>
                        <Link to="/signup" className="login-title-grey"> Register</Link>
                    </div>
                    <div className="login-form mx-auto my-4">
                        <form>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email address<p className="d-inline text-danger"> *</p></label>
                                <input type="email" className="form-control" id="exampleInputEmail1"
                                       aria-describedby="emailHelp" />

                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputPassword1" className="form-label">Password<p className="d-inline text-danger"> *</p></label>
                                <input type="password" className="form-control" id="exampleInputPassword1"/>
                            </div>
                            <div className="mb-1 text-start d-flex">
                                <input type="checkbox" className="form-check-input m-2" id="exampleCheck1"/>
                                <label className="form-check-label form-label m-2" htmlFor="exampleCheck1">Remember Me</label>
                                <Link to="" className="ms-auto nav-link-a">Forgot password?</Link>
                            </div>
                            <div className="mb-3">
                                <button type="submit" className="btn btn-primary btn-green">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default LoginPage;
