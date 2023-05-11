
import Navbar from '../Navbar/Navbar';
import loginImg from '../../../public/assets/images/login/login.svg';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../provider/AuthProvider';

const Register = () => {

    const { createUser, updateUserData } = useContext(AuthContext);

    const handleAddUser = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password };
        console.log(user);

        createUser(email, password)
            .then(result => {
                const newUser = result.user;
                console.log(newUser);
                form.reset();
                updateUserData(result.user, name)
                    .then(() => {
                        console.log('user name updated ...');
                    })
                    .catch(error => {
                        console.log(error.message);
                    })
            })
            .catch(error => {
                console.log(error.message);
            })
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
                        <form className="card-body" onSubmit={handleAddUser}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Name" className="input input-bordered" />
                            </div>
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
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Register</button>
                            </div>
                            <small className='text-end'>You have account? <Link className='text-orange-600 font-bold'>Login</Link></small>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;