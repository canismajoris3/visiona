import React, { useState } from "react";
import Images from "./Images";
import api from "../services/api"

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


interface ILinks{

    '0':{
        href: string;
    }
    
}

interface result {
    click: boolean
}

export const Resultados = (props: result) => {
    const [imgs2, setImgs] = useState<IInfoImage[]>([])

    if(props.click === true){

        alert('cheguei aqui...')
        api.get('')
        .then(response => {
            setImgs(response.data['features']);
            setLinkPage(response.data['links']);
        })
    }

    
    //Criando a variavel para armazenar as imagens
    const [linkPage2, setLinkPage] = useState<ILinks>()
    const [url, setUrl] = useState<any>()
    let [cont, setCont] = useState<number>(1)

    

    function downloadbtn(param: string) {

        console.log(param)
    }

    function getLinkPage() {
        setCont(cont += 1)
        console.log(cont)
        api.get(`?page=${cont}&limit=10`)
            .then(response => {
                setImgs(response.data['features'])
                setLinkPage(response.data['links'])
            })
    }

    function getLinkPageAnterior(param: number) {
        if (param === 0) {
            setCont(1)
        } else {
            setCont(cont -= 1)
        }
        console.log(cont)
        api.get(`?page=${cont}&limit=10`)
            .then(response => {
                setImgs(response.data['features'])
                setLinkPage(response.data['links'])
            })
    }

    function downloaBtn(param: string) {

        // api.get('https://eod-catalog-svc-prod.astraea.earth/collections/landsat8_c2l1t1/items')
        // .then(response => {
        //      console.log(response.data['features'])
        //      setImgs2(response.data['features'])
        //      console.log(imgs2)
        // })

        fetch(param, {
            headers: {
                'Content-type': 'Image/tiff'
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
    
    return(
        <div className="container" id="container-resultados">
            <header> Resultados encontrados</header>
            {
                imgs2.map( imgs2 => {
                
                    return(
                        <Images thumbHref={imgs2.assets.thumbnail.href} 
                        tkiHref={imgs2.assets.tki.href}/>
                    );
                    
                })
            }
        </div>
    )

}

export default Resultados