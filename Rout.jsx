import React from 'react'
import About from './About';
import Contact from './Contact';
import Services from './Services';
import User from './User';
import Error from './Error';
import { Route, Routes , Navigate} from "react-router-dom"
import Menu from './Menu';
import Search from './Search';

const Rout = () => {
  return (
    <>
    <Menu />
      <Routes>
        <Route exact path='/' Component={ () => <About name="About" />}/>
        <Route path='/services' Component={ () => <Services name="Services"/>}/>
        <Route path="/user/:fname/:lname" Component={User}/>
        <Route path="/search" Component={Search}/>
        <Route path='/contact' Component={Contact}/>

        {/* for giving error */}
        {/* <Route path= "*" Component={Error}/> */}

        {/* navigate is used for if someonr writes anything go back to home page */}
        <Route path="*" element={<Navigate to ="/" />}/>
       </Routes>
    </>
  )
}

export default Rout;
