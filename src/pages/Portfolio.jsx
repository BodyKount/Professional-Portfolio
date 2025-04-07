import { useEffect } from "react";

import weatherDashboard from "../assets/img/weather-dashboard.PNG";
import vehicleBuilder from "../assets/img/vehicle builder.PNG";
import employeeTracker from "../assets/img/employee-tracker.PNG";
import readmeGenerator from "../assets/img/Readme-Generator.PNG";
import workoutJournal from "../assets/img/workout-journal.PNG"; 
import '../assets/styles/Portfolio.css';

function Portfolio() {
    useEffect(() => {
            document.title = "Portfolio";
        }, []);

    const myProjects = [
        {
            projectname: "Weather Dashboard",
            img: weatherDashboard,
            srcrepo: "https://github.com/BodyKount/5day-Weather-Forecast",
            skills: "HTML, CSS, JavaScript, OpenWeather API",
        },
        {
            projectname: "Vehicle Builder",
            img: vehicleBuilder,
            srcrepo: "https://github.com/BodyKount/Vehicle-Builder---Challenge-8",
            skills: "TypeScript, OOP",
        },
        {
            projectname: "Workout Journal",
            img: workoutJournal,
            srcrepo: "https://github.com/BodyKount/Workout-Journal",
            skills: "HTML, CSS, JavaScript",
        },
        {
            projectname: "Employee Tracker",
            img: employeeTracker,
            srcrepo: "https://github.com/BodyKount/Employee-Tracker-SQL",
            skills: "PostGreSQL",
        },
        {
            projectname: "Readme Generator",
            img: readmeGenerator,
            srcrepo: "https://github.com/BodyKount/README-Generator",
            skills: "Node.js",
        },

    ];

    return (
        <>
         <h2 className="page-title">Portfolio</h2>
            <div className="portfolio-grid">
                {myProjects.map((project, index) => (
                    <div className="portfolio-card" key={index}>
                        <img src={project.img} alt={project.projectname} className="project-image" />
                        <div className="portfolio-content">
                            <h3>
                                <a>{project.projectname}</a>
                            </h3>
                            <a href={project.srcrepo} target="_blank" rel="noopener noreferrer" className="github-icon">
                                <i className="bi bi-github"> Github</i>
                            </a>
                            <p className="portfolio-skills">{project.skills}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Portfolio;
