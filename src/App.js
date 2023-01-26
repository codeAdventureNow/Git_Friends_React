import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  // const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState('');
  const [login, setLogin] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  // const [avatar, setAvatar] = useState('');
  // const [name, setName] = useState('');

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
        // setAvatar(json.avatar_url);
        // setName(json.name);
      });
    };
    fetchData();
  }, []);

  return (
    <div className='App'>
      <h1>
        Git <span className='friends'>Friends</span>
      </h1>
      <div className='button'>
        <form onSubmit={handleSubmit}>
          <input
            className='inputContainer'
            placeholder='   Enter Git Hub Name'
            value={user}
            onChange={(e) => setUser(e.target.value)}
          ></input>
          <button type='submit' id='fetchdata'>
            Search
          </button>
        </form>
      </div>
      <div className='user'>
        <div>{bio}</div>
        <div>{login}</div>
        <div>{location}</div>
      </div>
    </div>
  );
}
