
import Cards from "../../Cards/Cards";
import Banner from "./Banners/Banner";
import Footer from "./Footer/Footer";
import GalleryCard from "./Gallery/GalleryCard";
import Navbar from "./Navbar/Navbar";
import Services from "./Services/Services";
import TestimonialCard from "./Testimonial/TestimonialCard";



const Home = () => {
      return (
            <div>
            <Navbar></Navbar>
                 <Banner></Banner>
                 <Services></Services>
                 <Cards></Cards>
                 <GalleryCard></GalleryCard>
                 <TestimonialCard></TestimonialCard>
                 <Footer></Footer>
            </div>
      );
};

export default Home;