export default function Form({ value, onChange, onSubmit }) {
  return (
    <div className='button'>
      <form onSubmit={onSubmit}>
        <div className='button'>
          <button type='submit' id='fetchdata'>
            Search
          </button>
        </div>
        <input
          className='inputContainer'
          placeholder='   Enter Git Hub Name'
          value={value}
          onChange={onChange}
        ></input>
      </form>
    </div>
  );
}
