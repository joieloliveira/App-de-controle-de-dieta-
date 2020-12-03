import React, { useState } from 'react';
import "./Menu.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container,
  Button,
} from 'reactstrap';

import { altAtributoHome, altAtributoInserir, altAtributoMinhaDieta } from "../store/actions/paginas";
import { connect } from "react-redux";

const Menu = (props) => {
    //const {home, inserir} = props;

    //props.alterarHome(false);
    //props.alterarInserir(true);
    
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
        <div>
            <Navbar color="dark" dark expand="md" className="fixed-top">
                <Container>
                    <NavbarBrand href="/">Nutridev</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>                           
                            <NavItem>
                                <Button 
                                    onClick={
                                        e => props.alterarHome(true)
                                    }        
                                >Home</Button>
                            </NavItem>  
                            <NavItem>
                                <Button
                                    onClick={
                                        e => props.alterarInserir(true)
                                    }                               
                                >Refeições</Button>
                            </NavItem>      
                            <NavItem>
                                <Button
                                    onClick={
                                        e => props.alterarMinhaDieta(true)
                                    }                               
                                >Minha Dieta</Button>
                            </NavItem>                   
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default connect(
    mapStateToProps,
    mapDispatchToProp
)(Menu);

function mapStateToProps(state) {
    return {
        home: state.paginas.homeIni,
        inserir :state.paginas.inserirIni,
        minhaDietair :state.paginas.minhaDieta,

    };
}
  
function mapDispatchToProp(dispatch) {
    return {
        alterarHome(novaPagina) {
            // action creator -> action
            const action = altAtributoHome(novaPagina);
            dispatch(action);
        },
        alterarInserir(novaPagina) {
            // action creator -> action
            const action = altAtributoInserir(novaPagina);
            dispatch(action);
        },
        alterarMinhaDieta(novaPagina) {
            // action creator -> action
            const action = altAtributoMinhaDieta(novaPagina);
            dispatch(action);
        },
    };
}

/*
<Container>
    <NavbarBrand href="/">Nutridev</NavbarBrand>
    <NavbarToggler onClick={toggle} />
    <Collapse isOpen={isOpen} navbar>
        <Nav className="mr-auto" navbar>                           
            <NavItem>
                <Button onClick={
                    e => props.alterarHome(true)
                }                               
                >Home</Button>
            </NavItem>  
            <NavItem>
                <Button onClick={
                    e => props.alterarInserir(true)
                }                               
                >Refeições</Button>
            </NavItem>   
            <NavItem>
                <Button onClick={
                    e => props.alterarMinhaDieta(true)
                }
                >Minha Dieta</Button>
            </NavItem>                   
        </Nav>
    </Collapse>
</Container>

*/

