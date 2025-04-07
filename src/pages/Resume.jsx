import '../assets/styles/Resume.css';
import { useEffect } from 'react';

export default function Resume() {
    useEffect(() => {
            document.title = "Resume";
        }, []);

    return (
        <div className="resume-container">
        <div className="resume-page">
            <h2 className="page-title" style={{ color: 'black' }}>Resume</h2>
            <div className="resume-download">
                <a href="/assets/files/Resume.pdf" download className="download-btn" style={{ color: 'white' }}>
                    Download Resume
                </a>
            </div>
            <section className="resume-section">
                <h3 style={{ color: 'black' }}>Technical Skills</h3>
                <ul className="skills-list" style={{ color: 'black' }}>
                    <li>HTML, CSS, JavaScript</li>
                    <li>React.js, Node.js</li>
                    <li>SQL, PostgreSQL</li>
                    <li>REST APIs, Express.js</li>
                    <li>Git, GitHub</li>
                </ul>
            </section>
            <section className="resume-section">
                <h3 style={{ color: 'black' }}>Experience</h3>
                <div className="resume-item">
                     <h4 style={{ color: 'black' }}>Freelance Web Developer</h4> 
                    <p><em style={{ color: 'black' }}>  [2024 - Present]</em></p> 
                    <ul style={{ color: 'black' }}>
                         <p>Placeholder for future experience and projects</p> 
                    </ul>
                </div>
            </section>
            <section className="resume-section">
                <h3 style={{ color: 'black' }}>Education</h3>
                <div className="resume-item">
                    {/* <h4 style={{ color: 'black' }}>Add my Degree Name here</h4> */}
                    {/* <p style={{ color: 'black' }}> Name of University, Year of Graduation</p> */}
                </div>
            </section>
        </div>
        </div>
    );
}
