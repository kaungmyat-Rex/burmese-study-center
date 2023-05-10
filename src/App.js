import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Library from "./pages/Library";
import Feedback from "./pages/Feedback";
import { db } from "./component/firebase";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import AOS from "aos";
import "aos/dist/aos.css";
function App() {
  const [scroll, getscroll] = useState(false);
  // const [current, setcurrent] = useState(0);
  const [openNav, setopenNav] = useState(false);
  const userCollection = collection(db, "reviews");

  const [datareviews, setdataReviews] = useState([]);
  // const [prev, setprev] = useState(200);

  // useEffect(() => {
  //   window.onscroll = function () {
  //     setcurrent(Math.floor(window.pageYOffset));
  //     if (prev > current) {
  //       getscroll(false);
  //     } else {
  //       getscroll(true);
  //     }
  //   };
  // }, [current]);

  useEffect(() => {
    const getreviews = async () => {
      const data = await getDocs(userCollection);

      setdataReviews(data.docs.map((e) => ({ ...e.data(), id: e.id })));
    };
    getreviews();

    AOS.init({});
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
            }
          />
          <Route
            path="/about"
            element={
              <About
                scroll={scroll}
                openNav={openNav}
                setopenNav={setopenNav}
              />
            }
          />
          <Route
            path="/contact"
            element={
              <Contact
                scroll={scroll}
                openNav={openNav}
                setopenNav={setopenNav}
              />
            }
          />
          <Route
            path="/library"
            element={
              <Library
                scroll={scroll}
                openNav={openNav}
                setopenNav={setopenNav}
              />
            }
          />
          <Route
            path="/feedback"
            element={
              <Feedback
                scroll={scroll}
                openNav={openNav}
                setopenNav={setopenNav}
                datareviews={datareviews}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
