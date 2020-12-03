import React from "react";
import "../../appCard.css";
import Menu from '../../components/Menu';
import Rodapé from '../../components/Rodape';
import { Container, Jumbotron } from 'reactstrap';

function Criar () {
  return(
    <Container>
        <div className="App">
            <Menu />
            <Jumbotron fluid className="descr-top">
                <h2 className="text-center">Ola Mundo!!</h2>
            </Jumbotron>    
            <Rodapé />
        </div>
    </Container>
  )
}

export default Criar;