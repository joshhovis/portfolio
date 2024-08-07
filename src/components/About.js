import React from "react";
import "./About.css";

const About = () => {
    return (
        <div className="about">
            <h1 className="about__title">About me</h1>
            <p className="about__description">
                Hi, I'm Joshua, a full-stack software developer from the United
                States with 3 years of experience.
            </p>
            <p className="about__tools-title">
                My primary tools of choice include:
            </p>
            <ul className="about__tools">
                <li className="about__tools-item">JavaScript / TypeScript</li>
                <li className="about__tools-item">React</li>
                <li className="about__tools-item">Angular</li>
                <li className="about__tools-item">Nodejs</li>
                <li className="about__tools-item">Python</li>
            </ul>
            <p className="about__passion">
                Beyond building web applications, I have a passion for building
                things in general. Whether it's creating something small like a
                table or remodelling every room in a house, I thrive on creating
                from the ground up. I find immense satisfaction in taking a plan
                and executing it to completion. Building a website from scratch
                gives me the same sense of accomplishment as constructing
                something with my own hands.
            </p>
            <p className="about__goal">
                Although I have my preferred tools, I always strive to choose
                the best one for each job, even if it means learning something
                new and expanding my skillset. My goal is to identify the most
                effective solution for every project, ensuring that I deliver
                the highest quality work.
            </p>
        </div>
    );
};

export default About;
