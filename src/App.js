import './App.css';
import { useState } from 'react';
import useFetch from './useFetch';
import CreateUser from './CreateUser';

export default function App() {
  // const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState('Hi');
  function handleSubmit(e) {
    e.preventDefault();
    // setIsSent(true);
    // CreateUser(`https://api.github.com/users/${user}`);
    console.log(`Submitted ${user}`);
  }

  return (
    <div className='App'>
      <h1>
        Git <span className='friends'>Friends</span>
      </h1>
      <div className='button'>
        <form onSubmit={handleSubmit}>
          <textarea
            className='inputContainer'
            placeholder='   Enter Git Hub Name'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></textarea>
          <button type='submit' id='fetchdata'>
            Search
          </button>
        </form>
      </div>

      <CreateUser />
    </div>
  );
}
