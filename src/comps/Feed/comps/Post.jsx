import "./Post.css";

import { FiHeart } from 'react-icons/fi';
import { TbMessageCircle2 } from 'react-icons/tb';
import { SlPaperPlane } from 'react-icons/sl';
import { BsBookmark, BsEmojiSmile } from 'react-icons/bs';
import { FiMoreHorizontal } from 'react-icons/fi';


export default function Post(props) {
  return (
    <div className="Post">
      <div className="Cabecalho_Post">
        <div className="imgAutor"><img src={props.img_autor} /></div>
        {props.nome}
        <div className="icon_direita"><FiMoreHorizontal size={25} />
        </div>


      </div>
      <div className="Conteudo_Post"> <img src={props.imgPost} /> </div>

      <div className="footer-post">

        <section className="engajamento-post">

          <div className="icons-1">

            <div className="icon"><FiHeart size={25} /></div>
            <div className="icon">< TbMessageCircle2 size={25} /></div>
            <div className="icon"><SlPaperPlane size={25} /></div>
          </div>

          <div className="icon"><BsBookmark size={25} /></div>

        </section>


        <section className="like">
          <span>{props.numLikes}</span>
        </section>

        <div className="legenda">
          <p>
            <strong>{props.nome}: </strong>
            {props.legenda}
          </p>

        </div>

        <div className="tempo">
          <time>{props.time}</time>
        </div>


        <div className="comentario">

          <div className="fake_comentario">

            <div className="icon">
              <BsEmojiSmile size={25} />
            </div>

            <input placeholder="Adicione um comentario..." />

          </div>

          <div className="btn">Publicar</div>

        </div>

      </div>


    </div>
  )
}