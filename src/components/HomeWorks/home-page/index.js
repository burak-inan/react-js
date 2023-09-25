import React from "react";
import Header from "./header";
import SideBar from "./side-bar";
import Main from "./main";
import "./index.scss";
import "./common-style.css";

const Index = () => {
  return (
    <div>
      <header>
        <Header />
      </header>

      <section>
        <aside>
          <SideBar />
        </aside>
        <main>
          <Main />
        </main>
      </section>

    </div>
  );
};

export default Index;
