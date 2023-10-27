import { PiHouse } from 'react-icons/pi'
import { MdOutlineExplore  } from 'react-icons/md'
import { IoSearchSharp } from 'react-icons/io5'
import { MdOutlineVideoLibrary  } from 'react-icons/md'
import { LiaHeart } from 'react-icons/lia'
import { PiMessengerLogoLight } from 'react-icons/pi'
import { MdOutlineAddBox } from 'react-icons/md'
import { FaUserCircle } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'

export const Navbar = () => {
  return (
    <nav>
        <h2 id="Titulo-nav">Instagram</h2>
        <a href="#"> <PiHouse className='icons'/> Inicio</a>
        <a href="#"> <IoSearchSharp className='icons' /> Búsqueda</a>
        <a href="#"> <MdOutlineExplore className='icons' /> Explorar</a>
        <a href="#"> <MdOutlineVideoLibrary className='icons' /> Reels</a>
        <a href="#"> <PiMessengerLogoLight className='icons' /> Mensajes</a>
        <a href="#"> <LiaHeart className='icons' /> Notificaciones</a>
        <a href="#"> <MdOutlineAddBox className='icons' /> Crear</a>
        <a href="#"> <FaUserCircle className='icons' /> Perfil</a>
        <a href="#" id="Más-btn"> <AiOutlineMenu className='icons' /> Más</a>
        <hr className="vertical-line"/>
    </nav>
  )
}
export default Navbar;