import logo from './homer.png';
import './App.css';
import {useState} from 'react';
import axios from 'axios'

import DisplayQuote from './components/DisplayQuote'

const sampleQuote = {
  "quote": "By chilling my loins I increase the chances of impregnating my wife.",
  "character": "Apu Nahasapeemapetilon",
  "image": "https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FApuNahasapeemapetilon.png?1497567511629",
  "characterDirection": "Left"
  }

function App() {
  const[quote, setQuote] = useState(sampleQuote)

  const getQuote = () => {
    // Send the request
    axios
      .get('https://simpsons-quotes-api.herokuapp.com/quotes')
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setQuote(data[0]);
      });
  }


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Tu changes 4 lettres à React ça fait Donut</h1>
      </header>
      <button type="button" onClick={getQuote} className="quote-button">Another quote</button>
      <DisplayQuote quote={quote} />

    </div>
  );
}

export default App;

