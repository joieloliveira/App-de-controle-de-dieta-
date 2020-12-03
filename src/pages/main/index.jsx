import "../../appCard.css";
import React from "react";
import Rodape from '../../components/Rodape';
import Menu from '../../components/Menu';
import Card from '../../components/cards/Card';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

function Main () {
  
    return(
      <Container>
        <div className="App">
          <Menu />
            
          <Jumbotron fluid className="descr-top">
            <style>
                {
                    `.descr-top{
                        background-color: #3D2C08;
                        color: #fed136;
                        padding-top: 60px;
                        padding-bottom: 20px;
                        justify-content: center;
                        margin-bottom: 0rem !important;
                    }`
                }
            </style>
            <Container className="text-center">
              <h2>Café</h2>
              <Row>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron fluid className="descr-top">
            <Container className="text-center">
              <h2>Almoço</h2>
              <Row>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron fluid className="descr-top">
          <Container className="text-center">
              <h2>Lanche</h2>
              <Row>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>

          <Jumbotron fluid className="descr-top">
          <Container className="text-center">
              <h2>Jantar</h2>
              <Row>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
                <Col sm="6" lg="3"> 
                  <Card titulo="#13 - Mega" color="#3107EB">
                    <h2>Ola mundo</h2>
                  </Card>
                </Col>
              </Row>
            </Container>
          </Jumbotron>           
          <Rodape />
        </div>
      </Container>
    )
}

export default Main;

