import Greeting from "./Greeting";
import Shouter from "./Shouter";
import MouseTracker from "./MouseTracker";
function App() {
  const name = "Alex";
  return (
    <div className="App">
      <Greeting name={name} />
      <Shouter />
      <MouseTracker />
    </div>
  );
}

export default App;
