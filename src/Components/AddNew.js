import React,{useContext} from 'react';
import contextData from './ContextData';
import { useNavigate } from 'react-router-dom';

export default function AddNew() {
    const details = useContext(contextData);
    const nav = useNavigate();
    const newObj = {
        name: "",
        age: "",
        course:"",
        batch:""
    }

    //To add new name and id
    const handleChange=(event)=>{
        newObj[event.target.name] = event.target.value;
    }
    const handleSubmit = ()=>{
        details.entries.push(newObj);
        nav(-1);
    }

  return (
    <>
        <h1>Add New Details</h1>
        <input placeholder="Enter Name" onChange={handleChange} name="name"/>
        <input placeholder='Enter id' onChange={handleChange} name="age"/>
        <input placeholder='Enter course' onChange={handleChange} name="course"/>
        <input placeholder='Enter batch' onChange={handleChange} name="batch"/> 
        <button type='button' onClick={handleSubmit}>Submit</button>
    </>
  )
}
