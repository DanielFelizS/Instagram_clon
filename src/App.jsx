import { Instagram_suggets } from "./components/Instagram-suggets";
import { Instagram_contenido } from "./components/Instagram-contenido";
import { Stories } from "./components/Stories";
import { Navbar } from './components/Navbar';

import './styles/styles.css'
export const App = () => {
  return (
    <>
    <Navbar/>
    {/* Historias */}
    <Stories/>
    {/* Contenido */}
    {/* <Instagram_contenido userImg='src\img\Mojitos.jpg' userName='francis01' descImg='Foto del usuario Francis' date='1h' comment='La mujer mas buena' contentRoot='src\img\rafaella-mendes.jpg' descImgContent='Foto de la novia de Francis'/> */}
    <Instagram_contenido userImg='src\img\barra.jpg' userName='Ángel Coste' descImg='Foto del usuario Ángel Coste' date='5h' contentRoot='src\img\bebida.jpg' descImgContent='Foto de bebida alcoholica'/>
    {/* Sugerencias para ti */}
    <div className='sugerencias'>
    <img src='src/img/Pic_profile.png' alt="Imagen de usuario" className="user-img"/>
        <h5 className="user-h5">Tú</h5>
        <span className='user-span'>@Contratame1000</span>
        <a href="#">Cambiar</a>
        <h2>Sugerencias para ti</h2>
        <a href="#" id="Vertodo">Ver todo</a>
    </div>
    <Instagram_suggets userImg='src/img/Tequila.jpg' userName='santimatias' name='Alofoke'/>
    <Instagram_suggets userImg='src/img/Cerveza.jpg' userName='cerveza_abinader' name='Cerveza Abinader'/>
    <Instagram_suggets userImg='src/img/Bitcoin.png' userName='satoshiGod' name='Satoshi Nakamoto'/>
    <Instagram_suggets userImg='src/img/michael-dam.jpg' userName='michael012' name='Michael Dam'/>
    <Instagram_suggets userImg='src/img/paisaje.jpg' userName='luisito_pinta' name='Luisito Arts'/>
    </>
  )
}