import './BarraEsquerda.css'
import "./comps/ItensMenu"
import ItensMenu from './comps/ItensMenu'

import { AiOutlineSearch, AiFillHome } from 'react-icons/ai'
import { RiMessengerLine } from 'react-icons/ri'
import { BsPlusSquare } from 'react-icons/bs'
import { MdOutlineExplore } from 'react-icons/md'
import { FiHeart } from 'react-icons/fi'
import { BiMoviePlay } from 'react-icons/bi'
import { FaUserCircle } from 'react-icons/fa'
import {FaBars} from 'react-icons/fa'


export default function BarraEsquerda(props) {

   return (
      <div class="BarraEsquerda">
         {/* <div className='logo_instagram'>
            <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
         </div> */}

         <nav className='menu'>

            <div className='logo_instagram'>
               <img src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="logo" />
            </div>
            <ItensMenu texto="Home" icone={<AiFillHome size={25} />} />
            <ItensMenu texto="Pesquisa" icone={<AiOutlineSearch size={25} />} />
            <ItensMenu texto="Explorar" icone={<MdOutlineExplore size={25} />} />
            <ItensMenu texto="Reels" icone={<BiMoviePlay size={25} />} />
            <ItensMenu texto="Mensagem" icone={<RiMessengerLine size={25} />} />
            <ItensMenu texto="Notificação" icone={<FiHeart size={25} />} />
            <ItensMenu texto="Criar" icone={<BsPlusSquare size={25} />} />
            <ItensMenu texto="Perfil" icone={<FaUserCircle size={25} />} />
            <br />
            <ItensMenu texto="Perfil" icone={<FaBars size={25} />} />


         </nav>


      </div>


   )
}