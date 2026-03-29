import { Search } from "./search";
import { Navbar } from "./navbar";
import { Hero } from "./hero";
import { AboutProject } from "./about_project";

import { first_background } from "../../app/images";

import "./index.css";
import { ImperyWay } from "./impery_way";
import { Contact } from "./contact";
import { Footer } from "./footer";

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
      <AboutProject />
      <ImperyWay />
      <Contact />
      <Footer />

    </div>
  );
};
