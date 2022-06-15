import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from '../Comps/Home/App';

export default function Routing() {
  return (
    <div className="wrapper">
      <BrowserRouter>
        <Routes>
          <Route  path="/" element={<App loggedin={false}/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
