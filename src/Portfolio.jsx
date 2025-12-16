import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import "@fontsource/poppins";
import "./Portfolio.css";

const Portfolio = () => {
  const joinDate = new Date("2022-08-18");
  const today = new Date();
  const experienceInMs = today - joinDate;
  const experienceInYears = (
    experienceInMs /
    (1000 * 60 * 60 * 24 * 365)
  ).toFixed(1);

  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1 className="portfolio-name">Kamran Hasan</h1>
        <p className="portfolio-role">Node Developer | AWS Cloud Engineer</p>
        <div className="portfolio-contact">
          <div className="contact-item">
            <FaEnvelope />
            <span>
              <a href="mailto:kamranhasan09@gmail.com">
                kamranhasan09@gmail.com
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FaPhoneAlt />
            <span>
              <a href="tel:7080132001">+91 7080132001</a>
            </span>
          </div>
          <div className="contact-item">
            <FaMapMarkerAlt />
            <span>Noida, India</span>
          </div>
          <div className="contact-item">
            <FaLinkedin />
            <span>
              <a
                href="https://www.linkedin.com/in/kamranhasan09/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </span>
          </div>
          <div className="contact-item">
            <FaGithub />
            <span>
              <a
                href="https://github.com/kamranhasan09"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </span>
          </div>
        </div>
      </header>

      {[
        {
          title: "About Me",
          content: (
            <div>
              <img
                src="/pic.jpg"
                alt="Developer Portrait"
                className="section-img"
              />
              A highly skilled and dedicated Software Engineer with{" "}
              {experienceInYears} years of hands-on experience in backend
              development using Node.js, Express.js, MongoDB, and AWS. Currently
              employed at Tata Consultancy Services (TCS), contributing to a
              US-based healthcare project as the component lead for a key
              module. Possesses a strong track record of designing,
              implementing, and maintaining scalable, cloud-native solutions
              with a focus on performance, security, and reliability.
              <p>
                Demonstrates excellent leadership, problem-solving, and
                collaboration skills while working in agile, cross-functional
                teams. Committed to delivering high-quality, business-aligned
                solutions that drive value and support mission-critical
                healthcare operations.
              </p>
            </div>
          ),
        },
        {
          title: "Technical Skills",
          content: (
            <table className="skills-table">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Skills</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="Category">
                    <strong>Frontend</strong>
                  </td>
                  <td data-label="Skills">JavaScript, HTML, CSS, React.js (Basics)</td>
                </tr>
                <tr>
                  <td data-label="Category">
                    <strong>Backend</strong>
                  </td>
                  <td data-label="Skills">Node.js, Express.js</td>
                </tr>
                <tr>
                  <td data-label="Category">
                    <strong>Languages</strong>
                  </td>
                  <td data-label="Skills">JavaScript</td>
                </tr>
                <tr>
                  <td data-label="Category">
                    <strong>Databases</strong>
                  </td>
                  <td data-label="Skills">MongoDB, DynamoDB</td>
                </tr>
                <tr>
                  <td data-label="Category">
                    <strong>Cloud & DevOps</strong>
                  </td>
                  <td data-label="Skills">
                    AWS (Lambda, API Gateway, S3, DynamoDB, CloudWatch, IAM,
                    CloudFormation, Glue, Step Functions, CloudFront,
                    CodePipeline)
                  </td>
                </tr>
                <tr>
                  <td data-label="Category">
                    <strong>Tools</strong>
                  </td>
                  <td data-label="Skills">Git, Postman, VS Code, Jira, ServiceNow, Yammer</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "Education",
          content: (
            <table className="education-table">
              <thead>
                <tr>
                  <th>College/School</th>
                  <th>Degree</th>
                  <th>Years of passing</th>
                  <th>Percentage / CGPA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td data-label="College/School">Integral University, Lucknow</td>
                  <td data-label="Degree">Computer Science Engineering — Bachelor of Technology</td>
                  <td data-label="Years of passing">July 2018 - July 2022</td>
                  <td data-label="Percentage / CGPA">CGPA: 8.1</td>
                </tr>
                <tr>
                  <td data-label="College/School">Central Academy, Lucknow</td>
                  <td data-label="Degree">Intermediate (PCM)</td>
                  <td data-label="Years of passing">July 2017 - July 2018</td>
                  <td data-label="Percentage / CGPA">72%</td>
                </tr>
                <tr>
                  <td data-label="College/School">Central Academy, Lucknow</td>
                  <td data-label="Degree">High School (PCMB)</td>
                  <td data-label="Years of passing">July 2015 - July 2016</td>
                  <td data-label="Percentage / CGPA">77.9%</td>
                </tr>
              </tbody>
            </table>
          ),
        },
        {
          title: "Certifications",
          content: (
            <ul className="certification-list">
              <li>AWS Certified Cloud Practitioner - AWS</li>
              <li>AWS Certified Solutions Architect - AWS</li>
              <li>MERN Stack Development – Digi-podium</li>
            </ul>
          ),
        },
        {
          title: "Experience",
          content: (
            <div className="experience-section">
              <p>
                <strong>
                  Tata Consultancy Services (TCS) – System Engineer
                </strong>{" "}
                (Aug 2022 – Present)
              </p>
              <ul>
                <li>
                  Developed RESTful APIs and cloud-based solutions using Node.js
                  and AWS.
                </li>
                <li>
                  Owned major components of a healthcare project, handling
                  delivery and performance.
                </li>
                <li>
                  Lead project components to deliver milestones on time, contributing to successful project outcomes. 
                </li>
                <li>
                  Worked in Agile teams, contributing to sprints, stand-ups, and
                  timely delivery.
                </li>
              </ul>
              <p>
                <strong>Koshish – Full Stack Developer Intern</strong> (Aug 2020
                – Oct 2020)
              </p>
              <ul>
                <li>Built full-stack applications with the MERN stack.</li>
                <li>Worked with MongoDB and integrated backend APIs.</li>
              </ul>
            </div>
          ),
        },
        {
          title: "Projects",
          content: (
            <ul className="projects-list">
              <li>
                <strong>Marvel UI:</strong> Marvel UI is a React-based movie
                explorer that allows users to explore the Marvel Cinematic
                Universe (MCU) movies seamlessly. With YouTube API integration,
                users can view trailers and additional video content for each
                movie. The platform provides an interactive, dynamic experience,
                making it easy to discover and enjoy Marvel films.
                <br />
                <br />
                <a
                  href="https://kamranhasan09.github.io/marvelUI/"
                  target="_blank"
                  className="project-link"
                >
                  View Project
                </a>
                <br/><br/>
              </li>
              <li>
                <strong>Chat App:</strong> The real-time chat application
                leverages Node.js, Express.js, and Socket.io to provide
                seamless, live messaging functionality. Users can engage in
                real-time conversations, with instant message delivery and
                notifications. This interactive platform supports group and
                direct chats, offering a responsive and efficient solution for
                dynamic communication in web applications.
              </li>
            </ul>
          ),
        },
        {
          title: "Awards",
          content: (
            <ul className="awards-list">
              <li>Certified in Python and Problem Solving – HackerRank</li>
              <li>"On the Spot" Team Awards for outstanding performance</li>
              <li>Best Performer of the Quarter</li>
            </ul>
          ),
        },
        {
          title: "Certificates",
          content: (
            <>
              <div>
                <div className="certificates-gallery">
                  <p>
                    <h2>AWS Cloud Practitioner</h2>
                    The AWS Certified Cloud Practitioner certification validates
                    foundational knowledge of AWS Cloud, covering key concepts
                    such as core services, security, pricing, and billing. This
                    certification is ideal for individuals starting in cloud
                    computing or in non-technical roles, providing a broad
                    understanding of AWS and its value proposition. It helps
                    demonstrate proficiency in basic cloud concepts and lays the
                    groundwork for more advanced AWS certifications, making it a
                    great entry point into cloud technologies and services.
                  </p>
                  <img src="/cloud.png" alt="Cloud Practitioner" />
                </div>
                <div className="certificates-gallery">
                  <p>
                    <h2>AWS Solutions Architect - Associate</h2>
                    The AWS Certified Solutions Architect - Associate
                    certification demonstrates expertise in designing and
                    deploying scalable, cost-effective, and fault-tolerant
                    systems on AWS. It highlights proficiency in architectural
                    best practices and cloud solutions, making it valuable for
                    those responsible for managing cloud infrastructure and
                    architecture in professional roles.
                  </p>
                  <img src="/arch.png" alt="Solutions Architect" />
                </div>

                <div className="certificates-gallery">
                  <p>
                    <h2>MERN stack development</h2>
                    Successfully completed the MERN Stack Development certification from Degipodium, gaining hands-on experience in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Developed and deployed multiple projects, strengthening skills in frontend and backend integration, REST APIs, and responsive design, along with practical exposure to version control and deployment.
                  </p>
                  <img src="/degi.png" alt="Cloud Practitioner" />
                </div>
              </div>
            </>
          ),
        },
      ].map((section, idx) => (
        <section
          key={idx}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="portfolio-section"
        >
          <h2 className="section-title">{section.title}</h2>
          {section.content}
        </section>
      ))}

      <footer className="portfolio-footer">
        <p>
          &copy; {new Date().getFullYear()} Kamran Hasan. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Portfolio;
