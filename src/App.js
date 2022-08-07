import './App.css';
import { AiOutlinePlus } from "react-icons/ai";
import {AiFillRest} from "react-icons/ai"
import { useState } from 'react';
import  {useDispatch, useSelector}  from 'react-redux';
import {addToDo, daleteToDo, removeToDo} from "./actions/index"

function App() {
  const dispatch = useDispatch()

  const [inputData, setInputData] = useState('')

  const data = useSelector((state)=>state.reducers.lists)

  return (
    <div className="App">
      <figure>
    <figcaption>Add Your List Here...</figcaption>
    </figure>
    <div>
      <input type="text" placeholder="✍ Add Items...." value={inputData} onChange={(event)=>setInputData(event.target.value)} />
      <button onClick={()=>dispatch(addToDo(inputData),setInputData(''))} ><AiOutlinePlus/></button>
      
    </div>
   
    {
      data.map((elem)=>{
        return(
  <div key={elem.id}>
        <h3>{elem.data}</h3>
        <span><button onClick={()=>dispatch(daleteToDo(elem.id))} ><AiFillRest/></button></span>
      
  </div>
        )})}
        <div>
        
        <span><button onClick={()=>dispatch(removeToDo())} >Remove All</button></span>
      
  </div>
 </div>
  );
}

export default App;
