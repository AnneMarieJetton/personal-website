//-------Files-----------
import '../css-files/Project.css';

//-------Resources-------
import githubLogo from '../other-files/github_white_logo.png'

//-------Other-----------
import React from 'react';

//A project in the projects section
const Project = (props) => {


    //-------Const Variables------

    const { Title, List, Href, Logo } = props;


    //----------Content--------

    return (
        <div className='ProjectContainer'>
            <div className='ProjectContainerImage'>
                <img className="" src={Logo} alt="Logo" />
            </div>
            <div className='ProjectContainerText'>
                <div className='ProjectContainerTextTitle'>
                    {Title}
                </div>
                <ul className='ProjectContainerTextList'>
                    {List.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
                <a href={Href} className="github__project__link" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" />
                </a>
            </div>
        </div>
    )
}


//----------Export----------

export default Project;