import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";
function App() {
  const greetingName = "Alex";
  return (
    <div className="App">
      <Greeting greetingName={greetingName} />
      <Shouter />
      <MouseTracker />
    </div>
  );
}

export default App;
