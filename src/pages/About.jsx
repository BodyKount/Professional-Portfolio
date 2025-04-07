import { useEffect } from "react";
import profileImg from "../assets/img/profilePic.PNG";

export default function About() {
    useEffect(() => {
        document.title = "About Me - Christopher Ness"; // Set the document title for the About page
    }, []);
    
    return (
        <div className="about-container">
            <h2 className="about-title" style={{ color: "white" }}>About Me</h2>
            <div className="about-image">
                <img src={profileImg} alt="Profile" />
            </div>
            <div className="about-text" style={{ color: "white" }}>
                <p style={{ color: "white" }}>
                    Hello! My name is Christopher and 
                    I am a full stack web developer looking to expand my horizons in the tech industry.
                    I have experience with HTML, CSS, JavaScript, and React, and database technologies such as MySQL and MongoDB.  
                    I am passionate about building responsive and user-friendly web applications that provide a great user experience.

                </p>
                <p style={{ color: "white" }}>
                In my free time, I enjoy learning new programming languages and frameworks to expand my skill set. 
                  I am always looking for new challenges and opportunities to grow as a developer. 
                  I enjoy problem solving and finding efficient solutions to complex issues.
                 I also enjoy spending time with my two dogs Kevin and Bailey,
                 as well as playing video games and watching movies.
                  I&apos;m always looking for new ways to challenge myself and I am always looking for new ways to grow as a person.
                </p>
                <p style={{ color: "white" }}>
                    If you are interested in working with me or have any questions,
                    please feel free to reach out to me via the <a href="/Contact" style={{ color: "lightpurple" }}>Contact</a> page. 
                   
                </p>
   
              
            </div>
        </div>
    );
}