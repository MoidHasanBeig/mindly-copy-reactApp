import React from "react";
import NewMap from "./NewMap";
import MapListItem from "./MapListItem";

function Home(props) {
  return <div className="home-screen">
    <NewMap
      createMap={props.createMap}
      text="+"
    />
    {props.data.map( (datum,i) => {
      return <MapListItem
        key={i}
        navMap={ () => props.navMap(i)}
        text={datum.title}
      />;
    })
  }
  </div>;
}

export default Home;
