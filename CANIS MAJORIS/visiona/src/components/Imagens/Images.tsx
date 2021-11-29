import axios from "axios";
import { Bounds, LatLngBounds } from "leaflet";
import React from "react";
import { render } from "react-dom";
import {
  ImageOverlay,
  MapContainer,
  useMapEvent,
  useMapEvents,
} from "react-leaflet";
import "./Images.css";

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
  nuvens: number;
  coord0: number;
  coord1: number;
  coord2: number;
  coord3: number;
  BQA: string;
}

function MyComponent() {
  const map = useMapEvent("click", () => {
    map.setView([50.5, 30.5]);
    console.log("cheguei aqui 1");
  });
  return null;
}

const Images = (props: myProps) => {

  function exibirImage(
    cord0: number,
    cord1: number,
    cord2: number,
    cord3: number,
    url: string
  ) {
    const imageBounds = new LatLngBounds([cord0, cord1], [cord2, cord3]);

    console.log("cheguei aqui 2");

    return (
      <MapContainer center={[50.5, 30.5]} zoom={13}>
        <MyComponent />
      </MapContainer>
    );
  }

  function download(url: string, id: string) {
    axios({
          url: url,
          method: 'GET',
          responseType: 'blob'
    })
          .then((response: any) => {
                const url = window.URL
                      .createObjectURL(new Blob([response.data]));
                const link = document.createElement('a');
                link.href = url;
                link.setAttribute('download', `${id}.TIFF`);
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
          })
  }

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
                    <button
                      onClick={() =>
                        exibirImage(
                          props.coord0,
                          props.coord1,
                          props.coord2,
                          props.coord3,
                          props.thumbHref
                        )
                      }
                    >
                      View
                    </button>
                    <button
                      className="btn btn-primary"
                      onClick={() => download(props.BQA, props.id)}
                    >
                      Download
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Images;
