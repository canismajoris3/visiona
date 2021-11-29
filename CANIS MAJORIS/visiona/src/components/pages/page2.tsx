import React from "react";
import { Link } from "react-router-dom";
import './index.css';
import Sobre from "./Sobre";

class Page2 extends React.Component{
    render(){
            return (
              <>
              <div className="navbar">
                <h1 className="title-navbar"> CANIS<b className="title-black">MAJORIS </b></h1>
                <a href="#Sobre" className="sobre"> SAIBA MAIS </a>
                <Link to="/busca" className="btn-acesso"> BUSCAR IMAGENS </Link>
              </div>
        
              <div className="box">
                <h1 className="txt1"> BUSQUE IMAGENS DE <br /> SATÉLITES DE FORMA <br /> RÁPIDA E FÁCIL </h1>
              </div>

              <Sobre />
              </>
              )
    }
}

export default Page2;