import { useState } from 'react';
import './App.css';
import { Pombo } from './components/Pombo';
import bgSky from './assets/bg-sky.png';
import muttley from './assets/muttley.png';

function App() {
  const [count, setCount] = useState(0);
  const clicksToWin = 50;

  const skyBackground = {
    backgroundImage: `url(${bgSky})`, // Usando a imagem importada
    backgroundSize: 'cover', // Cobrir toda a área
    backgroundPosition: 'center', // Centralizar a imagem
    height: '100vh', // Altura total da janela
    width: '100vw', // Largura total da janela
  }
  
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div style={skyBackground}>
      <div className='text'>
        <h1>Pegue o pombo!</h1>
        <span>{count}</span>
      </div>

      {count < clicksToWin && <Pombo handleClick={handleClick} />}

      {count === clicksToWin && 
      <div className='win' style={{
        padding: '40px',
        backgroundColor: 'rgba(73, 73, 75, 0.5)',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
        }}
      >
        <img 
          src={muttley} 
          alt="You catch!" 
          width={180}
        />
        <h2 style={{ color: '#000'}}>Você pegou!</h2>
        <button 
          onClick={() => setCount(0)}
          style={{
            color: '#365fac',
            backgroundColor: '#9BDDF5',
            border: '.25rem #365fac solid',
            borderRadius: '.625rem',
            padding: '8px 12px',
            fontSize: '1.2rem',
            fontWeight: '600',
            marginTop: '36px'
          }}
        >
          Jogar novamente.
        </button>
      </div>}
    </div>
  )
};

export default App;
