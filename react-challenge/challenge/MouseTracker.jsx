import { useEffect, useState } from "react";
function MouseTracker() {
  const [mouseX, setMouseX] = useState("");
  const [mouseY, setMouseY] = useState("");

  useEffect(() => {
    function updateMouseCoords(event) {
      setMouseX(event.clientX);
      setMouseY(event.clientY);
    }
    window.addEventListener("mousemove", updateMouseCoords);
  }, []);

  return (
    <output>
      {mouseX},{mouseY}{" "}
    </output>
  );
}

export default MouseTracker;
