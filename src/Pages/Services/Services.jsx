import React from 'react';
import Navbar from '../Home/Navbar/Navbar';

const Services = () => {
      return (
            <div>
                  <Navbar></Navbar>
                  <div className="m-[40px]">
                        <h2 className="text-5xl text-center font-bold text-amber-700"> Our Services</h2>
                        <div className="mt-4">
                              <p className="text-sm text-black font-bold text-center">We provide our best services to make your education more delightful</p>
                        </div>

                        <div className='text-center mt-6 mx-auto'>
                              <ol type=''>
                                    <li> step-1 : Workshops and Seminars</li>
                                    <li> step-2 : Online Courses</li>
                                    <li> step-3 : Corporate Training Programs</li>
                                    <li> step-4 : Conference and Symposium programs</li>
                                    <li> step-5 :Professional Certification Programs</li>
                                    <li> step-6 : Language and Cultural Programs</li>
                              
                              </ol>
                        </div>
                  </div>
            </div>
      );
};

export default Services;