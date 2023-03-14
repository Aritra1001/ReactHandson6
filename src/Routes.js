import React, { useState } from 'react';
import Home from './Components/Home';
import Student from './Components/Student';
import Contact from './Components/Contact';
import AddNew from "./Components/AddNew";
import Edit from './Components/Edit';
import contextData from './Components/ContextData';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function RouterComponent() {
  const [data, setData] = useState([{name: "Ram", age: 23,course: "MERN", batch: 'October'}, 
                                    {name: "Sahil", age: 25,course: "MERN", batch: 'November'},
                                    {name:"Akash", age: 24, course:"MEAN", batch: 'July'}])
  return (
    <>
       <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Student' element={
                  <contextData.Provider value={{entries: data, updateFunction: setData}}>
                    <Student/>
                  </contextData.Provider>}/>
                <Route path='/newStudent' element={
                  <contextData.Provider value={{entries: data, updateFunction: setData}}>
                    <AddNew/>
                  </contextData.Provider>}/>
                <Route path='/editStudent' element={
                  <contextData.Provider value={{entries: data, updateFunction: setData}}>
                    <Edit/>
                  </contextData.Provider>}/>
                <Route path='/Contact' element={<Contact/>}/>
            </Routes>
       </BrowserRouter>
    </>
  )
}
