


import { Link } from "react-router-dom";


const Card = ({ event }) => {
      const { image,id,name,description,price,button} = event;

      return (
            <Link to={``}>
                  <div className="flex mx-w-96 h-[400px] flex-col rounded-xl shadow-md">
                        <img
                              className="w-full"
                              src={image}
                              alt="img-blur-shadow"
                        />
                        <div className={`p-4 bg-opacity-20`}>
                              <h5 className={`mt-2 text-xl font-semibold`}>
                                    {name}
                              </h5>
                              <p className="text-xs text-black md-2 ">{description.slice(0,100)}...</p>
                             <Link className="" to={`/event/${id}`}><button  className="btn bg-amber-400 hover:bg-amber-400 ">{button}</button></Link>
                              
                             

                              
                        </div>
                  </div>
            </Link>
      );
}
export default Card;