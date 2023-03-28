import React from "react";
import { NavVersion } from "../component/Nav";
import Sidenav from "../component/sidenav/Sidenav";
import Footer from "../component/footer/Footer";
import useScroll from "../component/scrollTop";
const Library = ({ scroll, openNav, setopenNav }) => {
  useScroll();
  return (
    <>
      <NavVersion scroll={scroll} openNav={openNav} setopenNav={setopenNav} />
      <Sidenav openNav={openNav} setopenNav={setopenNav} />
      <div className="library-section">
        <div className="library-border">
          <div className="library-main">
            <h4>Burma Study Center Library</h4>
            <p>
              start by typing one or more keywords for title, author or subject
            </p>
            <div className="library-input">
              <input type="text" placeholder="     eg. Democracy , Migrant " />
              <button>Search</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Library;
