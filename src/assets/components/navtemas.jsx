import React, { useState } from 'react';
import Styles from './navtemas.module.css';
import ComponentProps from './ComponentProps.jsx';
import TodasCanecas from './todascanecas.jsx'; // Importe o componente TodasCanecas

// Importe os componentes correspondentes a cada botão
/*
import MemesComponent from './memescomponent.jsx';
import JogosComponent from './jogoscomponent.jsx';
import BandasComponent from './bandascomponent.jsx';
import FlorkComponent from './florkcomponent.jsx';
*/

function NavTemas() {
  const [mostrarComponente, setMostrarComponente] = useState(null);
  const [textoComponente, setTextoComponente] = useState('Confira algumas canecas tematicas!');

  // Função para mostrar o componente correspondente e alterar o texto
  const handleMostrarComponente = (componente, texto) => {
    setMostrarComponente(componente);
    setTextoComponente(texto);
  };

  return (
    <nav id="temas" className={Styles.alinhatemas}>
      <ComponentProps textoPadrao={textoComponente} />

      <div className={Styles.temas}>
        {/* Botão "Todas" */}
        <button className="Todas" onClick={() => handleMostrarComponente(<TodasCanecas />, 'Esta é a sessão com todos os nossos modelos de canecas!')}>
          Todas
        </button>

        {/* Botão "Memes" - Editar o componente e o texto */}
        <button className="Memes" onClick={() => handleMostrarComponente(<MemesComponent />, 'mmeemes LOL')}>
          Memes
        </button>

        {/* Botão "Jogos" - Editar o componente e o texto */}
        <button className="Jogos" onClick={() => handleMostrarComponente(<JogosComponent />, 'jogos miriam gabriela')}>
          Jogos
        </button>

        {/* Botão "Bandas" - Editar o componente e o texto */}
        <button className="Bandas" onClick={() => handleMostrarComponente(<BandasComponent />, 'kiss rololing stones')}>
          Bandas
        </button>

        {/* Botão "Flork" - Editar o componente e o texto */}
        <button className="Flork" onClick={() => handleMostrarComponente(<FlorkComponent />, 'bonexos flork')}>
          Flork
        </button>
      </div>

      {/* Renderiza o componente correspondente ao botão clicado */}
      {mostrarComponente}
    </nav>
  );
}

export default NavTemas;
