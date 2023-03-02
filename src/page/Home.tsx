/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import '../style/common/pagecss/Home.css';

const dataHome = {
  image: "https://scontent.fbkk4-3.fna.fbcdn.net/v/t39.30808-6/277466599_3021638301387320_606080316384089201_n.jpg?stp=dst-jpg_s552x414&_nc_cat=100&ccb=1-7&_nc_sid=da31f3&_nc_eui2=AeHyO9R1tHiLEG9ndrbPAOQ7GfYWV9HPceoZ9hZX0c9x6oxZ4jWfRiAQXD02BwGiwB9OZWSIxorGUs253tG9Inmp&_nc_ohc=jN9wVbKvUuwAX8yYJbG&_nc_zt=23&_nc_ht=scontent.fbkk4-3.fna&oh=00_AfCkoeNVx-gp6qs_Z8i4SsWt0VAqBgwGRU_EGRLdYb2uuQ&oe=63C9A0AC",
  title: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, placeat. Praesentium nisi numquam exercitationem animi assumenda voluptates. Veritatis quo distinctio, ipsam amet, iste a eligendi voluptatibus officiis commodi culpa suscipit?"
};

interface IHome {
  bgmode: boolean;
}

const Home: React.FC<IHome> = ({bgmode}) => {
  
  return (
    <div className={`${bgmode ? "home-bg-light" : "home-bg-dark"}`}>
      <Container>
        <Row className="container">
        <Col sm={4} className="left-content">
          <img className="image-profile" src={dataHome.image}></img>
        </Col>
        <Col sm={8} className="right-content">
          <p>{dataHome.title}</p>
        </Col>
      </Row>
    </Container>
    </div>
   
  );
};

export default Home;
