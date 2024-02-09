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
                        <AboutCard CardBackText={'My favorite holiday is Halloween.'} Chosen={false} />
                        <AboutCard CardBackText={'I was born and raised in Orlando, Florida.'} Chosen={true} />
                        <AboutCard CardBackText={'I have a cat named Sir Arthur. Take a look! \u2192'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'Hi, I\'m Anne, a software developer.'} Chosen={true} />
                        <AboutCard CardBackText={'I love creepy video games like \'Little Nightmares\'.'} Chosen={false} />
                        <AboutCard CardBackText={<img src={Arthur} alt="Arthur" />} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'Glacier National Park is my favorite park.'} Chosen={false} />
                        <AboutCard CardBackText={'I really do hate tomatoes.'} Chosen={false} />
                        <AboutCard CardBackText={'I\'m a fast learner, and am always willing to learn a new skill.'} Chosen={true} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I enjoy working with others, and collaberating on projects.'} Chosen={true} />
                        <AboutCard CardBackText={'I was the valedictorian of my high school class.'} Chosen={false} />
                        <AboutCard CardBackText={'My favorite dessert is crepes with cream cheese filling.'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'I love the smell of a new book.'} Chosen={false} />
                        <AboutCard CardBackText={'My favorite coding project is Unfair Chess. You can find it below!'} Chosen={false} />
                        <AboutCard CardBackText={'One day, I would love to own a 1967 Chevy Impala.'} Chosen={false} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={'My favorite color is this specific shade of green. \u2192'} Chosen={false} />
                        <AboutCard CardBackText={'I think most cakes are too dry.'} Chosen={false} />
                        <AboutCard CardBackText={'I deliver clean and efficient code in a timely manner.'} Chosen={true} />
                    </div>
                    <div className='MainTextAboutBodyCardColumn'>
                        <AboutCard CardBackText={<img src={Green} alt="Green Image" />} Chosen={false} />
                        <AboutCard CardBackText={'I\'m never afraid to take on a new challenge.'} Chosen={true} />
                        <AboutCard CardBackText={'I love victorian architecture.'} Chosen={false} />
                    </div>
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default About;