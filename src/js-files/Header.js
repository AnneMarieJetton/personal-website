//-------Files-----------
import '../css-files/Header.css';

//-------Resources-------
import moonLogo from '../other-files/transparent_moon.png';
import linkedinLogo from '../other-files/linkedin_white_logo.png'
import githubLogo from '../other-files/github_white_logo.png'
import emailLogo from '../other-files/email_white_logo.png'

//-------Other-----------
import React from "react"


//NavBar section of the webpage
function Header() {

    //----------Content--------

    return (
        <nav className="Header">

            <div className="LogoParent HeaderAnim1">
                <img className="HeaderLogo" src={moonLogo} alt="moon" />
                <span className="HeaderLogoText1">Anne</span>
                <span className="HeaderLogoText2">Software Developer</span>
            </div>

            <div className="HeaderNav">

                <a className="HeaderLink" onClick={() => scrollToElement('Home')}>
                    <div className="HeaderOption HeaderAnim1">
                        <span>Home</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('About')}>
                    <div className="HeaderOption HeaderAnim2">
                        <span>About</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('Skills')}>
                    <div className="HeaderOption HeaderAnim3">
                        <span>Skills</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('Projects')}>
                    <div className="HeaderOption HeaderAnim4">
                        <span>Projects</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('Experience')}>
                    <div className="HeaderOption HeaderAnim5">
                        <span>Experience</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('Education')}>
                    <div className="HeaderOption HeaderAnim6">
                        <span>Education</span>
                    </div>
                </a>
                <a className="HeaderLink" onClick={() => scrollToElement('Contact')}>
                    <div className="HeaderOption HeaderAnim7">
                        <span>Contact Me</span>
                    </div>
                </a>
                <div className="HeaderLink">
                    <div className="HeaderOption HeaderAnim8">
                        <div className="SocialLinks">
                            <a href="https://github.com/AnneMarieJetton" className="GithubLink" target="_blank" rel="noopener noreferrer">
                                <img src={githubLogo} alt="GitHub" />
                            </a>
                            <a href="https://www.linkedin.com/in/anne-jetton/" className="LinkedinLink" target="_blank" rel="noopener noreferrer">
                                <img src={linkedinLogo} alt="LinkedIn" />
                            </a>
                            <a href="mailto:annemariejetton@gmail.com" className="EmailLink">
                                <img src={emailLogo} alt="Email" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}


//-------Function Definitions-------

//Controls quick-scroll behavior from navbar
function scrollToElement(elementId) {
    const element = document.getElementById(elementId);
  
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }
}


//----------Export----------

export default Header;