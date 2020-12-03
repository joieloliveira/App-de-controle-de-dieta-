import React from 'react';
import Main from './pages/main'
import Inserir from './pages/inserir'
import Criar from './pages/criar'
import { connect } from "react-redux";

function App (props) {
    if(props.home){
        return (
            <div>
                <Main />
            </div>    
        );
    }else if(props.inserir){
        return (
            <div>
                <Inserir />
            </div>    
        );
    }else if(props.minhaDieta){
        return (
            <div>
                <Criar />
            </div>    
        );
    }
  
};

export default connect(
    mapStateToProps
  )(App);
  
  function mapStateToProps(state) {
    return {
        home: state.paginas.homeIni,
        inserir: state.paginas.inserirIni,
        minhaDieta: state.paginas.minhaDietaIni,
    };
  }