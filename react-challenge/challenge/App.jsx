import Greeting from "./Greeting";
import Shouter from "./Shouter";
function App() {
  const greetingName = "Alex";
  return (
    <div className="App">
      <Greeting greetingName={greetingName} />
      <Shouter />
    </div>
  );
}

export default App;
