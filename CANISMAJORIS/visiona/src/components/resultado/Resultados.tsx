import React, { useState } from "react";
import api from '../../services/Api';
import Images from '../Imagens/Images';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

interface result {
    click: boolean,
    landsat8: boolean,
    sentinels2: boolean,
    cber4: boolean,
    cber4a: boolean,
    nuvens: number
}

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
        'eo:cloud_cover': number;
    }

}

interface ILinks{

    '0':{
        href: string;
    }
    
}

const Resultado = (props: result) => {
    const [imgs, setImgs] = useState<IInfoImage[]>([])
    const [linkPage2, setLinkPage] = useState<ILinks>()
    // eslint-disable-next-line @typescript-eslint/no-useless-constructor





    if (props.click === true) {
        api.get<any>('')
        .then(response => {
            setImgs(response.data['features']);
            setLinkPage(response.data['links']);
            // console.log(imgs)
        })
    }


    return (
        <div id="container-resultados">
            <header id="titulo-resultados"> RESULTADOS <br/> ENCONTRADOS </header>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                    position: 'relative',
                    overflow: 'auto',
                    maxHeight: '87%',
                    '& ul': { padding: 0 },
                    top: 50,
                  }}
                  subheader={<li />}
            >
                {
                    imgs.map( imgs => {
                        return(
                            <ListItem>
                                <Images id={imgs.id} thumbHref={imgs.assets.thumbnail.href} tkiHref={imgs.assets.tki.href} nuvens={imgs.properties["eo:cloud_cover"]}/>
                            </ListItem>
                        )
                         
                    })
                }
                <div>
                    <button className="buttonImage">Anterior</button>
                    <button className="buttonImage">Próximo</button>
                </div>
            </List>    
        </div>
    )
}

export default Resultado;