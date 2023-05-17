import React, {useState} from "react";
import data from './data'
import Tours from "./components/Tours";


const App = () => {


  const [tours, setTours] = useState(data);

  function removeTour (id){
    const newTour = tours.filter(tour => tour.id != id)
    setTours(newTour)
  }

  if(tours.length === 0){

    return (
       <div className="flex flex-col my-14 items-center justify-center ">
        <h3 className="text-2xl text-black mt-8">No Tours Left</h3>
        <button className="font-large py-4 px-8 bg-blue-400" onClick={()=>setTours(data)}>Refresh</button>
      </div>
    )
  }
  return (
    <div className="App">
    <Tours tours={tours} removeTour={removeTour} />
    </div>
  )
};

export default App;
