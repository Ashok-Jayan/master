import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Training from './Training/training';
import { useEffect } from 'react';
import { BrowserRouter, Route, Routes, useNavigate, } from 'react-router';
import Home from './Home'
import About from './About';
import { hide } from '@popperjs/core';


function App() {
  const names = ["Ashok", "Jayan", "A L"];
  const [nameList, setNameList] = useState(names);
  const addNames = () => {
    const adding = nameList.pop();
    setNameList(nameList);
    console.log(nameList);
    console.log(adding);
  }

  //how to use useState.

  const [obj, setObj] = useState({ empName: "Ashok", empSalary: 20000 })
  const newEmp = () => {
    // setObj(obj. empId = 12);
    setObj(prevState => ({
      ...prevState, empId: 12, empName: "Jayan"
    }))
    console.log(obj)
  }

  const employees = [
    { id: 1, name: 'Ashok', age: 25 },
    { id: 2, name: 'Jayan', age: 30 },
    { id: 3, name: 'AL', age: 35 }
  ];
  const [arrayObj, setArrayObj] = useState(employees);
  const empDetails = () => {
    const ans = arrayObj.map((employee) => {
      return employee.name + " his age is " + employee.age
    })
    setArrayObj(ans);
    console.log(arrayObj);
  }

  //how to use useEffect.

  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`The count is now: ${count}`);
  })

  const [popup, setPopup] = useState(false);
  useEffect(() => {
    setPopup(true);

    const timer = setTimeout(() => {
      setPopup(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [count]);

  //Conditional rendering:
  const [out, setOut] = useState(false);

  //how to use useNavigate

  //const navigate = useNavigate();


  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}/>
      </Routes>
      <div>
        {popup && (
          <div className='popup'>
            <h2>This is a Popup!</h2>
            <p>It will disappear after 5 seconds.</p>
            <button className='count-btn' onClick={() => setPopup(false)}>Close</button>
          </div>
        )}
      </div>
      <div className='count'>
        <p className='count-hed'>{count}</p>
        <button className='count-btn' onMouseEnter={() => { setCount(count + 1) }} onMouseLeave={() => { setCount(count - 1) }}>Increment</button>
      </div>
      <div className='buttons'>
        <button className='count-btn' onClick={newEmp}>Click</button>
        <button className='count-btn2' onClick={addNames}>Click to Add Names</button>
        <button className='count-btn' onClick={() => { empDetails() }}>Click</button>
        <div>
          {arrayObj.map((emp, index) => {
            <p key={index}>{emp}</p>
          })}
        </div>
      </div>
      <Training company="Ford" car="Mustang" year={2030} ></Training>
      <div>
      {/* <h1>Boolean Output: {out.toString()}</h1>
      <button onClick={() => setOut(!out)}>Toggle</button> */}
      <h1>Boolean Output: {out.toString()}</h1>
      <button onClick={() => setOut(!out)}>Toggle</button>

    </div>
      
    </>
  )
};

export default App
