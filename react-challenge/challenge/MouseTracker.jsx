import { useEffect, useState } from "react";

function MouseTracker() {
  const [mouseX, setMouseX] = useState("");
  const [mouseY, setMouseY] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    function updateMouseCoords(event) {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }
    window.addEventListener("mousemove", updateMouseCoords);
    return () => window.removeEventListener("mousemove", updateMouseCoords);
  }, []);

  useEffect(() => {
    document.title = `You clicked ${count} times.`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <output>
        {mouseX},{mouseY}
      </output>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

export default MouseTracker;
