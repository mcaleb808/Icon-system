import React, { useState, useEffect } from 'react';
import Icon from './components/Icon';
import './App.css';
import logo from './logo.svg';
import Axios from 'axios';
import { parse, stringify } from 'svgson';

function App() {
  const [text, setText] = useState('');

  useEffect(() => {
    Axios(logo).then((res) =>
      parse(res.data).then((json) => {
        setText(JSON.stringify(json, null, 2));
        const mysvg = stringify(json);
        console.log(mysvg);
      }),
    );
  }, []);

  console.log(text);

  console.log(logo);

  return (
    <div className="App">
      <div></div>
      <Icon icon="info" size={32} color="#f78259" />
      <Icon icon="warning" size={50} color="gol" />
    </div>
  );
}

export default App;
