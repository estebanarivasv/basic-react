function App() {

  const name = "Esteban";
  const day = "sunny"

  return (
    // Only one parent element
    <div className="App">
      <p>Hola, {name}</p>
      <p>Esta soleado hoy? {day ? 'Yes' : 'No'}</p>
    </div>
  );
}

export default App;
