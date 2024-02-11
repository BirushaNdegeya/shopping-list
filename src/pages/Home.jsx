import React from "react";
import  Container  from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";

const Home = () => {
   return (
      <Container>
      {/* Stack the columns on mobile by making one full-width and the other half-width */}
      <Row>
        <Col xs={12} md={8}>
          <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at iusto perferendis, facilis dolor reiciendis iure vero sunt provident quo praesentium amet et natus fugit voluptates rem quibusdam quidem dignissimos!</h1>
        </Col>
        <Col xs={6} md={4}>
         <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos libero autem recusandae repellendus quibusdam neque debitis beatae dignissimos. Maiores, cumque quis fugit culpa sit placeat sed! Ducimus quis suscipit provident.</h1>
        </Col>
      </Row>

      {/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
      <Row>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
        <Col xs={6} md={4}>
          xs=6 md=4
        </Col>
      </Row>

      {/* Columns are always 50% wide, on mobile and desktop */}
      <Row>
        <Col xs={6}>xs=6</Col>
        <Col xs={6}>xs=6</Col>
      </Row>
    </Container>
   );
};

export default Home;