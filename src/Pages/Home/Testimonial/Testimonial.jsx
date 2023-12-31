import { Link } from "react-router-dom";



const Testimonial = ({ testimonial }) => {
      const { image, name, details } = testimonial;
      

      return (
            <Link to={``}>

                  <div className="flex mx-w-96 flex-col rounded-xl shadow-md" data-aos="zoom-in">
                        <img
                        className="w-full h-[150px] rounded-2xl"
                              src={image}
                              alt="image-testimonial"
                        />
                        <div className={`p-4 bg-opacity-20`}>
                              <p className="text-base ">{details.slice(0, 50)}...</p>
                              <h5 className={`mt-2 text-xl font-semibold`}>
                                    {name}
                              </h5>
                        </div>

                  </div>
            </Link>
      );
}
export default Testimonial;