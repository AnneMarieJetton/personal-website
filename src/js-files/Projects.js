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
import NodeLogo from '../other-files/node_white_logo.png';

//-------Other-----------
import React from 'react';

//Projects section of the webpage
const Projects = () => {

    //-------Content-----------

    return (
        <div className='MainTextProjectsParent' id="Projects">
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
                        Title={'Amazon Clone'} 
                        List={[
                            "A reproduction of the online superstore, built from scratch using React.",
                            "Use of Firebase",
                            "Proof of React knowledge, and full stack proficiency"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/Amazon-Clone"}
                        Logo={ReactLogo} 
                    />
                    <Project 
                        Title={'C++ Todo List Application'} 
                        List={[
                            "Use of external files",
                            "Use of reusable components",
                            "Use of GUI tools",
                            "Proof of C++ knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/CppTodoList"}
                        Logo={CppLogo} 
                    />
                    <Project 
                        Title={'Animal Crossing SQL Build'} 
                        List={[
                            "An SQL project based of of the item system found in the video game 'Animal Crossing'.",
                            "Examples of functional complex queries",
                            "Proof of SQL knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/AnimalCrossingSQLProject"}
                        Logo={SQLLogo} 
                    />
                </div>
                <div className='MainTextProjectsBodyRight'>
                    <Project 
                        Title={'CCIntranet'} 
                        List={[
                            "An internal portal used for the Sundance call center.",
                            "Use of LDAP authentication",
                            "Use of MySQL",
                            "Proof of Node knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/CCIntranet"}
                        Logo={NodeLogo} 
                    />
                    <Project 
                        Title={'DiscountableJob'} 
                        List={[
                            "An internal tool created for sundance to tag specific items as 'discountable'.",
                            "Use of Shopify's Graphql API",
                            "Proof of Python knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/MarkAsDiscountableTool"}
                        Logo={PythonLogo} 
                    />
                    <Project 
                        Title={'BagIt.com'} 
                        List={[
                            "An online grocery shopping experience created using Vue.js.",
                            "Use of reusable components",
                            "Use of APIs",
                            "Proof of Vue knowledge"
                        ]} 
                        Href={"https://github.com/AnneMarieJetton/BagIt"}
                        Logo={VueLogo} 
                    />
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default Projects;
