import React from 'react';
import './Images.css'



// interface AxiosRequestConfig {
//     params: {
//         stac_version: string;
//         type: string;
//         features: [{
//             bbox: number[];
//             properties: {
//                 datetime: string;
//             };
//             collection: string;
//         }];
//         context: {
//             limit: number;
//         };
//     }
// }

interface myProps {
    id: string;
    thumbHref: string;
    tkiHref: string;
    nuvens: number;
}

const Images = (props: myProps) => {





    return (
        <div className="imagensSat">
            <div className="imagem">
                <ul className="listImage">
                    <li>
                        <div className="blockImage">
                            <ul>
                                <li>
                                    <img src={props.thumbHref} className="imagemSat" />
                                </li>
                                <li>
                                    <p>Satelite: Exemplo</p>
                                    <p>Id: {props.id}</p>
                                    <p>Nuvens: {props.nuvens}</p>
                                    <div className="btn-images">
                                        <button className="btn btn-primary">View</button>
                                        <button className="btn btn-primary">Download</button>
                                    </div>
                                </li>
                            </ul>

                        </div>
                    </li>

                </ul>
            </div>
        </div>
    )


};
export default Images;
