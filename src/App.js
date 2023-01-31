import './App.css';
import { useState, useEffect } from 'react';

export default function App() {
  //User
  const [user, setUser] = useState('');
  const [login, setLogin] = useState('');
  const [avatar, setAvatar] = useState('');
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [person, setPerson] = useState({});

  //user Friends
  const [flogin, setFLogin] = useState([]);

  // console.log(flogin);
  console.log(person);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    fetchFriends();

    console.log(`Submitted ${user}`);
  }

  const friends = flogin.map((friend) => (
    <li key={friend.id}>
      <img src={friend.avatar_url} alt={friend.login} />
      <p>Login: {friend.login}</p>
      <p>
        GitHub Profile:{' '}
        <a href={friend.html_url} target='_blank'>
          {friend.login}
        </a>
      </p>
    </li>
  ));

  const fetchFriends = async () => {
    const URL = `https://api.github.com/users/${user}/followers`;
    if (!user) return;

    const result = await fetch(URL);
    result.json().then((json) => {
      setFLogin(json);
    });
  };

  const fetchData = async () => {
    const URL = `https://api.github.com/users/${user}`;
    if (!person) return;

    const result = await fetch(URL);
    result.json().then((json) => {
      setLogin(json.login);
      // setAvatar(json.avatar_url);
      // setName(json.name);
      // setLink(json.html_url);
      setPerson(json);
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
      {person && login && (
        <div className='container'>
          <div className='user'>
            <img src={person.avatar_url} alt={person.name} />
            <p>Login: {person.login}</p>
            <p>
              GitHub Profile:{' '}
              <a href={person.html_url} target='_blank'>
                {person.login}
              </a>
            </p>
          </div>
          <div className='user'>{friends}</div>
        </div>
      )}
    </div>
  );
}
