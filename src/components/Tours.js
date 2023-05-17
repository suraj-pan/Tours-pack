import React from 'react'
import Card from './Card'
import '../index.css'

const Tours = ({tours,removeTour}) => {
  return (
    <div >
         <h2 className='title mx-auto text-center'>Plan with Suraj Pandey</h2>
        <div className='w-[90%] max-w-[10300px] mx-auto   flex justify-between flex-wrap' >
          { tours.map( (tour)=>(
            <Card  key={tour.id} {...tour} removeTour={removeTour} />
          ))}
        </div>
    </div>
  )
}

export default Tours