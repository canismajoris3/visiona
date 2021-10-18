import React, { ReactEventHandler } from "react";
import Images from "./Images";
import api from "../services/api";
import Resultados from "./Resultados";


class Filtros extends React.Component{
    

    handleClick(event:any){
        event.preventDefault()
        alert('Cliquei')
        return <Resultados click={true}/>
    }

    

    render(){
        return(
            <div className="container" id="container-filtros">
                <header> Filtros </header>
                <form id="formFilters" onSubmit={this.handleClick}>
                    <Satelites />
                    <Periodo />
                    <Nuvens />
                    <Area />
                    <input type="submit" value="pesquisar" className="buttonSearch"/>
                    {/* <ButtonSearch/> */}
                </form>
            </div>
        )
    }
}

/* Classes dos Filtros: */

class Satelites extends React.Component{
    render(){
        return(
            <select name="satelite" className="custom-select" id="select-satelite">
                <option className="select-options" value=""> --Selecione um satélite-- </option>
                <option className="select-options" value="LANDSAT8"> Landsat 8 </option>
                <option className="select-options" value="SENTINEL2"> Sentinel 2 </option>
                <option className="select-options" value="CBERS4"> CBERS4 </option>
                <option className="select-options" value="CBERS4A"> CBERS4A </option>
            </select>
        )
    }
}

class Periodo extends React.Component{
    render(){
        return(
            <div className="selecao-periodo">
                <input type="date" id="select-periodo"></input>
                <p className="select-periodo-txt"> Até </p>
                <input type="date" id="select-periodo2"></input>
            </div>
        )
    }
}

class Nuvens extends React.Component{
    render(){
        return(
            <select name="nuvens" className="custom-select" id="select-nuvens">
                <option className="select-options" value="">--Cobertura de nuvens--</option>
                <option className="select-options" value="100"> 100% </option>
                <option className="select-options" value="75"> 75% </option>
                <option className="select-options" value="50"> 50% </option>
                <option className="select-options" value="25"> 25% </option>
                <option className="select-options" value="0"> 0% </option>
            </select>
        )
    }
}

class Area extends React.Component{
    render(){
        return(
            <select name="area" className="custom-select" id="select-area">
                <option className="select-options" value="">--Selecione uma área--</option>
                <option className="select-options" value="AREA1"> Área 1 </option>
                <option className="select-options" value="AREA2"> Área 2 </option>
            </select>
        )
    }
}
export default Filtros