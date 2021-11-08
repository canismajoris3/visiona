import React from "react"
import Resultados from "../resultado/Resultados";

class Formulario extends React.Component {

    // eslint-disable-next-line @typescript-eslint/no-useless-constructor
    constructor(props: any) {
        super(props)


        this.noPrevent = this.noPrevent.bind(this)
    }

    state = {
        click: false,
        landsat8: false,
        sentinels2: false,
        cbers4: false,
        cbers4a: false,
        cloud: 0,
        dateFrom: "",
        dateTo: ""

    }

    noPrevent(e: any) {
        e.preventDefault();
    }

     
    onChangeClick = () => {
        this.setState({
            click: !this.state.click
        })
    }
    onChangeLandsat = () => {
        this.setState({
            landsat8: !this.state.landsat8
        })
    }
    onChangeSentinels2 = () => {
        this.setState({
            sentinels2: !this.state.sentinels2
        })
    }
    onChangeCbers4 = () => {
        this.setState({
            cbers4: !this.state.cbers4
        })
    }
    onChangeCbers4a = () => {
        this.setState({
            cbers4a: !this.state.cbers4a
        })
    }
    onChangeCloudCover = (event: any) => {
        this.setState({
            cloud: event.target.value
        })
    }
    onChangeDateFrom = (event: any) => {
        this.setState({
            dateFrom: event.target.value
        })
    }
    onChangeDateTo = (event: any) => {
        this.setState({
            dateTo: event.target.value
        })
    }


    render() {

        return (

            <div className="container" id="container-filtros">
                <header> FILTROS </header>
                <form id="formFilters" onSubmit={this.noPrevent}>
                    <div className="custom-select">
                        <h4> SATÉLITE</h4>
                        <label >
                            <input
                                type="checkbox"
                                id="landsat8"
                                name="landsat8"
                                checked={this.state.landsat8}
                                onChange={this.onChangeLandsat}
                            />
                            Landsat8
                        </label><br />
                        <label>
                            <input
                                type="checkbox"
                                id="sentinels2"
                                name="sentinels2"
                                value="sentinels2"
                                checked={this.state.sentinels2}
                                onChange={this.onChangeSentinels2}
                            />
                            Sentinels 2
                        </label><br />
                        <label>
                            <input
                                type="checkbox"
                                id="cbers4"
                                name="cbers4"
                                value="cbers4"
                                checked={this.state.cbers4}
                                onChange={this.onChangeCbers4}
                            />
                            Cbers4
                        </label><br />
                        <label>
                            <input
                                type="checkbox"
                                id="cbers4a"
                                name="cbers4a"
                                value="cbers4a"
                                checked={this.state.cbers4a}
                                onChange={this.onChangeCbers4a}
                            />
                            Cbers4A
                        </label>
                    </div>

                    <div className="selecao-periodo">
                        <h4> PERÍODO </h4>
                        <input 
                            type="date" 
                            id="select-periodo"
                            onChange={this.onChangeDateFrom}
                        />
                        <b> até </b>
                        <input 
                            type="date" 
                            id="select-periodo2"
                            onChange={this.onChangeDateTo}
                        />
                    </div>

                    <label className="form-label"> <h4> COBERTURA DE NUVENS (0% - 99%) </h4>
                        <div className="range">
                            <input
                                type="range"
                                className="form-range"
                                id="customRange1"
                                onChange={this.onChangeCloudCover}
                            />
                        </div>
                    </label>

                    <div className="selecao-area">
                        <h4> ÁREA </h4>
                        <input className="area-input" type="text" />
                    </div>


                    <button className="buttonSearch" onClick={this.onChangeClick}>BUSCAR</button>
                </form>

                <Resultados 
                    click={this.state.click}
                    landsat8={this.state.landsat8}
                    sentinels2={this.state.sentinels2}
                    cber4={this.state.cbers4}
                    cber4a={this.state.cbers4a}
                    nuvens={this.state.cloud}
                />
                
            </div>

        )
    }

}


export default Formulario;