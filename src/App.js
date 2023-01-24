import './App.css';
import useFetch from './useFetch';
import CreateUser from './CreateUser';

export default function App() {
  return (
    <div className='App'>
      <h1>
        Git <span className='Friends'>Friends</span>
      </h1>
      <div className='button'>
        <button id='fetchdata'>Search</button>
      </div>
      <div>
        <input
          className='inputContainer'
          placeholder='    Enter Git Hub Name'
          type='text'
          id='fetchdata'
        />
      </div>
      <CreateUser />
    </div>
  );
}
