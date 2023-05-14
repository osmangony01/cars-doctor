import { useContext } from 'react';
import loginImg from '../../../public/assets/images/login/login.svg';
import Navbar from '../Navbar/Navbar';
import { AuthContext } from '../../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {

    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset();
                navigate("/", { replace: true })
            })
            .catch(error => console.log(error.message))

    }

    return (
        <div>
            <Navbar></Navbar>

            <div className="hero min-h-screen">
                <div className="hero-content grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center lg:text-left">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleLogIn}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Login</button>
                            </div>
                            <small className='text-end'>You don't have account? <Link to="/register" className='text-orange-600 font-bold'>Register</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;