import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

const toRotate = ["Web Developer", "Problem Solver", "AI Enthusiast"];

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;

  useEffect(() => {
    const currentText = toRotate[loopNum % toRotate.length];

    let timeout;

    if (!isDeleting && text === currentText) {
      // Pause after finishing the word
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, period);
    } else if (isDeleting && text === "") {
      // Pause before starting next word
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setLoopNum((prev) => prev + 1);
      }, 500);
    } else {
      // Typing / deleting
      timeout = setTimeout(
        () => {
          if (isDeleting) {
            setText(currentText.substring(0, text.length - 1));
          } else {
            setText(currentText.substring(0, text.length + 1));
          }
        },
        isDeleting ? 90 : 150,
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, loopNum]);

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {`Hi! I'm Shivam Shukla `}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Web Developer", "UI/UX Designer" ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Passionate and fast-learning individual, currently pursuing
                    a B.Tech in Electronics and Communication Engineering
                    (Internet of Things) at Madan Mohan Malaviya University of
                    Technology (MMMUT), with a strong foundation in Java, MERN
                    stack technologies. Currently expanding expertise in in DSA
                    and Competitive programming using Java. Adept at
                    problem-solving, coding, and analytical thinking. Passionate
                    about leveraging technical skills to develop innovative
                    solutions and contribute to impactful projects.
                  </p>
                  <button onClick={() => console.log("connect")}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                  <a href="/resume.pdf" download className="resume-btn">
                    Download Resume
                  </a>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
