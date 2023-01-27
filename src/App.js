import './App.css';
import { useState, useEffect } from 'react';

function Card() {}

export default function App() {
  // const [isSent, setIsSent] = useState(false);
  const [user, setUser] = useState('');
  const [fetchedData, setFetchedData] = useState('');
  const [login, setLogin] = useState('');
  const [location, setLocation] = useState('');
  const [bio, setBio] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  const URL = `https://api.github.com/users/${user}`;
  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    // setIsSent(true);
    console.log(`Submitted ${user}`);
  }

  const fetchData = async () => {
    const result = await fetch(URL);
    result.json().then((json) => {
      setLogin(json.login);
      setLocation(json.location);
      setBio(json.bio);
      setAvatar(json.avatar_url);
      setName(json.name);
      setLink(json.html_url);
      // setAvatar(json.avatar_url);
      // setName(json.name);
    });
  };

  useEffect(() => {
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
        <img src={avatar} alt={name} />
        <p>Login: {login}</p>
        <p>
          GitHub Profile:{' '}
          <a href={link} target='_blank'>
            {login}
          </a>
        </p>
      </div>
    </div>
  );
}
