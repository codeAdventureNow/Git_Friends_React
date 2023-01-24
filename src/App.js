import './App.css';
import useFetch from './useFetch';

function App() {
  // const { data, loading, error } = useFetch(' https://v2.jokeapi.dev/joke/Any');
  const { data, loading, error } = useFetch(
    ' https://api.github.com/users/d-pagey'
  );
  if (loading) return <h1> Loading ...</h1>;
  if (error) return console.log(error);
  return (
    <div className='App'>
      <h1>
        {data?.url} : {data?.login}
      </h1>
    </div>
  );
}

export default App;
