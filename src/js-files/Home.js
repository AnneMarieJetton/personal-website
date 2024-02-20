//-------Files-----------
import "../css-files/Home.css";
import Header from './Header';
import PreLoader from './PreLoader';
import StarsBackdrop from './StarsBackdrop';
import MainText from './MainText';
import Spaceship from './Spaceship';

//-------Other-----------
import React, { useEffect, useState } from 'react';


//Container for the entire webpage
function Home() {

  //-------Const Variables------
  const [loading, setLoading] = useState(true);


  //-------UseEffect--------

  //UseEffect fot the preloader
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3500)
  }, [])


  //----------Content--------

  return (
    <div className="Home">
        {loading 
        
        ? 
        
        <PreLoader />
        
        :

        <>
          <Header />
          <div className='MainRight'>
            <MainText/>
            <StarsBackdrop/>
            <Spaceship/>
          </div>
        </>

        }
    </div>
  )        
}


//----------Export----------

export default Home;