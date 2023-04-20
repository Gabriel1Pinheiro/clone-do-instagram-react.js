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
         <Post img_autor={ImgPerfil01} nome='Palmeiras' imgPost={PostPalmeiras} numLikes="200 curtidas"
         legenda="Palmeiras campeão" time="Há 1 dia" />
         <Post img_autor={ImgPerfil02} nome='Raplandia' comentarios="" imgPost={PostRaplandia} />
         <Post img_autor={ImgPerfil03} nome='mcdavioficialsr' comentarios="" imgPost={Postdavi} />
         <Post img_autor={ImgPerfil04} nome='rap.dab' comentarios="" imgPost={Postrap} />
         <Post img_autor={ImgPerfil05} nome='djongador' comentarios="" imgPost={Postdjonga} />
         <Post img_autor={ImgPerfil06} nome='instituto.proa' comentarios="" imgPost={Postproa} />
      </div>
   )
}