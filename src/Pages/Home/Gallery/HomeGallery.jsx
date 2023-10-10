


import { Link } from "react-router-dom";


const Gallery = ({ gallery }) => {
      const {id,image} = gallery;

      return (
            <Link to={``}>
                  
                  <div className="flex mx-w-96 flex-col rounded-xl shadow-md" data-aos="flip-left">
                        <img
                        className="h-[270px] w-full"
                              src={image}
                              alt="img-blur-shadow"
                        />
                  
                  </div>
            </Link>
      );
}
export default Gallery;