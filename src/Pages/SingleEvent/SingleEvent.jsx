import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Home/Navbar/Navbar";
import Footer from "../Home/Footer/Footer";


const SingleEvent = () => {
      const events= useLoaderData();
      const {id}= useParams() 
      const idInt = parseInt(id);
      const event = events?.find(event => event.id === idInt);
     
      const {image,name,description,price,button} = event



      
      return (
            <div>
                 <Navbar></Navbar>
                 <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 text-center">
                  <div>
                        <img src={image} alt="image" />
                  </div>
                  <div className="mt-8">
                        <h2 className="text-3xl font-bold text-black mb-2">{name}</h2>
                        <p className="text-sm text-black mb-4">{description}</p>
                        <p className="text-2xl font-bold mb-4">Price: {price}</p>
                        <button className=" btn bg-amber-500 hover:bg-amber-500">{button}</button>
                  </div>
                 </div>

                 <Footer></Footer>
            </div>
      );
};

export default SingleEvent;



