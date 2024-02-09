//-------Files-----------
import '../css-files/Experience.css';

//-------Other-----------
import React from 'react';

//Experience section of the webpage
const Experience = () => {

    //----------Content--------

    return(
        <div className= 'MainTextExperienceParent' id="Experience">
            <div className='MainTextExperienceTitle MainTextAnimation'>
                <span>E</span>
                <span>x</span>
                <span>p</span>
                <span>e</span>
                <span>r</span>
                <span>i</span>
                <span>e</span>
                <span>n</span>
                <span>c</span>
                <span>e</span>
                {/* Experience */}
            </div>
            <div className='MainTextExperienceBody'>
                <div className='MainTextExperienceBodySection'>
                    <div className='MainTextExperienceBodyTitles'>
                        <span className='MainTextExperienceBodyCompanyName'>Futurist EDU</span>
                        <span className='MainTextExperienceBodyDate'>March 2023 - Current</span>
                    </div>
                    <span className='MainTextExperienceBodyJobTitle'>Junior Software Developer<br /></span>
                    <span className='MainTextExperienceBodyJobDescription'>Futurist EDU is a small start up located in Ogden, Utah. Their goal is to incorporate AI into the Psychology space, to help veterens and public workers with their mental health.<br /><br /></span>
                    <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                    <ul className='MainTextExperienceBodyRespAndAcomList'>
                        <li>Redesigned Website to give it a professional look</li>
                        <li>Developed tools to assist with document storage</li>
                        <li>Assisted in upgrading storage system and setting up SQL system</li>
                    </ul>
                </div>
                <div className='MainTextExperienceBodySection'>
                    <div className='MainTextExperienceBodyTitles'>
                        <span className='MainTextExperienceBodyCompanyName'>Cubic Transportation Systems</span>
                        <span className='MainTextExperienceBodyDate'>March 2022 - March 2023</span>
                    </div>
                    <span className='MainTextExperienceBodyJobTitle'>Computer Science Intern<br /></span>
                    <span className='MainTextExperienceBodyJobDescription'>Cubic is a transportation company based out of San Diego, California. As an intern, I worked on a scrum team to develop internal tools that were used by senior developers for larger development projects, as well as debugging and documenting pre-existing code.<br /><br /></span>
                    <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                    <ul className='MainTextExperienceBodyRespAndAcomList'>
                        <li>Daily Scrum Meetings</li>
                        <li>Led the development of a YAML document generation tool that increased the speed of YAML tasks by 99%</li>
                        <li>Upgraded pre-existing high level software</li>
                    </ul>
                </div>
                <div className='MainTextExperienceBodySection'>
                    <div className='MainTextExperienceBodyTitles'>
                        <span className='MainTextExperienceBodyCompanyName'>Utah State University</span>
                        <span className='MainTextExperienceBodyDate'>August 2018 - March 2022</span>
                    </div>
                    <span className='MainTextExperienceBodyJobTitle'>Computer Science Tutor<br /></span>
                    <span className='MainTextExperienceBodyJobDescription'>During my years at USU, I worked as a tutor among my peers and lower classmen to teach subject material, complete assignments, and study for tests.<br /><br /></span>
                    <span className='MainTextExperienceBodyRespAndAcom'>Responsibilities and Acomplishments:</span>
                    <ul className='MainTextExperienceBodyRespAndAcomList'>
                        <li>Scheduled and kept appointments for tutoring</li>
                        <li>Instructed in groups for team learning</li>
                        <li>Worked alongside other tutors</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}


//----------Export----------

export default Experience;