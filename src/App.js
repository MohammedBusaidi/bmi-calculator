import React, { useState } from 'react';

import './index.css';


function App () {
  //state
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');


  const calcBmi = (event) => {
    //to prevent submitting to the server
    event.preventDefault()

    if (weight === 0 || height === 0) {
      alert ('Please enter a valid weight or height!!')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))

      //the message logic

      if (bmi < 25) {
        setMessage('You are underweight')
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are healthy')
      } else {
        setMessage('You are overweight')
      }
    }
  };

  // show image based on BMI
  let imgSrc;

    if (bmi < 1) {
      imgSrc= null
    } else if (bmi < 25)  {
        imgSrc = require('./assets/underweight.png')

    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('./assets/healthy.png')
    } else {
      imgSrc = require('./assets/overweight.png')
    }

  const reload = () => {
    window.location.reload();
  };

  return (
    <div className="app ">
      <div className='container'>
        <h2 className='container-h2'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (KG)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
          <label>Height (METER)</label>
          <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src= {imgSrc} alt='' />
        </div>
      </div>
     </div>
  );
}

export default App;
