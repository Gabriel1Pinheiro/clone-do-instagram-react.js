import './BarraDireita.css'
import eu from './comps/img/eu.png'
import alexia from './comps/img/alexia.jpg'
import damon from './comps/img/damon.jpg'
import matheus from './comps/img/matheus.jpg'
import nba from './comps/img/nba.jpg'

import SugestaoDeUsuario from "./comps/Sugestoes/sugestoes"


const listaDeSugestoes = [
  { Nome: "alexiakattah", SourceImage: alexia, NomeDoSeguidor: "papodedev" },
  { Nome: "damonKwayans", SourceImage: damon, NomeDoSeguidor: "rap.dab" },
  { Nome: "matheuscantor", SourceImage: matheus, NomeDoSeguidor: "froid" },
  { Nome: "nba", SourceImage: nba, NomeDoSeguidor: "desimpedidos" },
]

export default function BarraDireita(props) {


  return (
    <div class="BarraDireita">

      <div className="menu_sugestoes">
        <div className="perfil">
          <img className="eu" alt="Gabriel Pinheiro" src={eu} />
          <div className='usario-infos-sugestoes'>

            <div className='infos'>
              <p className="infos-text-1">ae_pinheiro</p>
              <p className="infos-text-2">Gabriel Pinheiro</p>
            </div>

            <span className='switch'>Mudar</span>
          </div>
        </div>

        <div className="sugestoes">
          <p>Sugestões para ti</p>
          <span>Ver todas</span>
        </div>

        <div className="sugestoes-usuario">
          {listaDeSugestoes.map((usuario) => {
            return <SugestaoDeUsuario {...usuario} />
          })}
        </div>


        {<footer className="footer-suggestion" >
          <p>Sobre &bull; Ajuda &bull; Imprensa &bull; API &bull; Carreiras &bull; Privacidade &bull; Termos &bull; Localizações &bull; Principais contas &bull; Hashtags &bull; idioma</p>

          <p>&copy; 2021 INSTAGRAM FROM META</p>

        </footer>
        }

      </div>



    </div>
  )
}