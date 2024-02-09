//-------Files-----------
import '../css-files/Title.css';
import Moon from './Moon';
import '../css-files/Moon.css';

//-------Other-----------
import React, { useState, useEffect, useRef } from "react";
import { Canvas } from "react-three-fiber";
import { Suspense } from "react";


//Title section of the webpage
const Title = () => {


    //-------Const Variables------
    
    const mainTextTitleParentRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);


    //-------Const Methods--------
    
    //Detects parent size, for rezizing purposes.
    const handleResize = () => {
        if (mainTextTitleParentRef.current) {
            setDivWidth(mainTextTitleParentRef.current.clientWidth);
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
        if (mainTextTitleParentRef.current) {
            setDivWidth(mainTextTitleParentRef.current.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mainTextTitleParentRef]);

    //----------Content--------

    return (
        <div className="MainTextTitleParent" id="Home" ref={mainTextTitleParentRef}>
            <div className='MainTextTitleLeft'>
            <div className='MainTextTitle MainTextAnimation' style={{ fontSize: calculateFontSize(30, 150) }}>
                <span>H</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>o</span>
                <span className='MainTextTitleUnderscore'>_</span>
                {/* Hello_ */}
            </div>
            <div className='MainTextSubtitle MainTextAnimation' style={{ fontSize: calculateFontSize(10, 50) }}>
                <span>I</span>
                <span>'</span>
                <span>m</span>
                <span>&nbsp;</span>
                <span>A</span>
                <span>n</span>
                <span>n</span>
                <span>e</span>
                {/* I'm Anne*/}
            </div>
            </div>
            <div className='MainTextTitleRight'>
                <Canvas>
                    <Suspense fallback={null}>
                    <Moon />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
  };
  

  //----------Export----------
  
  export default Title;