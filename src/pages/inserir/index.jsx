import "../../appCard.css";
import React from "react";
import Rodape from '../../components/Rodape';
import Menu from '../../components/Menu';
import Card from '../../components/cards/Card';
import { Container, Jumbotron, Row, Col } from 'reactstrap';

function Inserir () {
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
                <Container>
                <p className="text-center">Adicionar uma nova refeição ao cardápio</p>
                <Jumbotron fluid className="form-contato">
                        <style>
                            {`.form-contato{
                                padding-top: 40px;
                                padding-bottom: 40px;
                                background-color: #3D2C08;
                                margin-bottom: 0rem !important;
                            }`}
                        </style>
                        <Container className="text-center">
                        <Row>
                            <Col sm="6" lg="3">
                                <Card titulo="Novo card: Café" color="#3107EB">
                                <h2>Café</h2>
                                </Card>
                            </Col>
                            <Col sm="6" lg="3">
                            <Card titulo="Novo card: Almoço" color="#3107EB">
                                <h2>Almoço</h2>
                            </Card>
                            </Col>
                            <Col sm="6" lg="3">
                            <Card titulo="Novo card: Lanche" color="#3107EB">
                                <h2>Lanche</h2>
                            </Card>
                            </Col>
                            <Col sm="6" lg="3">
                            <Card titulo="Novo card: Jantar" color="#3107EB">
                                <h2>Jantar</h2>
                            </Card >
                            </Col>                                                                                        
                        </Row>
                            
                        </Container>
                    </Jumbotron>
                </Container>
            </Jumbotron>
            <Rodape />
        </div>
  </Container>
  )
}
export default Inserir;

/*
function inserirCardapio (props) {

  const cardStyle = {
      backgroundColor: props.color || '#F00',
      borderColor: props.color || '#F00',
  }
  
  return (
      <div className="Card" style={cardStyle}>
          <div className="Title">{props.titulo}</div>
          <div className="Content">
              {props.children}
          </div>
      </div>
  );
};
export default Card;
*/
/*
<Form>
    <FormGroup>
        <Label for="name">Nome</Label>
        <Input type="text" name="name" id="name" placeholder="Nome completo" />
        <Label for="email">E-mail</Label>
        <Input type="email" name="email" id="email" placeholder="Melhor e-mail" />
    </FormGroup>

</Form>
*/


    