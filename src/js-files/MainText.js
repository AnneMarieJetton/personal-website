//-------Files-----------
import '../css-files/MainText.css';
import Title from './Title';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Education from './Education';
import Contact from './Contact';

//-------Other-----------
import React from 'react';

//Container for righthand section of the webpage
const MainText = () => {

    //----------Content--------
    return(
        <div className='MainTextParent'>
            <Title/>
            <About/>
            <Skills/>
            <Projects/>
            <Experience/>
            <Education/>
            <Contact/>
        </div>
    )

}


//----------Export----------

export default MainText;