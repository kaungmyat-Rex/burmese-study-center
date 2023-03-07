import { useEffect, useState } from "react";
import "./App.css";

import Home from "./pages/Home";

function App() {
  const [scroll, getscroll] = useState(false);
  const [current, setcurrent] = useState(0);
  const [prev, setprev] = useState(200);

  useEffect(() => {
    window.onscroll = function () {
      setcurrent(Math.floor(window.pageYOffset));
      if (prev > current) {
        getscroll(false);
      } else {
        getscroll(true);
      }
    };
  }, [current]);

  return (
    <div className="App">
      <Home scroll={scroll} />
    </div>
  );
}

export default App;
