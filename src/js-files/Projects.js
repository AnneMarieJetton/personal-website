//-------Files-----------
import '../css-files/Projects.css';
import Project from './Project';

//-------Resources-------
import ReactLogo from '../other-files/react_white_logo.png';
import VueLogo from '../other-files/vue_white_logo.png';
import CppLogo from '../other-files/cpp_white_logo.png';
import SQLLogo from '../other-files/sql_white_logo.png';
import JavaLogo from '../other-files/java_white_logo.png';
import PythonLogo from '../other-files/python_white_logo.png';

//-------Other-----------
import React from 'react';

//Projects section of the webpage
const Projects = () => {

    //-------Content-----------

    return (
        <div className= 'MainTextProjectsParent' id="Projects">
            <div className='MainTextProjectsTitle MainTextAnimation'>
                <span>P</span>
                <span>r</span>
                <span>o</span>
                <span>j</span>
                <span>e</span>
                <span>c</span>
                <span>t</span>
                <span>s</span>
                {/* projects */}
            </div>
            <div className='MainTextProjectsBody'>
                <div className='MainTextProjectsBodyLeft'>
                    <Project 
                        Title={'BagIt.com'} 
                        List={[
                            "An online grocery shopping experience Created using Vue.js.",
                            "Use of reusable components",
                            "Use of APIs",
                            "Proof of Vue Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/BagIt"}
                        Logo={VueLogo} 
                    />
                    <Project 
                        Title={'C++ Todo List Application'} 
                        List={[
                            "Use of external files",
                            "Use of reusable components",
                            "Use of GUI tools",
                            "Proof of C++ Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/CppTodoList"}
                        Logo={CppLogo} 
                    />
                    <Project 
                        Title={'SQL Covid Data Exploration'} 
                        List={[
                            "A deep dive into the covid data from 2020, This project makes use of SQL to understand and learn from the data.",
                            "Use of Tableau",
                            "Proof of SQL Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/SQLCovidDataExploration"}
                        Logo={SQLLogo} 
                    />
                </div>
                <div className='MainTextProjectsBodyRight'>
                    <Project 
                        Title={'Whats the password?'} 
                        List={[
                            "A fun password generator ...where there are far too many rules.",
                            "Use of Apis",
                            "Use of GUI tools",
                            "Proof of Java Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/WhatsThePassword"}
                        Logo={JavaLogo} 
                    />
                    <Project 
                        Title={'Unfair Chess'} 
                        List={[
                            "The classic game, with a bit of a twist, written in python.",
                            "Use of Pygame",
                            "Use of GUI tools",
                            "Proof of Python Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/UnfairChess"}
                        Logo={PythonLogo} 
                    />
                    <Project 
                        Title={'Arthur\'s chat room'} 
                        List={[
                            "A chatroom created by Sir Arthur's own two paws, This is a chat room where you can chat with others. (and Arthur) ",
                            "Use of Firebase",
                            "Proof of React Knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/ArthursChatRoom"}
                        Logo={ReactLogo} 
                    />
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default Projects;