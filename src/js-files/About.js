//-------Files-----------
import '../css-files/About.css';
import AboutCard from './AboutCard';

//-------Resources-------
import Green from '../other-files/green_color.png';
import Arthur from '../other-files/sir_arthur_square.png';

//-------Other-----------
import React, { useEffect, useState , useRef} from 'react';


//About section of the webpage
const About = () => {


    //-------Const Variables------
    
    const mainTextAboutParentRef = useRef(null);
    const [divWidth, setDivWidth] = useState(0);


    //-------Const Methods--------
    
    //Detects parent size, for rezizing purposes.
    const handleResize = () => {
        if (mainTextAboutParentRef.current) {
            setDivWidth(mainTextAboutParentRef.current.clientWidth);
        }
    };

    //Uses parent size to dynamically update the font to an appropriate size.
    const calculateFontSize = (minFontSize, maxFontSize) => {
        const minContainerWidth = 750;
      
        const scaleFactor = (Math.max(minContainerWidth, divWidth) / 750) * 2.5;
      
        const fontSize = minFontSize * scaleFactor;
      
        return Math.min(maxFontSize, Math.max(minFontSize, fontSize)) + 'px';
    };


    //-------UseEffect--------

    //UseEffect for resizing
    useEffect(() => {
        if (mainTextAboutParentRef.current) {
            setDivWidth(mainTextAboutParentRef.current.clientWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mainTextAboutParentRef]);


    //----------Content--------

    return (
        <div className= 'MainTextAboutParent' id="About" ref={mainTextAboutParentRef}>
            <div className='MainTextAboutTitle MainTextAnimation'>
                <span>A</span>
                <span>b</span>
                <span>o</span>
                <span>u</span>
                <span>t</span>
                {/* About */}
            </div>
            <div className='MainTextAboutBody' style={{ fontSize: calculateFontSize(4, 20) }}>
                <div className='MainTextAboutBodyCardsParent'>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I\'m eager to dive in, enthusiastic about opportunities'} Chosen={false} />
                        <AboutCard CardBackText={'I have 6+ years of experience in software.'} Chosen={true} />
                        <AboutCard CardBackText={'I\'m a skilled problem-solver, adept at finding efficient solutions.'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'Hi, I\'m Anne, a software developer.'} Chosen={true} />
                        <AboutCard CardBackText={'I collaborate closely with users and teams, ensuring smooth workflow.'} Chosen={false} />
                        <AboutCard CardBackText={'I handle many tasks well, multitasking with ease.'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I adapt quickly to changes, flexibly adjusting as needed.'} Chosen={false} />
                        <AboutCard CardBackText={'I fix problems swiftly, troubleshooting with skill.'} Chosen={false} />
                        <AboutCard CardBackText={'I\'m a fast learner, and am always willing to learn a new skill.'} Chosen={true} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I enjoy working with others, and collaberating on projects.'} Chosen={true} />
                        <AboutCard CardBackText={'I manage time well, optimizing productivity effectively.'} Chosen={false} />
                        <AboutCard CardBackText={'I\'m friendly and approachable, maintaining a professional attitude.'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I lead teams effectively, guiding with skill and dedication.'} Chosen={false} />
                        <AboutCard CardBackText={'My favorite coding project is Unfair Chess, which is linked below.'} Chosen={false} />
                        <AboutCard CardBackText={'I\'m proactive and motivated, initiating tasks with enthusiasm'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I\'m a strong communicator, conveying ideas clearly and effectively.'} Chosen={false} />
                        <AboutCard CardBackText={'I strive to make a significant difference, leaving a positive mark'} Chosen={false} />
                        <AboutCard CardBackText={'I deliver clean and efficient code in a timely manner.'} Chosen={true} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I handle conflicts with diplomacy, addressing issues calmly.'} Chosen={false} />
                        <AboutCard CardBackText={'I\'m never afraid to take on a new challenge.'} Chosen={true} />
                        <AboutCard CardBackText={'I excel at independent work, managing tasks with self-reliance.'} Chosen={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default About;