import { Header } from "./component/Header";

function App() {

  const name = "Esteban";
  const day = "sunny"

  return (
    // Only one parent element
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
