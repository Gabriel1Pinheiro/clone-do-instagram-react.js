import { useState } from 'react' // Hook
import './App.css'

import BarraEsquerda from './comps/BarraEsquerda/BarraEsquerda';
import BarraDireita from './comps/BarraDireita/BarraDireita';
import Stories from './comps/Stories/Stories';
import Feed from './comps/Feed/Feed';

export default function App(props) {
 
  return (
    // 1 - Não ignora os pequenos erros
    // 2 - Algumas palavras são diferentes. 
    // 3 - Permite o uso de variaveias 
    <div className="corpo">
      <BarraEsquerda />
      <div className='conteudo-central'>
        <Stories />
        <Feed />
      </div>
      <BarraDireita />
    </div>
    
  )
}

//export default App
