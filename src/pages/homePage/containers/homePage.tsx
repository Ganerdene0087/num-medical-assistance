import React from "react";
import Top from "./top";
import Feature from "./feature";
import HomeBlog from "./homeBlog";

const HomePage: React.FC = () => {
  return (
    <div>
      <div className=" mx-auto ">
        <section className="mb-8">
          <Top />
        </section>
        <section className="mb-8">
          <Feature />
        </section>
        <section className="mb-8">
          <HomeBlog />
        </section>
      </div>
    </div>
  );
};

export default HomePage;
