const App = () => {
  const [value, setValue] = React.useState('');

  const handleOnChange = (e) => setValue(e.target.value.toUpperCase());


  const handleOnClick = () => setValue('');


  return (
    <React.Fragment>
      <input placeholder="Type text..." onChange={handleOnChange} value={value} />
      <button onClick={handleOnClick}>Reset</button>
      <br />
      <h1>{value}</h1>
    </React.Fragment>

  )
}

ReactDOM.render(<App />, document.getElementById('root'));