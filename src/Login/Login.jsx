import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";


const Login = () => {
      const navigate = useNavigate()
      const { signIn, signInWithGoogle } = useContext(AuthContext);
      const [error, setError] = useState('');
      const handleLogin = e => {
            e.preventDefault();
            setError('')
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)
            const email = form.get('email');
            const password = form.get('password');
            signIn(email, password)
                  .then(result => {
                        console.log(result)
                        Swal.fire('Successfully Login')
                        navigate('/',{replace:true})
                  })
                  .catch(error => {
                        setError(error.message)
                  })
      }

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                .then((result) => {
                    const user = result.user;
                    console.log(user);
                    navigate('/', {replace: true})
                    Swal.fire("Successfully account Created!")
                })
                .catch(error => setError(error.message))
        }
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="text-center">
                        <h3 className="text-3xl my-10 mx-auto text-center text-amber-500 font-bold">Login Your Account</h3>
                        <form onSubmit={handleLogin} className=" md:w-3/4 lg:w-1/2 mx-auto">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Email" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Password" className="input input-bordered" required />
                                    <label className="label">
                                          <Link href="#" className="label-text-alt link link-hover">Forgot password?</Link>
                                    </label>
                              </div>
                              {
                                    error && <p className="text-red-500 ">{error}</p>
                              }
                              <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-amber-500 hover:bg-amber-500">Login</button>
                              </div>
                        </form>

                        <p className="text-center mt-4">Do not have an account?<Link className="text-blue-600 font-bold" to="/register"> Register</Link></p>
                        <div className="text-center ">
                              <button onClick={handleSignInWithGoogle} className="text-amber-600 font-bold px-10 py-1">Create Account with Google</button>
                        </div>
                  </div>
            </div>
      );
};

export default Login;