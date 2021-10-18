import React from 'react';
import './Images.css'
import { useState } from 'react';
import api from '../services/api';



interface IInfoImage {
    id: string;
    assets: {
        thumbnail: {
            href: string;
        };
        tki: {
            href: string;
        };
    };
    properties: {
        datetime: string;
    }

}

interface IInfoImage2 {
    id: string;
    assets: {
        QA_RADSAT: {
            href: string;
        };
        tki: {
            href: string;
        };
    };
    links: {
        title: string;
        href: string;
    }

}

interface ILinks {

    '0': {
        href: string;
    }

}

interface AxiosRequestConfig {
    params: {
        stac_version: string;
        type: string;
        features: [{
            bbox: number[];
            properties: {
                datetime: string;
            };
            collection: string;
        }];
        context: {
            limit: number;
        };
    }
}

interface myProps{
    thumbHref: string;
    tkiHref: string;
}

class Images extends React.Component<myProps> {

    


    // const filtro: AxiosRequestConfig = {
    //     params: {
    //         stac_version: "1.0.0",
    //         type: "FeatureCollection",
    //         features: [
    //             {
    //                 "bbox": [
    //                     -122.59750209,
    //                     37.48803556,
    //                     -122.2880486,
    //                     37.613537207
    //                 ],
    //                 "properties": {
    //                     "datetime": "2021-10-03T13:22:30.040Z",
    //                 },
    //                 "collection": "MUX",
    //             }
    //         ],
    //         "context": {
    //             "limit": 10,
    //         }
    //     }
    // }


    return(){
        <div className="imagensSat">
            <div className="imagem">
                <ul className="listImage">
                    <li>
                        <div className="blockImage">
                            <img src={this.props.thumbHref} className="imagemSat" />
                            <button className="buttonImage">View</button>
                            <button className="buttonImage">Download</button>
                        </div>
                    </li>

                </ul>
            </div>
        </div>
    }

};
export default Images;





{/* <div className="imagensSat">
            <div className="imagem">
                <ul className="listImage">
                    {
                        imgs.map(imgs => {
                            return(
                                <li>
                                    <div className="blockImage">
                                        <img src={imgs.assets.thumbnail.href} className="imagemSat"/>
                                        <div>
                                            
                                        </div>
                                        <button className="buttonImage">View</button>
                                        <button className="buttonImage" onClick={() => downloaBtn(`${imgs.assets.tki.href}`)}>Download</button>
                                        
                                    
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => getLinkPageAnterior(cont)}>Próxima Anterior</button>
                <button onClick={() => getLinkPage()}>Próxima Página</button>
            </div>
        </div> */}