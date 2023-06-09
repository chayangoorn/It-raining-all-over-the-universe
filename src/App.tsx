import React from 'react';
import './App.css';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Page from './pages/page';
import Warning from './pages/warning';
import Welcome from './pages/welcome';
import Policy from './pages/policy';
import Name from './pages/name';
import Intro from './pages/intro';
import WelcomeName from './pages/welcomename';
import AfterWN from './pages/afterwn';
import Howyoufeel from './pages/howyoufeel';
import Myself from './pages/myself';

function App() {

  const [name, setName] = useState("")
  //const [onGoPath, setOnGoPath] = useState("")
  const navigate = useNavigate()

  const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const nextPage = (path: string) => {
    navigate(path);
  }

  const onGoing = (ans: boolean) => {
    if (ans) {
      navigate('/yesmyself')
    } else {
      navigate('/nomyself')
    }
  }

  return (
    <div>
      <Routes>
        <Route path='/' element={<Warning/>}/>
        <Route path='/warning' element={<Warning/>}/>
        <Route path='/welcome' element={<Welcome/>}/>
        <Route path='/policy' element={<Policy/>}/>
        <Route path='/name' element={<Name onNameChange={onNameChange}/>}/>
        <Route path='/intro' element={<Intro/>}/>
        <Route path='/welcomename' element={<WelcomeName name={name}/>}/>
        <Route path='/afterwn' element={<AfterWN/>}/>
        <Route path='/howyoufeel' element={<Howyoufeel/>}/>
        <Route path='/weknow' element={
          <Page bg='9' time={5000} path='/myself'>
            <p className='mt-48'>อย่างนี้นี่เอง</p>
          </Page>
        }/>
        <Route path='/myself' element={<Myself onGoing={onGoing}/>}/>
        <Route path='/yesmyself' element={
          <Page bg='11' time={5000} path='/myself'>
            <p className='mt-48'>นั่นสิ ใคร ๆ ก็ต้องเคยรู้สึกแบบนั้นบ้างอยู่แล้วเนอะ</p>
          </Page>
        }/>
        <Route path='/nomyself' element={
          <Page bg='11' time={5000} path='/myself'>
            <p className='mt-48'>ดีจังเลย การได้เข้าใจตัวเองเป็นเรื่องที่ดี <br /> ที่สุดอยู่แล้วเนอะ</p>
          </Page>
        }/>
      </Routes>
    </div>

  );
}

export default App;
