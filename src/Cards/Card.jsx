


import { Link } from "react-router-dom";


const Card = ({ event }) => {
      const { image,id,name,description,price,button} = event;

      return (
            <Link to={``}>
                  <div className="flex mx-w-96 flex-col rounded-xl shadow-md">
                        <img
                              className="w-full h-[300px]"
                              src={image}
                              alt="img-blur-shadow"
                        />
                        <div className={`p-4 bg-opacity-20`}>
                              <h5 className={`mt-2 text-xl font-semibold`}>
                                    {name}
                              </h5>
                              <p className="text-xl font-semibold ">{description.slice(0,150)}</p>
                              <Link to={`/event/${id}`}><button  className="btn">{button}</button></Link>
                              
                              
                        </div>
                  </div>
            </Link>
      );
}
export default Card;