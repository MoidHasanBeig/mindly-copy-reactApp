import React from "react";
import NewMap from "./NewMap";

function Home(props) {
  return <div className="home-screen">
    <NewMap
      createMap={props.createMap}
      text="+"
    />
    {props.data.map( (datum) => {
      return <NewMap
        createMap={props.createMap}
        text={datum.title}
      />;
    })
  }
  </div>;
}

export default Home;
