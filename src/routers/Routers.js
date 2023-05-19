import {Routes, Route, Navigate} from 'react-router-dom'

import Home from '../pages/Home';
import Form from '../pages/Form';
import Privacy from '../pages/Privacy';
import Term from '../pages/Term';

const Routers =()=> {
  return (
    <Routes>
    <Route path='/' element={<Navigate to='/Home'/>} />
    
      <Route path='/home' element={<Home/>} />
      <Route path='/contact' element={<Form/>} />
      <Route path='/privacy-notice' element={<Privacy/>} />
      <Route path='/terms-and-conditions' element={<Term/>} />

      
</Routes>
  )
};
export default Routers;
























