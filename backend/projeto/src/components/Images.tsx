import axios from 'axios';
import './Images.css'
import { useState } from 'react';
import api from '../services/api'
import { config } from 'process';
import { link } from 'fs';


interface IInfoImage{
    id: string;
    assets: {
        thumbnail:{
            href: string;
        };
        tki:{
            href: string;
        };
    };
    properties: {
        datetime: string;
    }

}

interface IInfoImage2{
    id:string;
    assets: {
        thumbnail: {
            href: string;
        }
    };
    properties: {
        'eo:cloud_cover': number;
    }

}

interface ILinks{

    0:{
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

export const Images = () => {

    //Criando a variavel para armazenar as imagens
    const [imgs, setImgs] = useState<IInfoImage2[]>([])
    const [imgs2, setImgs2] = useState<IInfoImage2[]>([])
    const [linkPage, setLinkPage] = useState<ILinks>()
    const [proxPage, setProxPage] = useState<string>()
    const [url, setUrl] = useState<any>()
    let [cont, setCont] = useState<number>(1)
    

    
    const filtro: IInfoImage2 = {     
        id: "",
        assets:{
            thumbnail:{
                href: ""
            }
        },
        properties:{
            'eo:cloud_cover': 96
        }
    }

    function getLinkPage(param:string){
        setCont(cont += 1)
        api.get(param)
        .then(response => {
            setImgs(response.data['features'])
            setLinkPage(response.data['links'])
        })
    }

    function getLinkPageAnterior(param:number){
        if(param === 0){
            setCont(1)
        }else{
            setCont(cont -= 1)
        }
        console.log(cont)
        api.get(`?page=${cont}&limit=10`)
        .then(response => {
            setImgs(response.data['features'])
            setLinkPage(response.data['links'])
        })
    }

    function pesquisar(){
        
        api.get('/search',)
        .then(response => {
            setImgs(response.data['features'])
            setLinkPage(response.data['links'])
            console.log(response.data)
            console.log(response.data['links'])
        })

           
        
    }

    function downloaBtn(param:string){

        // api.get('https://eod-catalog-svc-prod.astraea.earth/collections/landsat8_c2l1t1/items')
        // .then(response => {
        //      console.log(response.data['features'])
        //      setImgs2(response.data['features'])
        //      console.log(imgs2)
        // })
        
        fetch(param, {
            headers:{
                'Content-type': 'Image/jp2'
            }
        })
        .then((response) => response.blob())
        .then((blob) => {
            const url = window.URL.createObjectURL(
                new Blob([blob])
            );
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute(
                'download',
                `${param}`
            );

            document.body.appendChild(link);

            link.click();

            link.parentNode?.removeChild(link);
        })

        console.log(param)
    }


    return (
        <div className="imagensSat">
            <button onClick={ () =>  pesquisar() }>Pesquisar</button>
            <div className="imagem">
                <ul className="listImage">
                    {
                        imgs.map(imgs => {
                            return(
                                <li>
                                    <div className="blockImage">
                                        <img src={imgs.assets.thumbnail.href} className="imagemSat"/>
                                        <div>
                                            <p>{imgs.properties['eo:cloud_cover']}</p>
                                        </div>
                                        <button className="buttonImage">View</button>
                                        <button className="buttonImage" onClick={() => downloaBtn(`${imgs.assets.thumbnail.href}`)}>Download</button>
                                        
                                    
                                    </div>
                                </li>
                            )
                        })
                    }
                </ul>
                <button onClick={() => getLinkPageAnterior(cont)}>Próxima Anterior</button>
                <button onClick={() => getLinkPage(`${linkPage?.[0].href}`)}>Próxima Página</button>
            </div>
        </div>
    );
};
export default Images;