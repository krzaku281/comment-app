import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

import MainRouter from 'routers/MainRouter';
import NavbarComponent from 'pages/utils/NavbarComponent';

function App() {
  return (
    <BrowserRouter basename="/">
      <NavbarComponent />
      <Container fluid>
        <Row>
          <Col>
            <MainRouter />
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  );
}

export default App;
