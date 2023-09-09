import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import jokesData from './JokesData';

function App() {

  // const jokesComponents = jokesData.map(joke => <joke key={joke.id} question={joke.question} answer={joke.answer} />)

  // const jokesComponents = jokesData.map((joke) => (
  //   <joke key={joke.id} question={joke.question} answer={joke.answer} />
  // ));

  return (
    <div>

      {jokesData.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.question}</h3>
          <p>{joke.answer}</p>
        </div>
      ))}

      {/* {jokesComponents} 
       */}


    </div>
  )
}

export default App;
