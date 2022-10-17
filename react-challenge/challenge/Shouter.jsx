import { useState } from "react";

function Shouter() {
  const [output, setOutput] = useState("");
  function updateOutput(event) {
    setOutput(event.target.value.toUpperCase());
  }
  return (
    <div className="Shouter">
      <form>
        <input type="text" onChange={updateOutput} value={output} />
        <output>{output}</output>
      </form>
    </div>
  );
}

export default Shouter;
