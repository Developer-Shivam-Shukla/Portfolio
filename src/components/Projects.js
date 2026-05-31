import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Ai_Workshop from "../assets/img/AI_Workshop.png";
import GDG from "../assets/img/GDG.jpeg";
import NPTEL from "../assets/img/NPTEL.png";
import Swayam from "../assets/img/Swayam.png";

export const Projects = () => {
  const projects = [
    {
      title: "To-do App",
      description:
        "A simple task management application that helps users organize, track, and manage daily tasks efficiently through an intuitive and user-friendly interface",
      imgUrl: projImg1,
    },
    {
      title: "Weather-App",
      description:
        "A real-time weather forecasting application that provides current weather conditions and location-based forecasts through an intuitive and responsive interface.",
      imgUrl: projImg2,
    },
    {
      title: "Portfolio",
      description:
        "A responsive and modern portfolio website built with React.js to showcase my skills, projects, certifications, and professional journey in technology and engineering.",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Through hands-on projects, I continuously explore new
                    technologies and strengthen my technical skills. Each
                    project represents a step in my journey of building
                    efficient, scalable, and real-world solutions.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Certifications</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Achievements</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <div className="certificates">
                          <div className="certificate-item">
                            <h4>AI Workshop Certificate</h4>
                            <img
                              src={Ai_Workshop}
                              alt="AI Workshop Certificate"
                            />
                          </div>

                          <div className="certificate-item">
                            <h4>Google Developer Groups (GDG)</h4>
                            <img src={GDG} alt="GDG Certificate" />
                          </div>

                          <div className="certificate-item">
                            <h4>NPTEL Certification</h4>
                            <img src={NPTEL} alt="NPTEL Certificate" />
                          </div>

                          <div className="certificate-item">
                            <h4>SWAYAM Certification</h4>
                            <img src={Swayam} alt="SWAYAM Certificate" />
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>Comming Soon...</p>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
