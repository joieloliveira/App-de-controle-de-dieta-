import "./Card.css";
import React, { useState } from 'react';
import { Input, Label, FormGroup, InputGroupText, InputGroupAddon, InputGroup, Form, ModalFooter, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { connect } from "react-redux";

function Card (props) {
    
    const {
        className
      } = props;
    
      const [modal, setModal] = useState(false);
    
      const toggle = () => {
        setModal(!modal);

      }
      
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }

    if(props.home){
        return (
            <div className="Card" style={cardStyle} onClick={toggle}>
                <div className="Title">{props.titulo}</div>
                <div className="Content">
                    {props.children}
                </div>
            
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Card refeição</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup>
                                <p>Adicionar este card a minha dieta</p>
                            </FormGroup>
                        </Form>  
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Adicionar a minha diéta</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            </div>           
        );  
    }else if (props.inserir){
        return (
            <div className="Card" style={cardStyle} onClick={toggle}>
                <div className="Title">{props.titulo}</div>
                <div className="Content">
                    {props.children}
                </div>
            
                <Modal isOpen={modal} toggle={toggle} className={className}>
                    <ModalHeader toggle={toggle}>Novo card</ModalHeader>
                    <ModalBody>
                        <Form >
                            <FormGroup>
                                <Label for="name">Criar novo card refeição.</Label><br/>
                                <Label for="name">Tipo de refeição</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>Café</option>
                                    <option>Almoço</option>
                                    <option>Lanche</option>
                                    <option>Jantar</option>
                                </Input>
                                <Label for="name">Descrição da refeição</Label>
                                <Input type="textarea" name="content" id="content" placeholder="Exemplo: duas fatias de pão integral(100g), dois ovos inteiros, 100g de massa de milho etc..."/>
                                <Label for="name">Some os macros:</Label><br/>                            
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Carbo</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Quantidade de Carbo" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Gramas</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Proteinas</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Quantidade de Proteinas" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Gramas</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Gorduras</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Quantidade de Gorduras" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Gramas</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                                <InputGroup>
                                    <InputGroupAddon addonType="prepend">
                                        <InputGroupText>Calorias</InputGroupText>
                                    </InputGroupAddon>
                                    <Input placeholder="Calorias finais" />
                                    <InputGroupAddon addonType="append">
                                        <InputGroupText>Kcal</InputGroupText>
                                    </InputGroupAddon>
                                </InputGroup>
                            </FormGroup>
                        </Form>  
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={toggle}>Criar card</Button>{' '}
                        <Button color="secondary" onClick={toggle}>Cancela</Button>
                    </ModalFooter>
                </Modal>
            </div>           
        );  
    };
};

function mapStateToProps(state) {
    return {
        home: state.paginas.homeIni,
        inserir :state.paginas.inserirIni,
        minhaDietair :state.paginas.minhaDieta,

    };
}

export default connect(
    mapStateToProps,
)(Card);

/*
export default (props) => {

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
*/