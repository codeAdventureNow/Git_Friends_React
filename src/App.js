import './App.css';
import { useState, useEffect } from 'react';
import useFetch from './useFetch';
import CreateUser from './CreateUser';

export default function App() {
  // const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState('Hi');
  const [login, setLogin] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');

  const URL = `https://api.github.com/users/${user}`;
  function handleSubmit(e) {
    e.preventDefault();
    // setIsSent(true);
    console.log(`Submitted ${user}`);
  }

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch(URL);
      result.json().then((json) => {
        setLogin(json.login);
        setLocation(json.location);
        setBio(json.bio);
      });
    };
    fetchData();
  });

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
      <div>
        <div>{bio}</div>
        <div>{login}</div>
        <div>{location}</div>
      </div>
    </div>
  );
}
