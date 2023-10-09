import { useEffect, useState } from 'react';
import Testimonial from './Testimonial';


const TestimonialCard = () => {

      const [testimonials, setTestimonials] = useState([])


      useEffect(() => {
            fetch('testimonial.json')
                  .then(res => res.json())
                  .then(data => setTestimonials(data))
      }, [])

      console.log(testimonials)

      return (
            <div className="lg:py-10 py-5 px-2 lg:px-0 lg:w-9/12 mx-auto">
                  <div className="m-[10px]">
                        <h2 className="text-3xl text-center font-bold text-amber-700"> Our Testimonial</h2>
                        <div className="mt-4 mb-4">
                              <p className="text-sm text-black font-bold text-center">Show you student testimonial,Can take idea of the students</p>
                        </div>
                  </div>


                  <div className='grid lg:grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                        {

                              testimonials?.map(testimonial => <Testimonial key={testimonial.id} testimonial={testimonial}></Testimonial>)
                        }
                  </div>
            </div>
      );
};

export default TestimonialCard;