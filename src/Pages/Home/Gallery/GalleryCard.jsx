import { useEffect, useState } from 'react';
import Gallery from './HomeGallery';




const GalleryCard = () => {

      const [gallery, setGallery] = useState([])


      useEffect(() => {
            fetch('gallery.json')
                  .then(res => res.json())
                  .then(data => setGallery(data))


      }, [])

      console.log(gallery)

      return (
            <div className="lg:py-10 py-5 px-2 lg:px-0 lg:w-9/12 mx-auto">
                  <div className="m-[10px]">
                        <h2 className="text-3xl text-center font-bold text-amber-700"> Our Gallery</h2>
                        <div className="mt-4 mb-4">
                              <p className="text-sm text-black font-bold text-center">Can grow your thinking show the images</p>
                        </div>
                  </div>


                  <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-5'>
                        {

                              gallery?.map(gallery => <Gallery key={gallery.id} gallery={gallery}></Gallery>)
                        }
                  </div>
            </div>
      );
};

export default GalleryCard;