import { useState } from 'react' // Hook
import './App.css'

import BarraEsquerda from './comps/BarraEsquerda/BarraEsquerda';
import BarraDireita from './comps/BarraDireita/BarraDireita';
import Stories from './comps/Stories/Stories';
import Feed from './comps/Feed/Feed';

export default function App(props) {

  return (
    <>
      <BarraEsquerda />

      <div className="corpo">
        <div className='conteudo-central'>
          <Stories />
          <Feed />
        </div>
      </div>

      <BarraDireita />

    </>
  )
}

// export default App
