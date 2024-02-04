import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

function Home() {
  return (
      <Container>
        <Row className="px-4 my-5 d-flex align-items-center justify-items-center">
          <Col>
            <h1>NewsPill</h1>
            <h2>An AI News Aggregator</h2>
          </Col>
          <Col>
            <p>
              NewsPill emerged in response to the ever-growing volume of digital
              news content available online and the challenges associated with
              efficiently accessing and comprehending this information. With the
              proliferation of news sources, users often find themselves
              overwhelmed by the sheer quantity of articles available. To
              address this issue, the project leverages artificial intelligence,
              including natural language processing and machine learning, to
              automatically discover news articles from diverse sources and
              provide users with succinct and informative summaries of the key
              points. By simplifying the process of news consumption, enhancing
              personalization, and reducing information overload, this project
              aims to empower users to stay well-informed about current events
              while saving time and effort in their daily news reading routines.
            </p>
            <Link to="/signup">
              <Button variant="outline-primary">Sign Up</Button>
            </Link>
          </Col>
        </Row>
      </Container>
  );
}

export default Home;
