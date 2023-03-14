import React,{useContext} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import contextData from './ContextData';

export default function Edit() {
    const details = useContext(contextData);
    const nav = useNavigate(); 
    const index = useLocation().state.data; // index of entry to be modified
    console.log(index);

    const currData = {
        name: details.entries[index].name,
        id: details.entries[index].id
    };

    const handleChange =(event)=>{
        currData[event.target.name] = event.target.value;
    }

    const handleSubmit =()=>{
        details.entries[index] = currData;
        nav(-1); //navigate to student on clickcing button
        console.log(details);
        console.log("Current Data", currData);
    }

    return (
    <>
       <h1>Edit Details</h1>
       <input placeholder={details.entries[index].name} onChange={handleChange} name='name'/>
       <input placeholder={details.entries[index].age} onChange={handleChange} name='age'/> 
       <input placeholder={details.entries[index].course} onChange={handleChange} name='course'/>
       <input placeholder={details.entries[index].batch} onChange={handleChange} name='batch'/>
       <button type='button' onClick={handleSubmit}>Submit</button>
    </>
  )
}
