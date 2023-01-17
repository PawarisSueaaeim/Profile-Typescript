import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/common/pagecss/Home.css';

const Home = () => {
  return (
    <Container>
      <Row>
        <Col sm={6}>
          <img  className="image-profile" src="https://scontent.fbkk4-3.fna.fbcdn.net/v/t39.30808-6/277466599_3021638301387320_606080316384089201_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHyO9R1tHiLEG9ndrbPAOQ7GfYWV9HPceoZ9hZX0c9x6oxZ4jWfRiAQXD02BwGiwB9OZWSIxorGUs253tG9Inmp&_nc_ohc=jN9wVbKvUuwAX8yYJbG&_nc_zt=23&_nc_ht=scontent.fbkk4-3.fna&oh=00_AfCkoeNVx-gp6qs_Z8i4SsWt0VAqBgwGRU_EGRLdYb2uuQ&oe=63C9A0AC"></img>
        </Col>
        <Col sm={6}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, placeat. Praesentium nisi numquam exercitationem animi assumenda voluptates. Veritatis quo distinctio, ipsam amet, iste a eligendi voluptatibus officiis commodi culpa suscipit?</p>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
