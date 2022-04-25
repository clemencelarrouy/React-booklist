//import { render } from '@testing-library/react';
import React from 'react';
import {Outlet} from "react-router-dom" ;
import Header from './Header';


const App = () => { 
  
  return ( 
    <> 
    < Header />
    <Outlet></Outlet>
    </>
  );
}




  
export default App;
 

