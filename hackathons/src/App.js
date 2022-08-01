import React, {useEffect, useState} from 'react';
import Hackathons from './components/Hackathons/Hackathons';

import './App.css';
import ModalComp from './components/ModalComp/ModalComp';


function App() {
  const [hackathons, setHackathons] = useState([])
  const [show, setShow] = useState(false);
  const [elements, setElements] = useState();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const receiveHackathon = (hackathon)=>{
    hackathons.push(hackathon)
    let newHackathons = hackathons.map((i)=>{
      console.log(i)
      return(<Hackathons key={hackathon} hack={i}/>)
    })
    setElements(newHackathons)
  }
  useEffect(()=>{

  },[hackathons])

  return (
    <>
      <ModalComp receiveHackathon={receiveHackathon}/>
      <div className="App">
        {elements}
      </div>
    </>
  );
}

export default App;
