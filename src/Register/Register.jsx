import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Pages/Home/Navbar/Navbar";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FaGoogle, } from 'react-icons/fa';


const Register = () => {
      const { createUser, updateUser, signInWithGoogle } = useContext(AuthContext)
      const [passwordError, setPasswordError] = useState('');
      const [error, setError] = useState('');
      const navigate = useNavigate();

      const handleRegister = (e) => {
            e.preventDefault()
            console.log(e.currentTarget);
            const form = new FormData(e.currentTarget)

            const name = form.get('name');
            const photo = form.get('photo');
            const email = form.get('email');
            const password = form.get('password');
            console.log(name, photo, email, password);


            setError('');
            setPasswordError('');

            if (password.length < 6) {
                  setPasswordError('Password should be at least 6 characters or longer');
                  return;
            } else if (!/[A-Z]/.test(password)) {
                  setPasswordError('Your password should have at least one upper case characters.')
                  return;
            } else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
                  setPasswordError('Your password should have at least one special character.');
                  return;
            }

            createUser(email, password)
                  .then(result => {
                        console.log(result.user)
                        const userProfile = {
                              displayName: name,
                              photoURL: photo
                        }

                        updateUser(userProfile)
                              .then(() => {
                                    console.log('profile updated')
                                    navigate('/', { replace: true });
                                    Swal.fire("Successfully Account Created!")
                              })
                              .catch(error => setError(error.message))
                  })
                  .catch(error => {
                        setError(error.message);
                  })

      }

      const handleSignInWithGoogle = () => {
            signInWithGoogle()
                  .then((result) => {
                        const user = result.user;
                        console.log(user);
                        navigate('/', { replace: true })
                        Swal.fire("Successfully Account Created!")
                  })
                  .catch(error => setError(error.message))
      }

      return (
            <div>
                  <Navbar></Navbar>
                  <div className="text-center">
                        <h3 className="text-3xl my-2 mx-auto font-bold text-amber-500">Register Now</h3>
                        <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto">
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Name" className="input input-bordered" required />
                              </div>
                              <div className="form-control">
                                    <label className="label">
                                          <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Photo" className="input input-bordered" required />
                              </div>
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
                                          <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                    </label>


                              </div>
                              {
                                    passwordError && <p className="text-red-700">{passwordError}</p>
                              }

                              <div className="form-control mt-6">
                                    <button type="submit" className="btn bg-amber-500  hover:bg-amber-500 font-bold">Register</button>
                              </div>
                        </form>
                        {
                              error && <p className="text-red-700">{error}</p>
                        }

                        <p className="text-center mt-4">Already have an account? <Link className="text-amber-600 font-bold" to="/login"> Login</Link></p>

                  </div>
                  <div className="text-center">
                        <button onClick={handleSignInWithGoogle} className="btn bg-amber-600  hover:bg-amber-600 font-bold px-10 py-1 text-white"><FaGoogle></FaGoogle>Google</button>
                  </div>
            </div>
      );
};

export default Register;