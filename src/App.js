import './App.css';
import { useState } from 'react';
import Card from './components/Card.js';
import Form from './components/Form.js';

export default function App() {
  //set user for API call
  const [user, setUser] = useState('');
  // for primary person we are searching
  const [person, setPerson] = useState({});
  //primary persons friends
  const [friends, setFriends] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    fetchFriends();
  }

  const fetchData = async () => {
    const URL = `https://api.github.com/users/${user}`;
    if (!user) return;

    const result = await fetch(URL);
    result.json().then((json) => {
      setPerson(json);
    });
  };

  const fetchFriends = async () => {
    const URL = `https://api.github.com/users/${user}/followers`;
    if (!user) return;

    const result = await fetch(URL);
    result.json().then((json) => {
      setFriends(json);
    });
  };

  return (
    <div className='App'>
      <h1>
        Git <span className='friends'>Friends</span>
      </h1>
      <Form
        value={user}
        onChange={(e) => setUser(e.target.value)}
        onSubmit={handleSubmit}
      />
      {person.login && (
        <div id='app'>
          <Card
            src={person.avatar_url}
            alt={person.name}
            login={person.login}
            href={person.html_url}
          />
          {friends.map((friend) => (
            <Card
              src={friend.avatar_url}
              alt={friend.name}
              login={friend.login}
              href={friend.html_url}
            />
          ))}
        </div>
      )}
    </div>
  );
}
