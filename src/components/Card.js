import React,{useState} from 'react'
import '../index.css'


const Card = ({id,image,price,name,info,removeTour}) => {

  const [ReadMore, setReadMore] = useState(false)
    const description = `${info.substring(0,200)}...`;

    function showHandler (){
        setReadMore(!ReadMore)
    }
  return (
    <div   >
      
       
        <div className=' flex flex-wrap w-[400px] min-h-[550px] p-3 my-5 border border-slate-500 '>
             <img className='w-[300px ] aspect-square object-cover ' src={image}/>
            <div className='py-8'>
                <div className='tour-detail'>
                    <h3 className='tour-price'>{price}</h3>
                    <h2 className='tour-name'>{name}</h2>
                </div>
                <div className='description'>
                    {ReadMore ?info : description}
                    <span onClick={showHandler} className='text-red-300'>{ReadMore ? '...show less':'...read more'}</span>
                </div>
            </div>
            <button className=' border-red-800 bg-red-400 border py-2 px-8 ' onClick={()=>removeTour(id) }>Not Interested</button>
        </div>
       
    </div>
  )
}

export default Card