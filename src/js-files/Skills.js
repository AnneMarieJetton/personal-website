//-------Files-----------
import '../css-files/Skills.css';

//-------Resources-------
import Astronaught from '../other-files/true_astronaught_2_transparent.png';

//-------Other-----------
import React, { useEffect, useState, useRef } from 'react';


//Skills section of the webpage
const Skills = () => {


    //-------Const Variables------
    
    const mainTextSkillsParentRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);


    //-------Const Methods--------

    //Detects parent size, for rezizing purposes.
    const handleResize = () => {
        if (mainTextSkillsParentRef.current) {
            setDivWidth(mainTextSkillsParentRef.current.clientWidth);
        }
    };

    //Uses parent size to dynamically update the font to an appropriate size.
    const calculateFontSize = (minFontSize, maxFontSize) => {
        const minContainerWidth = 750;
      
        // Adjust the scaleFactor based on your requirements
        const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5; // Using 750 as the reference width
      
        const fontSize = minFontSize * scaleFactor; // Assuming the initial font size is 10px
      
        return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
    };


    //-------UseEffect--------

    //UseEffect for resizing
    useEffect(() => {
        if (mainTextSkillsParentRef.current) {
            setDivWidth(mainTextSkillsParentRef.current.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mainTextSkillsParentRef]);

    
    //----------Content--------

    return (
        <div className= 'MainTextSkillsParent' id="Skills" ref={mainTextSkillsParentRef}>
            <div className='MainTextSkillsTitle MainTextAnimation'>
                <span>S</span>
                <span>k</span>
                <span>i</span>
                <span>l</span>
                <span>l</span>
                <span>s</span>
                {/* Skills */}
            </div>
            <div className='MainTextSkillsBody' style={{ fontSize: calculateFontSize(4, 20) }}>
                <div className='MainTextSkillsBodyLeft'>
                    <span className='MainTextLanguagesSubtitle'>Languages</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '13.33%', top: '10%' }}>Java</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '33.33%', top: '25%' }}>Python</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '83.33%', top: '40%' }}>C</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '63.33%', top: '55%' }}>C++</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '23.33%', top: '70%' }}>JavaScript</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '73.33%', top: '85%' }}>CSS</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '13.33%', top: '100%' }}>HTML</span>
                </div>
                <div className="AstronaughtParent">
                    <img className="Astronaught" src={Astronaught} alt="astronaught" />
                </div>
                <div className='MainTextSkillsBodyRight'>
                    <span className='MainTextToolsSubtitle' >Tools</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '33.33%', top: '10%' }}>React.JS</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '63.33%', top: '18%' }}>THREE.JS</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '23.33%', top: '26%' }}>Vue</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '53.33%', top: '34%' }}>SQL</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '13.33%', top: '42%' }}>Jenkins</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '63.33%', top: '50%' }}>Artifactory</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '43.33%', top: '58%' }}>Git</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '83.33%', top: '66%' }}>JIRA</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '33.33%', top: '74%' }}>Firebase</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '73.33%', top: '82%' }}>Stripe</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '13.33%', top: '90%' }}>Pygame</span>
                    <span className='MainTextSkillsBodyItem' style={{ left: '63.33%', top: '98%' }}>Postman</span>
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default Skills;