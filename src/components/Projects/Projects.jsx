import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import expense_tracker from "../../assets/Projects/expense_tracker.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've built recently
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense_tracker}
              isBlog={false}
              title="Exepense Tracker"
              description="Personal Money Management Tool build with react.js, express, tailwind and mongodb. Have features which allows user for add income and expenses and for better visualization they can see the chartsPersonal Money Management Tool built with React.js, Express, Tailwind and MongoDB. It has features that allow users to add income and expenses, and for better visualisation, they can see the charts."
              ghLink="https://github.com/mehulraj11/backend-mern-exepense-tracker"
              demoLink="https://expensetracker-mhvats.onrender.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
