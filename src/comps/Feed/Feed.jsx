import './Feed.css';
import Post from './comps/Post';


import ImgPerfil01 from './comps/imagens/Palmeiras.jpg'
import ImgPerfil02 from './comps/imagens/Raplandia.jpg'
import ImgPerfil03 from './comps/imagens/daviPerfil.jpg'
import ImgPerfil04 from './comps/imagens/rap.dab.jpg'
import ImgPerfil05 from './comps/imagens/djongaPerfil.jpg'
import ImgPerfil06 from './comps/imagens/Instituto_proa.jpg'

import PostPalmeiras from './comps/imagens/weverton.jpg';
import PostRaplandia from './comps/imagens/ret.jpg';
import Postdavi from './comps/imagens/davi.jpg';
import Postrap from './comps/imagens/amor.jpg';
import Postdjonga from './comps/imagens/djongador.jpg';
import Postproa from './comps/imagens/proa.jpg';



export default function Feed(props) {

   return (
      <div className='Feed'>
         <Post img_autor={ImgPerfil01} nome='Palmeiras' imgPost={PostPalmeiras} numLikes="170.704 curtidas"
         legenda="Palmeiras Campeão Paulista" time="10 de abril" />
         <Post img_autor={ImgPerfil02} nome='Raplandia' imgPost={PostRaplandia} numLikes="11.453 curtidas" legenda="Poesia" time="10 de abril" />
         <Post img_autor={ImgPerfil03} nome='mcdavioficialsr' imgPost={Postdavi} numLikes="16.095 curtidas" legenda="Que a minha vida é muito cara é muito forte!" time="14 de fevereiro" />
         <Post img_autor={ImgPerfil04} nome='rap.dab' imgPost={Postrap} numLikes="14.637 curtidas" legenda="Um tbt real e de respeito!" time="10 de abril" />
         <Post img_autor={ImgPerfil05} nome='djongador' imgPost={Postdjonga} numLikes="351.323 curtidas" legenda="Sinônimo" time="25 de março" />
         <Post img_autor={ImgPerfil06} nome='instituto.proa' imgPost={Postproa} numLikes="1.000 curtidas" legenda="ALÔ, ALÔ, JOVENS DO GRANDE RECIFE E DA  GRANDE SÂO PAULO!" time="3 de abril" />
      </div>
   )
}