import React from "react";

class Sobre extends React.Component{
    render(){
        return(
            <>
            <div id="Sobre"> 
                <h1 className="desc-titulo"> SOBRE </h1>
                <p className="descricao"> O site tem como objetivo facilitar a busca e exibição de imagens de satélites. <br /> Nosso site disponibiliza filtros
                que facilitam a busca por imagens de diferentes satélites: <br />
                    <li> LANDSAT8 </li>
                    <li> SENTINEL2</li>
                    <li> CBERS4 </li>
                    <li> CBERS4A </li>
                Com opções diferentes de datas, áres e cobertura de nuvens.
                </p>
            </div>
            </>
        )
    }
}

export default Sobre;