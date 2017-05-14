import React, { Component } from "react";
import Header from "components/Header";

class Page404 extends Component {
  render() {
    return (
      <div>
        <Header />
        <section>
          <h1>404</h1>
          <p>OH NO!</p>
          <p>NOTHING DWELLS HERE.</p>
        </section>
      </div>
    );
  }
}

export default Page404;
