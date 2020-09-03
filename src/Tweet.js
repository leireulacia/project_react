import React from "react"; // Important
import './App.css'; // We have to import also the style

function Tweet({name, message}) { //This is a container of the App
  return(

    //<div className="tweet"> use the .tweet of the app.css to the format
    // Rememeber {} to use js for props.name
      <div className="tweet">
        <h3>{name}</h3>
        <p>{message}</p>
        <h3>number of likes</h3>
      </div>
  );
}

/*

function Tweet(props) { //This is a container of the App
  return(

    //<div className="tweet"> use the .tweet of the app.css to the format
    // Rememeber {} to use js for props.name
      <div className="tweet">
        <h3>{props.name}</h3>
  <p>{props.message}</p>
        <h3>number of likes</h3>
      </div>
  );
}
*/

export default Tweet;