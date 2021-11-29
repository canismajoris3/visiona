import React, { useState } from "react";
import api from "../../services/Api";
import apiSentinel2 from "../../services/ApiSentinel2";
import apiLandsat8 from "../../services/ApiLandsat8";
import Images from "../Imagens/Images";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

interface result {
  click: boolean;
  landsat8: boolean;
  sentinels2: boolean;
  cber4: boolean;
  cber4a: boolean;
  nuvens: number;
}

interface IInfoImage {
  id: string;
  assets: {
    BQA: {
      href: string;
    };
    thumbnail: {
      href: string;
    };
  };
  bbox: {
    0 : number;
    1 : number;
    2 : number;
    3 : number; 
  };
  properties: {
    datetime: string;
    "eo:cloud_cover": number;
  };
}

interface ILinks {
  "0": {
    href: string;
  };
}

const Resultado = (props: result) => {
  const [imgs, setImgs] = useState<IInfoImage[]>([]);
  const [linkPage2, setLinkPage] = useState<ILinks>();

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor

  for(var i = 0; i < 1; i++ ){
    if (props.click === true) {
      if (props.landsat8 === true) {
        apiLandsat8.get<any>("").then((response) => {
          setImgs(response.data["features"]);
          setLinkPage(response.data["links"]);
          // console.log(imgs)
        });
      }
    }
  }

  return (
    <div id="container-resultados">
      <header id="titulo-resultados">
        {" "}
        RESULTADOS <br /> ENCONTRADOS{" "}
      </header>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          position: "relative",
          overflow: "auto",
          maxHeight: "87%",
          "& ul": { padding: 0 },
          top: 50,
        }}
        subheader={<li />}
      >
        {imgs.map((imgs) => {
          return (
            <ListItem>
              <Images
                id={imgs.id}
                thumbHref={imgs.assets.thumbnail.href}
                nuvens={imgs.properties["eo:cloud_cover"]}
                coord0 ={imgs.bbox[0]}
                coord1 ={imgs.bbox[1]}
                coord2 ={imgs.bbox[2]}
                coord3 ={imgs.bbox[3]}
                BQA={imgs.assets.BQA.href}
              />
            </ListItem>
          );
        })}
        <div>
          <button className="buttonImage">Anterior</button>
          <button className="buttonImage">Próximo</button>
        </div>
      </List>
    </div>
  );
};

export default Resultado;
