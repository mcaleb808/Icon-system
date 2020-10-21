import React from 'react';
import Icon from './components/Icon';
import './App.css';
import fourK from './assets/4k-24px.svg';
import sdCard from './assets/sd_storage-24px.svg';
import flag from './assets/flag-24px.svg';
import art from './assets/art_track-24px.svg';
import block from './assets/block-24px.svg';
import chart from './assets/chat_bubble_outline-24px.svg';
import { ReactComponent as Mail } from './assets/mail_outline-24px.svg';
import randomColor from './helpers/randomColor';

function App() {
  const iconSizes = [25, 35, 45, 55, 65];

  return (
    <div className="App">
      {Array.from(iconSizes, (size, key) => (
        <div key={`${size}-${key}`}>
          <Mail style={{ fill: randomColor(), width: size, height: size }} />
          <Icon icon={sdCard} color={randomColor()} size={size} />
          <Icon icon={fourK} color={randomColor()} size={size} />
          <Icon icon={flag} color={randomColor()} size={size} />
          <Icon icon={art} color={randomColor()} size={size} />
          <Icon icon={block} color={randomColor()} size={size} />
          <Icon icon={chart} color={randomColor()} size={size} />
        </div>
      ))}
    </div>
  );
}

export default App;
