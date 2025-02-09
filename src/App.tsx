import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Greeting from './Greeting';

function ListItem(props: { animal: string }) {
  return <li>{props.animal}</li>;
}

function List(props: { animals: string[] }) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return <ListItem key={animal} animal={animal} />;
      })}
    </ul>
  );
}

function ListOfAnimalsWithL(props: { animals: string[] }) {
  return (
    <ul>
      {props.animals.map((animal) => {
        return animal.startsWith("L") ? <ListItem key={animal} animal={animal} /> : null;
      })}
    </ul>
  )
}

function Animals() {
  const animals = ['Dog', 'Cat', 'Elephant', 'Lion', 'Tiger', 'Leopard', 'Monkey', 'Giraffe'];

  return (
    <div>
      <h1>Animals: </h1>
      <List animals={animals} />
      <h2>Animals that start with L: </h2>
      <ListOfAnimalsWithL animals={animals} />
    </div>
  );
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Greeting />
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        <Animals />
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
