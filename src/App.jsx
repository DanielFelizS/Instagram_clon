import Instagram_suggets from "./components/Instagram-suggets";
import Instagram_contenido from "./components/Instagram-contenido";
import InstagramStories from "./components/Stories";
import Navbar from "./components/Navbar";

import "./styles/styles.css";
export const App = () => {
  return (
    <>
      <Navbar />
      {/* Historias */}
      <InstagramStories />
      {/* Contenido */}
      {/* <Instagram_contenido userImg='/img/Mojitos.jpg' userName='francis01' descImg='Foto del usuario Francis' date='1h' comment='La mujer mas buena' contentRoot='/img/rafaella-mendes.jpg' descImgContent='Foto de la novia de Francis'/> */}
      <Instagram_contenido
        userImg="/img/barra.jpg"
        userName="Ángel Coste"
        descImg="Foto del usuario Ángel Coste"
        date="5h"
        contentRoot="/img/bebida.jpg"
        descImgContent="Foto de bebida alcoholica"
        comment={"Una bien fria"}
      />
      {/* Sugerencias para ti */}
      <div className="sugerencias">
        <img
          src="/img/Pic_profile.png"
          alt="Imagen de usuario"
          className="user-img"
        />
        <h5 className="user-h5">Tú</h5>
        <span className="user-span">@Contratame1000</span>
        <a href="#">Cambiar</a>
        <h2>Sugerencias para ti</h2>
        <a href="#" id="Vertodo">
          Ver todo
        </a>
      </div>
      <Instagram_suggets
        userImg="/img/Tequila.jpg"
        userName="santimatias"
        name="Alofoke"
      />
      <Instagram_suggets
        userImg="/img/Cerveza.jpg"
        userName="cerveza_abinader"
        name="Cerveza Abinader"
      />
      <Instagram_suggets
        userImg="/img/Bitcoin.png"
        userName="satoshiGod"
        name="Satoshi Nakamoto"
      />
      <Instagram_suggets
        userImg="/img/michael-dam.jpg"
        userName="michael012"
        name="Michael Dam"
      />
      <Instagram_suggets
        userImg="/img/paisaje.jpg"
        userName="luisito_pinta"
        name="Luisito Arts"
      />
    </>
  );
};
