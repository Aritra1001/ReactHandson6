import React,{useContext} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import contextData from './ContextData';
import Navbar from './Navbar';
import "./Style.css";

export default function Student() {
  const details = useContext(contextData);
  const nav = useNavigate();
  console.log(details);

  return (
    <>
      <Navbar/>
      <h1>Student Details</h1>
      <button className='add_btn' type='button' onClick={()=>{nav('/newStudent')}}>Add New Student</button>
      <table>
        <thead>
          <tr className='row'>
            <th>Name</th>
            <th>Age</th>
            <th>Course</th>
            <th>Batch</th>
            <th>Change</th>
          </tr>
        </thead>
        <tbody>
          {details.entries.map((item, index)=>(
            <tr className='row' key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.course}</td>
              <td>{item.batch}</td>
              <td>
                <Link to='/editStudent' state={{data: index}}>Edit</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}
