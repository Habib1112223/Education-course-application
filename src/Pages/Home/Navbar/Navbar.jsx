import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navbar = () => {
      const { user, logOut } = useContext(AuthContext);
      const navigate = useNavigate()

      const handleSignOut = () => {
            logOut()
                  .then(() => {
                        Swal.fire('Successfully LogOut')
                        navigate('/login', { replace: true })
                  })
                  .catch(error => console.error(error))

      }


      const navLinks = <>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About</NavLink></li>
            <li><NavLink to='/career'>Career</NavLink></li>
            {
                  user?.uid && <>
                        <li><NavLink to='/services'>Services</NavLink></li>
                        <li><NavLink to='/gallery'>Gallery</NavLink></li>
                  </>

            }

      </>
      return (
            <div className="navbar bg-gray-100 rounded-lg"  data-aos="fade-down">
                  <div className="navbar-start">
                        <div className="dropdown">
                              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                              </label>
                              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navLinks}
                              </ul>
                        </div>
                        <Link className="btn btn-ghost normal-case text-3xl font-bold ">
                              <div className="text-amber-600">
                                    <span className="text-3xl font-bold">Learn</span><span>
                                          Hub
                                    </span>
                              </div>
                        </Link>
                  </div>
                  <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                              {navLinks}
                        </ul>   
                  </div>
                  <div className="navbar-end">
                        {
                              user?.uid ?
                                    <>
                                          <button onClick={handleSignOut} className="btn ">Sign Out</button>
                                          <h3>{user.displayName}</h3>
                                          <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full border-red-100 border-2" />
                                    </>
                                    :
                                    <Link className="btn" to="/login">
                                          Login
                                    </Link>
                        }

                  </div>
            </div>
      );
};

export default Navbar;