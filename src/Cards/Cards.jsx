import   { useEffect, useState } from 'react';
import Card from './Card';



const Cards = () => {
  
      const [events, setEvents] = useState([])


      useEffect(() =>{
            fetch('event.json')
            .then(res => res.json())
            .then(data => setEvents(data))


      },[])

      console.log(events)

      return (
            <div className="lg:py-10 py-5 px-2 lg:px-0 lg:w-9/12 mx-auto">
                  
                  <div className='grid lg:grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5'>
                        {
                              
                          events?.map(event => <Card key={event.id} event={event}></Card>)
                        }
                  </div>
            </div>
      );
};

export default Cards;