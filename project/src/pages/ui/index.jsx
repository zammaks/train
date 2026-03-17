import { Search } from "./search";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { About_project } from "./about_project";

import { first_background } from "../../app/images";

import "./index.css";
import { Impery_way } from "./impery_way";
import { Contact } from "./contact";

export const HomePage = () => {

  return (
    <div className="main__wrapper">
      <div className="empire__wrapper" style={{ backgroundImage: `url(${first_background})` }}>
        <nav className="navbar">
          <Search />
          <Navbar />
        </nav>
      </div>
      <Hero />
      <About_project />
      <Impery_way />
      <Contact />

    </div>
  );
};
