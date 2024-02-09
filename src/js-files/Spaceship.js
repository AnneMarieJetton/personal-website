//-------Files-----------
import '../css-files/Spaceship.css';

//-------Resources-------
import SpaceshipImage from '../other-files/spaceship_1_rotated.png';

//-------Other-----------
import React, { useState, useRef, useEffect } from 'react';


//Spaceship that acts as the cursor
const Spaceship = () => {


  //-------Const Variables------
    
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0, angle: 0 });
  const requestRef = useRef();
  const previousTimeRef = useRef();
  const navbarRef = useRef(200);


  //-------UseEffect--------

  //UseEffect calculating how the spaceship moves.
  useEffect(() => {
    const speedFactor = 0.02;

    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        const deltaTime = time - previousTimeRef.current;

        setMousePosition((prev) => {
          const deltaX = prev.x - prev.mouseX;
          const deltaY = prev.y - prev.mouseY;

          const angleRad = Math.atan2(deltaY, deltaX);
          const angleDeg = (angleRad * 180) / Math.PI;

          return {
            x: prev.x - deltaX * speedFactor * deltaTime,
            y: prev.y - deltaY * speedFactor * deltaTime,
            angle: angleDeg - 45,
            mouseX: prev.mouseX,
            mouseY: prev.mouseY,
          };
        });
      }

      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };

    //Adjusts the spaceship when the mouse is moved
    const handleMouseMove = (e) => {
      cancelAnimationFrame(requestRef.current);
      setMousePosition((prev) => ({ ...prev, mouseX: e.clientX - navbarRef.current, mouseY: e.clientY }));
      requestRef.current = requestAnimationFrame(animate);
    };

    //Handle screen resizing
    const handleResize = () => {
      navbarRef.current = 200;
    };

    //Event Listeners
    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(requestRef.current);
    };

  }, []);


  //----------Content--------

  return (
    <div className="spaceship" style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px`, transform: `rotate(${mousePosition.angle}deg)` }}>
      <img src={SpaceshipImage} alt="Spaceship" />
    </div>
  );
};


//----------Export----------

export default Spaceship;